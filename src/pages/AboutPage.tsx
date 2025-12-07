// @ts-nocheck
import React from 'react';
import { Target } from 'lucide-react';

const AboutPage = () => (
  <div className="min-h-screen pt-24 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Unitorium</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Unitorium is a software development company dedicated to creating innovative, reliable, and user-focused solutions that solve real-world challenges. Guided by our principle of working “for the better of others,” we build accessible and sustainable technologies across web, mobile, and enterprise systems. For us, technology is not just innovation, it’s a tool to empower people, strengthen organizations, and shape a better future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            {/* Replaced Video with Image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80](https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)" 
              alt="Unitorium Team Innovation" 
              className="relative rounded-2xl shadow-2xl shadow-blue-900/20 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-gray-800"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            To harness the power of technology to simplify daily life, solve real-world problems, and create sustainable, user-friendly solutions that improve productivity, connectivity, and quality of life.
          </p>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Our Vision</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            To be the leading technology company that transforms everyday challenges into smart, innovative, and practical solutions for individuals, businesses, and communities.
          </p>
        </div>
      </div>

      {/* Our Goals */}
      <div className="mb-24">
          <div className="flex items-center justify-center mb-10">
              <Target className="text-blue-500 mr-3" size={32} />
              <h3 className="text-3xl font-bold text-center">Our Goals</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
          {[
              "Deliver innovative tech solutions that address everyday problems.",
              "Continuously research and adapt to the latest technologies.",
              "Build a reputation as a trusted and reliable technology provider.",
              "Ensure customer satisfaction and long-term relationships.",
              "Create opportunities for employee learning and growth.",
              "Promote ethical, sustainable, and secure use of technology.",
              "Expand our services to reach global markets.",
              "Provide accessible and affordable technology solutions.",
              "Develop partnerships with businesses and organizations to broaden impact.",
              "Foster a workplace culture of creativity, inclusivity, and accountability."
          ].map((goal, index) => (
              <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center mt-1 mr-3 border border-blue-500/30">
                      <span className="text-blue-400 text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 hover:text-white transition-colors">{goal}</p>
              </div>
          ))}
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { title: "Innovation", desc: "Pushing boundaries is our baseline." },
          { title: "Integrity", desc: "Transparent code, transparent process." },
          { title: "Impact", desc: "Measuring success by client growth." }
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
            <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;