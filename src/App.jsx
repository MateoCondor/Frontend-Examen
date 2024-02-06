import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import System from './pages/System.jsx'
import Inventory from './pages/Inventory.jsx'
import NewProduct from './pages/NewProduct.jsx'


function App() {

  return (


    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/system" element={<System />} />
        <Route path="/system/inventory" element={<Inventory/>} />
        <Route path="/system/new-product" element={<NewProduct/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
