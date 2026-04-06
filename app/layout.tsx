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
  weight: ['400', '600', '700', '800'], // Further reduce weights to minimize font binary size
  preload: true,
})

// Lazy load below-the-fold components
const Footer = dynamic(() => import('@/components/layout/Footer'));
const WebinarPopup = dynamic(() => import('@/components/WebinarPopup'));
import WhatsAppButton from '@/components/WhatsAppButton';
import ZohoChatButton from '@/components/ZohoChatButton';

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
        {/* Mobile-Only CSS Unblocking Script: Top-priority execution to unblock render path immediately */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const isMobile = window.matchMedia('(max-width: 767px)').matches;
                  if (isMobile) {
                    function deferCSS(l) {
                      if (l.rel === 'stylesheet' && !l.hasAttribute('data-critical')) {
                        l.media = 'only x';
                        l.onload = function() { this.media = 'all'; };
                      }
                    }
                    document.querySelectorAll('link[rel="stylesheet"]').forEach(deferCSS);
                    new MutationObserver((m) => {
                      m.forEach((it) => it.addedNodes.forEach(n => {
                        if (n.tagName === 'LINK') deferCSS(n);
                      }));
                    }).observe(document.head, { childList: true });
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* LCP Optimization: Preload the logo - critical for desktop and mobile header */}
        <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" fetchPriority="high" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {/* Advanced Critical Styles: Minimize FOUC and eliminate layout shifts for headers */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
                body { background: #ffffff; margin: 0; padding: 0; min-height: 100vh; font-family: sans-serif; overflow-x: hidden; }
                .hero-container-inline { min-height: 85vh; background: #ffffff; width: 100%; visibility: visible; }
                .nav-header-inline { min-height: 80px; background: #000000; width: 100%; display: block; }
                .announcement-inline { min-height: 35px; background: #fbc02d; width: 100%; display: flex; align-items: center; justify-content: center; }
                .layout-container { max-width: 80rem; margin: 0 auto; padding: 0 1rem; }
                
                @media (max-width: 767px) {
                  /* Ensure primary mobile container loads instantly without waiting for chunk.css */
                  .hero-container-inline { padding-top: 1.5rem; background-color: #ffffff !important; }
                  
                  /* Fast-render for main typography to prevent blank screen */
                  h1 { 
                    font-size: 2.25rem !important; 
                    line-height: 1.1 !important; 
                    font-weight: 800 !important; 
                    color: #0f172a !important; 
                    margin-bottom: 1.5rem !important;
                    display: block !important;
                  }
                  
                  h2 {
                    font-size: 1.125rem !important;
                    line-height: 1.5 !important;
                    font-weight: 700 !important;
                    color: #1e293b !important;
                    margin-bottom: 1.5rem !important;
                  }

                  /* Pre-style mobile CTA buttons to avoid layout shift */
                  .btn-primary-mobile-inline {
                    background-color: #FF5722 !important;
                    color: #ffffff !important;
                    padding: 1rem 2rem !important;
                    border-radius: 0.375rem !important;
                    font-weight: 700 !important;
                    text-align: center !important;
                    display: block !important;
                    width: 100% !important;
                  }

                  /* Navbar & Announcement Bar mobile height locking */
                  .nav-header-inline { height: 80px !important; min-height: 80px !important; }
                  .announcement-inline { height: 35px !important; min-height: 35px !important; font-size: 11px !important; }
                  
                  /* Mobile logo sizing lock */
                  .logo-img-mobile { 
                    height: 40px !important; 
                    width: auto !important; 
                    object-fit: contain !important;
                    display: block !important;
                  }
                  
                  /* Prevent large images from causing CLS before CSS loads */
                  img { max-width: 100%; height: auto; }
                  .hero-course-inline { background: #F2F6FD; padding-top: 2rem; padding-bottom: 2rem; }
                  .course-h1-inline { font-size: 1.5rem !important; line-height: 1.3 !important; font-weight: 800; color: #0F172A; }
                }
                
                /* Eliminate YT preconnect overhead and font-chain latency */
                link[href*="ytimg"] { display: none !important; }
                img[priority] { fetchpriority: high; }
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

        {/* Zoho SalesIQ - Instant Facade Experience (loads real script on interaction or 5s delay) */}
        {process.env.NEXT_PUBLIC_ZOHO_WIDGET_CODE && (
          <ZohoChatButton widgetCode={process.env.NEXT_PUBLIC_ZOHO_WIDGET_CODE} />
        )}

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

