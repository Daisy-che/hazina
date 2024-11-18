"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "How does Hazina Africa help me manage my finances?",
      answer: "Content for finance management answer"
    },
    {
      question: "What kind of financial reports does Hazina Africa provide?",
      answer: "Content for financial reports answer"
    },
    {
      question: "What investment options does Hazina Africa offer?",
      answer: "Content for investment options answer"
    },
    {
      question: "How does Hazina Africa help with budgeting?",
      answer: "Content for budgeting help answer"
    },
    {
      question: "Is my financial data secure with Hazina Africa?",
      answer: "Content for data security answer"
    },
    {
      question: "Can I access Hazina Africa on my mobile device?",
      answer: "Content for mobile access answer"
    },
    {
      question: "How does Hazina Africa's M-Pesa integration work?",
      answer: "Content for M-Pesa integration answer"
    },
    {
      question: "How does Hazina Africa help with tax planning?",
      answer: "Content for tax planning answer"
    },
    {
      question: "Can I get personalized financial advice through Hazina Africa?",
      answer: "Content for financial advice answer"
    },
    {
      question: "What support does Hazina Africa offer for new investors?",
      answer: "Content for new investor support answer"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#1e2836] via-purple-900 to-blue-600 to-purple-900 to-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-300 text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-10">
            Answers to all your questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq: FAQ, index: number) => (
            <div 
              key={index}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-4 flex items-center gap-3 text-left text-white hover:text-purple-300 transition-colors duration-300"
              >
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
                <span className="text-lg">{faq.question}</span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-purple-200 pl-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-white">
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
    Enter the New Era of Investing
  </h1>
  <button className="px-8 py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform">
    Get Started
  </button>
</div>
<footer className=" text-gray-300 py-10">
  <div className="container mx-auto px-4 flex flex-wrap  space-y-6 md:space-y-0">
    {/* Logo and Branding */}
    <div className="w-full md:w-1/4">
      <h2 className="text-white text-2xl font-bold flex items-center">
        <img src="/images/hazina-africa-logo.png" alt="Logo" className="w-60 h-10 mr-2" /> 
      </h2>
      <p className="text-sm text-gray-400 mt-1 ml-4">Build Wealth</p>
    </div>

    {/* Navigation Links */}
    <div className="w-full md:w-1/4">
      <h3 className="text-white font-semibold mb-3">Navigate</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Features</a></li>
        <li><a href="#" className="hover:text-white">Products</a></li>
        <li><a href="#" className="hover:text-white">Solutions</a></li>
        <li><a href="#" className="hover:text-white">FAQ</a></li>
        <li><a href="#" className="hover:text-white">Privacy policy</a></li>
      </ul>
    </div>

    {/* Utility Links */}
    <div className="w-full md:w-1/4">
      <h3 className="text-white font-semibold mb-3">Utility</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Get Started</a></li>
        <li><a href="#" className="hover:text-white">Styleguide</a></li>
        <li><a href="#" className="hover:text-white">License</a></li>
        <li><a href="#" className="hover:text-white">Changelog</a></li>
      </ul>
    </div>

    {/* Contact Information */}
<div className="w-full md:w-1/4 flex flex-col">
  <h3 className="text-white font-semibold mb-3">Hazina Africa</h3>
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm mb-1">Address</p>
      <p className="text-sm mb-1">+254 768 500 572</p>
      <p className="text-sm">amosmaru10@gmail.com</p>
    </div>
    <div className="flex space-x-4 ml-4 mb-6">
    
      <a href="#" className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22.46 6.03c-.77.34-1.6.57-2.47.68a4.26 4.26 0 0 0 1.88-2.34 8.37 8.37 0 0 1-2.69 1.03 4.24 4.24 0 0 0-7.23 3.86A12.04 12.04 0 0 1 3.15 4.16a4.23 4.23 0 0 0 1.31 5.65 4.2 4.2 0 0 1-1.92-.53v.05c0 2.3 1.64 4.22 3.81 4.66a4.26 4.26 0 0 1-1.91.07c.54 1.68 2.12 2.91 4 2.94A8.49 8.49 0 0 1 2 18.57 12.02 12.02 0 0 0 8.45 20c7.72 0 11.94-6.39 11.94-11.93 0-.18 0-.36-.01-.53a8.57 8.57 0 0 0 2.1-2.16z" />
        </svg>
      </a>
      
      <a href="#" className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 5 3.68 9.13 8.5 9.88v-6.98H8.29v-2.9h2.21V9.4c0-2.18 1.27-3.39 3.2-3.39.93 0 1.9.16 1.9.16v2.07h-1.07c-1.06 0-1.38.66-1.38 1.34v1.6h2.67l-.43 2.9h-2.24V22c4.82-.75 8.5-4.88 8.5-9.93z" />
        </svg>
      </a>
      {/* LinkedIn Icon */}
      <a href="#" className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.45 17.55H5.92V10h2.53v7.55zM7.2 8.74c-.8 0-1.45-.66-1.45-1.47 0-.8.65-1.45 1.45-1.45s1.45.65 1.45 1.45c0 .81-.65 1.47-1.45 1.47zm11.3 8.81h-2.53v-3.88c0-.93-.02-2.12-1.3-2.12-1.3 0-1.5 1.02-1.5 2.07v3.94h-2.53V10h2.43v1.03h.04c.34-.63 1.15-1.3 2.36-1.3 2.53 0 3 1.66 3 3.82v4z" />
        </svg>
      </a>
    </div>
  </div>
</div>

  </div>

  {/* Footer Bottom */}
  <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
    <p className="text-sm text-gray-400 mb-4 md:mb-0 ml-24">
      Copyright © Hazina Africa. Powered by <a href="#" className="text-purple-400 hover:underline">Pyraus Group</a>
    </p>
    
  </div>
</footer>

    </section>
  );
};

export default FAQSection;