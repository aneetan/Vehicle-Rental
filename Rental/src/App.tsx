import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css'
import Landing from './pages/Landing'
import RentRide from './components/landing/RentRide'
import LandingLayout from './pages/layout/LandingLayout'
import VehicleDetails from './pages/VehicleDetails'
import SearchVehicles from './pages/SearchVehicles'
import Register from './pages/authenticate/Register'
import Login from './pages/authenticate/Login'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingLayout/>}>
            <Route path="/" element={<Landing />} />
            <Route path='/rent' element={<RentRide/>}/>
            <Route path='/viewDetails' element={<VehicleDetails/>}/>
            <Route path='/searchVehicles' element={<SearchVehicles/>}/>
          </Route>

          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>


        </Routes>
    </Router>
  )
}

export default App
