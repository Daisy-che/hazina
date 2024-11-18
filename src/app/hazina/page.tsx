"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-purple-900 to-blue-600/90 to-gray-900 ">
     
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
          <Image
              src="/images/hazina-africa-logo.png"
              alt="Logo"
              width={300}
              height={400}
              className="h-12"
            />
          </div>
          
         
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-white hover:text-purple-200">Features</a>
            <a href="#" className="text-white hover:text-purple-200">Products</a>
            <a href="#" className="text-white hover:text-purple-200">Solutions</a>
            <a href="#" className="text-white hover:text-purple-200">FAQ</a>
          </div>
          
        
          <div className="hidden lg:flex space-x-4">
            <Link href="/login"><button className="text-white hover:text-purple-200">Login</button></Link>
            <Link href='/signup'><button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
              Get Started
            </button>
            </Link>
          </div>

        
          <button 
            className="lg:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

       
        <div 
          className={`
            lg:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <div className="text-white text-xl font-bold">Hazina Africa</div>
              <button 
                className="text-white p-2"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white text-lg py-2 hover:text-purple-200">Features</a>
              <a href="#" className="text-white text-lg py-2 hover:text-purple-200">Products</a>
              <a href="#" className="text-white text-lg py-2 hover:text-purple-200">Solutions</a>
              <a href="#" className="text-white text-lg py-2 hover:text-purple-200">FAQ</a>
              <div className="pt-4 space-y-4">
                <button className="w-full text-white hover:text-purple-200 py-2">Login</button>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

     
      <div className="container mx-auto px-4 py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-purple-300 mb-4 tracking-wide">HAZINA AFRICA</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empower Your Finances,
            <br />
            Secure Your Future
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
            Take control of your financial journey with Hazina Africas comprehensive tools. 
            From seamless cash and M-Pesa tracking to strategic investments in local and 
            international markets, we provide the expertise and technology you need to build 
            wealth and create a lasting legacy.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500/100 text-white px-6 md:px-8 py-3 rounded-full text-lg font-medium hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200">
            Get Started
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-12">
          <h2 className="text-white text-sm md:text-base font-medium tracking-wider">
            2048+ ORGANIZATIONS TRUST HAZINA AFRICA
          </h2>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-20">
          
          <div className="flex items-center justify-center">
           
            <Image src='/images/mage.svg'alt='mage'width={200} height={200}/>
            
          </div>

          <div className="flex items-center justify-center">
          <Image src='/images/jupiter1.svg' alt='jupiter'width={200} height={200}/>
          </div>

          <div className="flex items-center justify-center">
          <Image src='/images/circuit.svg' alt='circuit'width={200} height={200}/>
          </div>

          <div className="flex items-center justify-center">
          <Image src='/images/sunset.svg' alt='sunset'width={200} height={200}/>
          </div>
        </div>

        
        <div className="text-center">
          <p className="text-white text-sm md:text-base font-medium tracking-wider mb-4">
            FEATURES
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
            Powerful features just for you
          </h2>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;