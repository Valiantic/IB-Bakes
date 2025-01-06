import React, { useState } from 'react'

import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

const FAQData = [
  {
    question: "What types of cakes do you offer?",
    answer: "We offer a wide variety of cakes including custom birthday cakes, wedding cakes, cupcakes, and specialty desserts. All our cakes are freshly baked using premium ingredients."
  },
  {
    question: "How far in advance should I place my order?",
    answer: "We recommend placing orders at least 48-72 hours in advance for regular cakes, and 2-3 weeks for wedding or special event cakes to ensure availability."
  },
  {
    question: "Do you offer delivery services?",
    answer: "Yes, we offer delivery services within the city limits. Delivery fees vary based on location. Please contact us for specific delivery rates to your area."
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes, we offer various options including gluten-free, vegan, and sugar-free cakes. Please specify your dietary requirements when placing your order."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
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
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <p className="p-4 text-gray-600">{answer}</p>
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
    <div className="min-h-screen flex flex-col">
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
    </div>
  );
};

export default FAQs;
