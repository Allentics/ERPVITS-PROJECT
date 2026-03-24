import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import dynamic from 'next/dynamic'
import Script from 'next/script'

// Standard Next.js font optimization: removes font-chain latency and FOUT
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Lazy load below-the-fold components
const Footer = dynamic(() => import('@/components/layout/Footer'));
const WebinarPopup = dynamic(() => import('@/components/WebinarPopup'));
import WhatsAppButton from '@/components/WhatsAppButton';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.erpvits.com'),
  title: {
    default: 'ERPVITS - SAP Training Institute',
    template: '%s | ERPVITS'
  },
  description: 'Empower your career with expert SAP online training.',
  openGraph: {
    title: 'ERPVITS - SAP Training Institute',
    description: 'Empower your career with expert SAP online training.',
    url: 'https://www.erpvits.com',
    siteName: 'ERPVITS',
    images: [
      {
        url: 'https://www.erpvits.com/images/logo.webp',
        alt: 'ERPVITS - SAP Training Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ERPVITS - SAP Training Institute',
    description: 'Empower your career with expert SAP online training.',
    images: ['https://www.erpvits.com/images/logo.webp'],
  },
  other: {
    'og:logo': 'https://www.erpvits.com/images/logo.webp',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
  // Performance Optimization: Connect to critical third-party domains early
  // This reduces connection latency for Analytics and Clarity
  verification: {
    google: 'your-google-verification-code', // Placeholder if needed
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Connection Hints: Shaves off 100-300ms of connection time for critical scripts */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* LCP Optimization: Preload the logo which appears in the sticky header on all devices */}
        <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" fetchPriority="high" />

        {/* Desktop-only Hero Background Preload: Fixes "load within 0 sec" for desktop while saving mobile data */}
        <link
          rel="preload"
          href="/images/home_hero_bg_v11.jpg"
          as="image"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {/* Critical Styles for Mobile to prevent FOUC and ensure instant rendering of header/container */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
                @media (max-width: 767px) {
                body { background: #ffffff; margin: 0; padding: 0; }
                .hero-container-inline { min-height: 88vh; background: #ffffff; }
                .hero-course-inline { background: #F2F6FD; padding-top: 2.5rem; padding-bottom: 3rem; }
                .course-h1-inline { font-size: 1.5rem !important; line-height: 1.25 !important; font-weight: 800 !important; color: #0F172A !important; margin-bottom: 2rem !important; }
                .nav-header-inline { min-height: 80px; background: #000000; }
                .announcement-inline { min-height: 35px; background: #fbc02d; }
                h1 { font-size: 2.25rem; line-height: 1.2; font-weight: 800; }
                /* Eliminate any suspected YT preconnect if it exists in parent heads/scripts (defensive) */
                link[href*="ytimg"] { display: none !important; }
              }
            `,
          }}
        />

        {/* Google Analytics - strategy: lazyOnload clears critical path for LCP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CRQ7PMM6EV"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CRQ7PMM6EV');
          `}
        </Script>

        {/* Microsoft Clarity - strategy: lazyOnload */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rt6no7h6fv");
          `}
        </Script>

        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WebinarPopup />
        <WhatsAppButton />
      </body>
    </html>
  )
}

