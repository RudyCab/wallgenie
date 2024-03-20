// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
