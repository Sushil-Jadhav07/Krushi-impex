import React from 'react';
import { TrendingUp, Package } from 'lucide-react';
import birthdayCandlesImage from '../../assets/candles.png';
import balloonsImage from '../../assets/balloons.png';
import cakeToppersImage from '../../assets/cake-topper.png';
import partyDecorItemsImage from '../../assets/party-decor.png';

const ProductsRangeSection = () => {
  const productCategories = [
    {
      title: 'Birthday Candles',
      subtitle: '(Top-Selling Category)',
      image: birthdayCandlesImage
    },
    {
      title: 'Balloons',
      subtitle: '',
      image: balloonsImage
    },
    {
      title: 'Cake Toppers',
      subtitle: '',
      image: cakeToppersImage
    },
    {
      title: 'Party Décor Items',
      subtitle: 'for birthdays, anniversaries, and festivals',
      image: partyDecorItemsImage
    }
  ];

  return (
    <div className="w-full bg-[#F4F2F2] py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black"
          style={{ fontFamily: 'Conthrax, sans-serif' }}
        >
          Our Range of Products
        </h2>

        {/* Description */}
        <p 
          className="text-base md:text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed"
          style={{ fontFamily: 'Bahnschrift, sans-serif' }}
        >
          We import and supply high-demand celebration products used across birthdays, festivals, and events. Our inventory evolves based on market trends and seasonal demand.
        </p>

        {/* Product Categories Heading */}
        <h3 
          className="text-2xl md:text-3xl font-bold mb-8 text-black flex items-center gap-3"
          style={{ fontFamily: 'Conthrax, sans-serif' }}
        >
          Product Categories
          <TrendingUp size={28} className="text-[#F16222]" />
        </h3>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative bg-gray-300 rounded-2xl overflow-hidden aspect-[3/4] mb-4 hover:shadow-xl transition-shadow">

                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C328C] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                
                {/* Badge for Top-Selling */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 bg-[#F16222] text-white px-3 py-1 rounded-full text-xs font-bold"
                    style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                  >
                    TOP SELLING
                  </div>
                )}
              </div>

              {/* Product Info */}
              <h4 
                className="text-lg font-bold text-black mb-1 group-hover:text-[#F16222] transition-colors"
                style={{ fontFamily: 'Conthrax, sans-serif' }}
              >
                {category.title}
              </h4>
              
              {/* Subtitle */}
              {category.subtitle && (
                <p 
                  className="text-sm text-gray-600 italic"
                  style={{ fontFamily: 'Bahnschrift, sans-serif' }}
                >
                  {category.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-gradient-to-r from-[#2C328C] to-[#F16222] rounded-2xl p-6 md:p-8">
          <p 
            className="text-white text-center text-base md:text-lg italic"
            style={{ fontFamily: 'Bahnschrift, sans-serif' }}
          >
            Product availability changes frequently. Contact us for the latest items and pricing.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button 
            className="px-8 py-3 bg-[#F16222] text-white rounded-full font-bold hover:bg-[#D95C2F] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            style={{ fontFamily: 'Conthrax, sans-serif' }}
          >
            VIEW FULL CATALOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsRangeSection;