import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar.js";
import HomePage from "./Home/HomePage.jsx";
import WallEditorPage from "./WallEditor/WallEditorPage.jsx";
import GalleryPage from "./Gallery/GalleryPage.jsx";
import ProjectsPage from "./Projects/ProjectsPage.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
// import { IoIosArrowBack } from "react-icons/io";
// import { FaImage } from "react-icons/fa6";
// import { AiFillHome } from "react-icons/ai";
// import { FaUndo, FaRedo, FaFolder } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/WallEditor" element={<WallEditorPage />} />
          <Route path="/Gallery" element={<GalleryPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
