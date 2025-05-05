import React from 'react';

function ToolsResourcesSection() {
  return (
    <section id="tools-resources" className="py-20 relative bg-[#0a0a14]">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools &amp; <span className="gradient-text">Resources</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Everything you need to build your AI agent</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🧠
              </div>
              <h3 className="text-xl font-bold">AI Models</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">GPT-4 Turbo API</p>
                  <p className="text-sm text-gray-400">Advanced language model with function calling</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Claude 3 Sonnet</p>
                  <p className="text-sm text-gray-400">Anthropic's latest model with tool use</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Local LLM Support</p>
                  <p className="text-sm text-gray-400">Options for offline processing</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🛠️
              </div>
              <h3 className="text-xl font-bold">Development Tools</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">LangChain</p>
                  <p className="text-sm text-gray-400">Framework for building agent workflows</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">CrewAI</p>
                  <p className="text-sm text-gray-400">Multi-agent collaboration framework</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Vector Databases</p>
                  <p className="text-sm text-gray-400">Pinecone, Weaviate, Chroma</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                📚
              </div>
              <h3 className="text-xl font-bold">Learning Resources</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Agent Building Workshops</p>
                  <p className="text-sm text-gray-400">Live sessions with industry experts</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Code Examples</p>
                  <p className="text-sm text-gray-400">GitHub repository with starter templates</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Documentation</p>
                  <p className="text-sm text-gray-400">Comprehensive guides for all tracks</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🔌
              </div>
              <h3 className="text-xl font-bold">APIs &amp; Integrations</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Business Tools</p>
                  <p className="text-sm text-gray-400">Salesforce, HubSpot, QuickBooks APIs</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Communication</p>
                  <p className="text-sm text-gray-400">Email, SMS, Slack API access</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Data Sources</p>
                  <p className="text-sm text-gray-400">Financial, news, and market data APIs</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                👥
              </div>
              <h3 className="text-xl font-bold">Mentorship</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">1:1 Sessions</p>
                  <p className="text-sm text-gray-400">Personal guidance from industry experts</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-sm text-gray-400">Drop-in sessions for quick help</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Discord Community</p>
                  <p className="text-sm text-gray-400">24/7 peer support and collaboration</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mr-3 text-xl">
                🔒
              </div>
              <h3 className="text-xl font-bold">Security &amp; Support</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Secure Testing Environment</p>
                  <p className="text-sm text-gray-400">Isolated sandbox for agent development</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">Technical Support</p>
                  <p className="text-sm text-gray-400">Expert help with implementation issues</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-purple-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <p className="font-medium">API Credits</p>
                  <p className="text-sm text-gray-400">Free usage quotas for all participants</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="gradient-bg px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition btn-glow">
            Access Resources
          </button>
        </div>
      </div>
    </section>
  );
}

export default ToolsResourcesSection; 