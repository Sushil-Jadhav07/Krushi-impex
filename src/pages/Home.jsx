import Navigation from '../components/Navigation'
import Navbar2 from '../components/Navbar2'
import BannerSection from '../components/home/BannerSection'
import HeroSection from '../components/home/HeroSection'
import ProductCategories from '../components/home/ProductCategories'
import VelocityScroll from '../components/home/VelocityScroll'
import SparksCarousel from '../components/home/SparksCarousel'
import AdvantagesSection from '../components/home/AdvantagesSection'
import ValuesSection from '../components/home/ValuesSection'
import { FeaturesSectionWithHoverEffects } from '../components/ui/feature-section-with-hover-effects'
import Testimonials from '../components/ui/testimonials'
import PremiumCTASection from '../components/home/Cta'
import Footer from '../components/Footer'
import { LandingAccordionItem } from '../components/home/LandingAccordionItem'

function Home() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
      <Navbar2 />
      <BannerSection />
      <VelocityScroll 
        text1="Birthday Candles │ Balloons │" 
        text2="Cake Toppers │ Party Décor Items │"
        default_velocity={2}
        className="font-bold text-3xl md:text-6xl mb-6 text-[#2C328C]"
        style={{ fontFamily: 'Conthrax, sans-serif' }}
      />
      {/* <HeroSection /> */}
      <ProductCategories />
      <SparksCarousel />
      {/* <LandingAccordionItem /> */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-16 bg-white">
        <FeaturesSectionWithHoverEffects />
      </section>
      <AdvantagesSection />
      <ValuesSection />
      <Testimonials />
      <PremiumCTASection />
      <Footer onWhatsAppClick={handleWhatsApp} />
    </div>
  )
}

export default Home
