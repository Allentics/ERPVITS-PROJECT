import React from 'react';
import { Metadata } from 'next';
import WebStoriesFeed from '@/components/web-stories/WebStoriesFeed';

export const metadata: Metadata = {
  title: 'SAP Web Stories | ERPVITS',
  description: 'Bite-sized success stories, tips, and insights from the SAP world. Swipe through inspiring journeys and quick learning moments.',
  alternates: {
    canonical: 'https://www.erpvits.com/web-stories',
  },
};

const WebStoriesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <WebStoriesFeed />
    </div>
  );
};

export default WebStoriesPage;
