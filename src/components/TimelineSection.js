import React from 'react';

function TimelineSection() {
  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event <span className="gradient-text">Timeline</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Key dates for the WeSee AI Agents Hackathon 2025</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto mt-4"></div>
        </div>

        <div className="relative timeline-dot">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
            {/* Timeline events */}
            <div className="gradient-border p-6 relative md:ml-10 card-hover">
              <div className="absolute top-5 -left-14 w-10 h-10 rounded-full gradient-bg flex items-center justify-center md:block hidden">
                1
              </div>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 md:hidden">
                  1
                </div>
                <h3 className="text-xl font-bold">Registration Opens</h3>
              </div>
              <p className="text-purple-300 font-medium mb-2">January 15, 2025</p>
              <p className="text-gray-300">Registration opens for individuals and teams from around the world.</p>
            </div>

            <div className="md:h-40"></div>

            <div className="md:h-40"></div>

            <div className="gradient-border p-6 relative md:mr-10 card-hover">
              <div className="absolute top-5 -left-14 w-10 h-10 rounded-full gradient-bg flex items-center justify-center md:block hidden">
                2
              </div>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 md:hidden">
                  2
                </div>
                <h3 className="text-xl font-bold">Orientation Session</h3>
              </div>
              <p className="text-purple-300 font-medium mb-2">February 1, 2025</p>
              <p className="text-gray-300">Virtual kickoff with mentors introducing tracks and tools.</p>
            </div>

            <div className="gradient-border p-6 relative md:ml-10 card-hover">
              <div className="absolute top-5 -left-14 w-10 h-10 rounded-full gradient-bg flex items-center justify-center md:block hidden">
                3
              </div>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 md:hidden">
                  3
                </div>
                <h3 className="text-xl font-bold">Hackathon Begins</h3>
              </div>
              <p className="text-purple-300 font-medium mb-2">February 15, 2025</p>
              <p className="text-gray-300">Coding phase begins with mentorship sessions and workshops.</p>
            </div>

            <div className="md:h-40"></div>

            <div className="md:h-40"></div>

            <div className="gradient-border p-6 relative md:mr-10 card-hover">
              <div className="absolute top-5 -left-14 w-10 h-10 rounded-full gradient-bg flex items-center justify-center md:block hidden">
                4
              </div>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 md:hidden">
                  4
                </div>
                <h3 className="text-xl font-bold">Submission Deadline</h3>
              </div>
              <p className="text-purple-300 font-medium mb-2">February 18, 2025</p>
              <p className="text-gray-300">All projects must be submitted by 11:59 PM JST.</p>
            </div>

            <div className="gradient-border p-6 relative md:ml-10 card-hover">
              <div className="absolute top-5 -left-14 w-10 h-10 rounded-full gradient-bg flex items-center justify-center md:block hidden">
                5
              </div>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 md:hidden">
                  5
                </div>
                <h3 className="text-xl font-bold">Judging Period</h3>
              </div>
              <p className="text-purple-300 font-medium mb-2">February 19-25, 2025</p>
              <p className="text-gray-300">Judges review and evaluate all submissions.</p>
            </div>

            <div className="md:h-40"></div>

            <div className="md:h-40"></div>

            <div className="gradient-border p-6 relative md:mr-10 card-hover">
              <div className="absolute top-5 -left-14 w-10 h-10 rounded-full gradient-bg flex items-center justify-center md:block hidden">
                6
              </div>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3 md:hidden">
                  6
                </div>
                <h3 className="text-xl font-bold">Winners Announcement</h3>
              </div>
              <p className="text-purple-300 font-medium mb-2">March 1, 2025</p>
              <p className="text-gray-300">Virtual ceremony to announce winners and present prizes.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="gradient-bg px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition btn-glow">
            See Full Timeline
          </button>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection; 