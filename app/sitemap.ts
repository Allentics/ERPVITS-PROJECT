import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { blogPosts as localBlogs } from '@/lib/blogData';
import { getCourseUrl } from '@/lib/utils';
import { MOCK_STORIES } from '@/lib/constants/mockStories';

// Revalidate every hour to pick up new stories/blogs from Supabase
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.erpvits.com';

  // 1. Static Pages
  const staticPages = [
    '',
    '/about-us',
    '/contact-us',
    '/privacy',
    '/refund-policy',
    '/blogs',
    '/courses',
    '/web-stories',
  ].map(route => {
    // Ensure trailing slash, but handle root spécialement if needed
    // Actually `${baseUrl}${route}/` works for all:
    // "" -> baseUrl/
    // "/contact" -> baseUrl/contact/
    const path = route.endsWith('/') ? route : `${route}/`;
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1.0 : 0.8,
    };
  });

  // 2. Fetch Dynamic Data from Supabase
  const [{ data: dbBlogs }, { data: dbCourses }, { data: dbStories }] = await Promise.all([
    supabase.from('blog_posts').select('id, date').order('date', { ascending: false }),
    supabase.from('courses').select('id'),
    supabase.from('web_stories').select('slug'),
  ]);

  // 3. Process Blog Posts (Local + DB)
  const blogIds = new Set<string>();
  localBlogs.forEach(b => blogIds.add(b.id));
  dbBlogs?.forEach((b: { id: string }) => blogIds.add(b.id));

  const blogEntries = Array.from(blogIds).map(id => ({
    url: `${baseUrl}/blog/${id}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 4. Process Course Pages
  const courseUrls = new Set<string>();
  const courseEntries = dbCourses?.reduce((acc: any[], course: { id: string }) => {
    const route = getCourseUrl(course.id);
    const path = route.endsWith('/') ? route : `${route}/`;
    const fullUrl = `${baseUrl}${path}`;

    if (!courseUrls.has(fullUrl)) {
      courseUrls.add(fullUrl);
      acc.push({
        url: fullUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      });
    }
    return acc;
  }, []) || [];

  // 5. Process Web Stories
  const storySlugs = new Set<string>();
  dbStories?.forEach((s: { slug: string }) => storySlugs.add(s.slug));
  MOCK_STORIES.forEach((s: { slug: string }) => storySlugs.add(s.slug));

  const storyEntries = Array.from(storySlugs).map(slug => ({
    url: `${baseUrl}/web-stories/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogEntries, ...courseEntries, ...storyEntries];
}
