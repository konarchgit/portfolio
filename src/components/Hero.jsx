import React, { useState } from 'react';
import './Hero.css';
import { FaBars, FaCog, FaGithub, FaInstagram, FaLinkedinIn, FaMoon, FaWhatsapp } from 'react-icons/fa';
import RightDrawer from './RightDrawer';

const Hero = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <>
            <section id="hero" className="hero-section">
                {/* Top Bar */}
                <div className="top-bar container">
                    <div className="logo-area">
                        <h2 className="logo-text">Konarch Prasad</h2>
                    </div>
                    <div className="top-actions">

                        <a href="mailto:konarch2026@gmail.com" className="hire-btn">HIRE ME <span className="mail-icon">✉</span></a>
                        <button className="menu-btn" onClick={toggleDrawer}><FaBars /></button>
                    </div>
                </div>

                <div className="container hero-content-only">
                    <h4 className="welcome-text"><span className="icon-box">👋</span> Hi, I'm Konarch, Full Stack php / laravel developer</h4>
                    <h1 className="main-heading">
                        Building <br />
                        Complete <span className="highlight-italic">Web Experiences</span>
                    </h1>
                    <p className="hero-subtext">
                        Hi, I'm Konarch,Senior PHP/Laravel full stack developer with 7+ years of experience building scalable, secure,
                        and high-performance applications. Strong background in Prompt Engineering, REST API development,
                        eCommerce platforms,UI development with (jquery,react library), Hands on experience with RDBMS (MYSQL) operation, SVN and server management
                    </p>

                    <div className="hero-extras">
                        <div className="circular-text">
                            <svg viewBox="0 0 100 100" width="100" height="100">
                                <defs>
                                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                </defs>
                                <text fontSize="12">
                                    <textPath xlinkHref="#circle">
                                        BUILD A SUCCESS BRAND
                                    </textPath>
                                </text>
                            </svg>
                            <div className="arrow-center">↗</div>
                        </div>

                        <div className="reviews-client">
                            <div className="profile-socials">
                                <a href="https://github.com/konarchgit" className="social-link"><FaGithub /></a>
                                <a href="https://www.instagram.com/konarchprasad/" className="social-link"><FaInstagram /></a>
                                <a href="https://wa.me/919023789034" className="social-link"><FaWhatsapp /></a>
                                <a href="https://www.linkedin.com/in/konarch-prasad-170451210/" className="social-link"><FaLinkedinIn /></a>
                                <a href="https://github.com/konarch-dev" className="social-link"><FaGithub /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RightDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
};

export default Hero;
