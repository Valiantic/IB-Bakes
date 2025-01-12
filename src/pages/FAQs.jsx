import React, { useState } from 'react'

import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'

const FAQData = [
  {
    question: " What sizes of cakes do you offer for regular cakes?",
    answer: "We have the following sizes available for our regular cakes:\n\n• 4x4 inches (Bento Cake – perfect for personal treats or gifts)\n• 7x3 inches (great for small gatherings)\n• 7x5 inches (ideal for medium-sized celebrations)\n• 7x7 inches (perfect for larger parties or sharing with family and friends)"
  },
  {
    question: "How far in advance should I place my order?",
    answer: "We recommend placing your order 48 to 72 hours in advance to ensure availability. For rush orders placed within 24 hours, a rush fee will be applied. This helps us prioritize your order and maintain the quality you deserve."
  },
  {
    question: "Do you offer delivery services?",
    answer: "Currently, we do not offer delivery. However, you can:\n\n• Pick up your order from our location\n• Meet up at an agreed-upon spot within a specific radius (fees may apply)"
  },
  {
    question: "Where are you located?",
    answer: "We are located at 537 Lower Moonlight, Gregoria De Jesus GMA, Cavite."
  },
  {
    question: "Do you accept cashless payments?",
    answer: "Yes, we accept payments through Maya and GCash for your convenience."
  },
  {
    question: "Can I customize my cake design?",
    answer: "Absolutely! We specialize in custom cakes. Share your design ideas, themes, or inspirations, and we’ll bring them to life."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  // Convert \n to <br> tags
  const formattedAnswer = answer.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < answer.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-5 px-4 hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="p-4 text-gray-600 text-justify">{formattedAnswer}</p>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col font-[Poppins]">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="my-8 sm:my-12">
            <div className="max-w-3xl mx-auto">
              <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-extrabold text-rose-500 sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-gray-600">
                  Find answers to common questions about our services and products
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg">
                {FAQData.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <ScrollToTop />
      <Footer/>
    </div>
  );
};

export default FAQs;

