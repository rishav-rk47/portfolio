import React from 'react';
import './Skills.css';
import Card from '../../utility/card/SkillCard';

function Skills() {
    const skillsData = [
        {
            "title": "Frontend Development",
            "color": "Blue",
            "skills": [
                { "name": "HTML", "rate": "90" },
                { "name": "CSS", "rate": "90" },
                { "name": "JavaScript (ES6)", "rate": "85" },
                { "name": "React", "rate": "85" },
            ]
        },        
        {
            "title": "Backend Development",
            "color": "Green",
            "skills": [
                { "name": "Go", "rate": "70" },
                { "name": "Node", "rate": "80" },
                { "name": "Express", "rate": "80" }
            ]
        },        
        {
            "title": "Databases",
            "color": "Purple",
            "skills": [
                { "name": "MySQL", "rate": "85" },
                { "name": "MongoDB", "rate": "70" }
            ]
        },
        {
            "title": "Tools & Libraries",
            "color": "Orange",
            "skills": [
                { "name": "Docker", "rate": "65" },
                { "name": "Git", "rate": "85" },
                { "name": "Redux", "rate": "90" },
                { "name": "Socket.IO", "rate": "70" },
            ]
        }
        ,
        {
            "title": "Soft Skills",
            "color": "Red",
            "skills": [
                { "name": "Problem Solving & DSA(C++)", "rate": "85" },
                { "name": "Team Collaboration", "rate": "80" },
                { "name": "Communication", "rate": "80" },
                { "name": "Adaptability", "rate": "85" }
            ]
        }
        ,
      ];
      
    
    return (
        <section id="skills" className="skills" style={{
            background: "linear-gradient(to bottom, #e0eafc, #f8f9fa)", 
            padding: "100px 20px", 
            border: "1px solid #D3D3D3", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}>
            <div>
                <div>
               <h2 style={{ fontSize: "2.5em", marginBottom: "20px", textAlign: "center", color: "#2C3E50" }}>Skills</h2>
                </div>
                <div className="skills-container-top">
                {
                    skillsData.map((item,index)=>(
                        <Card data={item}></Card>
                    )     
                    )
                }
                </div>
            </div>
        </section>
    );
}

export default Skills;
