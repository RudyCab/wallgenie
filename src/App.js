import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar.js";
import HomePage from "./Home/HomePage.jsx";
import WallEditorPage from "./WallEditor/WallEditorPage.jsx";
import GalleryPage from "./Gallery/GalleryPage.jsx";
import ProjectsPage from "./Projects/ProjectsPage.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/wallgenie" element={<HomePage />} />
          <Route path="/WallEditor" element={<WallEditorPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
