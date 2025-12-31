import { useState, useEffect } from 'react'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-transparent' 
        : 'bg-gray-50 backdrop-blur-md '
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-300 py-2">
          <div className={`flex justify-between items-center transition-all duration-300 h-20 ${
            isScrolled 
              ? 'bg-gray-50 rounded-2xl border border-gray-200 px-6 shadow-sm' 
              : ''
          }`}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src="/krushi-logo.png" 
                alt="Krushi Impex Logo" 
                className="w-auto object-contain h-12 md:h-16 transition-all duration-300"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 transition-all duration-300">
            <a href="#home" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-all duration-300">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-all duration-300">
              Products
            </a>
            <a href="#who-we-serve" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-all duration-300">
              Who We Serve
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-all duration-300">
              Why Us
            </a>
            <a href="#quality" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-all duration-300">
              Quality
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-all duration-300">
              Contact
            </a>
            <button 
              onClick={handleWhatsApp}
              className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </button>
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
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden pb-4 animate-fade-in transition-all duration-300 ${
            isScrolled 
              ? 'mt-2 bg-white rounded-2xl border border-gray-200 px-4 shadow-sm' 
              : ''
          }`}>
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
              <button 
                onClick={() => {
                  setMenuOpen(false)
                  handleWhatsApp()
                }}
                className="w-full mt-2 px-4 py-2 bg-green-500 text-white rounded-md font-semibold text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

