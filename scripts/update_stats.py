
import os

replacements = [
    ("500+ Alumni Placed", "3500+ Alumni Placed"),
    ("Trusted by 500+", "Trusted by 3500+"),
    ("Alumni Placed", "Alumni Placed") # Just in case it was "500+ Alumni Placed" with different spacing
]

root_dir = r"c:\Users\Allenticspun2107\Desktop\ERPVITES-PROJECT-main"

for subdir, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith((".tsx", ".ts", ".json", ".sql")):
            file_path = os.path.join(subdir, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                changed = False
                new_content = content
                for target, replacement in replacements:
                    if target in new_content:
                        new_content = new_content.replace(target, replacement)
                        changed = True
                
                if changed:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {file_path}")
            except Exception as e:
                pass # Silently ignore binary or encoding issues
