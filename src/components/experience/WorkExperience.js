import React from 'react';
import './Experience.css';

const experience = [
    {
        position: "Software Engineer 1 - Product Development",
        company: "Kantar",
        duration: "July 2023 – Present",
        responsibilities: [
            "Leading Golang development for Neo, a data harmonization tool, ensuring seamless integration and collaboration.",
            "Full-stack development using Golang, HTML, CSS, and JavaScript.",
            "Utilized Docker for deployment, Git for version control, CircleCI for build, and AWS for cloud infrastructure.",
            "Designed and implemented efficient repository design patterns, enhancing code maintainability and scalability.",
            "Engaged in cross-functional team collaboration."
        ]
    }
];

const WorkExperience = () => {
    return (
        <section id="work-experience" className="work-experience-section" style={{
            background: "linear-gradient(to bottom, #e0eafc, #f8f9fa)", 
            padding: "100px 20px", 
            border: "1px solid #D3D3D3", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}>
            <h2 style={{ fontSize: "2.5em", marginBottom: "20px", textAlign: "center", color: "#2C3E50" }}>Work Experience</h2>
            <div className="experience-container">
                {experience.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <h3 className="experience-position">{exp.position}</h3>
                        <p className="experience-company">{exp.company}</p>
                        <p className="experience-duration">{exp.duration}</p>
                        <ul className="experience-responsibilities">
                            {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="responsibility-item">{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
