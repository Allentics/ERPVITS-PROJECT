
import re

def check_balance(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple check for {} and ()
    stack = []
    lines = content.split('\n')
    for i, line in enumerate(lines):
        for char in line:
            if char in '{(':
                stack.append((char, i+1))
            elif char in '})':
                if not stack:
                    print(f"Extra {char} at line {i+1}")
                    continue
                last_char, last_line = stack.pop()
                if (char == '}' and last_char != '{') or (char == ')' and last_char != '('):
                    print(f"Mismatched {char} at line {i+1}, opened {last_char} at line {last_line}")
    
    if stack:
        for char, line in stack:
            print(f"Unclosed {char} opened at line {line}")

    # Simple check for <div> tags (ignore self-closing)
    # This is very rough and won't handle everything but might catch big ones
    tags = re.findall(r'<(div|/div)', content)
    tag_stack = []
    for tag in tags:
        if tag == 'div':
            tag_stack.append('div')
        else:
            if not tag_stack:
                print("Extra </div> found")
            else:
                tag_stack.pop()
    if tag_stack:
        print(f"Unclosed tags: {len(tag_stack)}")

check_balance(r"c:\Users\netra\Desktop\erpvits\app\admin\courses\edit\[id]\page.tsx")
