// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";

function HomePage() {
  const newProjctClick = () => {
    // Go to wall Editor page
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/WallEditor">
        <button className="NewProjectButt">New Project</button>
      </Link>
    </div>
  );
}

export default HomePage;
