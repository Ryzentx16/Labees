"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';

const mockups = [
  "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7679760/pexels-photo-7679760.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mockups.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-24 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(11,60,93,0.1),transparent_70%)]" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {/* Highlight Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Qatar's First Curated Fashion Platform</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
                <span className="block">Curated Fashion.</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Powered by Qatar.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                Connecting Gen Z with bold, culture-first designers from Doha and beyond. 
                Experience fashion that speaks your language.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#waitlist" 
                className="btn-primary group inline-flex items-center justify-center"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <Link 
                href="#vendors" 
                className="btn-ghost group"
              >
                Vendor Application
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </Link> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-bold text-primary">5,000+</div>
                <div className="text-gray-600">Waitlist Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Local Designers</div>
              </div>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className={`relative h-[600px] transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="absolute inset-0 bg-hero-grad opacity-5 rounded-2xl z-10" />
            
            {mockups.map((src, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentImage 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
              >
                <Image
                  src={src}
                  alt={`Labees Fashion ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Image Navigation */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 transition-all ${
                    index === currentImage ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg z-20 transform rotate-3 animate-float">
              <div className="text-sm font-medium">Latest Drop</div>
              <div className="text-xs text-gray-500">3 hours ago</div>
            </div>
            <div className="absolute -left-4 bottom-1/4 bg-white p-4 rounded-xl shadow-lg z-20 transform -rotate-2 animate-float delay-150">
              <div className="text-sm font-medium">Trending Now</div>
              <div className="text-xs text-gray-500">15 new items</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;