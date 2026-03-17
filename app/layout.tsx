import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import dynamic from 'next/dynamic'
import Script from 'next/script'

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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        {/* Mobile-only LCP Preload: Shave off discovery time for the hero image */}
        <link
          rel="preload"
          as="image"
          href="/images/home_hero_bg_v11.jpg"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        {/* Critical Styles for Mobile to prevent FOUC and solve Dependency Tree issues */}
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

        {/* Google Analytics - Moved to lazyOnload to clear critical path */}
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

        {/* Microsoft Clarity - Moved to lazyOnload */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rt6no7h6fv");
          `}
        </Script>

        {/* Preconnect to external services only if absolutely critical. 
             GTM and Clarity are now lazyOnload, so preconnecting them in the head is 'Unused' in the critical path.
             Removed them for mobile performance optimization. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" media="(min-width: 768px)" />
        <link rel="preconnect" href="https://www.clarity.ms" media="(min-width: 768px)" />

        {/* Next.js Image priority in Navbar handles logo preloading optimally */}
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

