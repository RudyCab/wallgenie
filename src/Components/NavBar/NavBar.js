import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li className={location.pathname === "/Gallery" ? "active" : ""}>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/WallEditor" ? "active" : ""}>
          <Link to="/WallEditor">WallEditor</Link>
        </li>
        <li className={location.pathname === "/Projects" ? "active" : ""}>
          <Link to="/Projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
