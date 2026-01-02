import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Package } from 'lucide-react';

// Sample data for Sparks Carousel
const defaultSparksData = [
  {
    id: 1,
    imageSrc: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop',
    title: 'Birthday Candles Collection',
    description: 'Premium Quality',
    count: 150,
    countLabel: 'Product Variants',
  },
  {
    id: 2,
    imageSrc: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop',
    title: 'Balloons',
    description: 'Latex & Foil Options',
    count: 200,
    countLabel: 'Product Variants',
  },
  {
    id: 3,
    imageSrc: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&auto=format&fit=crop',
    title: 'Cake Toppers',
    description: 'Elegant Designs',
    count: 85,
    countLabel: 'Product Variants',
  },
  {
    id: 4,
    imageSrc: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop',
    title: 'Party Décor',
    description: 'Complete Solutions',
    count: 300,
    countLabel: 'Product Variants',
  },
  {
    id: 5,
    imageSrc: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&auto=format&fit=crop',
    title: 'Festival Supplies',
    description: 'Seasonal Collection',
    count: 120,
    countLabel: 'Product Variants',
  },
  {
    id: 6,
    imageSrc: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&auto=format&fit=crop',
    title: 'Event Accessories',
    description: 'Premium Range',
    count: 95,
    countLabel: 'Product Variants',
  },
  {
    id: 7,
    imageSrc: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop',
    title: 'Celebration Lights',
    description: 'LED Options',
    count: 75,
    countLabel: 'Product Variants',
  },
  {
    id: 8,
    imageSrc: 'https://images.unsplash.com/photo-1464347601390-25e2842a456b?w=600&auto=format&fit=crop',
    title: 'Party Favors',
    description: 'Gift Sets',
    count: 110,
    countLabel: 'Product Variants',
  },
];

const SparksCarousel = ({ 
  title = "Featured Products", 
  subtitle = "Explore our curated collection of celebration products.", 
  items = defaultSparksData 
}) => {
  const carouselRef = React.useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);

  // Function to scroll the carousel
  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  // Check scroll position
  useEffect(() => {
    const checkScrollPosition = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setIsAtStart(scrollLeft < 10);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
      }
    };

    const currentRef = carouselRef.current;
    if (currentRef) {
      checkScrollPosition();
      currentRef.addEventListener('scroll', checkScrollPosition);
    }

    window.addEventListener('resize', checkScrollPosition);
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [items]);

  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-2 md:mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2"
                style={{ fontFamily: 'Conthrax, sans-serif' }}
              >
                {title}
              </h2>
              <p 
                className="text-base md:text-lg text-gray-600"
                style={{ fontFamily: 'Bahnschrift, sans-serif' }}
              >
                {subtitle}
              </p>
            </div>
            <a 
              href="#" 
              className="hidden md:flex items-center gap-2 text-[#F16222] font-semibold hover:text-[#D95C2F] transition-colors group"
              style={{ fontFamily: 'Bahnschrift, sans-serif' }}
            >
              View All
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[280px] md:w-[300px] group cursor-pointer"
              >
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f3f4f6"/%3E%3C/svg%3E';
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Count Badge */}
                    <div className="absolute top-4 right-4 bg-[#F16222] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                      style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                    >
                      {item.count}+
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 
                      className="text-lg font-bold text-black mb-1 line-clamp-1 group-hover:text-[#F16222] transition-colors"
                      style={{ fontFamily: 'Conthrax, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    
                    <p 
                      className="text-sm text-gray-600 mb-4 line-clamp-1"
                      style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                    >
                      {item.description}
                    </p>

                    {/* Bottom Info */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p 
                            className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                            style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                          >
                            {item.countLabel}
                          </p>
                          <p 
                            className="text-2xl font-bold text-[#2C328C]"
                            style={{ fontFamily: 'Conthrax, sans-serif' }}
                          >
                            {item.count}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#F4F2F2] flex items-center justify-center group-hover:bg-[#F16222] transition-colors">
                          <ChevronRight className="w-5 h-5 text-[#2C328C] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {!isAtStart && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-900 shadow-lg hover:bg-[#F16222] hover:text-white hover:border-[#F16222] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {!isAtEnd && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-900 shadow-lg hover:bg-[#F16222] hover:text-white hover:border-[#F16222] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex md:hidden justify-center">
          <a 
            href="#" 
            className="flex items-center gap-2 text-[#F16222] font-semibold hover:text-[#D95C2F] transition-colors"
            style={{ fontFamily: 'Bahnschrift, sans-serif' }}
          >
            View All Products
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SparksCarousel;