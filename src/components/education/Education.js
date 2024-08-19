import React from 'react';
import './Education.css';

const education = [
    {
        institution: "Maulana Azad National Institute of Technology Bhopal",
        degree: "Master of Computer Applications (MCA)",
        duration: "Dec 2020 – May 2023",
        cgpa: "8.73/10"
    },
    {
        institution: "Tilka Manjhi Bhagalpur University",
        degree: "Bachelor of Computer Application (BCA)",
        duration: "June 2015 – April 2019",
        percentage: "81.36/100"
    }
];

const Education = () => {
    return (
        <section id="education" className="education-section" style={{
            background: "linear-gradient(to bottom, #e0eafc, #f8f9fa)", 
            padding: "100px 20px", 
            border: "1px solid #D3D3D3", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}>
            <h2 style={{ fontSize: "2.5em", marginBottom: "20px", textAlign: "center", color: "#2C3E50" }}>Education</h2>
            <div className="education-container">
                {education.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3 className="education-institution">{edu.institution}</h3>
                        <p className="education-degree">{edu.degree}</p>
                        <p className="education-duration">{edu.duration}</p>
                        {edu.cgpa ? (
                            <p className="education-cgpa">CGPA: <span>{edu.cgpa}</span></p>
                        ) : (
                            <p className="education-percentage">Percentage: <span>{edu.percentage}</span></p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
