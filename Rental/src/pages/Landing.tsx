import AboutUs from "../components/AboutUs"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import Navbar from "../components/Navbar"
import Rent from "../components/Rent"

const Landing = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Rent/>
      <HowItWorks/>
      <AboutUs/>
    </>
  )
}

export default Landing
