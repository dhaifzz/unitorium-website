// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { 
  Cpu, Layers, Zap, Code2, BrainCircuit, Sparkles, Users2, 
  Edit3, Lock, Workflow, Server, Database, BarChart3, Rocket,
  Bell, Palette, LineChart, Activity, CheckCircle2, LayoutTemplate
} from 'lucide-react';

const ProductPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Replace with your real screenshots
  const uiImages = [
    "images/Dashboard.png",
    "/images/Monitoring.png",
    "/images/Proposal.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % uiImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [uiImages.length]);

  return (
    <div className="min-h-screen pt-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Introducing</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6">Smart Project Proposal</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A robust, customizable platform designed to streamline proposal workflows. Built with <strong>Node.js</strong>, <strong>React</strong>, and <strong>Supabase</strong> to serve Proponents, Evaluators, R&D, and Admins efficiently.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 mb-24 shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
          <div className="p-8 md:p-16 text-center">
            <div className="inline-block p-4 rounded-full bg-blue-900/30 text-blue-400 mb-8 animate-pulse">
              <Cpu size={48} />
            </div>
            
            {/* Primary Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto mb-16">
              <div className="bg-black/50 p-6 rounded-lg hover:bg-black/80 transition-colors border border-gray-800 hover:border-blue-500/30">
                <BrainCircuit className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">AI Feedback Loop</h3>
                <p className="text-gray-400">Proponents receive real-time, AI-driven suggestions to improve proposal quality before submission, increasing approval rates.</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg hover:bg-black/80 transition-colors border border-gray-800 hover:border-blue-500/30">
                <Sparkles className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Smart Auto-Fill</h3>
                <p className="text-gray-400">Intelligent auto-filling and auto-tagging capabilities reduce data entry time and ensure accurate categorization of every project.</p>
              </div>
              <div className="bg-black/50 p-6 rounded-lg hover:bg-black/80 transition-colors border border-gray-800 hover:border-blue-500/30">
                <Users2 className="text-blue-500 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Multi-Role System</h3>
                <p className="text-gray-400">Dedicated interfaces for Proponents, Evaluators, R&D, and Admins. Seamless permission handling ensures data security.</p>
              </div>
            </div>

            {/* Interface Showcase */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-4">Interface Showcase</h3>
              <div className="relative max-w-4xl mx-auto h-64 md:h-96 bg-black rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                 {uiImages.map((img, index) => (
                   <div 
                     key={index}
                     className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                   >
                     <img 
                       src={img} 
                       alt={`Interface Screenshot ${index + 1}`} 
                       className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                       <p className="text-white font-mono text-sm">
                         {index === 0 && "Dashboard View: Real-time project tracking"}
                         {index === 1 && "Monitoring Panel: Proponent Updates on Funded Projects"}
                         {index === 2 && "Proposal Editor: Submission with AI-assisted feedback tools"}
                       </p>
                     </div>
                   </div>
                 ))}
                 
                 <div className="absolute bottom-4 right-4 flex space-x-2">
                   {uiImages.map((_, idx) => (
                     <div 
                       key={idx} 
                       className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-blue-500' : 'bg-gray-600'}`}
                     />
                   ))}
                 </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">* Representational UI. Actual image sources in our code with actual screenshots.</p>
            </div>

            {/* --- NEW SECTION: Advanced Feature Suite (Monitoring, Updates, CMS) --- */}
            <div className="mb-24 text-left max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 border-b border-gray-800 pb-4">
                    <h3 className="text-3xl font-bold">Advanced Management Suite</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* 1. Project Monitoring */}
                    <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300">
                        <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                            <LineChart className="text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Live Project Monitoring</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Track the heartbeat of every project. R&D can monitor milestones, budget utilization, and implementation phases in real-time.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-green-500"/> Milestone Tracking</li>
                            <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-green-500"/> Budget Burn Charts</li>
                        </ul>
                    </div>

                    {/* 2. Proposal Updates & Notifications */}
                    <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300">
                        <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                            <Bell className="text-purple-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Instant Proposal Updates</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Never miss a status change. The system pushes automated alerts to proponents when a proposal is reviewed, returned, or approved.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-purple-500"/> In-App Notifications</li>
                            <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-purple-500"/> Email Digests</li>
                        </ul>
                    </div>

                    {/* 3. Website Customization (CMS) - UPDATED */}
                    <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-pink-500 transition-all duration-300">
                        <div className="bg-pink-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                            <LayoutTemplate className="text-pink-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3">Admin CMS Integration</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Full control via a dedicated Content Management System (CMS). Admins can update site resources, announcements, and branding dynamically without coding.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-pink-500"/> Dynamic Content Management</li>
                            <li className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-pink-500"/> No-Code Branding</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Capabilities */}
            <h3 className="text-2xl font-bold mb-8">System Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-6xl mx-auto mb-16">
               <div className="p-4 border border-gray-800 rounded-xl bg-gray-900/30">
                 <div className="flex items-center mb-3">
                   <Edit3 size={20} className="text-blue-400 mr-2"/>
                   <h4 className="font-bold">Fully Customizable</h4>
                 </div>
                 <p className="text-sm text-gray-400">Adapt form fields, evaluation criteria, and approval workflows to match your institution's specific needs.</p>
               </div>
               <div className="p-4 border border-gray-800 rounded-xl bg-gray-900/30">
                 <div className="flex items-center mb-3">
                   <Lock size={20} className="text-blue-400 mr-2"/>
                   <h4 className="font-bold">Role-Based Security</h4>
                 </div>
                 <p className="text-sm text-gray-400">Granular permission settings via Supabase RLS ensure users only access data relevant to their role.</p>
               </div>
               <div className="p-4 border border-gray-800 rounded-xl bg-gray-900/30">
                 <div className="flex items-center mb-3">
                   <Workflow size={20} className="text-blue-400 mr-2"/>
                 <h4 className="font-bold">Automated Workflows</h4>
                 </div>
                 <p className="text-sm text-gray-400">Trigger status updates and notifications automatically as proposals move through the R&D pipeline.</p>
               </div>
               <div className="p-4 border border-gray-800 rounded-xl bg-gray-900/30">
                 <div className="flex items-center mb-3">
                   <Server size={20} className="text-blue-400 mr-2"/>
                   <h4 className="font-bold">Scalable Backend</h4>
                 </div>
                 <p className="text-sm text-gray-400">Built on Node.js and Supabase to handle thousands of concurrent users and proposals without lag.</p>
               </div>
            </div>

            {/* Tech Specs */}
            <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
                <Database className="mr-2" /> Technical Specifications
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">React</div>
                  <div className="text-xs text-blue-300 uppercase tracking-wide">Frontend</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Node.js</div>
                  <div className="text-xs text-blue-300 uppercase tracking-wide">Runtime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Supabase</div>
                  <div className="text-xs text-blue-300 uppercase tracking-wide">Database & Auth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">AI</div>
                  <div className="text-xs text-blue-300 uppercase tracking-wide">Integration</div>
                </div>
              </div>
            </div>

            {/* NEW SECTION: More Projects To Come */}
            <div className="mt-20 border-t border-gray-800 pt-16 pb-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-12 text-center group hover:border-blue-500/40 transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10">
                        <div className="inline-flex p-4 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                            <Rocket className="text-blue-400" size={32} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                          And more projects to come...
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            We are constantly innovating. Our roadmap includes expanding into AI-driven market analysis tools and automated resource allocation systems. Stay tuned for what's next.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;