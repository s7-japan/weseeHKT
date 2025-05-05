import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's the <span className="gradient-text">Challenge?</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="gradient-border p-6 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-purple-500/10 animate-pulse-slow"></div>
              <p className="text-lg text-gray-300 mb-6 relative z-10">
                WeSee invites you to build AI-powered Agents — virtual systems that work like digital employees,
                automating tasks for startups and enterprises.
              </p>
              <p className="text-gray-300 mb-6 relative z-10">
                Whether it's automating sales outreach, managing marketing campaigns, building a fundraising
                agent, or even developing a virtual CTO, this hackathon challenges you to design and
                prototype AI agents that think, act, and deliver results.
              </p>
              <p className="text-gray-300 relative z-10">
                Get hands-on with real business challenges inspired by Japan's startup ecosystem, with the
                chance to collaborate with WeSee's projects and gain international exposure. 🌏
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-64 rounded-xl gradient-border overflow-hidden glow">
                <div className="absolute inset-0 bg-[#0F0F1A] flex items-center justify-center">
                  {/* AI agent workflow diagram */}
                  <svg width="100%" height="100%" viewBox="0 0 400 200">
                    <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(124, 58, 237, 0.1)"
                        strokeWidth="0.5"></path>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#smallGrid)"></rect>

                    {/* Central node */}
                    <circle cx="200" cy="100" r="30" fill="url(#purpleGradient)" className="animate-pulse-slow"></circle>
                    <text x="200" y="105" textAnchor="middle" fill="white" fontSize="12">AI Core</text>

                    {/* Connected nodes */}
                    <circle cx="100" cy="60" r="20" fill="#4C1D95"></circle>
                    <text x="100" y="65" textAnchor="middle" fill="white" fontSize="10">Input</text>

                    <circle cx="100" cy="140" r="20" fill="#4C1D95"></circle>
                    <text x="100" y="145" textAnchor="middle" fill="white" fontSize="10">Data</text>

                    <circle cx="300" cy="60" r="20" fill="#4C1D95"></circle>
                    <text x="300" y="65" textAnchor="middle" fill="white" fontSize="10">Process</text>

                    <circle cx="300" cy="140" r="20" fill="#4C1D95"></circle>
                    <text x="300" y="145" textAnchor="middle" fill="white" fontSize="10">Output</text>

                    {/* Connecting lines */}
                    <line x1="125" y1="60" x2="170" y2="85" stroke="url(#purpleGradient)" strokeWidth="2">
                      <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="3s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="125" y1="140" x2="170" y2="115" stroke="url(#purpleGradient)" strokeWidth="2">
                      <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="4s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="230" y1="85" x2="275" y2="60" stroke="url(#purpleGradient)" strokeWidth="2">
                      <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="3.5s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="230" y1="115" x2="275" y2="140" stroke="url(#purpleGradient)" strokeWidth="2">
                      <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2.5s" repeatCount="indefinite"></animate>
                    </line>
                  </svg>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="gradient-border p-4 card-hover">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      🧠
                    </div>
                    <h4 className="font-medium">Smart Automation</h4>
                  </div>
                </div>
                <div className="gradient-border p-4 card-hover">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center mr-3">
                      🌐
                    </div>
                    <h4 className="font-medium">Global Exposure</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 