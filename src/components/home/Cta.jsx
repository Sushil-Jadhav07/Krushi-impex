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
            box-shadow: 0 10px 25px rgba(44, 50, 140, 0.3);
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
          className="bg-[#F4F2F2] relative w-full flex items-center justify-center px-4 py-20"
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
              <h2 className="heading-lg mb-4">
                Let's Power Your Celebrations
                <br />
                {/* <span className="text-[#2C328C]">
                  Celebrations
                </span> */}
              </h2>

              {/* Subtext */}
              <p className="body-lg mb-8 max-w-2xl mx-auto">
                Looking for a reliable celebration product importer and supplier?
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button className="btn-primary w-full sm:w-auto px-8 py-4 bg-[#F16222] text-white font-semibold rounded-full text-base md:text-lg hover:bg-[#D95C2F]">
                  Get a Quote
                </button>

                <a href="/contact" className="btn-secondary w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-full border border-gray-300 text-base md:text-lg hover:bg-gray-200">
                  <span className="text-gray-900">Contact Us</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumCTASection;