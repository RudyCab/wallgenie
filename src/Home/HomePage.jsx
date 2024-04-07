// HomePage.js
import { Link } from "react-router-dom";
import "./HomePage.css";
import React, { useEffect } from "react";
import logo from "../logo.png"; // Import the image file

function HomePage() {
  useEffect(() => {
    document.body.style.backgroundColor = "#215F5F";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <img src={logo} alt="logo of name and genie lamp" />
      <div className="homepage-button-container">
        <button className="homepage-button" style={{ marginRight: 10 }}>
          Current Project
        </button>
        <Link to="/WallEditor">
          <button className="homepage-button">New Project</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
