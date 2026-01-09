import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearchDollar, FaWordpress, FaShopify, FaLaravel, FaPhp, FaJs, FaReact, FaDatabase, FaCloud, FaDocker, FaGithub, FaCpanel, FaUbuntu, FaWindows, FaUser, FaMicrochip } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const services = [

        {
            id: 1,
            icon: [<FaLaravel />, < FaPhp />],
            title: 'Back end Web Development',
            desc: 'Building responsive and performant websites using backend technologies like php and laravel framework'
        }, {
            id: 2,
            icon: [<FaJs />, < FaReact />],
            title: 'Front end Web Development',
            desc: 'Design and develop web application using frontend technologies like jquery,javascript,reactjs library'
        }, {
            id: 3,
            icon: [<FaDatabase />],
            title: 'RDBMS Development',
            desc: 'Design and develop database schema and query using mysql and mongodb for web application'
        },
        {
            id: 4,
            icon: <FaWordpress />,
            title: 'Wordpress Development',
            desc: 'Design and develop wordpress & woocommerce websites and plugin'
        },
        {
            id: 5,
            icon: <FaShopify />,
            title: 'Shopify Development',
            desc: 'Handling client projects in shopify and integrate payment gateway and apps as per US client requirement'
        },
        {
            id: 6,
            icon: <FaMobileAlt />,
            title: 'App Development',
            desc: 'Developing mobile applications for Android platforms using react native'
        },

        {
            id: 7,
            icon: [<FaDocker />, <FaGithub />],
            title: 'Devops Tools & SVN',
            desc: 'Hands on experience managing docker,github,bitbucket tools.'
        },

        {
            id: 8,
            icon: [<FaCpanel />, <FaUbuntu />, <FaWindows />],
            title: 'Web Hosting',
            desc: 'Manage inhouse server and cpanel and ubuntu and windows os system'
        },
        {
            id: 9,
            icon: [<FaMicrochip />],
            title: 'Prompt Engineering',
            desc: 'With the help of prompting technique and AI agents like Gemini, chatgpt, claude i can develop robust web and mobile App and also fixex bugs in exsiting applications'
        },
        {
            id: 10,
            icon: [<FaUser />],
            title: 'Outsourcing Projects',
            desc: 'Hands on experience in dealing with US and UK clients for outsourcing projects'
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">My <span>Services</span></h2>

                <div className="services-grid">
                    {services.map(service => (
                        <div className="service-card" key={service.id}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row of Cards */}
                {/* <div className="skills-row">
                    <div className="about-card skill-card">
                        <div className="skill-icon">📱</div>
                        <h4>Full Stack Engineering</h4>
                        <p>Building scalable web applications from front to back.</p>
                    </div>
                    <div className="about-card skill-card">
                        <div className="skill-icon">🤖</div>
                        <h4>AI & Automation</h4>
                        <p>Integrating AI models and prompt engineering.</p>
                    </div>
                </div> */}
            </div>

        </section>
    );
};

export default Services;
