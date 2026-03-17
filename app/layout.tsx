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
          id="mobile-perf-optimizer"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Run de-blocking for both mobile and desktop to solve render-blocking chains
                  var deblock = function(n) {
                    if (n && n.tagName === 'LINK' && n.rel === 'stylesheet' && (n.href.indexOf('css') !== -1 || n.href.indexOf('chunk') !== -1)) {
                      n.media = 'only x';
                      n.onload = function() { this.media = 'all'; };
                    }
                  };
                  var obs = new MutationObserver(function(ms) {
                    ms.forEach(function(m) {
                      m.addedNodes.forEach(function(n) { deblock(n); });
                    });
                  });
                  obs.observe(document.head, { childList: true });
                  var links = document.getElementsByTagName('link');
                  for (var i = 0; i < links.length; i++) deblock(links[i]);
                } catch (e) {}
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body { background: #ffffff; color: #171717; margin: 0; font-family: sans-serif; -webkit-font-smoothing: antialiased; }
              header { background: #000000; min-height: 80px; position: sticky; top: 0; z-index: 40; }
              .announcement-bar-inline { background: #fbc02d; min-height: 35px; width: 100%; position: relative; z-index: 50; }
              .navbar-inline { background: #000000; min-height: 80px; width: 100%; }
              h1 { font-weight: 800; line-height: 1.1; margin: 0; }
              .hero-text-inline { min-height: 300px; display: flex; flex-direction: column; justify-content: center; }
              @media (prefers-color-scheme: dark) {
                body { background: #0a0a0a; color: #ededed; }
              }
            `,
          }}
        />

        {/* Mobile-only LCP Preload: Shave off discovery time for the hero image */}
        <link
          rel="preload"
          as="image"
          href="/images/home_hero_bg_v11.jpg"
          media="(max-width: 767px)"
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

