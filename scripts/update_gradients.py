
import os
import glob

search_pattern = 'from-[#ff4500] to-red-600 box-decoration-clone'
replace_pattern = 'from-orange-600 to-red-600 font-extrabold'

files = glob.glob('lib/*Content.tsx')
count = 0

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if search_pattern in content:
        new_content = content.replace(search_pattern, replace_pattern)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
        count += 1

print(f"Total files updated: {count}")
