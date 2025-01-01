import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { motion } from "motion/react"
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
const App = () => {
  return (
    <div>
      <Navbar/>
      
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/contact" element={<Contact />} />
     </Routes>
     <Cursor/>
    </div>
  )
}

export default App
