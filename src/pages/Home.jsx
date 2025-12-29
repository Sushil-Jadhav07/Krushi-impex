import { useState, useEffect } from 'react'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]))
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Krushi Impex
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Products
              </a>
              <a href="#who-we-serve" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Who We Serve
              </a>
              <a href="#why-us" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Why Us
              </a>
              <a href="#quality" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Quality
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-amber-600 focus:outline-none transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors">
                  Home
                </a>
                <a href="#products" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors">
                  Products
                </a>
                <a href="#who-we-serve" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors">
                  Who We Serve
                </a>
                <a href="#why-us" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors">
                  Why Us
                </a>
                <a href="#quality" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors">
                  Quality
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.1),transparent_50%)]"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in">
            <p className="text-amber-700 font-semibold text-sm md:text-base mb-4 tracking-wider uppercase">
              India's Celebration Partner
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
                India's Celebration
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
                Partner
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-lg md:text-xl text-gray-700 font-medium">
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">Import</span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">Sourcing</span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">Trading</span>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md">Pan-India B2B Supply</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Sourcing trending celebration and event products from China and supplying India's wholesalers, 
              retailers, and event businesses with <span className="font-semibold text-amber-700">speed, quality, and reliability</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow">
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button 
                onClick={handleWhatsApp}
                className="group px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Range of Products */}
      <section id="products" className="py-24 bg-white relative overflow-hidden" data-animate="products">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${visibleSections.has('products') ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Range of Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We import and supply high-demand celebration products used across birthdays, festivals, and events. 
              Our inventory evolves based on market trends and seasonal demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Birthday Candles */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-amber-100">
              <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Top-Selling
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Birthday Candles</h3>
              <p className="text-gray-600">Premium quality candles for memorable celebrations</p>
            </div>

            {/* Balloons */}
            <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-pink-100">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Balloons</h3>
              <p className="text-gray-600">Colorful balloons for every occasion</p>
            </div>

            {/* Cake Toppers */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cake Toppers</h3>
              <p className="text-gray-600">Elegant toppers to make cakes special</p>
            </div>

            {/* Party Décor */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Party Décor</h3>
              <p className="text-gray-600">Complete décor for birthdays, anniversaries, and festivals</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              Product availability changes frequently. Contact us for the latest items and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who-we-serve" className="py-24 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden" data-animate="who-we-serve">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${visibleSections.has('who-we-serve') ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for India's Celebration Businesses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Wholesalers',
              'Semi-wholesalers',
              'Retailers',
              'Party supply stores',
              'Bakeries',
              'Event shops & planners',
              'Event companies',
              'E-commerce sellers'
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Krushi Impex */}
      <section id="why-us" className="py-24 bg-white relative overflow-hidden" data-animate="why-us">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${visibleSections.has('why-us') ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Krushi Impex?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌏',
                title: 'Direct Sourcing',
                description: 'Direct sourcing from trusted manufacturers in China'
              },
              {
                icon: '💰',
                title: 'Competitive Pricing',
                description: 'Competitive bulk pricing designed for healthy margins'
              },
              {
                icon: '📦',
                title: 'Ready Inventory',
                description: 'Ready inventory maintained in India'
              },
              {
                icon: '✅',
                title: 'Quality Checked',
                description: 'Quality-checked products before dispatch'
              },
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Fast Pan-India B2B delivery'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-amber-100"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden" data-animate="quality">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${visibleSections.has('quality') ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality You Can Rely On
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product we supply goes through checks to ensure reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Factory Videos',
                description: 'Factory-shared finished goods videos before shipment',
                icon: '🎥'
              },
              {
                title: 'Physical Inspections',
                description: 'Physical inspections after arrival in India',
                icon: '🔍'
              },
              {
                title: 'Candle Burn Checks',
                description: 'Candle burn checks for quality assurance',
                icon: '🕯️'
              },
              {
                title: 'Balloon Tests',
                description: 'Balloon inflation tests for durability',
                icon: '🎈'
              },
              {
                title: 'Décor Durability',
                description: 'Durability checks for décor items',
                icon: '✨'
              }
            ].map((check, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{check.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{check.title}</h3>
                <p className="text-gray-600">{check.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white relative overflow-hidden" data-animate="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${visibleSections.has('contact') ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Power Your Celebrations
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-amber-100">
            Looking for a reliable celebration product importer and supplier?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-amber-700 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Get a Quote
            </button>
            <button 
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Krushi Impex
              </h3>
              <p className="text-gray-400">
                India's Celebration Partner - Importing and supplying quality celebration products across India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Products</a></li>
                <li><a href="#who-we-serve" className="hover:text-amber-400 transition-colors">Who We Serve</a></li>
                <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Us</a></li>
                <li><a href="#quality" className="hover:text-amber-400 transition-colors">Quality</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <a href="#" onClick={handleWhatsApp} className="hover:text-amber-400 transition-colors">WhatsApp Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Krushi Impex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
