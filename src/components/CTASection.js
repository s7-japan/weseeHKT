import React from 'react';

function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-600/20"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-600/10 animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-purple-500/10 animate-pulse-slow"
        style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Unleash</span> Your AI Agent?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of innovators building the future of automation. Register now to secure your spot in the
            WeSee AI Agents Hackathon 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gradient-bg px-8 py-4 rounded-full text-white font-medium hover:opacity-90 transition btn-glow text-lg">
              Register Now
            </button>
            <button className="border-2 border-purple-400 px-8 py-4 rounded-full text-white font-medium hover:bg-purple-900/20 transition text-lg">
              Download Info Pack
            </button>
          </div>
          
          <div className="mt-12 gradient-border p-8 relative">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Limited Spots Available</h3>
                <p className="text-gray-300">Registration closes on January 30, 2025</p>
              </div>
              
              <div className="flex items-center">
                <div className="rotating-border w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center text-xl mr-4">
                  ⏰
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Time Remaining</p>
                  <p className="text-2xl font-bold gradient-text">74 Days</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🏆
              </div>
              <div className="text-left">
                <p className="font-medium">¥20,000 Grand Prize</p>
                <p className="text-sm text-gray-400">For the winning team</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                💼
              </div>
              <div className="text-left">
                <p className="font-medium">Job Opportunities</p>
                <p className="text-sm text-gray-400">For top performers</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🌏
              </div>
              <div className="text-left">
                <p className="font-medium">Global Exposure</p>
                <p className="text-sm text-gray-400">Showcase your talent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection; 