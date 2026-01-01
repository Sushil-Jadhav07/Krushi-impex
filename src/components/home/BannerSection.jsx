import React, { useState, useEffect } from 'react';

// Banner Component
const BannerSection = ({
  title = "Designing Spaces That Inspire & Endure",
  subtitle = "We transform visions into timeless architecture, blending innovative design with functional excellence",
  ctaText = "Schedule a Free Consultation",
  ctaHref = "#contact",
  backgroundImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Banner Container with rounded corners */}
        <div 
          className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl"
          style={{ minHeight: '600px' }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col justify-center h-full min-h-[400px] lg:min-h-[600px] p-6 sm:p-10 lg:p-16">
            {/* Text Content */}
            <div className="max-w-3xl">
              <h1 
                className={`heading-lg text-white mb-4 sm:mb-6 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                {title}
              </h1>
              
              <p 
                className={`text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '350ms' }}
              >
                {subtitle}
              </p>
            </div>

            {/* CTA Button */}
            <div 
              className={`transition-all duration-700 ease-out mt-10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <a
                href={ctaHref}
                className="inline-block bg-white text-gray-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Demo App
export default function App() {
  return (
    <div className=" bg-gray-50">
      {/* Example with default props */}
      <BannerSection />

    

      
    </div>
  );
}