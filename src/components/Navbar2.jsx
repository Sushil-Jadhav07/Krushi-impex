import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";

const MenuIcon = ({ isOpen }) => (
  <div className="w-6 h-5 flex flex-col justify-between">
    <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
    <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </div>
);

const PremiumNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #F16222;
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .glass-nav {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        html {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        @media (min-width: 768px) {
          .navbar-container {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
          
          .navbar-container.scrolled {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 w-full box-border navbar-container ${scrolled ? 'scrolled' : ''}`}
        style={{
          padding: scrolled ? '15px 16px' : '0',
          animation: 'slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          boxSizing: 'border-box',
          maxWidth: '100vw',
          pointerEvents: 'auto'
        }}
      >
        <div
          className="relative bg-gray-50 transition-all duration-700 overflow-hidden box-border mx-auto"
          style={{
            maxWidth: scrolled ? '1200px' : '100%',
            borderRadius: scrolled ? '9999px' : '0',
            padding: scrolled ? '15px 16px' : '12px 16px',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 50
          }}
        >
          <div className="flex items-center justify-between w-full min-w-0 relative z-50">
            <Link
              to="/"
              className="flex items-center z-10 transition-all duration-300 hover:opacity-80 flex-shrink-0 min-w-0"
            >
              <img 
                src="/krushi-logo.png" 
                alt="Krushi Impex Logo" 
                className="!h-[50px] md:h-16 w-auto object-contain max-w-[120px] md:max-w-none"
                style={{ height: scrolled ? '40px' : '40px' }}
              />
            </Link>

            <div className="hidden md:flex items-center gap-8 flex-shrink-0">
              {navLinks.map((link, index) => {
                // Use Link for routes, anchor for hash links
                const isRoute = link.href.startsWith('/');
                const Component = isRoute ? Link : 'a';
                const props = isRoute 
                  ? { to: link.href }
                  : { href: link.href };
                
                return (
                  <Component
                    key={index}
                    {...props}
                    className="nav-link text-base font-medium text-gray-700 hover:text-[#2C328C] transition-colors duration-300"
                  >
                    {link.label}
                  </Component>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
                style={{ boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)' }}
              >
                <FaWhatsapp size={22} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex-shrink-0 ml-2 relative z-[60]"
              aria-label="Toggle menu"
              style={{ 
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 60
              }}
              type="button"
            >
              <MenuIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)'
        }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-[60px] md:top-20 left-4 right-4 bg-white rounded-b-3xl p-6 shadow-2xl transition-all duration-300 max-h-[calc(100vh-80px)] overflow-y-auto ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4 mb-6">
            {navLinks.map((link, index) => {
              const isRoute = link.href.startsWith('/');
              const Component = isRoute ? Link : 'a';
              const props = isRoute 
                ? { to: link.href }
                : { href: link.href };
              
              return (
                <Component
                  key={index}
                  {...props}
                  className="text-base font-medium text-gray-700 hover:text-green-600 transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Component>
              );
            })}
          </div>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 bg-green-500 text-white text-center font-semibold rounded-full hover:bg-green-600 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className="bg-gray-50">
      <PremiumNavbar />
     
    </div>
  );
}