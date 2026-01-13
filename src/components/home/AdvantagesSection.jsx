import React, { useState, useEffect, useRef } from 'react';
import { Video, ClipboardCheck, Flame, Wind, ShieldCheck } from 'lucide-react';

// Bento Card Component
const BentoCard = ({ title, description, icon: Icon, index, className = "" }) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`
      }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2C328C]/5 to-transparent rounded-bl-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>
      
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon Container */}
        <div className="mb-6 w-14 h-14 rounded-2xl bg-[#2C328C]/5 flex items-center justify-center group-hover:bg-[#2C328C] group-hover:text-white text-[#2C328C] transition-all duration-300 shadow-sm group-hover:shadow-md">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-gray-900 md:heading-xs heading-xxs mb-3 relative z-10 group-hover:text-[#2C328C] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 body-sm relative z-10 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Advantages Section Component
const AdvantagesSection = ({
  sectionLabel = "Quality Assurance",
  mainHeading = {
    part1: "QUALITY YOU CAN ",
    highlight: "RELY ON",
    part2: ""
  },
  description = "Every product we supply goes through checks to ensure reliability and performance.",
  features = [
    {
      title: <>Factory<span style={{ fontFamily: 'Montserrat, sans-serif' }}>-</span>shared pre<span style={{ fontFamily: 'Montserrat, sans-serif' }}>-</span>ship videos</>,
      description: "We receive and review detailed videos from our manufacturing partners showing finished products before they leave the factory, ensuring quality standards are met.",
      icon: Video,
      className: "md:col-span-2 md:row-span-2 min-h-[320px]"
    },
    {
      title: "Physical inspections after arrival in India",
      description: "Upon arrival in India, every shipment undergoes thorough physical inspection by our quality control team to verify product condition and specifications.",
      icon: ClipboardCheck,
      className: "md:col-span-1 md:row-span-2 min-h-[320px]"
    },
    {
      title: "Candle burn checks",
      description: "All candles are tested for burn quality, ensuring proper wick performance, even melting, and safe burning characteristics before dispatch.",
      icon: Flame,
      className: "md:col-span-1 md:row-span-1 min-h-[280px]"
    },
    {
      title: "Balloon inflation tests",
      description: "Balloons undergo inflation testing to verify durability, proper sizing, and air retention capabilities, ensuring they meet our quality standards.",
      icon: Wind,
      className: "md:col-span-1 md:row-span-1 min-h-[280px]"
    },
    {
      title: "Durability checks for décor items",
      description: "All decorative items are tested for durability, material quality, and structural integrity to ensure they withstand normal use and handling.",
      icon: ShieldCheck,
      className: "md:col-span-1 md:row-span-1 min-h-[280px]"
    }
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F2F2]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="md:text-center text-left mb-8">
          {/* Label */}
          <div 
            className="inline-flex items-center gap-2 text-sm text-gray-600 mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
          </div>

          {/* Main Heading */}
          <h2 
            className="heading-md md:text-center text-left md:heading-lg max-w-4xl mx-auto mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}
          >
            {mainHeading.part1}
            <span className="text-[#2C328C]">{mainHeading.highlight}</span>
            {mainHeading.part2}
          </h2>

          {/* Description */}
          <p 
            className="body-sm text-gray-600 max-w-3xl mx-auto mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            {description}
          </p>

          {/* Separator Line */}
          <div 
            className="w-24 h-px bg-gray-300 mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}
          ></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {features.map((feature, index) => (
            <BentoCard
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;