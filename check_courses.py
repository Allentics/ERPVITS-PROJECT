
import json
with open('courses.json', encoding='utf-8') as f:
    data = json.load(f)

missing = []
for course in data:
    if 'category' not in course:
        missing.append(course['id'])

print(f"Total courses: {len(data)}")
print(f"Missing category: {missing}")
