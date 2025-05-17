"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,60,93,0.05),transparent_70%)]" />
      
      <div className="container max-w-4xl relative">
        <div 
          ref={containerRef}
          className={`bg-grayLight rounded-2xl p-8 md:p-12 scroll-scale-up ${
            containerVisible ? 'visible' : ''
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Be the first to know about new designer drops, exclusive events, and insider perks.
            </p>
          </div>
          
          {isSubscribed ? (
            <div className="bg-primary/10 text-primary p-6 rounded-xl text-center animate-fade-in max-w-md mx-auto">
              <div className="text-xl font-semibold mb-2">Welcome to the Movement!</div>
              <p>Check your inbox for a special welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Send className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="btn-primary min-w-[120px] rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                By subscribing, you agree to receive marketing communications from Labees.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;