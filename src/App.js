import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.js';
import HomePage from './Home/HomePage.jsx';
import GalleryPage from './Gallery/GalleryPage.jsx';
import ProjectsPage from './Projects/ProjectsPage.jsx';

function App() {
  return (
    <Router>
      <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/Projects" element={<ProjectsPage />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
