import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productRequirement: '',
    estimatedQuantity: ''
  });
  const sectionRef = useRef(null);
  const heroRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917666416997', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:krushiimpex@gmail.com';
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .gradient-text {
          background: linear-gradient(135deg, #2C328C 0%, #2C328C 50%, #2C328C 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease infinite;
          line-height: 1.3;
          display: inline-block;
          padding-bottom: 0.15em;
        }
      `}</style>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative w-full pt-20 md:pt-32 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #f0f7ff 50%, #ffffff 75%, #f8fafc 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-[#2C328C]/5 rounded-full blur-3xl"
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          ></div>
          <div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#2C328C]/5 rounded-full blur-3xl"
            style={{ animation: 'pulse 5s ease-in-out infinite 1s' }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2C328C]/3 rounded-full blur-3xl"
            style={{ animation: 'pulse 6s ease-in-out infinite 2s' }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-32 left-20 text-[#2C328C]/10"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div 
            className="absolute bottom-32 right-20 text-[#2C328C]/10"
            style={{ animation: 'float 7s ease-in-out infinite 1s' }}
          >
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <div 
            className="absolute top-1/3 right-32 text-[#2C328C]/10"
            style={{ animation: 'float 8s ease-in-out infinite 2s' }}
          >
            <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div
            className="flex justify-center mb-8"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-[#2C328C] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}
          >
            <h1 className="heading-lg mb-8 text-center">
              <span className="block mb-2">
                Looking for bulk celebration products,
              </span>
              <span className="block mb-2">
                trending party items, or
              </span>
              <span className="block gradient-text">
                custom sourcing from China?
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <p className="body-lg text-center max-w-3xl mx-auto">
              Connect with us and let's discuss your requirements
            </p>
          </div>

          {/* Decorative Line */}
          <div
            className="flex justify-center mt-12"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
            }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#2C328C] to-transparent rounded-full"></div>
          </div>

         
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        ref={sectionRef}
         className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F4F2F2]"
      >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Contact Details */}
          <div 
            className="space-y-6 lg:col-span-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Contact Details Header */}
            <div>
              <h2 className="heading-md mb-8">
                CONTACT DETAILS
              </h2>
              
              <div className="space-y-6">
                {/* Founder Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-[#2C328C] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="heading-md text-base mb-1">Mehul Shah</h3>
                      <p className="body-md">Founder, Krushi Impex</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center gap-4 text-left group"
                  >
                     <div className="w-12 h-12 bg-[#F16222] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                      <p className="text-lg font-semibold text-gray-900 group-hover:text-[#2C328C] transition-colors">
                        +91 7666416997
                      </p>
                    </div>
                  </button>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <button
                    onClick={handleEmail}
                    className="w-full flex items-center gap-4 text-left group"
                  >
                     <div className="w-12 h-12 bg-[#2C328C] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="text-lg font-semibold text-[#2C328C] underline group-hover:text-[#F16222] transition-colors">
                        krushiimpex@gmail.com
                      </p>
                    </div>
                  </button>
                </div>

                {/* WeChat ID */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#F16222] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.042-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.598-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm11.041-3.803c-4.196 0-7.598 3.362-7.598 7.498 0 2.122.918 4.024 2.369 5.344a.59.59 0 0 1 .214.665l-.39 1.481c-.019.07-.048.141-.048.212 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.113a.864.864 0 0 1 .718-.099c.91.151 1.84.227 2.785.227 4.196 0 7.598-3.362 7.598-7.498 0-4.137-3.402-7.499-7.598-7.499zm-2.836 4.534c.519 0 .94.427.94.953a.948.948 0 0 1-.94.952.948.948 0 0 1-.94-.952c0-.526.421-.953.94-.953zm-4.806 0c.519 0 .94.427.94.953a.948.948 0 0 1-.94.952.948.948 0 0 1-.94-.952c0-.526.421-.953.94-.953z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">WeChat ID</p>
                      <p className="text-lg font-semibold text-gray-900">info_kimpex</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-gray-100 lg:col-span-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <div className="mb-6">
              <h2 className="heading-md mb-2">
                CONTACT FORM
              </h2>
              <p className="body-md">Fill out the form below and we'll get back to you soon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Full Name and Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C328C] focus:border-transparent transition-all duration-300 outline-none text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C328C] focus:border-transparent transition-all duration-300 outline-none text-sm"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C328C] focus:border-transparent transition-all duration-300 outline-none text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C328C] focus:border-transparent transition-all duration-300 outline-none text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Product Requirement */}
              <div>
                <label htmlFor="productRequirement" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Product Requirement <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="productRequirement"
                  name="productRequirement"
                  value={formData.productRequirement}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C328C] focus:border-transparent transition-all duration-300 outline-none resize-none text-sm"
                  placeholder="Describe your product requirements"
                />
              </div>

              {/* Estimated Quantity */}
              <div>
                <label htmlFor="estimatedQuantity" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Estimated Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="estimatedQuantity"
                  name="estimatedQuantity"
                  value={formData.estimatedQuantity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C328C] focus:border-transparent transition-all duration-300 outline-none text-sm"
                  placeholder="Enter estimated quantity"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                 className="w-full bg-[#F16222] text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-[#D95C2F] transition-all duration-300 hover:scale-105 hover:shadow-xl transform mt-2"
              >
                Get Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;

