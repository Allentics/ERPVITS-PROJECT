'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Search,
    MoreVertical,
    Trash2,
    Loader2,
    AlertCircle,
    Mail,
    Phone,
    Calendar,
    User,
    BookOpen,
    MessageSquare
} from 'lucide-react';

export default function SubmissionsPage() {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchSubmissions();
    }, []);

    async function fetchSubmissions() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('contacts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setSubmissions(data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function deleteSubmission(id: string) {
        if (!confirm('Are you sure you want to delete this submission?')) return;

        try {
            const { error } = await supabase
                .from('contacts')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setSubmissions(submissions.filter(s => s.id !== id));
        } catch (err: any) {
            alert('Error deleting submission: ' + err.message);
        }
    }

    const filteredSubmissions = submissions.filter(sub =>
        sub.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.course?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900">Contact Submissions</h2>
                <p className="text-gray-500 text-sm">Review and respond to inquiries from your website.</p>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, email or course..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Submissions List */}
            <div className="grid grid-cols-1 gap-4">
                {loading ? (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-20">
                        <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
                        <p className="text-gray-500 text-sm">Loading submissions...</p>
                    </div>
                ) : error ? (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-20 px-4 text-center">
                        <AlertCircle className="text-red-500 mb-4" size={32} />
                        <h3 className="text-lg font-bold text-gray-900">Error loading data</h3>
                        <p className="text-gray-500 text-sm mt-1">{error}</p>
                    </div>
                ) : filteredSubmissions.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center py-20 px-4 text-center">
                        <MessageSquare className="text-gray-400 mb-4" size={32} />
                        <h3 className="text-lg font-bold text-gray-900">No submissions found</h3>
                        <p className="text-gray-500 text-sm mt-1">Incoming inquiries will appear here.</p>
                    </div>
                ) : (
                    filteredSubmissions.map((submission) => (
                        <div key={submission.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all group">
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                <div className="space-y-3 flex-1">
                                    <div className="flex items-center gap-2">
                                        <User size={16} className="text-blue-600" />
                                        <h3 className="font-bold text-gray-900">{submission.name || `${submission.first_name} ${submission.last_name}`}</h3>
                                        <span className="text-xs text-gray-400">•</span>
                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                            <Calendar size={12} />
                                            {new Date(submission.created_at).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6 text-sm">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Mail size={14} />
                                            <a href={`mailto:${submission.email}`} className="hover:text-blue-600 hover:underline">{submission.email}</a>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Phone size={14} />
                                            <a href={`tel:${submission.phone}`} className="hover:text-blue-600 hover:underline">{submission.phone}</a>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <BookOpen size={14} />
                                            <span className="font-medium">{submission.course}</span>
                                        </div>
                                    </div>

                                    {submission.message && (
                                        <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 italic border-l-4 border-blue-400">
                                            "{submission.message}"
                                        </div>
                                    )}
                                </div>

                                <div className="flex md:flex-col justify-end gap-2 shrink-0">
                                    <button
                                        onClick={() => deleteSubmission(submission.id)}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                        title="Delete"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg md:hidden">
                                        <MoreVertical size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
