import React, { useState, useEffect, useRef } from 'react';

// Icon Components
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const WarehouseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35"></path>
    <path d="m6 18 6-6 6 6"></path>
    <path d="M6 14h12"></path>
    <path d="M2 8.35 12 2l10 6.35"></path>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3h5v13h-5"></path>
    <path d="M14 16H9m-7 0h2"></path>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 17A2.5 2.5 0 1 1 9 19.5H6.5"></path>
    <path d="M19 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
    <path d="M14 13V8a2 2 0 0 0-2-2H4"></path>
  </svg>
);

// Value Card Component
const ValueCard = ({ icon: Icon, title, description, index }) => {
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`
      }}
    >
      {/* Animated background glow on hover */}
      <div 
        className="absolute -inset-2 bg-gradient-to-r from-[#2C328C] via-[#2C328C] to-[#2C328C] rounded-2xl opacity-0 blur-xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.3 : 0
        }}
      ></div>

      <div className="relative flex items-start gap-4 p-6 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300">
        {/* Icon Container with animations */}
        <div 
          className="relative flex-shrink-0"
          style={{
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {/* Floating background circles */}
          <div 
            className="absolute inset-0 bg-[#2C328C] rounded-xl opacity-20 blur-md"
            style={{
              transform: isHovered ? 'scale(1.4)' : 'scale(1)',
              transition: 'transform 0.4s ease-out'
            }}
          ></div>
          
          <div 
            className="relative bg-gradient-to-br from-[#2C328C] to-[#2C328C] p-3 rounded-xl shadow-lg"
            style={{
              boxShadow: isHovered ? '0 10px 30px rgba(59, 130, 246, 0.5)' : '0 4px 10px rgba(59, 130, 246, 0.3)',
              transition: 'box-shadow 0.3s ease-out'
            }}
          >
            <div 
              className="text-white"
              style={{
                transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: 'transform 0.6s ease-out'
              }}
            >
              <Icon />
            </div>
          </div>

          {/* Orbiting dots on hover */}
          {isHovered && (
            <>
              <div 
                 className="absolute top-0 right-0 w-2 h-2 bg-[#2C328C] rounded-full"
                style={{
                  animation: 'orbit 2s linear infinite'
                }}
              ></div>
              <div 
                 className="absolute bottom-0 left-0 w-2 h-2 bg-[#2C328C] rounded-full"
                style={{
                  animation: 'orbit 2s linear infinite',
                  animationDelay: '1s'
                }}
              ></div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 
            className="heading-xs mb-2"
            style={{
              transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.3s ease-out'
            }}
          >
            {title}
          </h3>
          <p 
            className="body-sm text-gray-600 leading-relaxed"
            style={{
              transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.3s ease-out 0.05s'
            }}
          >
            {description}
          </p>
        </div>

        {/* Arrow indicator that appears on hover */}
        <div 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2C328C]"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
            transition: 'all 0.3s ease-out'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

// Main Values Section Component
const ValuesSection = ({
  sectionTitle = "Why Choose Us",
  mainHeading = "WHY KRUSHI IMPEX?",
  ctaText = "Get Started",
  ctaHref = "#contact",
  values = [
    {
      icon: GlobeIcon,
      title: "Direct sourcing from trusted manufacturers in China",
      description: "We work directly with trusted manufacturers in China, ensuring quality products and competitive pricing for your business."
    },
    {
      icon: DollarIcon,
      title: "Competitive bulk pricing designed for healthy margins",
      description: "Our bulk pricing structure is designed to help you maintain healthy profit margins while staying competitive in the market."
    },
    {
      icon: WarehouseIcon,
      title: "Ready inventory maintained in India",
      description: "We maintain ready inventory in India, ensuring faster delivery times and reduced waiting periods for your orders."
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality-checked products before dispatch",
      description: "Every product undergoes thorough quality checks before dispatch, ensuring you receive only the best quality items."
    },
    {
      icon: TruckIcon,
      title: "Fast Pan-India B2B delivery",
      description: "We offer fast and reliable Pan-India B2B delivery services, ensuring your products reach you on time, every time."
    }
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
     <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F2F2]">
      <style>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(30px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(30px) rotate(-360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Heading & CTA */}
          <div className="lg:sticky lg:top-24">
            {/* Section Title */}
            <div 
              className="mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                 <div className="w-8 h-px bg-gradient-to-r from-[#2C328C] to-transparent"></div>
                <span className="uppercase tracking-wider font-medium">{sectionTitle}</span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 
              className="heading-lg mb-8 sm:mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
              }}
            >
              {mainHeading}
            </h2>

            {/* CTA Button */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
              }}
            >
              <a
                href={ctaHref}
                className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span>{ctaText}</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Decorative floating elements */}
            <div className="hidden lg:block relative mt-12">
              <div 
                 className="absolute w-20 h-20 bg-[#2C328C]/10 rounded-full blur-2xl"
                style={{ animation: 'float 3s ease-in-out infinite' }}
              ></div>
              <div 
                 className="absolute w-32 h-32 bg-[#2C328C]/10 rounded-full blur-2xl left-20 top-10"
                style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '0.5s' }}
              ></div>
            </div>
          </div>

          {/* Right Column - Value Cards */}
          <div className="space-y-4 sm:space-y-6">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Demo App
export default function App() {
  return (
    <div className="min-h-screen">
      <ValuesSection />
    </div>
  );
}