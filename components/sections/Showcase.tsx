"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X, Play, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const showcaseItems = [
  {
    id: 1,
    title: "Home Feed – curated drops in real time",
    description: "Discover new arrivals from your favorite local designers, personalized to your style.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    col: "md:col-span-2",
  },
  {
    id: 2,
    title: "Vendor Dashboard – analytics that matter",
    description: "Track performance, manage inventory, and grow your brand with AI-powered insights.",
    image: "https://images.pexels.com/photos/6956883/pexels-photo-6956883.jpeg?auto=compress&cs=tinysrgb&w=1200",
    col: "md:col-span-1",
  },
  {
    id: 3,
    title: "Style Bundle Builder – mix, match, slay",
    description: "Create and share complete looks with pieces from multiple designers.",
    image: "https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1200",
    col: "md:col-span-1",
  }
];

const Showcase = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const openModal = (id: number) => {
    setSelectedItem(id);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="showcase" className="section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(11,60,93,0.1),transparent_70%)]" />
      
      <div className="container relative">
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-fade-up ${
            headerVisible ? 'visible' : ''
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Peek Inside Labees</h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Experience our app before it launches
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 scroll-stagger-children ${
            gridVisible ? 'visible' : ''
          }`}
        >
          {showcaseItems.map((item) => (
            <div 
              key={item.id}
              className={`${item.col} group cursor-pointer relative overflow-hidden rounded-xl`}
              onClick={() => openModal(item.id)}
            >
              <div className="relative w-full h-[400px]">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                    <div className="mt-4 inline-flex items-center text-sm font-medium">
                      Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedItem && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col">
              <div className="flex justify-between items-center p-6 border-b">
                <div>
                  <h3 className="font-semibold text-xl">
                    {showcaseItems.find(item => item.id === selectedItem)?.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {showcaseItems.find(item => item.id === selectedItem)?.description}
                  </p>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-auto p-6">
                <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <Image
                    src={showcaseItems.find(item => item.id === selectedItem)?.image || ''}
                    alt="Showcase preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-primary/90 p-6 rounded-full animate-pulse cursor-pointer hover:scale-110 transition-transform">
                      <Play className="h-12 w-12 text-white" fill="white" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    This is a preview of our prototype. Full interactive demo coming soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Showcase;