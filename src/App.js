import React from 'react';
import './index.css';
import tailwindConfig from './tailwind.config';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TracksSection from './components/TracksSection';
import RewardsSection from './components/RewardsSection';
import TimelineSection from './components/TimelineSection';

function App() {
  React.useEffect(() => {
    // Initialize Tailwind with the config
    window.tailwind = {
      config: tailwindConfig
    };

    // Add script for tailwind
    const tailwindScript = document.createElement('script');
    tailwindScript.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(tailwindScript);
  }, []);

  return (
    <div className="App">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 grid-bg -z-10"></div>
      <div className="particle w-4 h-4 top-[10%] left-[10%] animate-float"></div>
      <div className="particle w-6 h-6 top-[20%] left-[80%] animate-float" style={{animationDelay: '1s'}}></div>
      <div className="particle w-3 h-3 top-[70%] left-[15%] animate-float" style={{animationDelay: '2s'}}></div>
      <div className="particle w-5 h-5 top-[60%] left-[85%] animate-float" style={{animationDelay: '3s'}}></div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />
      
      {/* Tracks Section */}
      <TracksSection />
      
      {/* Rewards Section */}
      <RewardsSection />

      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Footer */}
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
              <a href="#" className="text-gray-400 hover:text-purple-300 transition">Contact</a>
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
        </div>
      </footer>
    </div>
  );
}

export default App; 