import React from 'react';

function TracksSection() {
  return (
    <section id="tracks" className="py-20 relative bg-[#0a0a14]">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Agent <span className="gradient-text">Tracks</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Pick your agent mission and build innovative solutions that solve real business challenges</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🧲
              </div>
              <h3 className="text-xl font-bold">Sales Agent</h3>
            </div>
            <p className="text-gray-300">Automate lead generation &amp; CRM updates for businesses looking to scale their sales operations.</p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                📈
              </div>
              <h3 className="text-xl font-bold">Marketing Agent</h3>
            </div>
            <p className="text-gray-300">Create content &amp; manage campaigns automatically to boost brand visibility and engagement.</p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                💬
              </div>
              <h3 className="text-xl font-bold">Customer Support Agent</h3>
            </div>
            <p className="text-gray-300">Build a 24/7 AI chat assistant that handles customer inquiries and resolves issues.</p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                💰
              </div>
              <h3 className="text-xl font-bold">Fundraising Agent</h3>
            </div>
            <p className="text-gray-300">Scout investors &amp; manage pitch decks to streamline the fundraising process for startups.</p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🛠
              </div>
              <h3 className="text-xl font-bold">CTO / Coding Agent</h3>
            </div>
            <p className="text-gray-300">Recommend tech stacks &amp; generate code templates to accelerate development processes.</p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                📊
              </div>
              <h3 className="text-xl font-bold">Financial Advisor Agent</h3>
            </div>
            <p className="text-gray-300">Provide budgeting &amp; financial forecasting assistance for businesses of all sizes.</p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                📜
              </div>
              <h3 className="text-xl font-bold">Legal Advisor Agent</h3>
            </div>
            <p className="text-gray-300">Assist with contract drafting &amp; compliance checking to minimize legal risks.</p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                ✍️
              </div>
              <h3 className="text-xl font-bold">Copywriting Agent</h3>
            </div>
            <p className="text-gray-300">Generate blogs, landing pages &amp; SEO content to boost online presence.</p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🧩
              </div>
              <h3 className="text-xl font-bold">Playground Agent Creator</h3>
            </div>
            <p className="text-gray-300">Build other agents on demand to solve specific business challenges.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="gradient-bg px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition btn-glow">
            Explore All Tracks
          </button>
        </div>
      </div>
    </section>
  );
}

export default TracksSection; 