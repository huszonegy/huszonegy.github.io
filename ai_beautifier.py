import os
import requests
import json
from tqdm import tqdm

INPUT_DIR = 'public/transcripts_clean'
OUTPUT_DIR = 'public/transcripts_final'
OLLAMA_URL = 'http://localhost:11434/api/generate'

def process_chunk(text_chunk):
    prompt = f"""
    Te egy magyar nyelvész és Bitcoin szakértő vagy. 
    A feladatod: pótold az alábbi podcast transzkriptben az írásjeleket (vesszők, pontok), 
    törd értelmes bekezdésekre, és javítsd a nyilvánvaló félrehallásokat (pl. 'bit bin' -> 'Bitcoin').
    FONTOS: Ne fogalmazd át a szöveget, ne változtass a beszélők stílusán, és ne adj hozzá saját gondolatokat!
    
    SZÖVEG:
    {text_chunk}
    """
    
    try:
        response = requests.post(OLLAMA_URL, json={
            "model": "llama3",
            "prompt": prompt,
            "stream": False
        })
        return response.json().get('response', '')
    except Exception as e:
        return f"\n[Hiba az AI feldolgozás során: {e}]\n"

def main():
    if not os.path.exists(OUTPUT_DIR): os.makedirs(OUTPUT_DIR)
    
    files = [f for f in os.listdir(INPUT_DIR) if f.endswith('.txt')]
    print(f"AI finomítás folyamatban ({len(files)} fájl)...")

    for filename in files:
        with open(f"{INPUT_DIR}/{filename}", 'r', encoding='utf-8') as f:
            full_text = f.read()

        # A szöveget kb. 2500 karakteres darabokra vágjuk a jobb eredményért
        chunk_size = 2500
        chunks = [full_text[i:i+chunk_size] for i in range(0, len(full_text), chunk_size)]
        
        final_result = ""
        for chunk in tqdm(chunks, desc=f"Feldolgozás: {filename}", leave=False):
            final_result += process_chunk(chunk) + "\n\n"

        with open(f"{OUTPUT_DIR}/{filename}", 'w', encoding='utf-8') as f:
            f.write(final_result)

if __name__ == "__main__":
    main()