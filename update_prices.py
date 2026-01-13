import json

# Read the JSON file
with open('courses.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Replace "Competitive" with "45,000" for all courses
for course in data:
    if course.get('price') == 'Competitive':
        course['price'] = '45,000'

# Write back to file
with open('courses.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Updated prices in courses.json")
