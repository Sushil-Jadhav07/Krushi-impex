import Navbar2 from '../components/Navbar2'
import ContactSection from '../components/contact/ContactSection'
import Footer from '../components/Footer'

function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar2 />
      <ContactSection />
      <Footer onWhatsAppClick={handleWhatsApp} />
    </div>
  )
}

export default Contact

