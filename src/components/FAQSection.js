import React, { useState } from 'react';

function FAQSection() {
  // State to track which FAQ is currently expanded
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle FAQ open/closed
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to everyone, from students to professionals, regardless of their location. You can participate as an individual or as a team of up to 4 members. We encourage diversity and welcome participants from all backgrounds."
    },
    {
      question: "Is this a free event?",
      answer: "Yes, participation in the WeSee AI Agents Hackathon is completely free. We provide all the necessary resources, mentorship, and tools needed to build your AI agent at no cost."
    },
    {
      question: "Do I need to be an AI expert to participate?",
      answer: "No, you don't need to be an AI expert! We welcome participants at all skill levels. We'll provide workshops, resources, and mentorship to help you get started. Basic programming knowledge is recommended but not required for all tracks."
    },
    {
      question: "What technologies can I use to build my AI agent?",
      answer: "You can use any programming language and framework to build your agent. We provide starter templates and support for popular libraries like LangChain, CrewAI, and various language models such as GPT-4 and Claude. All necessary APIs will be provided to participants."
    },
    {
      question: "Is this an online or in-person hackathon?",
      answer: "This is a hybrid hackathon. The main event will be online, making it accessible to participants worldwide. However, we'll also have in-person hubs in select cities including Tokyo, San Francisco, and Bangalore for those who want to collaborate face-to-face."
    },
    {
      question: "How will my submission be judged?",
      answer: "Submissions will be evaluated based on innovation, technical implementation, business value, usability, and presentation quality. Our panel of judges includes AI researchers, business leaders, and venture capitalists specializing in AI."
    },
    {
      question: "Will I retain the rights to my project?",
      answer: "Yes, you retain all intellectual property rights to your creation. WeSee may request a license to showcase your project for promotional purposes, but you maintain full ownership of your work."
    },
    {
      question: "What kind of support will be available during the hackathon?",
      answer: "We provide 24/7 technical support via Discord, scheduled mentorship sessions with industry experts, daily office hours, comprehensive documentation, and starter templates for all tracks."
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Everything you need to know about the WeSee AI Agents Hackathon</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-light to-purple-dark mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full gradient-border p-4 text-left transition-all duration-300 ${
                  openFAQ === index ? 'rounded-t-lg' : 'rounded-lg hover:shadow-md'
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-purple-400 transform transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              {openFAQ === index && (
                <div className="bg-[#1a1a2e] border border-purple-900/30 rounded-b-lg p-4 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <button className="gradient-bg px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition btn-glow">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection; 