import React from 'react';
import './index.css';
import tailwindConfig from './tailwind.config';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TracksSection from './components/TracksSection';
import RewardsSection from './components/RewardsSection';
import TimelineSection from './components/TimelineSection';
import ToolsResourcesSection from './components/ToolsResourcesSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

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
      
      {/* Tools & Resources Section */}
      <ToolsResourcesSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 