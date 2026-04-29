import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // <-- Added Router imports
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Survey from './components/Survey'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'
import './App.css'

// 1. Grouped your main portfolio into its own component
const MainPortfolio = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div 
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  )
}

// 2. Set up the App to handle the different routes
function App() {
  return (
    <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
    
  )
}

export default App