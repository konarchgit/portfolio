import React from 'react';
import { Link } from 'react-scroll';
import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaEnvelope,
    FaRegLightbulb
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className="sidebar-icon"
                    title="Home"
                >
                    <FaHome />
                </Link>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className="sidebar-icon"
                    title="About"
                >
                    <FaUser />
                </Link>
                <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className="sidebar-icon"
                    title="Services"
                >
                    <FaRegLightbulb />
                </Link>
                <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className="sidebar-icon"
                    title="Portfolio"
                >
                    <FaBriefcase />
                </Link>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                    className="sidebar-icon"
                    title="Contact"
                >
                    <FaEnvelope />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
