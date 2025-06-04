import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Other from './pages/Other'


function App() {
 
  return (

    <Routes>

      <Route path="/" element={<Home />} /> 
      <Route path="/other" element={<Other />} />

    </Routes>

  )
}

export default App
