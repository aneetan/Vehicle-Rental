import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { FaCar, FaCodeBranch, FaCogs, FaGasPump, FaHeart, FaPeopleArrows, FaShareAlt, FaStar} from 'react-icons/fa';
import { IoMdSpeedometer } from "react-icons/io";
import Button, { ButtonType } from '../components/custom/Button';
import axios from 'axios';
import { GLOBAL_URL } from '../config/url';

interface VehicleSpec {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface VehicleDetails{
  type: string;
  text: string;
}

interface Vehicle{
  id: number;
  type: string;
  image: string;
  title: string;
  description: string;
  details : VehicleDetails[],
  price: number;
}

const VehicleDetails = () => {
  let params = useParams();
  const [vehicle, setVehicle] = useState<Vehicle>({
    id: 0,
    type: "",
    image: "",
    title: "",
    description: "",
    details: [],
    price: 0
  });
    const navigate = useNavigate();

    useEffect(() => {
      try{
      axios.get(`${GLOBAL_URL}/vehicles/${params.vehicleId}`)
        .then(response => {
          setVehicle(response.data);
        })
        .then(error => {
          console.log(error)
        })
      } catch(err){
        console.log(err)
      }
    } , [])


    const handleVehicleRent = () => {
        navigate('/bookNow')
    }

  return (
    <>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image Carousel */}
        <div className="lg:w-1/2">

                <img src={vehicle.image}
                    alt='vehicle image'
                    className='w-[100%] rounded-xl'
                />
            {/* </div> */}
          </div>

        {/* Right Column - Vehicle Details */}
        <div className="lg:w-1/2">
          <div className="sticky top-4">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-900">{vehicle.title}</h1>
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
                  <FaHeart />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
                  <FaShareAlt />
                </button>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center text-yellow-500">
                <FaStar className="fill-current" />
                <span className="ml-1 text-gray-700 font-medium">5</span>
              </div>
              <span className="text-gray-500">( 6 reviews)</span>
              <span className="text-gray-500">•</span>
            </div>

            <div className="mt-6">
              <span className="text-3xl font-bold text-[var(--primary-color)]">{vehicle.price}</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {vehicle.details.map((spec, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-white rounded-full">
                    { spec.type === "seats" && (<FaPeopleArrows />)}
                    { spec.type === "settings" && (<FaCogs />)}
                    { spec.type === "engine" && (<FaCodeBranch />)}
                    { spec.type === "fuel" && (<FaGasPump/>)}
                    { spec.type === "range" && (<FaCar/>)}
                    { spec.type === "speed" && (<IoMdSpeedometer />)}


                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{spec.type}</div>
                    <div className="font-medium">{spec.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{vehicle.description}</p>
            </div>

            <div className="mt-8">
              <Button variant={ButtonType.primary} onClick={handleVehicleRent}> Rent Now </Button>
            </div>
          </div>
        </div>
      </div>  
      </div>    
    </>
  )
}

export default VehicleDetails
