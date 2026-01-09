import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} Ovro. All Rights Reserved.</p>
                <p>Designed with <span style={{ color: 'var(--primary-color)' }}>❤</span> by Konarch Prasad</p>
            </div>
        </footer>
    );
};

export default Footer;
