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
import { Testimonials } from '../components/ui/testimonials'
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
        text="Velocity Scroll" 
        default_velocity={5}
        className="font-bold text-4xl md:text-6xl lg:text-8xl text-black"
      />
      {/* <HeroSection /> */}
      <ProductCategories />
      <SparksCarousel />
      {/* <LandingAccordionItem /> */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <FeaturesSectionWithHoverEffects />
      </section>
      <AdvantagesSection />
      <ValuesSection />
      <Testimonials />
      <Footer onWhatsAppClick={handleWhatsApp} />
    </div>
  )
}

export default Home
