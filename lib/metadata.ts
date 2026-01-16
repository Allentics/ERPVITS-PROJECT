import { supabase } from '@/lib/supabase';
import { Metadata } from 'next';

export async function fetchPageMetadata(path: string): Promise<Metadata> {
    const { data } = await supabase
        .from('pages')
        .select('meta_title, meta_description')
        .eq('path', path)
        .single();

    if (!data) return {};

    return {
        title: data.meta_title,
        description: data.meta_description,
    };
}

export async function fetchPageSchema(path: string): Promise<string | null> {
    const { data } = await supabase
        .from('pages')
        .select('schema_markup')
        .eq('path', path)
        .single();

    return data?.schema_markup || null;
}
