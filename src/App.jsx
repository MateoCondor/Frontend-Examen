import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css';

import Index from './pages/index'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
