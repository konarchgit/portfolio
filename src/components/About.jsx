import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaDribbble, FaDownload, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './About.css';

const About = () => {
    // Accordion State: Default first item (index 0) is open
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const experiences = [
        {
            company: "Patterns, Vadodara, India",
            role: "SR. PHP DEVELOPER",
            period: "May 2022 - Current",
            details: [
                "Developed and maintained web applications with Laravel framework, optimizing performance.",
                "Integrated RESTful APIs using JWT for client applications and third-party services.",
                "Utilized Laravel queues to create real-time project functionalities.",
                "Designed and optimized high-traffic databases using MySQL and MongoDB.",
                "Created custom WordPress themes and plugins tailored to client specifications, using the Elementor page builder.",
                "Integrate paymentgatway like stripe, authorize.net,paypal,forte in WooCommerce",
                "Develop theme in shopify integrate payment gateway and apps as per US client requirement",
                "Implemented React.js for dynamic UI components, enhancing user experience.",
                "Enhanced application functionality using Bootstrap framework, jQuery, and Ajax.",
                "Manage inhouse server and cpanel",
                "Collaborated with cross-functional teams to ensure timely project delivery aligned with business objectives.",
                "Attend meeting and interview with client based on US"
            ]
        },
        {
            company: "NeoSoft Technologies, Ahmedabad, India",
            role: "SENIOR SOFTWARE ENGINEER (WFH)",
            period: "Feb 2022 - March 2023",
            details: [
                "Upgraded client projects using Laravel and WordPress frameworks to improve performance.",
                "Developed RESTful APIs in Laravel with JWT for enhanced application functionality.",
                "Integrated JetStream and Breeze into Laravel applications to streamline user authentication.",
                "Managed WooCommerce features, including payment gateways, order management, and theme development with Elementor page builder.",
                "Attend interview and meeting with different clients based on US, UK"
            ]
        },
        {
            company: "DOREA Educational Institute, Warsaw, Poland",
            role: "IT SUPPORT",
            period: "Dec 2020 - Nov 2021",
            details: [
                "Managed customer inquiries to efficiently process information related to products and services.",
                "Ensured adherence to service agreements, mitigating potential legal issues.",
                "Identified problems for clients, researched solutions, and provided guidance through corrective measures.",
                "Executed software loading procedures, ensuring proper command entry for production.",
                "Configured hardware connections to facilitate seamless integration into production environments.",
                "Delivered prompt responses to client requests, enhancing overall communication effectiveness.",
                "Conducted thorough research to address customer concerns about product functionality.",
                "Collaborated with team members on compliance protocols to uphold service standards."
            ]
        },
        {
            company: "Bookingpetz.com, Amsterdam, Netherland",
            role: "WEB DEVELOPER",
            period: "July 2019 - Jan 2020",
            details: [
                "Provided comprehensive full stack support for ecommerce site development utilizing PHP and jQuery.",
                "Transformed mockups into interactive web interfaces through HTML, JavaScript, and AJAX.",
                "Enhanced database management and data retrieval efficiency by collaborating with MySQL.",
                "Executed payment system API integrations, including Stripe and PayPal.",
                "Utilized version control with GitHub and deployment on Heroku to improve workflows."
            ]
        },
        {
            company: "vTech Solution Inc, Vadodara, India",
            role: "PHP DEVELOPER",
            period: "April 2017 - February 2019",
            details: [
                "Managed PHP development for open source web applications across frontend and backend.",
                "Utilized frameworks such as CodeIgniter and Symfony 2.8, along with MySQL and MongoDB for database management.",
                "Implemented API integrations with JSON, XML, and REST to optimize application functionality.",
                "Developed AI-driven applications using Python's NLTK library for effective API creation.",
                "Oversaw Windows-based VPN server management alongside cPanel operations in Linux environments.",
                "Supervised a team of PHP developers, monitoring tasks via Bitbucket and GitHub while troubleshooting departmental issues.",
                "Formulated process flow plans to streamline project workflows effectively.",
                "Delivered technical support to US clients, addressing inquiries and technical challenges promptly"
            ]
        },
        {
            company: "MyRealKet, Vadodara, India",
            role: "PHP DEVELOPER",
            period: "August 2015 - March 2017",
            details: [
                "Created web applications and mobile APIs specifically for eCommerce platforms.",
                "Performed front-end and back-end development utilizing PHP, MySQL, JSON, XML, and REST API.",
                "Integrated various payment gateways such as PayU, CCAvenue, and PayPal into websites.",
                "Incorporated SMS gateway functionalities to improve user engagement.",
                "Developed targeted marketing strategies for eCommerce businesses.",
                "Established social media marketing initiatives to boost traffic and interaction.",
                "Tailored CMS pages in WordPress, Joomla, Magento, and OpenCart to client specifications.",
                "Engineered database architectures for distinct project needs."
            ]
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">

                <div className="about-header">
                    <div className="about-label"><span className="icon">S</span> About Us</div>
                    <h2 className="about-title">
                        Turning Business Ideas<br />
                        into Robust <span className="highlight-italic">Web Solutions</span>
                    </h2>
                </div>

                <div className="about-grid-layout">

                    {/* Card 1: Skills (Left Side) */}

                    <div className="about-card personal-card">
                        <h3 className="card-name">Education</h3>
                        <div className="card-bio">
                            <ul className="skills-list">
                                <li>- Masters in Computer Engineering (Vistula University, Warsaw, Poland)</li>
                                <li>- Btech in Computer Engineering (Sigma Institute Of ENginnering (GTU), Vadodara, India)</li>
                                <li>- HSC / SSC (Gujarat Public School, Vadodara, India)</li>
                            </ul>
                        </div>
                        <h3 className="card-name">Language</h3>
                        <div className="card-bio">
                            <ul className="skills-list">
                                <li>- English (B1/B2 level) (speak, read, write)</li>
                                <li>- Hindi (B1/B2 level) (speak, read, write)</li>
                                <li>- Gujarati (B1/B2 level) (speak, read, write)</li>
                                <li>- Polish (B1 level) (speak, read)</li>
                            </ul>
                        </div>
                        <h3 className="card-name">Skills</h3>
                        <div className="card-bio">
                            <ul className="skills-list">
                                <li>- PHP and Laravel development</li>
                                <li>- MySQL and MongoDB management</li>
                                <li>- RESTful API integration (json/xml)</li>
                                <li>- WordPress and WooCommerce, Shopify</li>
                                <li>- React.js, JavaScript, and jQuery</li>
                                <li>- AJAX and version control (GitHub)</li>
                                <li>- React Native App Development</li>
                                <li>- Client communication skills</li>
                                <li>- App development using Prompt Engineering and AI Agents (Gemini, ChatGPT, Claude, DeepSeek)</li>
                            </ul>
                            <p>&nbsp;</p>
                            <div className="card-socials">
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaLinkedinIn /></a>
                                <a href="#"><FaDribbble /></a>
                            </div>

                            <button className="btn-download-full">
                                DOWNLOAD NOW <FaDownload />
                            </button>
                        </div>




                    </div>

                    {/* Right Column Layout: Experience Accordion */}
                    <div className="about-right-col">

                        <div className="about-card bio-card">
                            <h3 className="card-name">Experience</h3>
                            <div className="experience-accordion">
                                {experiences.map((exp, index) => (
                                    <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                            <div className="accordion-title">
                                                <span className="company-text">{exp.company}</span>
                                                <span className="role-text">({exp.role})</span>
                                            </div>
                                            <div className="accordion-icon">
                                                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                            </div>
                                        </div>
                                        <div className="accordion-content">
                                            <p className="experience-period">{exp.period}</p>
                                            <ul>
                                                {exp.details.map((point, idx) => (
                                                    <li key={idx}>• {point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="circle-indicator"></div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
