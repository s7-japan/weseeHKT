import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-purple-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-8 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-light to-purple-dark flex items-center justify-center mr-3">
              <span className="text-white font-bold">WS</span>
            </div>
            <span className="font-bold text-xl text-white">WeSee<span className="text-purple-400">AI</span></span>
          </div>
          
          <div className="flex gap-8 mb-8 md:mb-0">
            <a href="#about" className="text-gray-400 hover:text-purple-300 transition">About</a>
            <a href="#tracks" className="text-gray-400 hover:text-purple-300 transition">Tracks</a>
            <a href="#rewards" className="text-gray-400 hover:text-purple-300 transition">Rewards</a>
            <a href="#timeline" className="text-gray-400 hover:text-purple-300 transition">Timeline</a>
            <a href="#tools-resources" className="text-gray-400 hover:text-purple-300 transition">Resources</a>
            <a href="#faq" className="text-gray-400 hover:text-purple-300 transition">FAQ</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-purple-300 transition">
              <span>X</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-purple-300 transition">
              <span>in</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-purple-300 transition">
              <span>ig</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">© 2025 WeSee AI Hackathon. All rights reserved.</p>
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="#" className="text-xs text-gray-500 hover:text-purple-300 transition">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-xs text-gray-500 hover:text-purple-300 transition">Terms of Service</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-xs text-gray-500 hover:text-purple-300 transition">Code of Conduct</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-xs text-gray-500 hover:text-purple-300 transition">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 