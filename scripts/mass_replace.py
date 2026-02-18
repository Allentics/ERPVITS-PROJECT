
import os

target_text = "Online/Instructor-Led/Self Paced"
replacement_text = "Online Instructor-Led/Self Paced"

root_dir = r"c:\Users\Allenticspun2107\Desktop\ERPVITES-PROJECT-main"

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts") or file.endswith(".json"):
            file_path = os.path.join(subdir, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if target_text in content:
                    new_content = content.replace(target_text, replacement_text)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {file_path}")
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
