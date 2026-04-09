'use client';

import React, { useState, useEffect } from 'react';

interface ZohoChatButtonProps {
    widgetCode: string;
}

const ZohoChatButton: React.FC<ZohoChatButtonProps> = ({ widgetCode }) => {
    const [isRealZohoLoaded, setIsRealZohoLoaded] = useState(false);

    useEffect(() => {
        // Auto-load Zoho after a delay if user doesn't click
        const timer = setTimeout(loadRealZoho, 5000);
        return () => clearTimeout(timer);
    }, []);

    const loadRealZoho = () => {
        if (isRealZohoLoaded || typeof window === 'undefined') return;
        setIsRealZohoLoaded(true);

        const win = window as any;
        win.$zoho = win.$zoho || {};
        win.$zoho.salesiq = win.$zoho.salesiq || { ready: function () { } };

        // Explicitly handle the ready event to hide our facade
        const originalReady = win.$zoho.salesiq.ready;
        win.$zoho.salesiq.ready = function () {
            if (typeof originalReady === 'function') originalReady();

            // Only hide our facade after a slight delay to ensure the real Zoho button has rendered
            setTimeout(() => {
                const facade = document.getElementById('zoho-facade-button');
                if (facade) {
                    requestAnimationFrame(() => {
                        facade.style.opacity = '0';
                        setTimeout(() => {
                            requestAnimationFrame(() => {
                                if (facade) facade.style.display = 'none';
                            });
                        }, 500);
                    });
                }
            }, 1000);

            if (win.$zoho.salesiq.floatbutton) {
                win.$zoho.salesiq.floatbutton.position('bottomleft');
            }
        };

        const s = document.createElement("script");
        s.id = "zsiqscript";
        s.src = `https://salesiq.zohopublic.com/widget?wc=${widgetCode}`;
        s.defer = true;
        document.body.appendChild(s);
    };

    return (
        <div
            id="zoho-facade-button"
            onClick={loadRealZoho}
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
            onMouseEnter={(e) => {
                const isMobile = window.matchMedia('(max-width: 767px)').matches;
                if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    loadRealZoho();
                }
            }}
            onMouseLeave={(e) => {
                const isMobile = window.matchMedia('(max-width: 767px)').matches;
                if (!isMobile) {
                    e.currentTarget.style.transform = 'scale(1)';
                }
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
