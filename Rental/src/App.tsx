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
import LandingLayout from './pages/layout/LandingLayout'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingLayout/>}>
            <Route path="/" element={<Landing />} />
            <Route path='/rent' element={<RentRide/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default App
