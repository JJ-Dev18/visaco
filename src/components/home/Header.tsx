// components/Header.js (o Header.jsx)
"use client"

import React, { useState } from 'react';
import Link from 'next/link'; // Usamos Link para navegación en Next.js

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo o Nombre del Sitio */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="cursor-pointer">Abogado Jorge Rivera</span>
          </Link>
        </div>

        {/* Botón del Menú para Móviles (Hamburguesa) */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        {/* Navbar Principal */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`} id="navbarNav">
          <ul className="flex flex-col lg:flex-row lg:ml-auto mt-3 lg:mt-0">
            <li>
              <Link href="/">
                <span className="block py-2 px-4 lg:p-2 hover:bg-blue-700 rounded transition duration-300 cursor-pointer">Inicio</span>
              </Link>
            </li>
            <li>
              <Link href="/areas-de-practica"> {/* Ejemplo de enlace */}
                 <span className="block py-2 px-4 lg:p-2 hover:bg-blue-700 rounded transition duration-300 cursor-pointer">Áreas de Práctica</span>
              </Link>
            </li>
             <li>
              <Link href="/sobre-nosotros"> {/* Ejemplo de enlace */}
                 <span className="block py-2 px-4 lg:p-2 hover:bg-blue-700 rounded transition duration-300 cursor-pointer">Sobre Nosotros</span>
              </Link>
            </li>
             <li>
              <Link href="/contacto"> {/* Ejemplo de enlace */}
                 <span className="block py-2 px-4 lg:p-2 hover:bg-blue-700 rounded transition duration-300 cursor-pointer">Contacto</span>
              </Link>
            </li>
            {/* Agrega más enlaces según necesites */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;