import React, { useState, useEffect, useRef } from 'react';

// Feature Item Component
const FeatureItem = ({ title, index, isActive, onClick }) => {
  const [isInView, setIsInView] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      onClick={onClick}
      className="group cursor-pointer relative"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`
      }}
    >
      {/* Active indicator line */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ${
          isActive ? 'bg-blue-600 opacity-100' : 'bg-gray-300 opacity-0 group-hover:opacity-50'
        }`}
        style={{
          transform: isActive ? 'scaleY(1)' : 'scaleY(0.5)',
          transformOrigin: 'top'
        }}
      ></div>

      {/* Content */}
      <div 
        className={`pl-6 py-6 transition-all duration-300 ${
          isActive ? 'pr-6' : 'pr-4'
        }`}
        style={{
          transform: isActive ? 'translateX(8px)' : 'translateX(0)'
        }}
      >
        <h3 
          className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
            isActive ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-800'
          }`}
        >
          {title}
        </h3>
      </div>

      {/* Hover background */}
      <div 
        className="absolute inset-0 bg-blue-50/50 rounded-lg -z-10 transition-opacity duration-300"
        style={{
          opacity: isActive ? 1 : 0
        }}
      ></div>
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
      title: "Factory-shared finished goods videos before shipment",
      description: "We receive and review detailed videos from our manufacturing partners showing finished products before they leave the factory, ensuring quality standards are met.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
      title: "Physical inspections after arrival in India",
      description: "Upon arrival in India, every shipment undergoes thorough physical inspection by our quality control team to verify product condition and specifications.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      title: "Candle burn checks",
      description: "All candles are tested for burn quality, ensuring proper wick performance, even melting, and safe burning characteristics before dispatch.",
      image: "https://images.unsplash.com/photo-1603561596111-7c8b5c443aa8?w=800&q=80"
    },
    {
      title: "Balloon inflation tests",
      description: "Balloons undergo inflation testing to verify durability, proper sizing, and air retention capabilities, ensuring they meet our quality standards.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
    },
    {
      title: "Durability checks for décor items",
      description: "All decorative items are tested for durability, material quality, and structural integrity to ensure they withstand normal use and handling.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    }
  ]
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Label */}
          <div 
            className="inline-flex items-center gap-2 text-sm text-gray-600 mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <span className="uppercase tracking-wider font-medium">{sectionLabel}</span>
          </div>

          {/* Main Heading */}
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}
          >
            {mainHeading.part1}
            <span className="text-blue-600">{mainHeading.highlight}</span>
            {mainHeading.part2}
          </h2>

          {/* Description */}
          <p 
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8"
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Features List */}
          <div className="order-2 lg:order-1 space-y-2">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Right Column - Image */}
          <div 
            className="order-1 lg:order-2 relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}
          >
            {/* Image Container with rounded corners */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              {/* Loading placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"></div>
              
              {/* Main Image */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    zIndex: activeIndex === index ? 1 : 0
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              ))}

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -z-10 -inset-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group relative"
                  aria-label={`Go to feature ${index + 1}`}
                >
                  {/* Background bar */}
                  <div className="w-12 h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                    {/* Progress fill */}
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-300"
                      style={{
                        width: activeIndex === index ? '100%' : '0%',
                        transition: activeIndex === index ? 'width 5s linear' : 'width 0.3s ease-out'
                      }}
                    ></div>
                  </div>
                </button>
              ))}
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
    <div className="min-h-screen bg-gray-50">
      <AdvantagesSection />
    </div>
  );
}