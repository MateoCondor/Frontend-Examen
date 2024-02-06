import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'tailwindcss/tailwind.css';

import Index from './pages/index'
import Login from './pages/login'
import Register from './pages/register';
import NewProduct from './pages/new-product';
import Products from './pages/products';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/new-product" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
