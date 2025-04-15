import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-5 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/50" alt="Logo" className="h-12 w-12" />
          <span className="ml-4 text-xl font-bold">MeunierDigital</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">À PROPOS</NavLink>
          <NavLink href="#services">SERVICES</NavLink>
          <NavLink href="#portfolio">PORTEFOLIO</NavLink>
          <NavLink href="#blog">BLOGS</NavLink>
          <NavLink href="#tools">OUTILS</NavLink>
          <NavLink href="#contact">ME CONTACTER</NavLink>
        </div>

        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-gray-800 hover:text-blue-600 font-medium text-sm uppercase tracking-wider"
  >
    {children}
  </a>
);

export default Navbar;