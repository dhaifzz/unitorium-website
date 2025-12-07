// @ts-nocheck
import React from 'react';
import { Mail, Globe } from 'lucide-react';

const ContactPage = () => (
  <div className="min-h-screen pt-24 bg-black text-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Have a project in mind? Want to learn more about Nexus Core? 
            Reach out and let's start a conversation.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-900 p-3 rounded-lg text-blue-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Email Us</h4>
                <p className="text-gray-400">hello@unitorium.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-900 p-3 rounded-lg text-blue-500">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Headquarters</h4>
                <p className="text-gray-400">123 Innovation Drive,<br/>Tech City, TC 90210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                rows="4" 
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;