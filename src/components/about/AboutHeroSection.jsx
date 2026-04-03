import React, { useState, useEffect, useRef } from 'react';

const aboutVideo = '/assets/Krushi Impex Intro Reel D4.mp4';

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

  return (
    <section 
      ref={sectionRef}
      className="w-full pt-20 md:pt-24 pb-12 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto py-12 md:py-12">
        <div className="relative">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
            {/* Left Section - Video */}
            <div className="relative order-2 lg:order-1">
              <div className="relative mx-auto w-full max-w-full sm:max-w-[320px] md:max-w-[360px] lg:ml-[150px] lg:mr-auto">
                <div className="relative w-full overflow-hidden rounded-[28px] shadow-xl aspect-[9/16] bg-black">
                  <video
                    src={aboutVideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    unmuted={true}
                    loop
                    playsInline
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Watch Video Button - Bottom Left */}
                {/* <div 
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
                </div> */}
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
                    WELCOME TO 
                  </span>
                </div>

                {/* Main Headline */}
                <h2 
                  className="md:heading-lg heading-md mb-6"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                  }}
                >
                  <span className="block">KRUSHI IMPEX</span>
                </h2>

                {/* Description Paragraph */}
                <p 
                  className="md:body-lg body-sm mb-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
                  }}
                >
                  Krushi Impex is a leading B2B import–trading company, founded by Mehul Shah, with over 8 years of experience in sourcing premium celebration and event products from China for the Indian market. We work behind the scenes of India’s celebrations, supplying businesses with products that are trending, reliable, and margin-friendly. 
                </p>

                {/* Read More Button */}
                <div
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
                  }}
                >
                  {/* <button className="bg-black text-white px-8 py-3 md:py-4 font-semibold text-sm md:text-base uppercase tracking-wide hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                    READ MORE
                  </button> */}
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
