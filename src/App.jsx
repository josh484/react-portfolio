import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, }  from 'react-router-dom';
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import ProjectGallery from './components/ProjectGallery'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/800.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import './App.css'
import SkillsGallery from './components/SkillsGallery';
function App() {


  return (

      <Router>
      <Header />
        <Routes>
          <Route path="/react-portfolio/" element={<Home />} />
          <Route path="/react-portfolio/projectgallery" element={<ProjectGallery />} />
          <Route path="/react-portfolio/skillsgallery" element={<SkillsGallery />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>

  )
}

export default App
