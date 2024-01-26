import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import ProjectGallery from './components/ProjectGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/projectgallery" element={<ProjectGallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
