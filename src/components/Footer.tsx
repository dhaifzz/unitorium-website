// @ts-nocheck
import React, { useState } from 'react';
import { Globe, Mail, Phone, Facebook } from 'lucide-react';
import PropTypes from 'prop-types';

const Footer = ({ navigateTo }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-black border-t border-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              {!logoError ? (
                <img 
                  src="/images/uni.png" 
                  alt="Unitorium Logo" 
                  className="w-8 h-8 mr-2 object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                 <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-2">
                   <span className="text-white font-bold text-sm">U</span>
                 </div>
              )}
              <span className="text-xl font-bold text-white">Unitorium</span>
            </div>
            <p className="text-sm text-gray-500">
              Innovating the future, one unified solution at a time.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer" onClick={() => navigateTo('about')}>About Us</li>
              <li className="hover:text-blue-400 cursor-pointer" onClick={() => navigateTo('team')}>Careers</li>
              <li className="hover:text-blue-400 cursor-pointer">Press</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">Blog</li>
              <li className="hover:text-blue-400 cursor-pointer">Documentation</li>
              <li className="hover:text-blue-400 cursor-pointer">Help Center</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-blue-400 cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">&copy; 2025 Unitorium Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook size={20} className="hover:text-white cursor-pointer" />
            <Mail size={20} className="hover:text-white cursor-pointer" />
            <Phone size={20} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default Footer;
