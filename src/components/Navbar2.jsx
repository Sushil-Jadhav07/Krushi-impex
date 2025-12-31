import React, { useState, useEffect, useRef } from 'react';

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
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Who We Serve", href: "#who-we-serve" },
    { label: "Why Us", href: "#why-us" },
    { label: "Quality", href: "#quality" },
    { label: "Contact", href: "#contact" }
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

  useEffect(() => {
    if (scrolled && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [scrolled, mobileMenuOpen]);

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
          background: #25D366;
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .glass-nav {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>

      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          padding: scrolled ? '15px 16px' : '0',
          animation: 'slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <div
          className="relative bg-gray-50 transition-all duration-700"
          style={{
            maxWidth: scrolled ? '1200px' : '1400px',
            margin: '0 auto',
            borderRadius: scrolled ? '9999px' : '0',
            padding: scrolled ? '15px 24px' : '16px 24px'
          }}
        >
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="flex items-center z-10 transition-all duration-300 hover:opacity-80"
            >
              <img 
                src="/krushi-logo.png" 
                alt="Krushi Impex Logo" 
                className="h-12 md:h-16 w-auto object-contain"
                style={{ height: scrolled ? '48px' : '64px' }}
              />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="nav-link text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
                style={{ boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)' }}
              >
                <span className="relative z-10">WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
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
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4 mb-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-green-600 transition-colors duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
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