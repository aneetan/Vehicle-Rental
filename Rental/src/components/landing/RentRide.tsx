import React, { useEffect, useState } from 'react'
import Button, { ButtonType } from '../custom/Button';
import { FaUserFriends, FaTachometerAlt, FaGasPump, FaBolt, FaCogs } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import { GLOBAL_URL } from '../../config/url';

enum VehicleType {
    CAR = 'car',
    BIKE = 'bike',
    SCOOTER = 'scooter'
}

interface VehicleDetail {
    type: 'seats' | 'settings' | 'engine' | 'fuel' | 'range' | 'speed';
    text: string;
}

interface Vehicle {
    id: number;
    image: string;
    title: string;
    description: string;
    details: VehicleDetail[];
    price: string;
}

type VehiclesData ={
    [key in VehicleType] : Vehicle[];
}


const RentRide = () => {
    const [activeVehicle, setActiveVehicle] = useState<VehicleType>(VehicleType.CAR);
    const [vehicleData, setVehicleData] = useState<VehiclesData>({
      [VehicleType.CAR] : [],
      [VehicleType.BIKE] : [],
      [VehicleType.SCOOTER] : []
    })
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    const topPadding = location.pathname ==='/searchVehicles' ? 'pt-4' : 'pt-20';
    const isSearchPage = location.pathname === '/searchVehicles';


    //function to get the icon
    const getIcon = (detailType: string) => {
      switch(detailType){
        case 'seats':
          return <FaUserFriends className='mr-1'/> ;
        case "settings":
          return <FaCogs className='mr-1'/>
        case 'engine':
          return <FaTachometerAlt className='mr-1'/>;
        case 'fuel':
          return <FaGasPump className='mr-1'/>
        case 'range':
          return <FaBolt className='mr-1'/>
        case 'speed':
          return <FaTachometerAlt className='mr-1'/>
        default:
          return null;
      }
    }

    useEffect(() => {
      const fetchVehicles = async() => {
        setLoading(true)
        try{
          const response = await axios.get(`${GLOBAL_URL}/vehicles`);
          const allVehicles = response.data;

          const groupedData: VehiclesData = {
            [VehicleType.CAR] : allVehicles.filter((vehicle) => vehicle.type === VehicleType.CAR),
            [VehicleType.BIKE] : allVehicles.filter((vehicle) => vehicle.type === VehicleType.BIKE),
            [VehicleType.SCOOTER] : allVehicles.filter((vehicle) => vehicle.type === VehicleType.SCOOTER),
          }

          setVehicleData(groupedData);

        } catch (error){
          console.log("Error fetching data", error)
      } finally {
        setLoading(false);
      }
      }
      fetchVehicles();
    }, [])

    const tabs = [
        {id: VehicleType.CAR, label: 'Car'},
        {id: VehicleType.BIKE, label: 'Bike'},
        {id: VehicleType.SCOOTER, label: 'Scooter'}
    ]

    const handleTabChange = (type:VehicleType) => {
      setActiveVehicle(type);
    }

    const handleViewDetails = (id: number) => {
      navigate(`/viewDetails/${id}`);
    }

  return (
    <section className= {`bg-white ${topPadding} `} id='#rent'>
      {loading &&(
      <span className='text-xl text-gray-500'> Loading Vehicle Data.........</span>
      )}
        <div className="container px-24 pt-40 pb-24 lg:pb-24 lg:py-12">
            <div className="flex flex-col items-center mb-6">
                <h2 className=" relative text-3xl font-bold text-center mb-8 text-gray-900">Rent Your Perfect Ride
                     <p className="text-base text-gray-600 font-medium">
                        Choose from our wide selection of vehicles
                    </p>
                    <hr className="w-[40%] bg-[var(--primary-color)] absolute left-1/2 py-0.5 border-none -translate-x-1/2 bottom-[-8px] mx-auto" />
                </h2>
            </div>


            {/* only show the search abr if it is a searchVehicle page */}
            {isSearchPage && (
              <div className='flex justify-center items-center'>
                <form className="flex mb-6 w-1/2">
                  <input
                    type="search"
                    placeholder="Search rides here..."
                    className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300
                      rounded-3xl focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </form>
              </div>
            )}

            {/* Tabs */}
            <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-full p-1 bg-gray-100">
                    {tabs.map((tab) => (
                        <button
                        key={tab.id}
                        className={`px-6 py-2 rounded-full font-medium transiiton-colors 
                        ${ activeVehicle === tab.id ? 'bg-[var(--primary-color)] text-white' : 'text-gray-700 hover:bg-gray-200'}`}
                        onClick={() => handleTabChange(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

               {vehicleData[activeVehicle].length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <h3 className="text-xl font-semibold text-gray-700">
                      No vehicles available
                    </h3>

                  </div>
              )}
            
            {vehicleData[activeVehicle].map((vehicle) => (
                <div
                key={`${activeVehicle}-${vehicle.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-5 flex flex-row justify-between">
                  <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {vehicle.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{vehicle.description}</p>
                      
                      <div className="flex gap-4 mb-4">
                      {vehicle.details.map((detail, index) => (
                          <span key={index} className="flex items-center text-sm text-gray-500">
                            {getIcon(detail.type)}
                          {detail.text}
                          </span>
                      ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-lg font-semibold text-[var(--primary-color)]">
                        Rs. {vehicle.price}/hr
                      </span>
                    </div>
                   </div> 

                    
                    <div className="flex items-center justify-between m-4">
                      <Button variant={ButtonType.primary}>Rent Now</Button>
                      <Button variant={ButtonType.secondary} onClick={() => handleViewDetails(vehicle.id)}> View Details </Button>
                    </div>
                </div>
            ))}
            </div>

            {!isSearchPage &&(
              <div className="text-center">
                <a
                    href="/searchVehicles"
                    className="inline-block px-8 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)]
                    font-medium rounded-full hover:bg-[var(--primary-color)] hover:text-white transition-colors"
                >
                    View All Vehicles
                </a>
              </div>
            )}

            
      </div>
    </section>
  )
}

export default RentRide
