// src/App.jsx
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Home />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
