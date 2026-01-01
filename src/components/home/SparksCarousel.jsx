import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Chevron Icons
const ChevronLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Utility function for class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Sample data for Sparks Carousel - Show 4 at once, rest scrollable
const defaultSparksData = [
  {
    id: 1,
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60',
    title: 'Birthday Candles Collection - Premium Quality',
    count: 150,
    countLabel: 'Product Variants',
  },
  {
    id: 2,
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60',
    title: 'Balloons - Latex & Foil Options',
    count: 200,
    countLabel: 'Product Variants',
  },
  {
    id: 3,
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60',
    title: 'Cake Toppers - Elegant Designs',
    count: 85,
    countLabel: 'Product Variants',
  },
  {
    id: 4,
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60',
    title: 'Party Décor - Complete Solutions',
    count: 300,
    countLabel: 'Product Variants',
  },
  {
    id: 5,
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60',
    title: 'Festival Supplies - Seasonal Collection',
    count: 120,
    countLabel: 'Product Variants',
  },
  {
    id: 6,
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60',
    title: 'Event Accessories - Premium Range',
    count: 95,
    countLabel: 'Product Variants',
  },
  {
    id: 7,
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60',
    title: 'Celebration Lights - LED Options',
    count: 75,
    countLabel: 'Product Variants',
  },
  {
    id: 8,
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&auto=format&fit=crop&q=60',
    title: 'Party Favors - Gift Sets',
    count: 110,
    countLabel: 'Product Variants',
  },
];

// Define the type for a single item in the carousel
export const SparksCarousel = React.forwardRef(
  ({ title = "Featured Products", subtitle = "Explore our curated collection of celebration products.", items = defaultSparksData }, ref) => {
    const controls = useAnimation();
    const carouselRef = React.useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    // Function to scroll the carousel
    const scroll = (direction) => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const scrollAmount = clientWidth * 0.8; // Scroll by 80% of the visible width
        const newScrollLeft =
          direction === 'left'
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount;
        carouselRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      }
    };

    // Effect to check scroll position and update button states
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
        // Initial check
        checkScrollPosition();
        currentRef.addEventListener('scroll', checkScrollPosition);
      }

      // Check again on window resize
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        if (currentRef) {
          currentRef.removeEventListener('scroll', checkScrollPosition);
        }
        window.removeEventListener('resize', checkScrollPosition);
      };
    }, [items]);

    return (
      <section ref={ref} className="w-full py-8 md:pt-24 md:pb-12 bg-white" aria-labelledby="sparks-title">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          {/* Header Section */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <a href="#" className="group inline-flex items-center">
                <h2 id="sparks-title" className="heading-md">
                  {title}
                </h2>
                <ChevronRight className="ml-2 h-6 w-6 text-gray-900 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-1 text-gray-600">{subtitle}</p>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex w-full gap-4 overflow-x-auto pb-4 scrollbar-hide"
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group flex-shrink-0 w-[280px] sm:w-[280px] md:w-[280px] lg:w-[280px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm transition-shadow hover:shadow-md h-[320px] flex flex-col">
                    <img
                      alt={item.title}
                      className="aspect-video w-full object-cover transition-transform group-hover:scale-105 flex-shrink-0"
                      height="160"
                      src={item.imageSrc}
                      width="280"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="heading-sm text-md font-semibold leading-tight text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="mt-auto">
                        <p className="text-xl font-bold text-gray-900">{item.count}</p>
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          {item.countLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            {!isAtStart && (
              <button
                onClick={() => scroll('left')}
                className={cn(
                  'absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-900 shadow-md transition-opacity hover:bg-white/80'
                )}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {!isAtEnd && (
              <button
                onClick={() => scroll('right')}
                className={cn(
                  'absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-900 shadow-md transition-opacity hover:bg-white/80'
                )}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
);

SparksCarousel.displayName = 'SparksCarousel';

export default SparksCarousel;

