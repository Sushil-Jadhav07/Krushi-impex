import { FaInstagram, FaYoutube, FaWeixin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer({ onWhatsAppClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle Background Pattern or Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2C328C] via-[#F16222] to-[#2C328C]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="/krushi-logo.png" 
              alt="Krushi Impex Logo" 
              className="h-16 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Krushi Impex is a leading B2B import–trading company, founded by Mehul Shah, with over 8 years of experience in sourcing premium celebration and event products from China for the Indian market. 
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              <SocialLink href="https://www.instagram.com/krushi_impex/" icon={<FaInstagram />} label="Instagram" />
              <SocialLink href="https://www.youtube.com/@krushiimpex" icon={<FaYoutube />} label="YouTube" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide" style={{ fontFamily: 'Conthrax, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-4">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/contact" label="Contact Us" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide" style={{ fontFamily: 'Conthrax, sans-serif' }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group cursor-pointer" onClick={onWhatsAppClick}>
                <div className="mt-1 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#25D366] transition-colors border border-gray-800">
                  <FaWhatsapp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>WhatsApp</span>
                  <span className="text-white group-hover:text-[#25D366] transition-colors text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>+91 7666416997</span>
                </div>-
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <a href="mailto:krushiimpex@gmail.com" className="flex gap-3 w-full">
                  <div className="mt-1 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#EA4335] transition-colors border border-gray-800">
                    <FaEnvelope className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Email</span>
                    <span className="text-white group-hover:text-[#EA4335] transition-colors text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>krushiimpex@gmail.com</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="mt-1 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-[#07C160] transition-colors border border-gray-800">
                  <FaWeixin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>WeChat ID</span>
                  <span className="text-white group-hover:text-[#07C160] transition-colors text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>info_kimpex</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white tracking-wide" style={{ fontFamily: 'Conthrax, sans-serif' }}>Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Subscribe to get the latest updates on trending products and new arrivals.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-900 border border-gray-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-[#F16222] transition-colors font-light placeholder-gray-600"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#F16222] text-white px-4 rounded-md text-xs font-bold hover:bg-[#D95C2F] transition-colors tracking-wide">
                JOIN
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            &copy; {currentYear} Krushi Impex. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, label }) => {
  const isInternal = href.startsWith('/') && !href.includes('#');

  if (isInternal) {
    return (
      <li>
        <Link 
          to={href} 
          className="text-gray-400 hover:text-[#F16222] transition-colors text-sm flex items-center gap-2 group"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gray-800 group-hover:bg-[#F16222] transition-colors"></span>
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-[#F16222] transition-colors text-sm flex items-center gap-2 group"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gray-800 group-hover:bg-[#F16222] transition-colors"></span>
        {label}
      </a>
    </li>
  );
};

export default Footer

