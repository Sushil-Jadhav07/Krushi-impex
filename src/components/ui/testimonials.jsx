import React, { useState, useEffect } from 'react';
import { User, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const testimonials = [
    {
      quote: "Krushi Impex has completely transformed the way we manage our celebration product inventory. The quality and pricing are unbeatable.",
      name: "Rajesh Kumar",
      company: "Kumar Wholesale",
      avatar: "RK"
    },
    {
      quote: "The collaboration and support from Krushi Impex have significantly improved our product offerings. We're serving our customers better with quality celebration supplies.",
      name: "Priya Sharma",
      company: "Sharma Party Supplies",
      avatar: "PS"
    },
    {
      quote: "Krushi Impex has been our trusted partner for celebration products. The quality-checked products have made decision-making so much easier for our business.",
      name: "Amit Patel",
      company: "Patel Event Solutions",
      avatar: "AP"
    },
    {
      quote: "Working with Krushi Impex has been a game-changer. Their ready inventory in India and competitive pricing have helped us maintain healthy margins.",
      name: "Sneha Reddy",
      company: "Reddy Celebration Store",
      avatar: "SR"
    },
    {
      quote: "The quality-checked products and fast Pan-India delivery from Krushi Impex have transformed our business. We're now able to fulfill orders faster.",
      name: "Vikram Singh",
      company: "Singh B2B Solutions",
      avatar: "VS"
    },
    {
      quote: "Best decision we made was partnering with Krushi Impex. Their direct sourcing from China and quality assurance has elevated our business.",
      name: "Anjali Mehta",
      company: "Mehta Party World",
      avatar: "AM"
    },
    {
      quote: "Krushi Impex's ready inventory and fast delivery have made our operations seamless. We can now serve our customers better and faster.",
      name: "Rohit Verma",
      company: "Verma Events",
      avatar: "RV"
    },
    {
      quote: "The competitive pricing and quality products from Krushi Impex have helped us grow our business significantly. Highly recommended!",
      name: "Kavita Nair",
      company: "Nair Celebration Hub",
      avatar: "KN"
    }
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - itemsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - itemsPerView : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  return (
    <div className="w-full py-12 md:py-20 lg:py-28 bg-gray-100 relative overflow-hidden">
      {/* Dot Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #9ca3af 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-black"
          style={{ fontFamily: 'Conthrax, sans-serif' }}
        >
          What Our Clients Say
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 xl:-translate-x-16 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-[#F16222] hover:text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 xl:translate-x-16 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-[#F16222] hover:text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-2xl h-full p-6 md:p-8 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Quote Icon */}
                    <User className="w-8 h-8 md:w-10 md:h-10 stroke-1 text-[#F16222] mb-6" />
                    
                    <div className="flex flex-col gap-4 flex-grow">
                      {/* Heading */}
                      <h3 
                        className="text-xl md:text-2xl font-bold text-black mb-3"
                        style={{ fontFamily: 'Conthrax, sans-serif' }}
                      >
                        Best Decision
                      </h3>
                      
                      {/* Quote */}
                      <p 
                        className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow"
                        style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                      >
                        {testimonial.quote}
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex flex-row gap-2 text-xs md:text-sm items-center mt-4 pt-4 border-t border-gray-100">
                        <span 
                          className="text-gray-500"
                          style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                        >
                          By
                        </span>
                        
                        {/* Avatar */}
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#2C328C] to-[#F16222] flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {testimonial.avatar}
                          </span>
                        </div>
                        
                        <span 
                          className="font-semibold text-gray-800"
                          style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                        >
                          {testimonial.name}
                        </span>
                        
                        <span 
                          className="text-gray-500 hidden sm:inline"
                          style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                        >
                          {testimonial.company}
                        </span>
                      </div>
                      
                      {/* Company name on mobile (below) */}
                      <span 
                        className="text-gray-500 text-xs sm:hidden"
                        style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                      >
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Mobile */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#F16222] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#F16222] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-[#F16222] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;