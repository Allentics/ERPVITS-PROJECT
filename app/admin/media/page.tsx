'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Upload, Search, X, Copy, Trash2, Check,
    FolderOpen, Image as ImageIcon, Loader2,
    AlertCircle, RefreshCw, ExternalLink
} from 'lucide-react';

// ── ERPVITS-specific folder categories ──────────────────────────────────────
const FOLDERS = [
    { value: 'all', label: 'All Images' },
    { value: 'general', label: 'General' },
    { value: 'blogs', label: 'Blogs' },
    { value: 'courses', label: 'Modules / Courses' },
    { value: 'web-stories', label: 'Web Stories' },
    { value: 'events', label: 'Events' },
    { value: 'infographics', label: 'Infographics' },
    { value: 'team', label: 'Team / Trainers' },
    { value: 'logos', label: 'Logos & Branding' },
];

const BUCKET = 'media-library';

interface MediaFile {
    name: string;
    id: string;
    updated_at: string;
    metadata?: { size: number; mimetype: string };
    folder: string;
    publicUrl: string;
}

function formatBytes(bytes: number): string {
    if (!bytes) return '—';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaLibraryPage() {
    const [files, setFiles] = useState<MediaFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedFolder, setSelectedFolder] = useState('all');
    const [showUpload, setShowUpload] = useState(false);
    const [uploadFolder, setUploadFolder] = useState('general');
    const [altText, setAltText] = useState('');
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');
    const [dragOver, setDragOver] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [selected, setSelected] = useState<MediaFile | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fetchFiles = useCallback(async () => {
        setLoading(true);
        try {
            const allFiles: MediaFile[] = [];
            const foldersToFetch = FOLDERS.filter(f => f.value !== 'all').map(f => f.value);

            for (const folder of foldersToFetch) {
                const { data, error } = await supabase.storage.from(BUCKET).list(folder, {
                    limit: 500,
                    sortBy: { column: 'updated_at', order: 'desc' },
                });
                if (error || !data) continue;

                for (const file of data) {
                    if (file.name === '.emptyFolderPlaceholder') continue;
                    const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(`${folder}/${file.name}`);
                    allFiles.push({
                        name: file.name,
                        id: `${folder}/${file.name}`,
                        updated_at: file.updated_at || '',
                        metadata: file.metadata as any,
                        folder,
                        publicUrl: urlData.publicUrl,
                    });
                }
            }

            // Sort all by updated_at desc
            allFiles.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
            setFiles(allFiles);
        } catch (err: any) {
            console.error('Error fetching media:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFiles();
    }, [fetchFiles]);

    const handleUpload = async (fileList: FileList | null) => {
        if (!fileList || fileList.length === 0) return;
        const file = fileList[0];

        // Client-side validate
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        if (!allowedTypes.includes(file.type)) {
            setUploadError('Invalid file type. Allowed: JPEG, PNG, GIF, WebP, SVG');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setUploadError('File too large. Max size is 5MB.');
            return;
        }

        setUploading(true);
        setUploadError('');

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('folder', uploadFolder);

            const res = await fetch('/api/admin/media/upload', {
                method: 'POST',
                body: formData,
            });

            const json = await res.json();
            if (!res.ok || json.error) throw new Error(json.error || 'Upload failed');

            setShowUpload(false);
            setAltText('');
            if (fileInputRef.current) fileInputRef.current.value = '';
            await fetchFiles();
        } catch (err: any) {
            setUploadError(err.message || 'Upload failed. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (file: MediaFile) => {
        if (!confirm(`Delete "${file.name}"? This cannot be undone.`)) return;
        setDeleteId(file.id);
        try {
            const res = await fetch('/api/admin/media/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ path: file.id }),
            });
            const json = await res.json();
            if (!res.ok || json.error) throw new Error(json.error || 'Delete failed');
            setFiles(prev => prev.filter(f => f.id !== file.id));
            if (selected?.id === file.id) setSelected(null);
        } catch (err: any) {
            alert('Error deleting file: ' + err.message);
        } finally {
            setDeleteId(null);
        }
    };

    const copyUrl = (file: MediaFile) => {
        navigator.clipboard.writeText(file.publicUrl);
        setCopiedId(file.id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    // Filter
    const filtered = files.filter(f => {
        const matchFolder = selectedFolder === 'all' || f.folder === selectedFolder;
        const matchSearch = !search || f.name.toLowerCase().includes(search.toLowerCase());
        return matchFolder && matchSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <ImageIcon size={22} className="text-orange-400" />
                        Media Library
                    </h1>
                    <p className="text-slate-400 text-sm mt-0.5">Manage your images and media files</p>
                </div>
                <button
                    onClick={() => { setShowUpload(true); setUploadError(''); }}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-lg"
                >
                    <Upload size={16} /> Upload Image
                </button>
            </div>

            {/* Toolbar */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative flex-1 min-w-[220px] max-w-md">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search images..."
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    {search && (
                        <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <X size={14} />
                        </button>
                    )}
                </div>

                {/* Folder filter */}
                <div className="flex items-center gap-2">
                    <FolderOpen size={16} className="text-gray-400" />
                    <select
                        value={selectedFolder}
                        onChange={e => setSelectedFolder(e.target.value)}
                        className="border border-gray-200 rounded-lg text-sm px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        {FOLDERS.map(f => (
                            <option key={f.value} value={f.value}>{f.label}</option>
                        ))}
                    </select>
                </div>

                {/* Refresh */}
                <button
                    onClick={fetchFiles}
                    className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Refresh"
                >
                    <RefreshCw size={16} />
                </button>

                <span className="text-xs text-gray-400 ml-auto">{filtered.length} file{filtered.length !== 1 ? 's' : ''}</span>
            </div>

            {/* Grid */}
            <div className="p-6">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-32 text-gray-400">
                        <Loader2 size={36} className="animate-spin mb-3" />
                        <p className="text-sm">Loading media files…</p>
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-gray-400">
                        <ImageIcon size={48} className="mb-4 opacity-30" />
                        <p className="text-base font-medium">No images found</p>
                        <p className="text-sm mt-1">{search ? 'Try a different search term.' : 'Upload your first image to get started.'}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {filtered.map(file => (
                            <div
                                key={file.id}
                                className={`group relative bg-white rounded-xl border-2 overflow-hidden cursor-pointer transition-all hover:shadow-lg ${selected?.id === file.id ? 'border-orange-400 shadow-lg' : 'border-gray-100 hover:border-orange-200'}`}
                                onClick={() => setSelected(selected?.id === file.id ? null : file)}
                            >
                                {/* Thumbnail */}
                                <div className="aspect-square bg-gray-50 overflow-hidden">
                                    <img
                                        src={file.publicUrl}
                                        alt={file.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="%23ccc" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 9 4-4 4 4"/><circle cx="8.5" cy="8.5" r="1.5"/></svg>';
                                        }}
                                    />
                                </div>

                                {/* Quick actions overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); copyUrl(file); }}
                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-50 transition-colors"
                                        title="Copy URL"
                                    >
                                        {copiedId === file.id ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-gray-700" />}
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); window.open(file.publicUrl, '_blank'); }}
                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                                        title="Open in new tab"
                                    >
                                        <ExternalLink size={14} className="text-gray-700" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleDelete(file); }}
                                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors"
                                        title="Delete"
                                    >
                                        {deleteId === file.id ? <Loader2 size={14} className="animate-spin text-red-500" /> : <Trash2 size={14} className="text-red-500" />}
                                    </button>
                                </div>

                                {/* File info */}
                                <div className="p-2">
                                    <p className="text-[11px] text-gray-700 font-medium truncate" title={file.name}>{file.name}</p>
                                    <p className="text-[10px] text-gray-400 mt-0.5">
                                        {formatBytes(file.metadata?.size || 0)} · <span className="text-orange-500">{file.folder}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Detail Panel (when image selected) */}
            {selected && (
                <div className="fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 shadow-2xl z-40 flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <h3 className="font-bold text-gray-900 text-sm">File Details</h3>
                        <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-700"><X size={18} /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        <div className="bg-gray-50 rounded-xl overflow-hidden aspect-square">
                            <img src={selected.publicUrl} alt={selected.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="space-y-3 text-sm">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">File Name</p>
                                <p className="text-gray-800 font-medium break-all">{selected.name}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Folder</p>
                                <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full">{selected.folder}</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Size</p>
                                <p className="text-gray-700">{formatBytes(selected.metadata?.size || 0)}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Public URL</p>
                                <div className="flex gap-2 items-start">
                                    <input
                                        readOnly
                                        value={selected.publicUrl}
                                        className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded-lg p-2 text-gray-600 break-all"
                                        onClick={e => (e.target as HTMLInputElement).select()}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-100 space-y-2">
                        <button
                            onClick={() => copyUrl(selected)}
                            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-bold text-sm transition-colors"
                        >
                            {copiedId === selected.id ? <><Check size={16} /> Copied!</> : <><Copy size={16} /> Copy URL</>}
                        </button>
                        <button
                            onClick={() => handleDelete(selected)}
                            className="w-full flex items-center justify-center gap-2 border border-red-200 text-red-500 hover:bg-red-50 py-2.5 rounded-lg font-bold text-sm transition-colors"
                        >
                            <Trash2 size={16} /> Delete File
                        </button>
                    </div>
                </div>
            )}

            {/* Upload Modal */}
            {showUpload && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Upload Image</h2>
                            <button
                                onClick={() => { setShowUpload(false); setUploadError(''); }}
                                className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1.5 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 space-y-5">
                            {/* Drop Zone */}
                            <div
                                className={`border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer ${dragOver ? 'border-orange-400 bg-orange-50' : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'}`}
                                onClick={() => fileInputRef.current?.click()}
                                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                onDragLeave={() => setDragOver(false)}
                                onDrop={(e) => {
                                    e.preventDefault();
                                    setDragOver(false);
                                    handleUpload(e.dataTransfer.files);
                                }}
                            >
                                {uploading ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <Loader2 className="animate-spin text-orange-500" size={36} />
                                        <p className="text-sm text-gray-600 font-medium">Uploading…</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                                            <Upload size={24} className="text-gray-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-700">Drag and drop images here, or</p>
                                            <p className="text-sm font-bold text-orange-600 mt-1 hover:text-orange-700">Browse Files</p>
                                        </div>
                                        <p className="text-xs text-gray-400">Max 5MB · JPEG, PNG, GIF, WebP, SVG</p>
                                    </div>
                                )}
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
                                    className="hidden"
                                    onChange={(e) => handleUpload(e.target.files)}
                                />
                            </div>

                            {/* Error */}
                            {uploadError && (
                                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                                    <AlertCircle size={16} />
                                    {uploadError}
                                </div>
                            )}

                            {/* Folder */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Folder</label>
                                <select
                                    value={uploadFolder}
                                    onChange={e => setUploadFolder(e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                                >
                                    {FOLDERS.filter(f => f.value !== 'all').map(f => (
                                        <option key={f.value} value={f.value}>{f.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Alt Text */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-gray-700">Alt Text <span className="font-normal text-gray-400">(optional)</span></label>
                                <input
                                    type="text"
                                    value={altText}
                                    onChange={e => setAltText(e.target.value)}
                                    placeholder="Describe the image for accessibility"
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                                />
                            </div>

                            {/* Upload Button */}
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                disabled={uploading}
                                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2"
                            >
                                {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                                {uploading ? 'Uploading…' : 'Select & Upload File'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
