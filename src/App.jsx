import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import ProjectGallery from './components/ProjectGallery'

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
