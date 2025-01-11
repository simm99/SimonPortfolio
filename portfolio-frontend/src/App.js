import React, { useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaReact, FaCode } from 'react-icons/fa'; // Import icons
import PortfolioData from './components/PortfolioData'; // Import PortfolioData component

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category); // Toggle category view
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header profile-section">
        <div className="profile-image">
          <img
            src="/assets/main.jpg" // Replace with your profile image
            alt="Simon Andersson"
            className="profile-img"
          />
        </div>
        <div className="about-me">
        <h1>Hello, I’m Simon Andersson</h1>
        <p>I'm a passionate software developer who loves building cool applications and innovative features. When I'm not coding, you can find me at the gym, enjoying time with friends, or playing a round of golf. I'm always eager to learn new technologies and take on exciting projects!</p>
        </div>
      </header>

      {/* Categories Section - Displaying 4 Boxes */}
      <section className="categories-section">
        <div className="category" onClick={() => handleCategoryClick('projects')}>
          <FaReact size={50} color="#61dafb" />
          <h2>Projects</h2>
          <p>Explore the projects I have worked on, from web applications to APIs.</p>
        </div>
        <div className="category" onClick={() => handleCategoryClick('skills')}>
          <FaCode size={50} color="#61dafb" />
          <h2>Skills</h2>
          <p>Check out the technologies I am skilled in, including React, C#, and more.</p>
        </div>
        <div className="category" onClick={() => handleCategoryClick('experience')}>
          <FaGithub size={50} color="#61dafb" />
          <h2>Experience</h2>
          <p>Learn about my professional experience and work history.</p>
        </div>
        <div className="category" onClick={() => handleCategoryClick('about')}>
          <FaLinkedin size={50} color="#61dafb" />
          <h2>About Me</h2>
          <p>Find out more about who I am, my values, and my journey as a developer.</p>
        </div>
      </section>

      {/* Content Sections */}
      {activeCategory === 'projects' && (
        <section className="projects-section">
          <h2>Projects</h2>
          <PortfolioData /> {/* Fetch and display projects dynamically */}
        </section>
      )}

      {activeCategory === 'skills' && (
        <section className="skills-section">
          <h2>Skills</h2>
          {/* Add your skills here */}
          <section className="skills-section">
            <div className="skills-list">
              <div className="skill">
                <h3>JavaScript</h3>
                <p>Proficient in JavaScript for dynamic, client-side development, including DOM manipulation, event handling, and API integration. Experienced with modern frameworks and libraries like React.</p>
              </div>
              <div className="skill">
                <h3>React.js</h3>
                <p>Experienced with building interactive UIs using React.js, including state management with hooks, React Router for routing, and integrating third-party APIs.</p>
              </div>
              <div className="skill">
                <h3>C#</h3>
                <p>Experienced in using C# for back-end development, particularly with ASP.NET Core for building scalable APIs and web applications. Knowledgeable about object-oriented principles and LINQ.</p>
              </div>
              <div className="skill">
                <h3>ASP.NET Core</h3>
                <p>Proficient in developing RESTful APIs and web applications using ASP.NET Core, focusing on modularity, security, and performance optimization.</p>
              </div>
              <div className="skill">
                <h3>.NET Framework</h3>
                <p>Experienced with developing applications using the .NET Framework for building desktop applications, services, and enterprise-level solutions.</p>
              </div>
              <div className="skill">
                <h3>SQL</h3>
                <p>Familiar with SQL for relational database management, including writing complex queries, joins, indexing, and optimizing database performance.</p>
              </div>
              <div className="skill">
                <h3>HTML5 and CSS3</h3>
                <p>Proficient in HTML5 for structuring web pages and CSS3 for designing visually appealing and responsive layouts. Experience using frameworks like Bootstrap for mobile-first design.</p>
              </div>
              <div className="skill">
                <h3>Git and GitHub</h3>
                <p>Proficient in using Git for version control, including branching, merging, and resolving conflicts. Skilled in hosting and collaborating on projects using GitHub.</p>
              </div>
              <div className="skill">
                <h3>RESTful API Development</h3>
                <p>Experienced in building RESTful APIs using ASP.NET Core, including designing endpoints, handling HTTP methods, and implementing authentication and authorization.</p>
              </div>
              <div className="skill">
                <h3>Agile Methodology</h3>
                <p>Familiar with Agile practices for software development, working in iterative cycles, and ensuring continuous improvement through feedback loops.</p>
              </div>
              <div className="skill">
                <h3>Azure</h3>
                <p>Experience with deploying and managing applications on Azure, including Azure App Services, and configuring services for scalable web hosting.</p>
              </div>
              <div className="skill">
                <h3>Visual Studio & Visual Studio Code</h3>
                <p>Proficient in using Visual Studio for .NET development and Visual Studio Code for full-stack web development with React and JavaScript.</p>
              </div>
              <div className="skill">
                <h3>Jest</h3>
                <p>Experience with Jest for testing React applications, ensuring the reliability and correctness of code with unit and integration tests.</p>
              </div>
            </div>
          </section>

        </section>
      )}

      {activeCategory === 'experience' && (
        <section className="experience-section">
          <h2>Experience & Education</h2>
          <div className="experience-boxes">
            {/* Work Experience */}

            <div className="experience-box">
              <h3>Handyman at Brf Ljungelden, Skåne</h3>
              <p><strong>June 2017 – August 2024</strong></p>
              <ul>
                <li>Handled a range of general maintenance tasks for buildings, including plumbing, electrical, and landscaping.</li>
                <li>Ensured that all tasks were completed on time and within budget.</li>
                <li>Worked closely with clients to resolve issues promptly.</li>
              </ul>
            </div>

            <div className="experience-box">
              <h3>Handball Coach at Järnåkraskolan</h3>
              <p><strong>March 2020 – June 2020</strong></p>
              <ul>
                <li>Led training sessions for a youth handball team, focusing on skill development and teamwork.</li>
                <li>Ensured all team members were included in activities, promoting a supportive and engaging environment.</li>
                <li>Managed and coordinated practices and matches.</li>
              </ul>
            </div>

            <div className="experience-box">
              <h3>Substitute Teacher at Tunaskolan</h3>
              <p><strong>January 2020 – March 2020</strong></p>
              <ul>
                <li>Taught subjects such as math, Swedish, and English, adapting to different class environments.</li>
                <li>Ensured students remained engaged in learning while maintaining classroom discipline.</li>
                <li>Supported students in achieving their academic goals and developing critical thinking skills.</li>
              </ul>
            </div>

            {/* Education */}
            <div className="experience-box">
              <h3>BSc in Computer and Information Science</h3>
              <p><strong>Malmö University – Graduated 2024</strong></p>
              <ul>
                <li>Developed a strong foundation in programming, including object-oriented programming with Python and C#.</li>
                <li>Participated in various group projects and presentations, gaining hands-on experience in software development and teamwork.</li>
                <li>Relevant coursework: Data Structures, Software Engineering, Web Development with React, C#, and Databases.</li>
              </ul>
            </div>

            {/* Freelance Projects */}
            <div className="experience-box">
              <h3>Health App (Contributor) – <a href="https://github.com/MobistudyDev" target="_blank" rel="noopener noreferrer">MobiStudy Dev</a></h3>
              <ul>
                <li>Contributed to the development of a mobile health app for managing medical data. Worked on UI/UX design and data management.</li>
              </ul>
            </div>

            <div className="experience-box">
              <h3>Fantasy Hockey League – <a href="https://github.com/mackele/FantasyHockeyLeague" target="_blank" rel="noopener noreferrer">GitHub Project</a></h3>
              <ul>
                <li>Developed a Fantasy Hockey League website combining front-end and back-end functionality. Integrated real-time data through APIs and allowed players to buy and sell hockey players based on their performance.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeCategory === 'about' && (
        <section className="about-section">
          <h2>About Me</h2>
          {/* Add your about information here */}
          <p>Information about your background and passion.</p>
        </section>
      )}

      
      {/* Footer Section */}
      
      <footer>
        <p>&copy; 2025 Simon Andersson. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/simm99" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#61dafb" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/simon-andersson-983796198/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#61dafb" /> LinkedIn
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
