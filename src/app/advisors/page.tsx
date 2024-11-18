import React from 'react';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image';

const AdvisorShowcase = () => {
  const advisors = [
    {
      id: 1,
      role: "Senior Advisor",
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 2,
      role: "Investment Specialist",
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 3,
      role: "Tax Consultant",
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 4,
      role: "Wealth Manager",
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 5,
      role: "Financial Analyst",
      imageUrl: "/api/placeholder/80/80"
    },
    {
      id: 6,
      role: "Lead Advisor",
      imageUrl: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-[#212529]  flex items-center justify-center p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
     
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900 via-purple-400 to-blue-500 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">My team</h3>
                <button className="text-gray-600 hover:text-gray-800 transition-colors">
                  <PlusCircle className="w-6 h-6" />
                </button>
              </div>
              
              <div className="relative grid grid-cols-3 gap-4">
                {advisors.slice(0, 5).map((advisor, index) => (
                  <div
                    key={advisor.id}
                    className={`${index === 4 ? 'col-span-1' : ''}`}
                  >
                    <Image
                      src={advisor.imageUrl}
                      alt={`Financial advisor ${index + 1}`}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                ))}
                <div className="col-span-2 col-start-2 row-start-2">
                  <Image
                    src={advisors[5].imageUrl}
                    alt="Lead financial advisor"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
        
          <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 opacity-30 blur-xl -z-10 rounded-3xl"></div>
        </div>

       
        <div className="text-white lg:pl-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Expert advisors help you reach financial goals faster
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Get personalized guidance to grow your wealth. Our team of experts provides tailored advice for smart investing and effective financial management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisorShowcase;