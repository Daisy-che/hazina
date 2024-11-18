import React from 'react';
import Image from 'next/image';
const FeaturesSection = () => {
  const features = [
    {
      title: 'Comprehensive Financial Tracking',
      description:
        'Effortlessly manage your finances with our all-in-one tracking system. Monitor cash flow, M-Pesa transactions, and bank accounts in real-time, giving you a clear picture of your financial health.',
      imageSrc: '/images/toto.png',
      altText: 'Financial Tracking',
    },
    {
      title: 'Diverse Investment Portfolio',
      description:
        'Explore a wide range of investment opportunities, from local stocks to international ETFs. Our platform provides tools to analyze and manage your investments, helping you make informed decisions.',
      imageSrc: '/images/investment.png',
      altText: 'Investment Portfolio',
    },
    {
      title: 'Advanced Analytics & Reports',
      description:
        'Gain valuable insights with our powerful analytics tools. Generate comprehensive reports on your financial performance and investment returns, empowering you to make strategic decisions for your financial future.',
      imageSrc: '/images/graph.png',
      altText: 'Analytics & Reports',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4">
      <div className="container mx-auto space-y-12">
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg p-6  transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <Image
                  src={feature.imageSrc}
                  alt={feature.altText}
                  width={400} height={400}
                  className="w-90 h-90 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-white text-3xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300 text-xl leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Investment Management Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 transform hover:scale-105 transition-transform duration-300">
          <div className="text-white max-w-md md:max-w-lg space-y-6">
            <h1 className="text-4xl font-bold leading-tight">Manage all your investments across Africa and beyond</h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              From local markets to global opportunities, Hazina Africa empowers you to take control of your financial future. Our comprehensive platform provides the tools and insights you need to make informed investment decisions, track your progress, and build wealth across diverse markets.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image 
              src="/images/window.webp" 
              alt="Hazina Africa Investment Platform" 
              width={400} height={400}
              className="w-full h-auto rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 transform hover:scale-105 transition-transform duration-300">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/halima.webp" 
              alt="Financial Advisors Team" 
              width={400} height={400}
              className="w-full h-auto rounded-2xl shadow-md object-cover"
            />
          </div>
          <div className="text-white max-w-md md:max-w-lg space-y-6">
            <h1 className="text-4xl font-bold leading-tight">Expert advisors help you reach financial goals faster</h1>
            <p className="text-gray-300 text-xl">
              Get personalized guidance to grow your wealth. Our team of experts provides tailored advice for smart investing and effective financial management.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12 transform hover:scale-105 transition-transform duration-300">
          <div className="text-white max-w-md md:max-w-lg space-y-6">
            <h2 className="text-4xl font-bold mb-3">Build and manage your stock portfolio</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Invest smartly in local and global stocks. Our platform offers powerful tools for portfolio tracking, analysis, and optimization to maximize your returns.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/images/investment.webp" 
              alt="Hazina Africa Investment Platform"
              width={400} height={400} 
              className="w-full h-auto rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6">One platform, endless solutions</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Finance Tracking</h3>
              <div className="h-1 w-40 mx-auto bg-[#ffbdfe] mb-2"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Wealth Builder</h3>
             
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Expert Insights</h3>
              
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16 bg-[#272e32] rounded-3xl shadow-2xl">
       
        <div className="w-full md:w-1/2">
          <Image 
            src="/images/break image.webp" 
            alt="Financial Breakdown Weekly Chart" 
            width={400} height={400}
            className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Comprehensive financial tracking across all your accounts
          </h2>
          <p className="text-gray-300 text-lg">
            Monitor your cash flow, M-Pesa transactions, and bank accounts in 
            real-time. Our platform provides a holistic view of your finances, 
            helping you make informed decisions and stay on top of your 
            financial health.
          </p>
          <a 
            href="#" 
            className="inline-block text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Learn more about our tracking features
          </a>
        </div>
      </div>
    </section>
    </section>
  );
};

export default FeaturesSection;
