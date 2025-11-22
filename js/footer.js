/**
 * Footer Component
 * A reusable footer component for multiple websites
 * Accepts custom copyright info via data attributes on script tag
 */

const Footer = (() => {
    // Default configuration
    const defaultConfig = {
        brandName: '0xdps - dps.codes',
        sites: [
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
        ]
    };

    // Get script element and extract config
    function getScriptConfig() {
        const script = document.currentScript || document.querySelector('script[data-footer-config]');
        if (!script) return {};

        const year = new Date().getFullYear();
        return {
            copyrightCompany: script.getAttribute('data-copyright-company') || '',
            copyrightText: script.getAttribute('data-copyright-text') || '',
            year: year
        };
    }

    const scriptConfig = getScriptConfig();

    /**
     * Create and return the footer DOM element
     * @returns {DocumentFragment} - Footer element
     */
    function createFooterElement() {
        const fragment = document.createDocumentFragment();

        // Create container
        const container = document.createElement('div');
        container.className = 'footer-container';

        // Create left side with copyright info
        const left = document.createElement('div');
        left.className = 'footer-left';

        if (scriptConfig.copyrightCompany || scriptConfig.copyrightText) {
            const copyright = document.createElement('div');
            copyright.className = 'footer-copyright';
            
            let copyrightHtml = `© ${scriptConfig.year}`;
            if (scriptConfig.copyrightCompany) {
                copyrightHtml += ` ${scriptConfig.copyrightCompany}.`;
            }
            if (scriptConfig.copyrightText) {
                copyrightHtml += ` ${scriptConfig.copyrightText}`;
            }
            
            // Create the text first
            const textNode = document.createTextNode(copyrightHtml + ' Powered by ');
            copyright.appendChild(textNode);
            
            // Create the link
            const link = document.createElement('a');
            link.href = 'https://dps.codes';
            link.target = '_blank';
            link.textContent = '0xdps';
            copyright.appendChild(link);
            
            left.appendChild(copyright);
        } else {
            // Fallback to brand name if no copyright config
            const brand = document.createElement('div');
            brand.className = 'footer-brand';
            brand.textContent = defaultConfig.brandName;
            left.appendChild(brand);
        }

        // Create right side with navigation
        const right = document.createElement('div');
        right.className = 'footer-right';
        const nav = document.createElement('nav');
        nav.className = 'footer-nav';
        const ul = document.createElement('ul');

        defaultConfig.sites.forEach(site => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = site.url;
            a.textContent = site.name;
            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        right.appendChild(nav);

        // Assemble container
        container.appendChild(left);
        container.appendChild(right);
        fragment.appendChild(container);

        // Create and add Buy Me a Coffee script
        const script = document.createElement('script');
        script.setAttribute('data-name', 'BMC-Widget');
        script.setAttribute('data-cfasync', 'false');
        script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
        script.setAttribute('data-id', '0xdps');
        script.setAttribute('data-description', 'Support me on Buy me a coffee!');
        script.setAttribute('data-message', '');
        script.setAttribute('data-color', '#5F7FFF');
        script.setAttribute('data-position', 'Right');
        script.setAttribute('data-x_margin', '18');
        script.setAttribute('data-y_margin', '18');
        fragment.appendChild(script);

        return fragment;
    }

    /**
     * Initialize and auto-render the footer
     * This is called automatically when the script loads
     */
    function init() {
        // Create footer element if it doesn't exist
        let footer = document.querySelector('footer');
        if (!footer) {
            footer = document.createElement('footer');
            document.body.appendChild(footer);
        }
        
        // Clear existing content and append new footer
        while (footer.firstChild) {
            footer.removeChild(footer.firstChild);
        }
        footer.appendChild(createFooterElement());
    }

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
