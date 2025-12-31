import React, { useState, useEffect, useRef } from 'react';

const PremiumCTASection = () => {
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
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .content-wrapper {
          opacity: 0;
        }

        .content-wrapper.visible {
          animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .btn-primary {
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 73, 175, 0.3);
        }

        .btn-secondary {
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-gray-50 relative w-full flex items-center justify-center px-4 py-20"
      >
        {/* Main Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div
            className={`bg-white rounded-3xl p-8 md:p-12 content-wrapper shadow-lg ${
              isVisible ? 'visible' : ''
            }`}
          >
            {/* Content */}
            <div className="text-center max-w-4xl mx-auto">
              {/* Section Label */}
              <div className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">
                Final CTA
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Power Your
                <br />
                <span className="text-[#0049AF]">
                  Celebrations
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Looking for a reliable celebration product importer and supplier?
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-primary w-full sm:w-auto px-8 py-4 bg-[#0049AF] text-white font-semibold rounded-full text-base md:text-lg">
                  Get a Quote
                </button>

                <button className="btn-secondary w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-full border border-gray-300 text-base md:text-lg hover:bg-gray-200">
                  Contact Us
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumCTASection;