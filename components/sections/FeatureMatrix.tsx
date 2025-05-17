"use client";

import { useState, useEffect } from 'react';
import { Check, Users, Store } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const shopperFeatures = [
  "Personalized feed that understands Gulf streetwear",
  "Style Bundles – full fits in one tap",
  "Waitlist Rewards – early access, price cuts",
  "24/7 style concierge support",
  "Exclusive designer collabs"
];

const vendorFeatures = [
  "No-code dashboard with real-time analytics",
  "AI inventory advice and trend forecasting",
  "Weekly editorials & TikTok spotlights",
  "0% commission during beta",
  "Direct chat with your target audience"
];

const FeatureMatrix = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'shoppers' | 'vendors'>('shoppers');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="features" className="section bg-grayLight relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(11,60,93,0.1),transparent_70%)]" />
      
      <div className="container relative">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-fade-up ${
            headerVisible ? 'visible' : ''
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Feature Matrix</h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Tailored experiences for both sides of the fashion ecosystem
          </p>
        </div>

        {/* Tab Navigation - Mobile Only */}
        <div className="md:hidden mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('shoppers')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'shoppers' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              For Shoppers
            </button>
            <button
              onClick={() => setActiveTab('vendors')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'vendors' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              For Vendors
            </button>
          </div>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 scroll-stagger-children ${
            cardsVisible ? 'visible' : ''
          }`}
        >
          {/* Shoppers Card */}
          <div className={`bg-white rounded-xl shadow-lg p-8 ${
            activeTab === 'shoppers' || !isMobile ? 'block' : 'hidden md:block'
          }`}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">For Shoppers</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Style Discovery Reimagined</h3>
              <p className="text-gray-600">
                Find pieces that speak to your taste and cultural identity, without endless scrolling.
              </p>
            </div>

            <ul className="space-y-4">
              {shopperFeatures.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5 transition-all group-hover:bg-primary group-hover:text-white">
                    <Check className="h-4 w-4 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vendors Card */}
          <div className={`bg-white rounded-xl shadow-lg p-8 ${
            activeTab === 'vendors' || !isMobile ? 'block' : 'hidden md:block'
          }`}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Store className="w-4 h-4" />
                <span className="text-sm font-medium">For Vendors</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">From Boutique to Brand</h3>
              <p className="text-gray-600">
                Tools and visibility to transform your creative vision into a recognized fashion label.
              </p>
            </div>

            <ul className="space-y-4">
              {vendorFeatures.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5 transition-all group-hover:bg-primary group-hover:text-white">
                    <Check className="h-4 w-4 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMatrix;