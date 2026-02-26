import os
import re

INPUT_DIR = 'transcripts'
OUTPUT_DIR = 'public/transcripts_clean'

def clean_srt(content):
    # Eltávolítjuk az időbélyegeket és a számokat 
    lines = re.sub(r'\d+\n\d{2}:\d{2}:\d{2}.*?\n', '', content).split('\n')
    
    cleaned_text = []
    last_line = ""
    
    for line in lines:
        line = line.strip()
        if not line or line == "[Zene]": continue # [cite: 21, 167]
        
        # Csak akkor adjuk hozzá, ha nem az előző sor ismétlése 
        # és nem az előző sor része 
        if line not in last_line and last_line not in line:
            cleaned_text.append(line)
            last_line = line
        elif len(line) > len(last_line):
            # Ha a jelenlegi sor hosszabb (pl. Seg 3 a Seg 1 után), frissítjük az utolsót
            if cleaned_text: cleaned_text.pop()
            cleaned_text.append(line)
            last_line = line
            
    return " ".join(cleaned_text)

def main():
    if not os.path.exists(OUTPUT_DIR): os.makedirs(OUTPUT_DIR)
    
    files = [f for f in os.listdir(INPUT_DIR) if f.endswith('.srt')]
    print(f"Tisztítás folyamatban: {len(files)} fájl...")
    
    for filename in files:
        with open(f"{INPUT_DIR}/{filename}", 'r', encoding='utf-8') as f:
            raw_content = f.read()
        
        clean_content = clean_srt(raw_content)
        
        # Elmentjük sima .txt-ként a weboldal számára
        new_filename = filename.replace('.hu.srt', '.txt')
        with open(f"{OUTPUT_DIR}/{new_filename}", 'w', encoding='utf-8') as f:
            f.write(clean_content)

if __name__ == "__main__":
    main()