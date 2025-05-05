import React from 'react';

function RewardsSection() {
  return (
    <section id="rewards" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rewards &amp; <span className="gradient-text">Opportunities</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Win amazing prizes and kickstart your career with WeSee</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="gradient-border p-8 text-center relative card-hover">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xl">
              🏆
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2">Winner</h3>
            <p className="text-3xl font-bold gradient-text mb-4">¥20,000</p>
            <p className="text-gray-400">(~₹11,000)</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto my-4"></div>
            <ul className="text-left text-gray-300 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Internship/Job Offer
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Japan Travel Opportunity
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Media Feature
              </li>
            </ul>
          </div>

          <div className="gradient-border p-8 text-center relative card-hover">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xl">
              🥈
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2">Runners-Up</h3>
            <p className="text-3xl font-bold gradient-text mb-4">¥10,000</p>
            <p className="text-gray-400">(~₹5,500) each for up to 5 teams</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto my-4"></div>
            <ul className="text-left text-gray-300 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Internship Opportunity
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Featured on WeSee Channels
              </li>
            </ul>
          </div>

          <div className="gradient-border p-8 text-center relative card-hover">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xl">
              🌟
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2">All Finalists</h3>
            <p className="text-xl font-bold gradient-text mb-4">Recognition &amp; Opportunities</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto my-4"></div>
            <ul className="text-left text-gray-300 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Certificates
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Networking Opportunities
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                College Recognition
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 gradient-border p-8 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-purple-500/10 animate-pulse-slow"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Why You Should Join</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                  🔹
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cutting-edge AI Experience</h4>
                  <p className="text-gray-400 text-sm">Work with the latest AI technologies and frameworks</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                  🔹
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cash Prizes &amp; Recognition</h4>
                  <p className="text-gray-400 text-sm">Win exciting rewards and get featured in media</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                  🔹
                </div>
                <div>
                  <h4 className="font-medium mb-2">Remote Internship</h4>
                  <p className="text-gray-400 text-sm">5-6 month opportunity with monthly stipend</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                  🔹
                </div>
                <div>
                  <h4 className="font-medium mb-2">Full-time Job Offers</h4>
                  <p className="text-gray-400 text-sm">Top performers may land permanent positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RewardsSection; 