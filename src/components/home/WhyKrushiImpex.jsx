import React, { useState, useEffect } from 'react';

const WhyKrushiImpex = ({
  title = "WHY KRUSHI IMPEX?",
  description = "Your trusted partner in celebration supplies, delivering quality products and exceptional service across India.",
  features = [
    "Direct sourcing from trusted manufacturers in China",
    "Competitive bulk pricing designed for healthy margins",
    "Ready inventory maintained in India",
    "Quality-checked products before dispatch",
    "Fast Pan-India B2B delivery"
  ],
  imageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content (reversed from WhoWeServe) */}
          <div className="relative order-1 lg:order-1 space-y-6 sm:space-y-8">
            {/* Title */}
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {title}
            </h2>

            {/* Description */}
            <p 
              className={`text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              {description}
            </p>

            {/* Features List */}
            <ul 
              className={`space-y-3 sm:space-y-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Checkmark Icon */}
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg text-gray-700 font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image (reversed from WhoWeServe) */}
          <div className="relative order-2 lg:order-2">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              {/* Background Image */}
              <img
                src={imageUrl}
                alt="Krushi Impex"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKrushiImpex;

