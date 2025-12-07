// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { ArrowRight, Lightbulb, Rocket, Server } from 'lucide-react';
import PropTypes from 'prop-types';

const HomePage = ({ hasAnimated, setHasAnimated, navigateTo }) => {
  const [visualLoaded, setVisualLoaded] = useState(hasAnimated);

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        setVisualLoaded(true);
        setHasAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setVisualLoaded(true);
    }
  }, [hasAnimated, setHasAnimated]);

  // Updated Partners List - Reduced to 3
  const partners = [
    { name: "CCS", logo: "/images/CCS.png" },
    { name: "WMSU", logo: "/images/WMSU.png" },
    { name: "CS", logo: "/images/CS.png" },
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Adjusted for 3 sets */
        }
        .animate-scroll {
          /* Faster duration for fewer items to keep movement lively */
          animation: scroll 15s linear infinite;
        }
        .animate-float-slow {
            animation: float 8s ease-in-out infinite;
        }
        .animate-float-medium {
            animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
            animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white min-h-[90vh] flex items-center">
        {/* Animated Abstract Background Shapes */}
        <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-900/20 to-transparent opacity-50 blur-3xl transition-all duration-1000 ease-in-out transform ${visualLoaded ? 'translate-x-0 opacity-50' : 'translate-x-20 opacity-0'}`}></div>
        
        {/* Floating Bubble Animation - Left */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Floating Bubble Animation - Top Right */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-float-medium delay-1000"></div>

        {/* Floating Image/Icon Elements */}
        <div className="absolute top-1/4 left-10 opacity-20 animate-float-fast hidden lg:block">
            <Server size={64} className="text-blue-500" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-20 animate-float-slow hidden lg:block">
            <Rocket size={64} className="text-purple-500" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="lg:w-2/3">
            <div className={`inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 transition-all duration-1000 transform ${visualLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Welcome to the future
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 transition-all duration-1000 delay-200 transform ${visualLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We are <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500 animate-gradient-x">
                Unitorium
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed transition-all duration-1000 delay-400 transform ${visualLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We build unified digital ecosystems that transform complexity into simplicity. Your vision, our architecture.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 transform ${visualLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button 
                onClick={() => navigateTo('product')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/50"
              >
                Discover Our Product <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => navigateTo('about')}
                className="px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 active:scale-95"
              >
                Who We Are
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="bg-black py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building the Foundation of Tomorrow</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just build software; we engineer comprehensive digital strategies that propel startups forward.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Strategy</h3>
              <p className="text-gray-400">We analyze your business goals to create a technical roadmap that aligns with your long-term vision, ensuring every line of code serves a purpose.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Agile Engineering</h3>
              <p className="text-gray-400">Our development cycles are fast and iterative. We deliver functional MVPs quickly, allowing you to gather user feedback and pivot without wasted resources.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-cyan-900/20 rounded-lg flex items-center justify-center text-cyan-400 mb-6">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Architecture</h3>
              <p className="text-gray-400">We build on modern, serverless infrastructure that scales automatically with your user base, keeping costs low when you start and performance high as you grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Scrolling Partners */}
      <section className="bg-gray-950 py-16 border-t border-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-widest">Our Partners & Affiliations</p>
        </div>
        
        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
            
            <div className="flex w-max animate-scroll">
                {/* We render the set 3 times to ensure no gaps on wide screens 
                   since we only have 3 items. 
                   Animation translateX moves -33.33% (one full set width) then resets.
                */}
                {[1, 2, 3].map((setKey) => (
                    <div key={`set-${setKey}`} className="flex space-x-24 mx-12">
                        {partners.map((partner, i) => (
                            <div key={`p-${setKey}-${i}`} className="flex items-center justify-center w-32 h-16 ">
                                 <img 
                                    src={partner.logo} 
                                    alt={partner.name} 
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                 />
                                 <span className="hidden text-xl font-bold text-gray-600 whitespace-nowrap">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

HomePage.propTypes = {
  hasAnimated: PropTypes.bool.isRequired,
  setHasAnimated: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
};

export default HomePage;