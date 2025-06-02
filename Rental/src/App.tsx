import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css'
import Landing from './pages/Landing'
import RentRide from './components/landing/RentRide'
import HowItWorks from './components/landing/HowItWorks'
import AboutUs from './components/landing/AboutUs'
import FAQs from './components/landing/FAQs'
import ContactUs from './components/landing/ContactUs'
import Navbar from './components/landing/Navbar'
import HeroSection from './components/landing/HeroSection'

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/#rent" element={<RentRide />} />
          <Route path="/#how-it-works" element={<HowItWorks />} />
          <Route path="/#about" element={<AboutUs />} />
          <Route path="/#faqs" element={<FAQs />} />
          <Route path="/#contact" element={<ContactUs />} /> */}
        </Routes>
    </Router>
  )
}

export default App
