'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Save, Loader2, Globe, Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';

export default function SettingsPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [settings, setSettings] = useState<any[]>([]);

    useEffect(() => {
        fetchSettings();
    }, []);

    async function fetchSettings() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('site_settings')
                .select('*')
                .order('key');

            if (error) throw error;
            setSettings(data || []);
        } catch (err: any) {
            alert('Error fetching settings: ' + err.message);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (key: string, value: string) => {
        setSettings(prev => prev.map(s => s.key === key ? { ...s, value } : s));
    };

    const handleSave = async (setting: any) => {
        setSaving(true);
        try {
            const { error } = await supabase
                .from('site_settings')
                .update({ value: setting.value })
                .eq('key', setting.key);

            if (error) throw error;
            alert(`${setting.key} updated successfully!`);
        } catch (err: any) {
            alert('Error saving setting: ' + err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
                <p className="text-gray-500 text-sm">Loading settings...</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
                <p className="text-gray-500 text-sm">Manage global website configurations like contact info and social links.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {settings.map((setting) => (
                    <div key={setting.key} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1 space-y-1">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{setting.key.replace(/_/g, ' ')}</label>
                            <div className="flex items-center gap-3">
                                {setting.key.includes('email') && <Mail size={18} className="text-blue-500" />}
                                {setting.key.includes('phone') && <Phone size={18} className="text-green-500" />}
                                {setting.key.includes('address') && <MapPin size={18} className="text-red-500" />}
                                {setting.key.includes('social') && <LinkIcon size={18} className="text-purple-500" />}
                                {!setting.key.includes('email') && !setting.key.includes('phone') && !setting.key.includes('address') && !setting.key.includes('social') && <Globe size={18} className="text-gray-500" />}

                                <input
                                    type="text"
                                    value={setting.value || ''}
                                    onChange={(e) => handleChange(setting.key, e.target.value)}
                                    className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
                                />
                            </div>
                            {setting.description && <p className="text-xs text-gray-400 mt-1">{setting.description}</p>}
                        </div>
                        <button
                            onClick={() => handleSave(setting)}
                            disabled={saving}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-all shadow-md hover:shadow-blue-500/20 disabled:opacity-50 flex items-center gap-2 self-end md:self-center"
                        >
                            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            Save
                        </button>
                    </div>
                ))}

                {settings.length === 0 && (
                    <div className="text-center py-10 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                        <Globe size={48} className="mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500">No settings found. Run the migration script to initialize settings.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
