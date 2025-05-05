import React from 'react';

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md bg-[#0F0F1A] border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-light to-purple-dark flex items-center justify-center">
            <span className="text-white font-bold">WS</span>
          </div>
          <span className="font-bold text-xl text-white">WeSee<span className="text-purple-400">GPT</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#about" className="text-white hover:text-purple-300 transition">About</a>
          <a href="#tracks" className="text-white hover:text-purple-300 transition">Tracks</a>
          <a href="#rewards" className="text-white hover:text-purple-300 transition">Rewards</a>
          <a href="#timeline" className="text-white hover:text-purple-300 transition">Timeline</a>
          <a href="#faq" className="text-white hover:text-purple-300 transition">FAQ</a>
        </div>
        <button className="gradient-bg px-5 py-2 rounded-full text-white font-medium hover:opacity-90 transition btn-glow">
          Register Now
        </button>
      </div>
    </nav>
  );
}

export default Navigation; 