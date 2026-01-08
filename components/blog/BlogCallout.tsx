import React from 'react';

interface BlogCalloutProps {
    children: React.ReactNode;
    title?: string;
}

const BlogCallout = ({ children, title }: BlogCalloutProps) => {
    return (
        <div className="mt-6 mb-6 italic bg-slate-50 p-6 border-l-4 border-orange-500 rounded-r-xl shadow-sm">
            {title && <div className="font-bold text-slate-900 not-italic mb-2">{title}</div>}
            <div className="text-slate-700">{children}</div>
        </div>
    );
};

export default BlogCallout;
