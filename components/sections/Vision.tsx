"use client";

import { Search, Zap, Palette } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const visionCards = [
  {
    title: "Discovery",
    description: "Scroll less, find more – hand-picked local drops that match your style DNA.",
    icon: Search,
    color: "bg-primary/10",
    delay: 0
  },
  {
    title: "Empowerment",
    description: "Turning passion projects into powerhouse brands with AI-driven growth tools.",
    icon: Zap,
    color: "bg-primary/20",
    delay: 100
  },
  {
    title: "Culture",
    description: "Where Gulf heritage meets Gen Z energy – fashion that tells our story.",
    icon: Palette,
    color: "bg-primary/30",
    delay: 200
  }
];

const Vision = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="vision" className="section bg-grayLight relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(11,60,93,0.1),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      
      <div className="container relative">
        <div 
          ref={sectionRef}
          className={`max-w-3xl mx-auto text-center mb-16 scroll-fade-up ${
            sectionVisible ? 'visible' : ''
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Labees Exists</h2>
          <p className="text-lg md:text-xl text-gray-600">
            We're bridging the gap between Qatar's innovative designers and style-conscious shoppers. 
            No more drowning in fast fashion – it's time for local talent to shine on the global stage.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 relative scroll-stagger-children ${
            cardsVisible ? 'visible' : ''
          }`}
        >
          {visionCards.map((card, index) => (
            <div 
              key={index}
              className={`${card.color} rounded-xl p-8 hover:scale-105 hover:shadow-xl transition-all duration-300`}
            >
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full inline-block mb-6 shadow-md">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.description}</p>
              
              {/* Card Decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <card.icon className="h-20 w-20 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div 
          ref={statsRef}
          className={`mt-16 bg-white rounded-xl p-8 shadow-lg scroll-scale-up ${
            statsVisible ? 'visible' : ''
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Local Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-gray-600">Waitlist Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24hr</div>
              <div className="text-gray-600">Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Authentic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;