"use client";

import Link from 'next/link';
import { Users, Store, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DualCTA = () => {
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation();

  return (
    <section id="join" className="section bg-hero-grad text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]" />
      
      <div className="container relative">
        <div 
          ref={containerRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 scroll-stagger-children ${
            containerVisible ? 'visible' : ''
          }`}
        >
          {/* For Shoppers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transition-all duration-500 hover:bg-white/15">
            <div className="mb-8">
              <div className="bg-white/20 rounded-full p-3 inline-block mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-semibold mb-4">Closet Upgrade, Culture Intact</h3>
              <p className="text-white/80 text-lg">
                Join thousands of style-conscious shoppers discovering unique pieces that reflect their identity.
                Early access, exclusive drops, and special pricing await.
              </p>
            </div>
            
            <Link 
              href="#waitlist" 
              className="inline-flex items-center bg-white text-primary hover:bg-white/90 font-medium rounded-md py-3 px-6 group transition-all duration-300 hover:shadow-lg"
            >
              Join the Waitlist 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* For Vendors */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 transition-all duration-500 hover:bg-white/15">
            <div className="mb-8">
              <div className="bg-white/20 rounded-full p-3 inline-block mb-6">
                <Store className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-semibold mb-4">From Side-Hustle to Main Stage</h3>
              <p className="text-white/80 text-lg">
                Turn your fashion brand into a household name. Get access to our platform,
                AI-powered growth tools, and a community of engaged shoppers.
              </p>
            </div>
            
            <Link 
              href="#vendors" 
              className="inline-flex items-center bg-white text-primary hover:bg-white/90 font-medium rounded-md py-3 px-6 group transition-all duration-300 hover:shadow-lg"
            >
              Vendor Application
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualCTA;