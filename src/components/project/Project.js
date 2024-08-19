import React from 'react';
import './Project.css';

const projects = [
    {
        title: "Interactive Polling Application",
        year: "2023",
        description: [
            "Developed an interactive survey application using MERN stack (MongoDB, Express.js, React.js, Node.js).",
            "Frontend: Built with React.js, ensuring a responsive and user-friendly interface.",
            "Backend: Implemented using Node.js and Express.js, handling survey creation, management, and data storage.",
            "Database: Utilized MongoDB for survey-related data and MySQL for user data storage.",
            "Real-Time Communication: Integrated Socket.IO for real-time updates and communication between survey hosts and participants.",
            "Authentication: Implemented JWT tokens for secure user authentication.",
            "Analytics & Visualization: Provided real-time response analytics, including bar charts, word clouds, and average ratings."
        ]
    },
    {
        title: "Medimeet - Doctor Appointment Booking System",
        year: "2022",
        description: [
            "Created a comprehensive doctor appointment booking system using React, Node.js, and MongoDB.",
            "Frontend: Built with React.js, providing a smooth user experience for both patients and doctors.",
            "Backend: Developed using Node.js and Express.js, ensuring efficient handling of appointment bookings and user data.",
            "Database: Implemented MongoDB for data storage, ensuring scalability and performance.",
            "Authentication: Utilized JWT for secure user authentication and role management.",
            "State Management: Integrated Redux for global state management, enhancing application performance and user experience.",
            "Features: Enabled doctors to manage appointments, write descriptions, and access patient data securely."
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section" style={{
            background: "linear-gradient(to bottom, #e0eafc, #f8f9fa)", 
            padding: "100px 20px", 
            border: "1px solid #D3D3D3", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}>
            <h2 style={{ fontSize: "2.5em", marginBottom: "20px", textAlign: "center", color: "#2C3E50" }}>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-year">{project.year}</p>
                        <ul className="project-description">
                            {project.description.map((desc, idx) => (
                                <li key={idx} className="project-description-item">{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
