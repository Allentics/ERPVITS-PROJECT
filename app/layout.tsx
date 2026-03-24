import type { Metadata } from 'next'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import dynamic from 'next/dynamic'
import Script from 'next/script'

// Lazy load below-the-fold components
const Footer = dynamic(() => import('@/components/layout/Footer'));
const WebinarPopup = dynamic(() => import('@/components/WebinarPopup'));


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
        width: 1200,
        height: 630,
        alt: 'ERPVITS - SAP Training Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERPVITS - SAP Training Institute',
    description: 'Empower your career with expert SAP online training.',
    images: ['https://www.erpvits.com/images/logo.webp'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* Mobile-only LCP Preload: Shaves off discovery time on mobile */}
        {/* Using standard link tag inside body is a Next.js 13+ allowed pattern for hoisting, 
            but for highest compatibility we use the Script and metadata API where possible. */}
        <link
          rel="preload"
          as="image"
          href="/images/home_hero_bg_v9.jpg"
          media="(max-width: 767px)"
          fetchPriority="high"
        />

        {/* Critical Styles for Mobile to prevent FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media (max-width: 767px) {
                body { background: #ffffff; margin: 0; padding: 0; }
                .hero-container-inline { min-height: 88vh; background: #ffffff; }
                .nav-header-inline { min-height: 80px; background: #000000; }
                .announcement-inline { min-height: 35px; background: #fbc02d; }
                h1 { font-size: 2.25rem; line-height: 1.2; font-weight: 800; }
              }
            `,
          }}
        />

        {/* Google Analytics - strategy: lazyOnload clears critical path */}
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

        {/* Microsoft Clarity */}
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
      </body>
    </html>
  )
}

