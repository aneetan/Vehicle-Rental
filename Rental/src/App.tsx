import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css'
import Landing from './pages/Landing'
import RentRide from './components/landing/RentRide'
import LandingLayout from './pages/layout/LandingLayout'
import VehicleDetails from './pages/VehicleDetails'
import SearchVehicles from './pages/SearchVehicles'
import Register from './pages/authenticate/Register'
import Login from './pages/authenticate/Login'
import RequestBooking from './pages/RequestBooking'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingLayout/>}>
            <Route path="/" element={<Landing />} />
            <Route path='/rent' element={<RentRide/>}/>
            <Route path='/viewDetails/:vehicleId' element={<VehicleDetails/>}/>
            <Route path='/searchVehicles' element={<SearchVehicles/>}/>
            <Route path='/requestBooking' element={<RequestBooking/>} />
            <Route path='/viewBookings' element= {<div> View Bookings </div>} />
            <Route path='/success' element={<div> Congrats success</div>} />
          </Route>

          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
  )
}

export default App
