import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    // Using placeholder images for portfolio items
    const projects = [
        { id: 1, link: 'https://netflix-two-lac-50.vercel.app/', title: 'Torin', category: 'OTT Platform', img: 'p1.png' },
        { id: 2, link: 'https://gym-rust-eight.vercel.app/', title: 'Gym', category: 'Fitness Website', img: 'p2.png' },
        { id: 3, link: 'https://barber-rose.vercel.app/', title: 'Barber Saloon', category: 'Barber ecommerce Shop', img: 'p3.png' },
        { id: 4, link: 'https://tattoos-coral.vercel.app/', title: 'Art Studio', category: 'Tattoo Shop Portfolio', img: 'p4.png' },
        { id: 5, link: 'https://rawline.vercel.app/', title: 'Raw Line', category: 'Ecommerce fashion shop', img: 'p5.png' },
        { id: 6, link: 'https://bakery-three-delta.vercel.app/', title: 'Bakeri', category: 'ecommerce backery shop', img: 'p6.png' },
        { id: 7, link: 'https://restaurantbrandingproducts.com/', title: 'restaurantbrandingproducts', category: 'wordpress ecommerce pod shop', img: 'p7.png' },
        { id: 8, link: 'https://stabil-eyes.com/', title: 'stable eyes', category: 'shopify ecommerce pod shop', img: 'p8.png' },
        {
            id: 9, link: 'http://usedcduniverse.com/', title: 'CD Universe', category: 'woocommerce music shop', img: 'p9.png'
        },
        { id: 11, link: 'https://cantinaamericana.com/', title: 'Cantina America', category: 'woocommerce resturant shop', img: 'p11.png' },
        { id: 12, link: 'https://djbandsupply.com/', title: 'djbandsupply', category: 'shopify music ecommerce shop', img: 'p12.png' },
    ];

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2 className="section-title">My <span>Portfolio</span></h2>

                <div className="portfolio-grid">
                    {projects.map(project => (
                        <div className="portfolio-item" key={project.id}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.img} alt={project.title} />
                                <div className="portfolio-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.category}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Portfolio;
