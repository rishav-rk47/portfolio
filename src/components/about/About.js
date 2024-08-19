import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about" style={{
            background: "linear-gradient(to bottom, #e0eafc, #f8f9fa)", 
            padding: "100px 20px", 
            border: "1px solid #D3D3D3", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            height:"100vh"
        }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "2.5em", marginBottom: "20px", textAlign: "center", color: "#2C3E50" }}>About Me</h2>
                <div className="about-detail" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <div className="about-text" style={{ maxWidth: "800px", fontSize: "1.2em", lineHeight: "1.6", color: "#5D6D7E" }}>
                        <p>
                            I am a passionate <span style={{ color: "#2C3E50", fontWeight: "bold" }}>Software Engineer</span> specializing in <span style={{ color: "#2C3E50", fontWeight: "bold" }}>Product Development</span> at Kantar. With a robust foundation in both frontend and backend technologies, my expertise spans across <span style={{ color: "#2C3E50", fontWeight: "bold" }}>Golang</span>, <span style={{ color: "#2C3E50", fontWeight: "bold" }}>React</span>, <span style={{ color: "#2C3E50", fontWeight: "bold" }}>Node.js</span>, and more. I thrive on transforming complex problems into user-friendly solutions, constantly striving for excellence in every project I undertake.
                        </p>
                    </div>
                    <div className="about-buttons" style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
                        <a href="https://drive.google.com/file/d/1THqgDj732_taY-f8OUMMfEDgSX5pSYLe/view?usp=sharing" download="RishavKumar_Resume.pdf" style={{
                            padding: "10px 20px",
                            background: "linear-gradient(to right, #0074D9, #74B9FF)",
                            color: "#fff",
                            textDecoration: "none",
                            borderRadius: "5px",
                            fontSize: "1.1em",
                            transition: "background 0.3s",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        }}
                        onMouseEnter={(e) => e.target.style.background = "linear-gradient(to right, #005F99, #549FEF)"}
                        onMouseLeave={(e) => e.target.style.background = "linear-gradient(to right, #0074D9, #74B9FF)"}>
                            Download Resume
                        </a>
                        <a href="#contact" style={{
                            padding: "10px 20px",
                            background: "linear-gradient(to right, #FF851B, #FFDC00)",
                            color: "#fff",
                            textDecoration: "none",
                            borderRadius: "5px",
                            border: "1px solid #FF851B",
                            fontSize: "1.1em",
                            transition: "background 0.3s",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                        }}
                        onMouseEnter={(e) => e.target.style.background = "linear-gradient(to right, #FF6F1B, #FFD700)"}
                        onMouseLeave={(e) => e.target.style.background = "linear-gradient(to right, #FF851B, #FFDC00)"}>
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
        

    );
}

export default About;
