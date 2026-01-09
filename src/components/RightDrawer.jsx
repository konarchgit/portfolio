import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Link } from 'react-scroll';
import { FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope, FaRegLightbulb } from 'react-icons/fa';
import './RightDrawer.css';

const RightDrawer = ({ isOpen, toggleDrawer }) => {
    return (
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='app-drawer'
            style={{ background: '#0b2422' }}
        >
            <div className="drawer-header">
                <h2 className="drawer-logo">Ovro.</h2>
                <button className="close-btn" onClick={toggleDrawer}><FaTimes /></button>
            </div>

            <ul className="drawer-menu">
                <li>
                    <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={toggleDrawer}>
                        <FaHome /> Home
                    </Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleDrawer}>
                        <FaUser /> About Us
                    </Link>
                </li>
                <li>
                    <Link to="services" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleDrawer}>
                        <FaRegLightbulb /> Service
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleDrawer}>
                        <FaBriefcase /> Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={toggleDrawer}>
                        <FaEnvelope /> Contact
                    </Link>
                </li>
            </ul>

            <div className="drawer-cta">
                <Link to="contact" className="btn-primary" onClick={toggleDrawer}>
                    GET IN TOUCH NOW
                </Link>
            </div>

        </Drawer>
    );
};

export default RightDrawer;
