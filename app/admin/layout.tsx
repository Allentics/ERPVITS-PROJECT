'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Layers,
    Globe,
    Image
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { supabase } from '@/lib/supabase';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const sidebarItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Courses', href: '/admin/courses', icon: BookOpen },
    { name: 'Blog Posts', href: '/admin/blogs', icon: FileText },
    { name: 'Pages & SEO', href: '/admin/pages', icon: Globe },
    { name: 'Site Content', href: '/admin/content', icon: Layers },
    { name: 'Media Library', href: '/admin/media', icon: Image },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert('Error signing out: ' + error.message);
        } else {
            router.push('/admin/login');
        }
    };

    // If path is /admin/login, don't show sidebar
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside
                className={cn(
                    "bg-black text-white w-64 fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 border-r border-white/5",
                    !isSidebarOpen && "-translate-x-full md:w-20"
                )}
            >
                <div className="h-full flex flex-col">
                    <div className="p-4 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <img src="/images/logo.webp" alt="Logo" className="h-8 w-auto" />
                            <span className={cn("font-bold text-lg truncate transition-opacity uppercase tracking-wider", !isSidebarOpen && "md:hidden")}>
                                Admin
                            </span>
                        </div>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-1 hover:bg-white/10 rounded-md transition-colors"
                        >
                            {isSidebarOpen ? <X size={20} className="md:hidden" /> : <Menu size={20} />}
                        </button>
                    </div>

                    <nav className="flex-1 py-4 overflow-y-auto">
                        {sidebarItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center px-4 py-3 transition-colors hover:bg-white/10",
                                        isActive && "bg-white/10 border-r-4 border-orange-500 text-orange-400 font-bold"
                                    )}
                                >
                                    <item.icon size={20} className="shrink-0" />
                                    <span className={cn(
                                        "ml-3 transition-opacity duration-300",
                                        !isSidebarOpen && "md:opacity-0 md:hidden"
                                    )}>
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-white/10">
                        <button
                            onClick={handleSignOut}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            <LogOut size={18} />
                            <span className={cn("ml-3", !isSidebarOpen && "md:hidden")}>Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 z-10">
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-md md:hidden"
                        >
                            <Menu size={20} />
                        </button>
                        <h1 className="text-lg font-semibold text-gray-800 ml-2 md:ml-0">
                            {sidebarItems.find((item: any) => pathname.startsWith(item.href))?.name || 'Admin Panel'}
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
                                AD
                            </div>
                            <span className="text-sm font-medium text-gray-700 hidden sm:inline-block">Admin User</span>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
