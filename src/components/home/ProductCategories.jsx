import React, { useState, useEffect, useRef } from 'react';

// Product Categories Data
const categories = [
  {
    id: 1,
    title: "Birthday Candles",
    subtitle: "Top-Selling Category",
    description: "Premium quality birthday candles for memorable celebrations. Our top-selling category features a wide variety of designs, sizes, and styles to make every birthday special. We import high-quality candles that burn evenly and create the perfect celebratory atmosphere.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
  },
  {
    id: 2,
    title: "Balloons",
    description: "Colorful balloons for every occasion. We supply high-quality latex and foil balloons in various sizes, shapes, and designs to brighten up any celebration. Perfect for birthdays, festivals, and special events.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
  },
  {
    id: 3,
    title: "Cake Toppers",
    description: "Elegant and creative cake toppers to make cakes special. From simple number toppers to elaborate decorative pieces, we offer a wide range of cake toppers that add the perfect finishing touch to any celebration cake.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
  },
  {
    id: 4,
    title: "Party Décor",
    description: "Complete décor solutions for birthdays, anniversaries, and festivals. Transform any space into a celebration with our premium decorations including banners, streamers, tableware, and themed party supplies.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
  }
];

// Arrow Icon Component
const ArrowIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-2"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Individual Category Card Component
const CategoryCard = ({ category, isHovered, onHover, onLeave }) => {
  return (
    <div
      className="relative overflow-hidden cursor-pointer group flex items-center justify-center p-4"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        flexShrink: 0,
        willChange: 'transform',
        transform: 'translateZ(0)',
        contain: 'layout paint'
      }}
    >
      {/* Glass Card */}
      <div 
        className="relative w-full rounded-3xl overflow-hidden transition-all duration-600 ease-out"
        style={{
          background: isHovered ? 'hsla(0, 0%, 100%, 0.95)' : 'hsla(0, 0%, 100%, 0.25)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          padding: '0rem',
          minHeight: '32.2rem',
          aspectRatio: '1 / 1',
          transitionProperty: 'background, backdrop-filter'
        }}
      >
        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          {/* Title - Shows when not hovered */}
          <div className={`flex-1 flex flex-col items-center justify-center transition-all duration-500 ${
            isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <h3 className="text-3xl px-4 sm:text-4xl md:text-5xl font-light text-white text-center">
              {category.title}
            </h3>
            {category.subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-white/80 mt-2 italic">
                {category.subtitle}
              </p>
            )}
          </div>
          
          {/* Description Card - Shows on hover */}
          <div className={`absolute inset-0 p-6 md:p-16 flex flex-col justify-between transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}>
            <div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-sm sm:text-base text-amber-600 mt-2 italic font-medium">
                    {category.subtitle}
                  </p>
                )}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {category.description}
              </p>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-300 my-4 sm:my-6"></div>
            
            {/* Tell me more link */}
            <button className="group/btn flex items-center justify-between text-gray-900 hover:text-gray-600 transition-colors">
              <span className="text-base sm:text-lg font-light">Tell me more</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Product Categories Component
const ProductCategories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentBg, setCurrentBg] = useState(categories[0].image);
  const sectionRef = useRef(null);

  // Handle background change based on hovered card
  useEffect(() => {
    if (hoveredCard !== null) {
      const category = categories.find(cat => cat.id === hoveredCard);
      if (category) {
        setCurrentBg(category.image);
      }
    }
  }, [hoveredCard]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const sectionTop = sectionRef.current.offsetTop;
        
        // Calculate parallax based on section visibility
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const parallaxValue = (scrolled - sectionTop) * 0.4;
          setScrollY(parallaxValue);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="products"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Parallax Background - Changes based on hovered card */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ 
          backgroundImage: `url(${currentBg})`,
          transform: `translateY(${scrollY}px)`,
          willChange: 'transform'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-4 md:py-16 ">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
        <div className="inline-block bg-blue-100/90 backdrop-blur-sm px-6 py-2 rounded-lg mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Product Categories</h3>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Our Range of Products
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md mb-6">
            We import and supply high-demand celebration products used across birthdays, festivals, and events. Our inventory evolves based on market trends and seasonal demand.
          </p>
          
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isHovered={hoveredCard === category.id}
              onHover={() => setHoveredCard(category.id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
      

      {/* Footer Note */}
      <div className="relative z-10 container mx-auto px-4 pb-8">
        <p className="text-center text-white/80 italic text-sm md:text-base">
          Product availability changes frequently. Contact us for the latest items and pricing.
        </p>
      </div>
    </section>
  );
};

export default ProductCategories;