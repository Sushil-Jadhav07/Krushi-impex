import React, { useState, useEffect } from 'react';

// Hero Section Component
const HeroSection = ({
  slogan = "INDIA'S CELEBRATION PARTNER",
  title = "India's Celebration Partner",
  subtitle = "Sourcing trending celebration and event products from China and supplying India's wholesalers, retailers, and event businesses with speed, quality, and reliability.",
  callToAction = {
    text: "GET A QUOTE →",
    href: "#contact"
  },
  backgroundImage = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  return (
    <section id="home" className="relative flex w-full flex-col overflow-hidden bg-white text-gray-900 md:flex-row min-h-screen pt-20">
      {/* Left Side: Content */}
      <div className="flex w-full flex-col justify-center p-6 sm:p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
        {/* Main Content */}
        <div>
          {slogan && (
            <p 
              className={`text-xs sm:text-sm tracking-wider text-gray-500 uppercase mb-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {slogan}
            </p>
          )}
          
          <main>
            <h1 
              className={`heading-lg transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              {title}
            </h1>
            
            <div 
              className={`my-4 md:my-6 h-1 w-16 md:w-20 bg-[#2C328C] transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ 
                transitionDelay: '500ms',
                transformOrigin: 'left'
              }}
            ></div>
            
            <p 
              className={`mb-6 md:mb-8 max-w-md body-md transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              {subtitle}
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 items-start sm:items-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <a 
                href={callToAction.href}
                className="inline-block text-base sm:text-lg font-bold tracking-widest text-[#2C328C] transition-all duration-300 hover:text-[#F16222] hover:translate-x-2"
              >
                {callToAction.text}
              </a>
              <button 
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F16222] text-white rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-[#D95C2F]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Right Side: Image with Clip Path Animation */}
      <div 
        className="relative w-full min-h-[300px] md:w-1/2 md:min-h-full lg:w-2/5 bg-gray-200"
        style={{
          clipPath: isVisible && imageLoaded 
            ? 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' 
            : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          transition: 'clip-path 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
          transitionDelay: imageLoaded ? '0ms' : '0ms'
        }}
      >
        <img 
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </section>
  );
};

export default HeroSection