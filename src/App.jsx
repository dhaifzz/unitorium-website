// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import BenefitsPage from './pages/BenefitsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

const UnitoriumApp = () => {
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hasHomeAnimated, setHasHomeAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SET FAVICON
  useEffect(() => {
    // UPDATED: Uses your specific image file from the public folder
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = '/images/uni.png';
      document.head.appendChild(newLink);
    } else {
      link.href = '/images/uni.png';
    }
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar activePage={activePage} navigateTo={navigateTo} scrolled={scrolled} />
      <main className="fade-in">
        {activePage === 'home' && (
          <HomePage 
            hasAnimated={hasHomeAnimated} 
            setHasAnimated={setHasHomeAnimated} 
            navigateTo={navigateTo} 
          />
        )}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'product' && <ProductPage />}
        {activePage === 'benefits' && <BenefitsPage />}
        {activePage === 'team' && <TeamPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default UnitoriumApp;
