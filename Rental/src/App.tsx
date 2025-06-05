import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css'
import Landing from './pages/Landing'
import RentRide from './components/landing/RentRide'
import LandingLayout from './pages/layout/LandingLayout'
import VehicleDetails from './pages/VehicleDetails'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingLayout/>}>
            <Route path="/" element={<Landing />} />
            <Route path='/rent' element={<RentRide/>}/>
            <Route path='/viewDetails' element={<VehicleDetails/>}/>
          </Route>
        </Routes>
    </Router>
  )
}

export default App
