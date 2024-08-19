import React from 'react';
import Header from './components/header/Header.js';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import WorkExperience from './components/experience/WorkExperience.js';
import Projects from './components/project/Project';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
    return (
        <div className="App" style={{backgroundColor:"aliceblue"}}>
            <Header />
            <About />
            <Skills />
            <WorkExperience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
