import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WebStoriesFeed from '@/components/web-stories/WebStoriesFeed';
import { supabase } from '@/lib/supabase';
import { MOCK_STORIES } from '@/lib/constants/mockStories';

// ISR: Revalidate stories every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
    try {
        const { data: dbStories } = await supabase
            .from('web_stories')
            .select('slug');

        const dbSlugs = dbStories?.map((s: any) => ({ slug: s.slug })) || [];
        const mockSlugs = MOCK_STORIES.map((s: any) => ({ slug: s.slug }));

        return [...dbSlugs, ...mockSlugs];
    } catch (err) {
        console.error('Error generating static params for stories:', err);
        return [];
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // Check DB first
    const { data: story } = await supabase
        .from('web_stories')
        .select('title, category, image')
        .eq('slug', slug)
        .single();

    if (story) {
        return {
            title: `${story.title} | Web Stories`,
            description: `Check out this SAP web story about ${story.title} in the ${story.category} category.`,
            alternates: {
                canonical: `https://www.erpvits.com/web-stories/${slug}/`,
            },
            openGraph: {
                title: story.title,
                description: `Watch this story: ${story.title}`,
                images: story.image ? [story.image] : [],
                type: 'article',
            }
        };
    }

    // Check Mock stories
    const mockStory = MOCK_STORIES.find((s: any) => s.slug === slug);
    if (mockStory) {
        return {
            title: `${mockStory.title} | Web Stories`,
            description: `Check out this SAP web story about ${mockStory.title} in the ${mockStory.category} category.`,
            alternates: {
                canonical: `https://www.erpvits.com/web-stories/${slug}/`,
            },
            openGraph: {
                title: mockStory.title,
                description: `Watch this story: ${mockStory.title}`,
                images: mockStory.image ? [mockStory.image] : [],
                type: 'article',
            }
        };
    }

    return {
        title: 'Web Story | ERPVITS',
        description: 'Explore the latest SAP web stories from ERPVITS.',
    };
}

export default async function WebStoryIndividualPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Verify story exists (either in DB or mock)
    const { data: dbStory } = await supabase
        .from('web_stories')
        .select('id')
        .eq('slug', slug)
        .single();

    const mockStory = MOCK_STORIES.find((s: any) => s.slug === slug);

    if (!dbStory && !mockStory) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <WebStoriesFeed />
        </div>
    );
}

