import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import dynamic from 'next/dynamic'

// Lazy load below-the-fold components
const Footer = dynamic(() => import('@/components/layout/Footer'));
const WebinarPopup = dynamic(() => import('@/components/WebinarPopup'));

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'ERPVITS - Expert SAP Online Training Institute',
  description: 'Master SAP with confidence. Join ERPVITS for hands-on, expert-led SAP training in Ariba, FICO, MM, SD, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/images/logo.webp" as="image" />
        <link rel="preload" href="/images/home_hero_bg_v11.jpg" as="image" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WebinarPopup />
      </body>
    </html>
  )
}

