import React, { useState } from "react";
import "./Home.css"; // We'll create the CSS in the next step

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section === activeSection ? null : section); // Toggle visibility
  };

  return (
    <div className="home-container">
      <section className="intro">
        <h1>Hi, I'm Simon Andersson</h1>
        <p>I’m a software developer with a passion for creating impactful web applications.</p>
      </section>

      <section className="icons-container">
        <div className="icon" onClick={() => handleSectionClick("projects")}>
          <i className="fa fa-code" aria-hidden="true"></i>
          <p>Projects</p>
        </div>
        <div className="icon" onClick={() => handleSectionClick("skills")}>
          <i className="fa fa-cogs" aria-hidden="true"></i>
          <p>Skills</p>
        </div>
        <div className="icon" onClick={() => handleSectionClick("experience")}>
          <i className="fa fa-briefcase" aria-hidden="true"></i>
          <p>Experience</p>
        </div>
        <div className="icon" onClick={() => handleSectionClick("about")}>
          <i className="fa fa-user" aria-hidden="true"></i>
          <p>About</p>
        </div>
      </section>

      {/* Sections */}
      {activeSection === "projects" && (
        <section className="section-content">
          <h2>Projects</h2>
          <p>Here are some of the projects I've worked on:</p>
          {/* You can fetch and display the projects dynamically here */}
        </section>
      )}

      {activeSection === "skills" && (
        <section className="section-content">
          <h2>Skills</h2>
          <p>These are the skills I have and am currently working on:</p>
          {/* Add skills content here */}
        </section>
      )}

      {activeSection === "experience" && (
        <section className="section-content">
          <h2>Experience</h2>
          <p>Here's a summary of my experience:</p>
          {/* Add experience content here */}
        </section>
      )}

      {activeSection === "about" && (
        <section className="section-content">
          <h2>About Me</h2>
          <p>This section will tell you more about me.</p>
          {/* Add about content here */}
        </section>
      )}
    </div>
  );
};

export default Home;
