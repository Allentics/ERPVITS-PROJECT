'use client';

import React, { useRef, useState } from 'react';
import {
    Bold,
    Italic,
    Link as LinkIcon,
    Image as ImageIcon,
    Youtube,
    Heading1,
    Heading2,
    List,
    Code,
    Loader2
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

export default function RichTextEditor({ value, onChange, label }: RichTextEditorProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [uploading, setUploading] = useState(false);

    const insertTag = (tag: string, endTag?: string) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selection = text.substring(start, end);

        const replacement = endTag
            ? `${tag}${selection}${endTag}`
            : `${tag}${selection}`;

        const newValue = text.substring(0, start) + replacement + text.substring(end);
        onChange(newValue);

        // Restore focus and selection
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + tag.length, end + tag.length);
        }, 0);
    };

    const handleLink = () => {
        const url = prompt('Enter URL:');
        if (url) {
            insertTag(`<a href="${url}" target="_blank" class="text-blue-600 hover:underline">`, '</a>');
        }
    };

    const handleYoutube = () => {
        const url = prompt('Enter YouTube URL (e.g. https://www.youtube.com/watch?v=...):');
        if (!url) return;

        // Extract Video ID
        const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/)?.[1];
        if (videoId) {
            const embedCode = `<div className="aspect-video w-full my-6"><iframe src="https://www.youtube.com/embed/${videoId}" className="w-full h-full rounded-lg" allowFullScreen></iframe></div>`;
            insertTag(embedCode);
        } else {
            alert('Invalid YouTube URL');
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;
        const file = e.target.files[0];

        try {
            setUploading(true);
            const fileName = `blog-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;

            // Upload to 'blog-images' bucket
            const { data, error } = await supabase
                .storage
                .from('images') // Defaulting to 'images' bucket, hope it exists
                .upload(fileName, file);

            if (error) {
                // Try creating bucket if it doesn't exist? No, can't from here easily without admin rights
                // Fallback to public folder assumption if we were running locally but we are not.
                throw error;
            }

            // Get Public URL
            const { data: { publicUrl } } = supabase
                .storage
                .from('images')
                .getPublicUrl(fileName);

            // Insert Image Tag
            insertTag(`<img src="${publicUrl}" alt="${file.name}" class="w-full rounded-lg my-6" />`);

        } catch (err: any) {
            alert('Error uploading image: ' + err.message + '\nMake sure you have an "images" bucket with public usage enabled.');
        } finally {
            setUploading(false);
            // Reset input
            e.target.value = '';
        }
    };

    return (
        <div className="space-y-2">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-200">
                    <button type="button" onClick={() => insertTag('<b>', '</b>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Bold">
                        <Bold size={18} />
                    </button>
                    <button type="button" onClick={() => insertTag('<i>', '</i>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Italic">
                        <Italic size={18} />
                    </button>
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    <button type="button" onClick={() => insertTag('<h2>', '</h2>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Heading 2">
                        <Heading1 size={18} />
                    </button>
                    <button type="button" onClick={() => insertTag('<h3>', '</h3>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Heading 3">
                        <Heading2 size={18} />
                    </button>
                    <button type="button" onClick={() => insertTag('<ul>\n<li>', '</li>\n</ul>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="List">
                        <List size={18} />
                    </button>
                    <button type="button" onClick={() => insertTag('<pre><code>', '</code></pre>')} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Code Block">
                        <Code size={18} />
                    </button>
                    <div className="w-px h-6 bg-gray-300 mx-1"></div>
                    <button type="button" onClick={handleLink} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Link">
                        <LinkIcon size={18} />
                    </button>

                    <label className={`p-2 hover:bg-gray-200 rounded text-gray-700 cursor-pointer ${uploading ? 'opacity-50' : ''}`} title="Insert Image">
                        {uploading ? <Loader2 size={18} className="animate-spin" /> : <ImageIcon size={18} />}
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
                    </label>

                    <button type="button" onClick={handleYoutube} className="p-2 hover:bg-gray-200 rounded text-gray-700" title="Insert YouTube Video">
                        <Youtube size={18} />
                    </button>
                </div>

                {/* Editor Area */}
                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-[500px] p-4 outline-none font-mono text-sm resize-none"
                    placeholder="Write your blog post here... (HTML supported)"
                />
            </div>
            <p className="text-xs text-gray-500">
                Tip: You can write raw HTML. Use the toolbar to insert common tags and upload media.
            </p>
        </div>
    );
}
