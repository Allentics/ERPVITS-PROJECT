
"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [content, setContent] = useState({
        text: "Save 10% on all SAP Online Courses! (Limited Slots)",
        highlight: "EARLY BIRD SPECIAL:",
        visible: true
    });

    useEffect(() => {
        async function fetchSettings() {
            try {
                const { data, error } = await supabase
                    .from('site_settings')
                    .select('key, value');

                if (data && !error) {
                    const settings = data.reduce((acc: any, item: any) => {
                        acc[item.key] = item.value;
                        return acc;
                    }, {});

                    if (settings.announcement_text) {
                        setContent({
                            text: settings.announcement_text,
                            highlight: settings.announcement_highlight || "NOTICE:",
                            visible: settings.announcement_visible === 'true' || settings.announcement_visible === true
                        });
                    }
                }
            } catch (err) {
                console.error('Error fetching announcement settings:', err);
            }
        }
        fetchSettings();
    }, []);

    if (!isVisible || !content.visible) return null;

    return (
        <div className="bg-[#fbc02d] text-black text-[13px] py-1.5 px-4 relative z-50 border-b border-black/5">
            <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
                <span className="font-extrabold mr-2">🔥 {content.highlight}</span>
                <span className="font-bold">{content.text}</span>
            </div>
        </div>
    );
}
