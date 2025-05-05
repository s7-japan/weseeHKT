import React from "react";

function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative hero-bg overflow-hidden">
      <div
        className="absolute inset-0 animate-background"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.2) 0%, rgba(15, 15, 26, 0) 70%)",
        }}
      ></div>

      {/* Animated Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/10 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">WeSee AI Agents</span>
                <br />
                Hackathon 2025
              </h1>
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-purple-400 opacity-60 animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-purple-400 opacity-60 animate-pulse-slow"></div>
            </div>

            <p className="text-gray-300 text-lg mb-8">
              Build AI Agents that automate real-world business tasks. Join us
              for a hybrid hackathon experience with amazing prizes and career
              opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="gradient-bg px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition btn-glow">
                Register Now
              </button>
              <button className="border border-purple-400 px-8 py-3 rounded-full text-white font-medium hover:bg-purple-900/20 transition">
                Learn More
              </button>
            </div>

            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                  🚀
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                  🤖
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center">
                  💻
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-300">
                  Join <span className="text-purple-300 font-medium">500+</span>{" "}
                  innovators
                </p>
                <p className="text-xs text-gray-400">
                  Registration closing soon
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative w-full h-96 rounded-xl gradient-border glow">
              {/* Futuristic AI Agent Visualization */}
              <div className="absolute inset-0 bg-[#0F0F1A] flex items-center justify-center">
                <div className="relative">
                  {/* Central rotating element */}
                  <div className="w-40 h-40 rounded-full bg-[#0F0F1A] border-4 border-purple-500/30 relative flex items-center justify-center rotating-border">
                    <div className="w-32 h-32 rounded-full bg-[#0F0F1A] border border-purple-400/50 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center text-4xl">
                        🧠
                      </div>
                    </div>
                  </div>

                  {/* Orbiting elements */}
                  <div
                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                    style={{ animationDuration: "15s" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-600/80 flex items-center justify-center text-xl floating">
                      💼
                    </div>
                  </div>

                  <div
                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                    style={{
                      animationDuration: "20s",
                      animationDirection: "reverse",
                    }}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-full bg-purple-500/80 flex items-center justify-center text-xl floating">
                      📊
                    </div>
                  </div>

                  <div
                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                    style={{ animationDuration: "25s" }}
                  >
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-400/80 flex items-center justify-center text-xl floating">
                      🤖
                    </div>
                  </div>

                  <div
                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                    style={{
                      animationDuration: "18s",
                      animationDirection: "reverse",
                    }}
                  >
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-700/80 flex items-center justify-center text-xl floating">
                      🚀
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <linearGradient
                        id="purpleGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#9C6AFF"></stop>
                        <stop offset="100%" stopColor="#4C1D95"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M100,100 L100,20"
                      stroke="url(#purpleGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    ></path>
                    <path
                      d="M100,100 L100,180"
                      stroke="url(#purpleGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    ></path>
                    <path
                      d="M100,100 L20,100"
                      stroke="url(#purpleGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    ></path>
                    <path
                      d="M100,100 L180,100"
                      stroke="url(#purpleGradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Animated code snippets */}
              <div className="absolute bottom-4 left-4 right-4 h-20 bg-[#1a1a2e]/80 rounded-lg p-2 overflow-hidden">
                <div className="animate-pulse-slow">
                  <div className="text-xs font-mono text-purple-300">
                    <span className="text-green-400">class</span>{" "}
                    <span className="text-yellow-400">AIAgent</span>:
                  </div>
                  <div className="text-xs font-mono text-purple-300 pl-4">
                    <span className="text-green-400">def</span>{" "}
                    <span className="text-blue-400">automate_task</span>(self,
                    task):
                  </div>
                  <div className="text-xs font-mono text-purple-300 pl-8">
                    <span className="text-purple-400">return</span>{" "}
                    self.ai.process(task)
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements around the main visualization */}
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-purple-600/20 animate-float"></div>
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-purple-500/20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Hosted by section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-2">Hosted by</p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-light to-purple-dark flex items-center justify-center mr-3">
              <span className="text-white font-bold">WS</span>
            </div>
            <h3 className="text-2xl font-bold">
              WeSee <span className="text-purple-400">Japan</span> and{" "}
              <span className="text-purple-400">ADYPU</span>
            </h3>
          </div>
          <p className="text-gray-300 mt-2 max-w-lg mx-auto">
            Japan-Based AI &amp; Blockchain Company focused on transforming
            business operations through smart automation
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="gradient-border p-6 text-center card-hover">
            <h3 className="text-3xl font-bold gradient-text">¥100,000</h3>
            <p className="text-gray-300 mt-2">Total Prize</p>
          </div>
          <div className="gradient-border p-6 text-center card-hover">
            <h3 className="text-3xl font-bold gradient-text">10+</h3>
            <p className="text-gray-300 mt-2">AI Agent Tracks</p>
          </div>
          <div className="gradient-border p-6 text-center card-hover">
            <h3 className="text-3xl font-bold gradient-text">3 Days</h3>
            <p className="text-gray-300 mt-2">Hybrid Event</p>
          </div>
          <div className="gradient-border p-6 text-center card-hover">
            <h3 className="text-3xl font-bold gradient-text">5+</h3>
            <p className="text-gray-300 mt-2">Internship and Job Offers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
