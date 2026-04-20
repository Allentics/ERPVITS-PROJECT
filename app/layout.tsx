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
  display: 'optional', // Faster than 'swap' for mobile LCP - eliminates reflow/FOUC
  variable: '--font-inter',
  weight: ['400', '600', '700', '800'],
  preload: true,
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
        {/* Advanced Mobile-Only Critical Infrastructure: Resolves Render-Blocking (Lighthouse fix) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const isMobile = window.matchMedia('(max-width: 767px)').matches;
                  if (!isMobile) return;

                  // 1. Resolve Network Dependency Tree: Establish early connections for mobile
                  const preconnects = ['https://www.googletagmanager.com', 'https://www.clarity.ms', 'https://i.ytimg.com'];
                  preconnects.forEach(url => {
                    const l = document.createElement('link');
                    l.rel = 'preconnect';
                    l.href = url;
                    l.crossOrigin = 'anonymous';
                    document.head.appendChild(l);
                  });

                  // 2. Resolve Render Blocking: Defer all non-critical stylesheets for mobile
                  function unblockResource(l) {
                    if (l.rel === 'stylesheet' && l.media !== 'print' && !l.hasAttribute('data-critical')) {
                      l.media = 'print';
                      l.onload = function() { 
                        this.media = 'all';
                        this.setAttribute('data-loaded', 'true');
                      };
                      // Safety override: Ensure styles application within 1.5s
                      setTimeout(() => { if (l.media !== 'all') l.media = 'all'; }, 1500);
                    }
                  }

                  // Immediate unblocking for static and early-injected links
                  const existing = document.querySelectorAll('link[rel="stylesheet"]');
                  existing.forEach(unblockResource);

                  // 3. Resolve Forced Reflow: Prevent geometric queries from triggering layout thrashing
                  const style = document.createElement('style');
                  style.id = 'mobile-reflow-fix';
                  style.innerHTML = \`
                    @media (max-width: 767px) {
                      .hero-container-inline { contain: layout; }
                      body { overflow-anchor: none; }
                      footer { content-visibility: auto; contain-intrinsic-size: 0 500px; }
                    }
                  \`;
                  document.head.appendChild(style);

                  // MutationObserver to catch Next.js dynamic chunks
                  const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                      mutation.addedNodes.forEach((node) => {
                        if (node.tagName === 'LINK') unblockResource(node);
                      });
                    });
                  });
                  observer.observe(document.head, { childList: true });
                  
                  // Clean up observer after 5 seconds
                  setTimeout(() => observer.disconnect(), 5000);
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* LCP Optimization: High-priority logo for mobile + desktop */}
        <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" fetchPriority="high" />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <Script id="zsiq-init" strategy="beforeInteractive">
          {`
            window.$zoho = window.$zoho || {};
            window.$zoho.salesiq = window.$zoho.salesiq || { ready: function() {
              if (window.$zoho.salesiq.floatwindow) {
                window.$zoho.salesiq.floatwindow.position("right");
              }
            } };
          `}
        </Script>
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {/* Advanced Critical Styles for Mobile: Fixes CLS and Forced Reflow by locking dimensions */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
                .hero-container-inline { min-height: 85vh; background: #ffffff; width: 100%; visibility: visible; }
                .nav-header-inline { min-height: 80px; background: #000000; width: 100%; display: block; }
                .announcement-inline { min-height: 35px; background: #fbc02d; width: 100%; display: flex; align-items: center; justify-content: center; }
                .layout-container { max-width: 80rem; margin: 0 auto; padding: 0 1rem; }
                
                @media (max-width: 767px) {
                  body { background: #ffffff; margin: 0; padding: 0; min-height: 100vh; overflow-x: hidden; }
                  /* Content visibility to solve reflow on scroll for mobile */
                  section { content-visibility: auto; contain-intrinsic-size: 0 200px; }
                  .hero-container-inline { content-visibility: visible; min-height: 60vh !important; padding-top: 1.5rem; background-color: #ffffff !important; }
                  
                  h1 { 
                    font-size: 1.5rem !important; 
                    line-height: 1.25 !important; 
                    margin-bottom: 1rem !important;
                    font-weight: 800 !important;
                    color: #0F172A !important;
                  }
                  
                  h2 {
                    font-size: 1.125rem !important;
                    line-height: 1.5 !important;
                    font-weight: 700 !important;
                    color: #1e293b !important;
                    margin-bottom: 1.5rem !important;
                  }

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

                  /* Dimension locking to prevent reflows during font hydration */
                  .nav-header-inline { height: 80px !important; min-height: 80px !important; width: 100% !important; flex-shrink: 0 !important; }
                  .announcement-inline { height: 35px !important; min-height: 35px !important; font-size: 11px !important; }
                  
                  .logo-img-mobile { 
                    height: 40px !important; 
                    width: auto !important; 
                    min-width: 100px;
                    object-fit: contain !important;
                    display: block !important;
                  }
                  
                  img { max-width: 100%; height: auto; content-visibility: auto; }
                  .hero-course-inline { background: #F2F6FD !important; padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; min-height: 50vh !important; }
                  .course-h1-inline { font-size: 1.5rem !important; line-height: 1.3 !important; font-weight: 800; color: #0F172A; }
                  .course-sub-inline { font-size: 0.875rem !important; color: #475569 !important; line-height: 1.5 !important; }
                  .course-form-card-mobile { background: #ffffff !important; border-radius: 1rem !important; padding: 1.25rem !important; border: 1px solid #e2e8f0 !important; margin-top: 1rem !important; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important; }
                  link[href*="ytimg"] { display: none !important; }
                }
                

                img[priority] { fetchpriority: high; }
            `,
          }}
        />

        {/* Google Analytics - strategy: lazyOnload with Mobile-specific deferral to reduce Main Thread blocking */}
        <Script id="google-analytics-loader" strategy="lazyOnload">
          {`
            (function() {
              function loadGA() {
                if (window.gaLoaded) return;
                window.gaLoaded = true;
                
                var script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CRQ7PMM6EV';
                script.async = true;
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', 'G-CRQ7PMM6EV');
              }

              const isMobile = window.matchMedia('(max-width: 767px)').matches;
              if (isMobile) {
                // For mobile, wait for interaction or 6s delay
                const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
                events.forEach(e => window.addEventListener(e, loadGA, { once: true, passive: true }));
                setTimeout(loadGA, 6000); 
              } else {
                loadGA();
              }
            })();
          `}
        </Script>

        {/* Microsoft Clarity - strategy: lazyOnload with Mobile-specific deferral */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function() {
              function loadClarity() {
                if (window.clarityLoaded) return;
                window.clarityLoaded = true;
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "rt6no7h6fv");
              }

              const isMobile = window.matchMedia('(max-width: 767px)').matches;
              if (isMobile) {
                // For mobile, wait for interaction or 6s delay
                const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
                events.forEach(e => window.addEventListener(e, loadClarity, { once: true, passive: true }));
                setTimeout(loadClarity, 6000); 
              } else {
                loadClarity();
              }
            })();
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

        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq815cfd3c18ee4fd5f5d3814ff80e3c42393aa3eefeba913b73d9582d23b70924"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

