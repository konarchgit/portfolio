import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
        // You can get them from https://dashboard.emailjs.com/admin
        const serviceID = 'service_vnpl14l';
        const templateID = 'template_n46xuzb';
        const publicKey = 'sOm0R0_YHYYPcOMq_';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                form.current.reset();
                setIsSending(false);
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please check your configuration.');
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact <span>Me</span></h2>

                <div className="contact-container">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="input-group">
                            <input type="text" name="user_name" placeholder="Name" required />
                            <input type="email" name="user_email" placeholder="Email" required />
                        </div>
                        <input type="text" name="subject" placeholder="Subject" className="full-width" />
                        <textarea name="message" placeholder="Message" rows="5" required></textarea>
                        <button type="submit" className="btn-primary" disabled={isSending}>
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
