import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PortfolioData = () => {
  const [portfolio, setPortfolio] = useState([]);

  // Fetch data from the backend when the component is mounted
  useEffect(() => {
    axios.get('https://localhost:7074/api/projects') // Replace with your actual backend URL
      .then(response => {
        setPortfolio(response.data); // Set the response data to the state
      })
      .catch(error => console.error("There was an error fetching the data!", error));
  }, []); // Empty array means this will only run once when the component is mounted

  return (
    <div className="portfolio-list">
      <ul>
        {portfolio.map((item) => (
          <li key={item.id} className="project-card">
            {/* Display the project data dynamically */}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            {/* Display image if available */}
            {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioData;
