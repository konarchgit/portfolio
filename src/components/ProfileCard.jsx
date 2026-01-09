import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaDribbble, FaDownload, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-img-container">
                <img
                    src="/konu.png"
                    alt="Konarch Prasad"
                    className="profile-img"
                />
            </div>

            <div className="profile-content">
                <h2 className="profile-name">Konarch Prasad</h2>
                {/* <p className="profile-bio">
                    Hi, I'm Konarch,Senior PHP/Laravel full stack developer with 7+ years of experience building scalable, secure,
                    and high-performance applications. Strong background in Prompt Engineering, REST API development,
                    eCommerce platforms, and database optimization with international team
                    collaboration.
                </p> */}

                <div className="profile-socials">
                    <a href="https://github.com/konarchgit" className="social-link"><FaGithub /></a>
                    <a href="https://www.instagram.com/konarchprasad/" className="social-link"><FaInstagram /></a>
                    <a href="https://wa.me/919023789034" className="social-link"><FaWhatsapp /></a>
                    <a href="https://www.linkedin.com/in/konarch-prasad-170451210/" className="social-link"><FaLinkedinIn /></a>
                    <a href="https://github.com/konarch-dev" className="social-link"><FaGithub /></a>
                </div>

                <button className="btn-download">
                    DOWNLOAD NOW <FaDownload style={{ marginLeft: '8px' }} />
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
