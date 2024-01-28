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

function App() {


  return (

      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectgallery" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

  )
}

export default App
