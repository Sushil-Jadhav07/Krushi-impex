import Navbar2 from '../components/Navbar2'
import AboutHeroSection from '../components/about/AboutHeroSection'
import AboutValuesSection from '../components/about/AboutValuesSection'
import Footer from '../components/Footer'

function About() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar2 />
      <AboutHeroSection />
      <AboutValuesSection />
      <Footer onWhatsAppClick={handleWhatsApp} />
    </div>
  )
}

export default About

