import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'active' : ''}`}>
            <div className="navbar-container container">
                <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="navbar-logo" onClick={closeMobileMenu}>
                    Ovro.
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="services" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMobileMenu}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
