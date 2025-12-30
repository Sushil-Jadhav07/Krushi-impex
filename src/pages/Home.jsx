import Navigation from '../components/Navigation'
import BannerSection from '../components/BannerSection'
import HeroSection from '../components/HeroSection'
import ProductCategories from '../components/ProductCategories'
import VelocityScroll from '../components/VelocityScroll'
import SparksCarousel from '../components/SparksCarousel'
import WhoWeServe from '../components/WhoWeServe'
import WhyKrushiImpex from '../components/WhyKrushiImpex'
import Footer from '../components/Footer'
import { LandingAccordionItem } from '../components/LandingAccordionItem'

function Home() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BannerSection />
      <VelocityScroll 
        text="Velocity Scroll" 
        default_velocity={5}
        className="font-bold text-4xl md:text-6xl lg:text-8xl text-black"
      />
      {/* <HeroSection /> */}
      <ProductCategories />
      <SparksCarousel />
      <LandingAccordionItem />
      <WhoWeServe />
      <WhyKrushiImpex />
      <Footer onWhatsAppClick={handleWhatsApp} />
    </div>
  )
}

export default Home
