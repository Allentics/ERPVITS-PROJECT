from supabase import create_client
import os
from dotenv import load_dotenv

load_dotenv('.env.local')

url = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
key = os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
supabase = create_client(url, key)

res = supabase.table('courses').select('id', 'title', 'sections').execute()

for course in res.data:
    print(f"Course: {course['id']} - {course['title']}")
    sections = course.get('sections', [])
    if not sections:
        print("  No sections")
        continue
    for sec in sections:
        if sec.get('type') == 'detailed_features' or 'Features' in str(sec.get('title', '')):
            print(f"  Section Type: {sec.get('type')} | Badge: {sec.get('badge')} | Title: {sec.get('title')}")
