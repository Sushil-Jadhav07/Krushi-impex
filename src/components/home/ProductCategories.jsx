import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import candlesImg from '../../assets/candles.png';
import balloonsImg from '../../assets/balloons.png';
import cakeTopperImg from '../../assets/cake-topper.png';
import partyDecorImg from '../../assets/party-decor.png';

const ProductsRangeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 because we have a duplicate at the beginning
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);
  const isJumpingRef = useRef(false);

  const productCategories = [
    {
      title: 'Birthday Candles',
      subtitle: '(Top-Selling Category)',
      image: candlesImg
    },
    {
      title: 'Balloons',
      subtitle: '',
      image: balloonsImg
    },
    {
      title: 'Cake Toppers',
      subtitle: '',
      image: cakeTopperImg
    },
    {
      title: 'Party Decor Items',
      subtitle: 'for birthdays, anniversaries, and festivals',
      image: partyDecorImg
    }
  ];

  // Create infinite loop array: [last, ...original, first]
  const infiniteCategories = [
    productCategories[productCategories.length - 1], // Last item at the beginning
    ...productCategories,
    productCategories[0] // First item at the end
  ];

  const handleNextSlide = useCallback(() => {
    if (isJumpingRef.current) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  }, []);

  const handlePrevSlide = useCallback(() => {
    if (isJumpingRef.current) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  }, []);

  const goToSlide = useCallback((index) => {
    if (isJumpingRef.current) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1); // +1 because we start at index 1 (after the duplicate)
  }, []);

  // Get the actual slide index for display (0 to productCategories.length - 1)
  const getDisplayIndex = useCallback(() => {
    if (currentSlide === 0) return productCategories.length - 1;
    if (currentSlide === infiniteCategories.length - 1) return 0;
    return currentSlide - 1;
  }, [currentSlide, infiniteCategories.length, productCategories.length]);

  // Handle seamless loop transitions
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTransitionEnd = (e) => {
      // Only handle transform transitions
      if (e.propertyName !== 'transform') return;
      
      // If we're at the duplicate at the end (last index), jump to the real first slide
      if (currentSlide === infiniteCategories.length - 1) {
        isJumpingRef.current = true;
        setIsTransitioning(false);
        // Small delay to ensure transition is complete
        setTimeout(() => {
          setCurrentSlide(1);
          // Re-enable transitions after a brief moment
          setTimeout(() => {
            setIsTransitioning(true);
            isJumpingRef.current = false;
          }, 10);
        }, 10);
      }
      // If we're at the duplicate at the beginning (index 0), jump to the real last slide
      else if (currentSlide === 0) {
        isJumpingRef.current = true;
        setIsTransitioning(false);
        setTimeout(() => {
          setCurrentSlide(productCategories.length);
          setTimeout(() => {
            setIsTransitioning(true);
            isJumpingRef.current = false;
          }, 10);
        }, 10);
      }
    };

    carousel.addEventListener('transitionend', handleTransitionEnd);
    return () => carousel.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentSlide, infiniteCategories.length, productCategories.length]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isJumpingRef.current) {
        handleNextSlide();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [handleNextSlide]);

  return (
    <div className="w-full bg-[#F4F2F2] py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 
          className="heading-md md:heading-lg font-bold mb-6 text-black"
          style={{ fontFamily: 'Conthrax, sans-serif' }}
        >
          Our Range of Products
        </h2>

        {/* Description */}
        <p 
          className="text-base md:text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          We import and supply high-demand celebration products used across birthdays, festivals, and events. Our inventory evolves based on market trends and seasonal demand.
        </p>

        {/* Product Categories Heading */}
        <h3 
          className="text-2xl md:text-3xl font-bold mb-8 text-black flex items-center gap-3"
          style={{ fontFamily: 'Conthrax, sans-serif' }}
        >
          Product Categories
          <TrendingUp size={28} className="text-[#F16222]" />
        </h3>

        {/* Mobile Carousel (visible only on mobile) */}
        <div className="lg:hidden relative mb-10">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex"
              style={{ 
                transform: `translateX(-${currentSlide * 66.67}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-out' : 'none'
              }}
            >
              {infiniteCategories.map((category, index) => {
                // Determine if this is the first item (Birthday Candles) for badge display
                // Show badge on the real first item (index 1) and its duplicate (index infiniteCategories.length - 1)
                const isFirstItem = index === 1 || index === infiniteCategories.length - 1;
                
                return (
                  <div 
                    key={`${category.title}-${index}`}
                    className="w-2/3 flex-shrink-0 px-2"
                  >
                    {/* Image Container */}
                    <div className="relative bg-gray-300 rounded-2xl overflow-hidden aspect-[3/4] mb-4">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                      
                      {/* Badge for Top-Selling */}
                      {isFirstItem && (
                        <div className="absolute top-4 right-4 bg-[#F16222] text-white px-3 py-1 rounded-full text-xs font-bold"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          TOP SELLING
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <h4 
                      className="text-lg font-bold text-black mb-1 text-center"
                      style={{ fontFamily: 'Conthrax, sans-serif' }}
                    >
                      {category.title}
                    </h4>
                    
                    {/* Subtitle */}
                    {category.subtitle && (
                      <p 
                        className="text-sm text-gray-600 italic text-center"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/3 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-[#2C328C]" />
          </button>
          
          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/3 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-[#2C328C]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {productCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  getDisplayIndex() === index 
                    ? 'bg-[#F16222] w-8' 
                    : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid (visible only on desktop) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative bg-gray-300 rounded-2xl overflow-hidden aspect-[3/4] mb-4 hover:shadow-xl transition-shadow">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C328C] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                
                {/* Badge for Top-Selling */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-[#F16222] text-white px-3 py-1 rounded-full text-xs font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    TOP SELLING
                  </div>
                )}
              </div>

              {/* Product Info */}
              <h4 
                className="text-lg font-bold text-black mb-1 group-hover:text-[#F16222] transition-colors"
                style={{ fontFamily: 'Conthrax, sans-serif' }}
              >
                {category.title}
              </h4>
              
              {/* Subtitle */}
              {category.subtitle && (
                <p 
                  className="text-sm text-gray-600 italic"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {category.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-gradient-to-r from-[#2C328C] to-[#F16222] rounded-2xl p-6 md:p-8">
          <p 
            className="text-white text-center text-base md:text-lg italic"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Product availability changes frequently. Contact us for the latest items and pricing.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button 
            className="px-8 py-3 bg-[#F16222] text-white rounded-full font-bold hover:bg-[#D95C2F] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            style={{ fontFamily: 'Conthrax, sans-serif' }}
          >
            VIEW FULL CATALOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsRangeSection;
