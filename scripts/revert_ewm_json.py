import json

file_path = r"c:\Users\Allenticspun2107\Desktop\ERPVITES-PROJECT-main\courses.json"
temp_file_path = r"c:\Users\Allenticspun2107\Desktop\ERPVITES-PROJECT-main\temp_ewm.json"

try:
    with open(temp_file_path, 'r', encoding='utf-8') as f:
        original_ewm = json.load(f)

    with open(file_path, 'r', encoding='utf-8') as f:
        courses = json.load(f)

    found = False
    for i, course in enumerate(courses):
        if course['id'] == 'sap-ewm':
            # Preserve minimal structure but revert content
            # original_ewm is the object I saved earlier
            courses[i] = original_ewm
            found = True
            break
    
    if found:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(courses, f, indent=4)
        print("Reverted sap-ewm in courses.json to original state.")
    else:
        print("sap-ewm not found in courses.json")

except Exception as e:
    print(f"Error reverting: {e}")
