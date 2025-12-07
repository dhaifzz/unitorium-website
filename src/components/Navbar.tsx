// @ts-nocheck
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PropTypes from 'prop-types';

const Navbar = ({ activePage, navigateTo, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'product', label: 'Product' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            {!logoError ? (
              <img 
                src="/images/uni.png" 
                alt="Unitorium Logo" 
                className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform duration-300"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">U</span>
              </div>
            )}
            
            <span className="ml-3 text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Unitorium
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-400 ${
                  activePage === link.id ? 'text-blue-500' : 'text-gray-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-gray-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  activePage === link.id 
                    ? 'text-blue-500 bg-gray-900' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full mt-4 bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  activePage: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
  scrolled: PropTypes.bool.isRequired,
};

export default Navbar;
