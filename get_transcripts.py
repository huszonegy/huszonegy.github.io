import os
import re
import subprocess
from tqdm import tqdm

SOURCE_FILE = 'src/data/podcasts.ts' #
OUTPUT_DIR = 'transcripts'

def extract_podcasts(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # A jól bevált blokk-alapú keresés
    blocks = re.findall(r'\{(.*?)\}', content, re.DOTALL)
    extracted = []
    for block in blocks:
        name = re.search(r'name:\s*["\'](.*?)["\']', block)
        id_val = re.search(r'id:\s*["\'](.*?)["\']', block)
        yt = re.search(r'yt:\s*["\'](.*?)["\']', block)
        if name and id_val and yt:
            url = yt.group(1)
            v_id = url.split('v=')[-1].split('&')[0] if 'v=' in url else url.split('/')[-1]
            extracted.append((id_val.group(1), name.group(1), v_id))
    return extracted

def download_sub(v_id, ep_id):
    if not os.path.exists(OUTPUT_DIR): os.makedirs(OUTPUT_DIR)
    
    # A parancs, ami már használja a Node.js-t és álcázza magát
    cmd = [
        'yt-dlp', '--skip-download', '--write-auto-subs', 
        '--sub-lang', 'hu', '--convert-subs', 'srt',
        '--user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0',
        '--output', f"{OUTPUT_DIR}/ep{ep_id}_{v_id}",
        f"https://www.youtube.com/watch?v={v_id}"
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        return False
    return True

def main():
    pods = extract_podcasts(SOURCE_FILE) #
    print(f"--- HUSZONEGY Transcript Engine ---\nTalált: {len(pods)} epizód")
    
    for ep_id, title, v_id in tqdm(pods, desc="Letöltés"):
        success = download_sub(v_id, ep_id)
        # Ha nincs felirat, nem állunk le, csak megyünk tovább
        
    print(f"\nKész! Ellenőrizd a '{OUTPUT_DIR}' mappát.")

if __name__ == "__main__":
    main()