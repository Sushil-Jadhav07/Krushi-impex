import React, { useState, useEffect } from 'react';
import { MessageCircle, FileText } from 'lucide-react';
import bannerImage from '../../assets/krushi-banner.png';

const BannerSection = ({
  title = "India's Celebration Partner",
  services = "Import • Sourcing • Trading • Pan-India B2B Supply",
  description = "Sourcing trending celebration and event products from China and supplying India's wholesalers, retailers, and event businesses with speed, quality, and reliability.",
  backgroundImage = bannerImage
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleGetQuote = () => {
    window.location.href = '#contact';
  };

  return (
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:pt-32 lg:pb-16">
      <div className="max-w-[1350px] mx-auto">
        {/* Banner Container with rounded corners */}
        <div 
          className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl"
          style={{ minHeight: '600px' }}
        >
          {/* Background Image */}
          {backgroundImage ? (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
            </div>
          ) : (
            // Fallback Gradient Background
            <div className="absolute inset-0 bg-gradient-to-br from-[#2C328C] via-[#3d4ab8] to-[#F16222]" />
          )}


          {/* Content Container */}
          <div className="relative z-10 flex flex-col justify-center h-full min-h-[500px] lg:min-h-[600px] p-6 sm:p-10 lg:p-16">
            {/* Text Content */}
            <div className="max-w-3xl">
              {/* Main Title */}
              <h1 
                className={`text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: '200ms',
                  fontFamily: 'Conthrax, sans-serif'
                }}
              >
                {title}
              </h1>
              
              {/* Services Line */}
              <p 
                className={`text-base md:text-xl  text-white/95 font-semibold mb-4 sm:mb-6 transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: '350ms',
                  fontFamily: 'Bahnschrift, sans-serif'
                }}
              >
                {services}
              </p>

              {/* Description */}
              <p 
                className={`text-sm md:text-base text-white/90 leading-relaxed max-w-2xl transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ 
                  transitionDelay: '500ms',
                  fontFamily: 'Bahnschrift, sans-serif'
                }}
              >
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '650ms' }}
            >
              {/* Get a Quote Button */}
              <button
                onClick={handleGetQuote}
                className="inline-flex items-center justify-center gap-3 bg-white text-[#2C328C] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-[#F4F2F2] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{ fontFamily: 'Bahnschrift, sans-serif' }}
              >
                <FileText size={22} className="group-hover:scale-110 transition-transform" />
                Get a Quote
              </button>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-[#2C328C] transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                style={{ fontFamily: 'Bahnschrift, sans-serif' }}
              >
                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F16222] via-[#D95C2F] to-[#F16222]" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;