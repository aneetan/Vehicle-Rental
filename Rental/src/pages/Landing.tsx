import AboutUs from "../components/landing/AboutUs"
import ContactUs from "../components/landing/ContactUs"
import CustomFooter from "../components/landing/CustomFooter"
import FAQs from "../components/landing/FAQs"
import HeroSection from "../components/landing/HeroSection"
import HowItWorks from "../components/landing/HowItWorks"
import Navbar from "../components/landing/Navbar"
import Rent from "../components/landing/Rent"
import RentRide from "../components/landing/RentRide"

const Landing = () => {
  return (
    <>
      <div className="landing-page">
      <HeroSection />
      
      <section id="rent">
        <RentRide />
      </section>
      
      <section id="how-it-works">
        <HowItWorks />
      </section>
      
      <section id="about">
        <AboutUs />
      </section>
      
      <section id="faqs">
        <FAQs />
      </section>
      
      <section id="contact">
        <ContactUs />
      </section>
    </div>
    </>
  )
}

export default Landing
