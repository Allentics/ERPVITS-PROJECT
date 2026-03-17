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
        {/* Mobile-only Optimization: Defer non-critical CSS to solve render-blocking issues flagged by Lighthouse */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
                  if (isMobile) {
                    const deblock = (node) => {
                      if (node.tagName === 'LINK' && node.rel === 'stylesheet' && (node.href.includes('_next/static/css') || node.href.includes('chunks'))) {
                        node.media = 'print';
                        node.onload = function() { this.media = 'all'; };
                      }
                    };
                    const observer = new MutationObserver((list) => {
                      for (const mutation of list) {
                        for (const node of mutation.addedNodes) deblock(node);
                      }
                    });
                    observer.observe(document.head, { childList: true });
                    document.querySelectorAll('link[rel="stylesheet"]').forEach(deblock);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media (max-width: 767px) {
                body { background: #ffffff; color: #171717; margin: 0; font-family: sans-serif; }
                header { background: #000000; min-height: 80px; }
              }
              @media (max-width: 767px) and (prefers-color-scheme: dark) {
                body { background: #0a0a0a; color: #ededed; }
              }
            `,
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CRQ7PMM6EV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CRQ7PMM6EV');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rt6no7h6fv");
          `}
        </Script>

        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

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

