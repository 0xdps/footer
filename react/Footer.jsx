'use client'

import React, { useEffect } from 'react';

/**
 * Footer Component - React
 * A reusable footer component for multiple websites
 * Accepts custom copyright info as props
 * User only needs to provide styling via CSS classes
 */

const Footer = ({ 
    copyrightCompany = '', 
    copyrightText = '',
    showBuyMeCoffee = true
}) => {
    const year = new Date().getFullYear();
    const brandName = '0xdps - dps.codes';
    const sites = [
        {
            name: 'Mockly',
            url: 'https://www.mockly.codes/'
        },
        {
            name: 'Pinboard GPT',
            url: 'https://pinboard-gpt.dps.codes/'
        },
        {
            name: 'DevUtil',
            url: 'https://devutil.dps.codes/'
        },
        {
            name: 'PingPong',
            url: 'https://www.pingpong.codes/'
        },
        {
            name: 'Fake Stack',
            url: 'https://fake-stack.readthedocs.io/'
        }
    ];

    // Build copyright text
    let copyrightDisplay = '';
    if (copyrightCompany || copyrightText) {
        copyrightDisplay = `© ${year}`;
        if (copyrightCompany) copyrightDisplay += ` ${copyrightCompany}.`;
        if (copyrightText) copyrightDisplay += ` ${copyrightText}`;
    }

    // Load Buy Me a Coffee widget script
    useEffect(() => {
        if (!showBuyMeCoffee) return;

        const script = document.createElement('script');
        script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
        script.setAttribute('data-name', 'BMC-Widget');
        script.setAttribute('data-cfasync', 'false');
        script.setAttribute('data-id', '0xdps');
        script.setAttribute('data-description', 'Support me on Buy me a coffee!');
        script.setAttribute('data-message', '');
        script.setAttribute('data-color', '#5F7FFF');
        script.setAttribute('data-position', 'Right');
        script.setAttribute('data-x_margin', '18');
        script.setAttribute('data-y_margin', '18');
        
        document.body.appendChild(script);

        return () => {
            // Cleanup if needed
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [showBuyMeCoffee]);

    return (
        <footer className="footer-container">
            <div className="footer-left">
                {copyrightDisplay ? (
                    <div className="footer-copyright">
                        {copyrightDisplay} Powered by{' '}
                        <a href="https://dps.codes" target="_blank" rel="noopener noreferrer">
                            0xdps
                        </a>
                    </div>
                ) : (
                    <div className="footer-brand">{brandName}</div>
                )}
            </div>
            <div className="footer-right">
                <nav className="footer-nav">
                    <ul>
                        {sites.map((site) => (
                            <li key={site.name}>
                                <a href={site.url}>{site.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
