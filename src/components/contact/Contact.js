import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section" style={{
            background: "linear-gradient(to bottom, #e0eafc, #f8f9fa)", 
            padding: "100px 20px", 
            border: "1px solid #D3D3D3", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}>
            <div className="container-contact">
                <h2 style={{ fontSize: "2.5em", marginBottom: "20px", textAlign: "center", color: "#2C3E50" }}>Contact</h2>
                <div className="contact-info">
                    <p>Email: <a href="mailto:rishavk685@gmail.com" className="contact-link">rishavk685@gmail.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/rishav-rk47" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/rishav-rk47</a></p>
                    <p>Phone: <span className="contact-detail">+91 6299285698</span></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
