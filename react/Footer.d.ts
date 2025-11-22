import React from 'react';

/**
 * Props for the Footer component
 */
export interface FooterProps {
    /**
     * Company or project name to display in copyright notice
     * @default ''
     */
    copyrightCompany?: string;
    
    /**
     * Additional copyright text to display
     * @default ''
     */
    copyrightText?: string;
    
    /**
     * Whether to show the Buy Me a Coffee widget
     * @default true
     */
    showBuyMeCoffee?: boolean;
}

/**
 * Footer Component - React
 * A reusable footer component for multiple websites
 * Accepts custom copyright info as props
 * User only needs to provide styling via CSS classes
 */
declare const Footer: React.FC<FooterProps>;

export default Footer;

