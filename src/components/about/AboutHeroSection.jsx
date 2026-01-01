import React, { useState, useEffect, useRef } from 'react';

const AboutHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWatchVideo = () => {
    // Add video functionality here
    console.log('Watch video clicked');
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto py-12 md:py-24">
        <div className="relative">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
            {/* Left Section - Image */}
            <div className="relative order-2 lg:order-1 h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                {/* Placeholder Image with gradient */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[#2C328C] via-[#2C328C] to-[#2C328C] opacity-10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <p className="text-white/80 text-sm md:text-base font-light">Company Image</p>
                    </div>
                  </div>
                </div>

                {/* Watch Video Button - Bottom Left */}
                <div 
                  className="absolute bottom-6 left-6 flex items-center gap-3 z-10"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                  }}
                >
                  <button
                    onClick={handleWatchVideo}
                    className="w-14 h-14 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <span className="text-black font-semibold text-sm md:text-base uppercase tracking-wide">
                    WATCH VIDEO
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section - Content Card */}
            <div className="relative order-1 lg:order-2 lg:-ml-16 lg:mt-0 -mt-8 z-20">
              <div 
                className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
              >
                {/* Welcome Text */}
                <div 
                  className="mb-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                  }}
                >
                   <span className="text-[#F16222] text-sm md:text-base font-semibold uppercase tracking-wider">
                    WELCOME TO KRUSHI IMPEX
                  </span>
                </div>

                {/* Main Headline */}
                <h2 
                  className="heading-lg mb-6"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                  }}
                >
                  <span className="block">INNOVATIVE</span>
                  <span className="block">SOLUTIONS</span>
                </h2>

                {/* Description Paragraph */}
                <p 
                  className="body-lg mb-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
                  }}
                >
                  Krushi Impex is a leading B2B import-trading company with over 8 years of experience in sourcing premium celebration and event products from China for the Indian market. We work behind the scenes of India's celebrations, supplying businesses with products that are trending, reliable, and margin-friendly.
                </p>

                {/* Read More Button */}
                <div
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
                  }}
                >
                  <button className="bg-black text-white px-8 py-3 md:py-4 font-semibold text-sm md:text-base uppercase tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                    READ MORE
                  </button>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;

