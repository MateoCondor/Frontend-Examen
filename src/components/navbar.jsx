import React from 'react';
import 'tailwindcss/tailwind.css';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Mi Sitio</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300">Inicio</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Acerca de</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Servicios</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
