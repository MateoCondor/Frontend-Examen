import React from 'react';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 fixed left-0 top-0 overflow-y-auto">
    <div className="flex items-center justify-center mt-10">
      <span className="text-white text-2xl font-semibold">Bodega</span>
    </div>
    <nav className="mt-10">
        <Link to="/index" className="block py-2 px-4 text-white hover:bg-gray-700">Inicio</Link>
        <Link to="/products" className="block py-2 px-4 text-white hover:bg-gray-700">Lista de productos</Link>
        <Link to="/new-product" className="block py-2 px-4 text-white hover:bg-gray-700">Nuevo Producto</Link>
        <Link to="/login" className="block py-2 px-4 text-white hover:bg-gray-700">Cerrar sesion</Link>    
    </nav>
  </div>
  );
};

export default Navbar;
