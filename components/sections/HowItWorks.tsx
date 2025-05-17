"use client";

import { useEffect, useState } from 'react';
import { Search, Heart, Zap, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Your personalized feed learns what you love.",
    icon: Search,
    color: "bg-primary/10"
  },
  {
    number: "02",
    title: "Follow",
    description: "Stay updated with your favorite designers.",
    icon: Heart,
    color: "bg-primary/20"
  },
  {
    number: "03",
    title: "Engage",
    description: "Vote on upcoming drops, earn early access.",
    icon: Zap,
    color: "bg-primary/30"
  },
  {
    number: "04",
    title: "Shop",
    description: "Seamless checkout with local delivery.",
    icon: ShoppingBag,
    color: "bg-primary/40"
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(11,60,93,0.05),transparent_70%)]" />
      
      <div className="container relative">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Your journey from discovery to doorstep, reimagined for the digital age
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-[50%] left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />
          
          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col items-center text-center transition-all duration-500",
                  activeStep === index ? "scale-105" : "",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setActiveStep(index)}
              >
                <div 
                  className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 relative z-10 group cursor-pointer",
                    activeStep === index 
                      ? "bg-primary text-white scale-110 shadow-lg" 
                      : `${step.color} text-primary hover:scale-105`
                  )}
                >
                  <step.icon className={cn(
                    "h-8 w-8 transition-transform duration-300",
                    activeStep === index ? "scale-110" : "group-hover:scale-110"
                  )} />
                </div>
                
                <div className={cn(
                  "transform transition-all duration-300",
                  activeStep === index ? "scale-105" : ""
                )}>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl overflow-hidden transition-all duration-300 transform",
                activeStep === index ? "shadow-lg scale-[1.02]" : "shadow",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button 
                className="w-full flex items-center p-6 text-left focus:outline-none"
                onClick={() => setActiveStep(index)}
              >
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300",
                    activeStep === index 
                      ? "bg-primary text-white" 
                      : `${step.color} text-primary`
                  )}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className={cn(
                    "text-gray-600 transition-all duration-300",
                    activeStep === index ? "h-auto opacity-100 mt-2" : "h-0 opacity-0"
                  )}>
                    {step.description}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;