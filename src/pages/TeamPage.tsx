// @ts-nocheck
import React from 'react';

const TeamPage = () => (
  <div className="min-h-screen pt-24 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Meet The Minds</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We are a diverse group of thinkers, builders, and dreamers united by a single purpose.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {[
          { name: "Andre Lee Cuyugan", role: "Lead Programmer", img: "/images/Andre.jpg" },
          { name: "Ralph Chester Candido", role: "Project Manager", img: "/images/Chex.png" },
          { name: "Diana Mae Castillon", role: "Quality Assurance", img: "/images/Diana.jpg" },
          { name: "Hudhaifah Labang", role: "UI/UX Designer", img: "/images/Dhaif.jpg" },
          { name: "Ace John Nieva", role: "Analyst", img: "/images/Ace.png" }
        ].map((member, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800">
            <div className="aspect-w-3 aspect-h-4 overflow-hidden">
              <img 
                src={member.img} 
                alt={member.name} 
                className="object-cover w-full h-80 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "[https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)";
                }}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-blue-400 font-medium">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-gray-900 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-4">Join Us</h3>
        <p className="text-gray-400 mb-6">We are always looking for talent. Think you're a fit?</p>
        <button className="text-blue-400 font-bold hover:text-white transition-colors border-b border-blue-400 hover:border-white pb-1">
          View Open Positions
        </button>
      </div>
    </div>
  </div>
);

export default TeamPage;
