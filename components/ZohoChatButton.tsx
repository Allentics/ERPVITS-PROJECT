'use client';

import React, { useState, useEffect } from 'react';

interface ZohoChatButtonProps {
    widgetCode: string;
}

const ZohoChatButton: React.FC<ZohoChatButtonProps> = ({ widgetCode }) => {
    const [isRealZohoLoaded, setIsRealZohoLoaded] = useState(false);

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        // Auto-load Zoho script silently in background after 1s on desktop, wait 8s or interaction on mobile
        const delay = isMobile ? 8000 : 1000;

        const loadOnInteract = () => { loadRealZoho(false); };
        if (isMobile) {
            window.addEventListener('scroll', loadOnInteract, { once: true, passive: true });
            window.addEventListener('touchstart', loadOnInteract, { once: true, passive: true });
        }

        const timer = setTimeout(() => loadRealZoho(false), delay);
        return () => {
            clearTimeout(timer);
            if (isMobile) {
                window.removeEventListener('scroll', loadOnInteract);
                window.removeEventListener('touchstart', loadOnInteract);
            }
        };
    }, []);

    const openOnReadyRef = React.useRef(false);

    const loadRealZoho = (shouldOpen = true) => {
        const win = window as any;

        // If already loaded, just show it
        if (isRealZohoLoaded) {
            if (shouldOpen) {
                if (win.$zoho?.salesiq?.floatwindow) {
                    try { win.$zoho.salesiq.floatwindow.visible('show'); } catch (e) { }
                } else {
                    // Script is loading but not ready. Set flag to open on ready.
                    openOnReadyRef.current = true;
                }
            }
            return;
        }

        if (shouldOpen) openOnReadyRef.current = true;
        setIsRealZohoLoaded(true);

        win.$zoho = win.$zoho || {};
        win.$zoho.salesiq = win.$zoho.salesiq || { ready: function () { } };

        const originalReady = win.$zoho.salesiq.ready;
        win.$zoho.salesiq.ready = function () {
            if (typeof originalReady === 'function') originalReady();

            // Automatically open if the user clicked the facade
            if (openOnReadyRef.current && win.$zoho.salesiq.floatwindow) {
                try {
                    win.$zoho.salesiq.floatwindow.visible('show');
                    openOnReadyRef.current = false;
                } catch (e) { }
            }
        };

        const s = document.createElement("script");
        s.id = "zsiqscript";
        s.src = `https://salesiq.zohopublic.com/widget?wc=${widgetCode.replace(/["']/g, '').trim()}`;
        s.defer = true;
        document.body.appendChild(s);
    };

    return (
        <div
            id="zoho-facade-button"
            style={{
                position: 'fixed',
                bottom: '30px',
                left: '20px',
                width: '64px',
                height: '64px',
                backgroundColor: '#0061FF',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
                zIndex: 99999,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, opacity 0.5s ease',
            }}
            className="zoho-float-btn"
            onMouseEnter={() => {
                loadRealZoho(false); // Warm up on hover but don't pop open
            }}
            onClick={() => {
                loadRealZoho(true); // Pop open on click
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
            }}
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z" fill="white" fillOpacity="0.4" />
            </svg>
        </div>
    );
};

export default ZohoChatButton;
