"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PressStrip = () => {
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-grayLight relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,60,93,0.05),transparent_70%)]" />
      
      <div className="container relative">
        <div 
          ref={containerRef}
          className={`flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 scroll-fade-up ${
            containerVisible ? 'visible' : ''
          }`}
        >
          <div className="space-y-2">
            <div className="text-gray-600 font-medium text-lg">
              Featured in
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
              <span className="text-primary font-semibold text-xl">ILoveQatar</span>
              <span className="text-primary font-semibold text-xl">Qatar Living</span>
              <span className="text-primary font-semibold text-xl">Qatar Tribune</span>
            </div>
          </div>
          
          <div className="bg-white px-8 py-4 rounded-full shadow-md">
            <div className="text-2xl font-display font-semibold">
              <span className="text-primary">5,000+</span>
              <span className="text-gray-700"> style rebels on our waitlist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressStrip;