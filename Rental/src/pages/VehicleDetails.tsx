import React from 'react'
import Carousel from '../components/custom/Carousel'
import { useNavigate } from 'react-router'
import { FaCalendar, FaGasPump, FaHeart, FaShareAlt, FaStar, FaUsers } from 'react-icons/fa';
import Button, { ButtonType } from '../components/custom/Button';

interface VehicleSpec {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const VehicleDetails = () => {
    const navigate = useNavigate();

     const vehicle = {
        id: 1,
        title: '2023 Tesla Model S Plaid',
        price: '$89,990',
        rating: 4.8,
        reviewCount: 124,
        description: 'The Tesla Model S Plaid is the highest-performance version of the Model S, featuring a tri-motor setup, 1,020 horsepower, and a 0-60 mph time of just 1.99 seconds.',
    };

    const specs: VehicleSpec[] = [
        { label: 'Seats', value: '5', icon: <FaUsers className="text-[var(--primary-color)] " /> },
        { label: 'Fuel', value: 'Electric', icon: <FaUsers className="text-[var(--primary-color)] " /> },
        { label: 'Year', value: '2023', icon: <FaCalendar className="text-[var(--primary-color)] " /> },
        { label: 'Mileage', value: '1,200 mi', icon: <FaGasPump className="text-[var(--primary-color)] " /> },
    ];


    const handleVehicleRent = () => {
        navigate('/bookNow')
    }

  return (
    <>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Image Carousel */}
        <div className="lg:w-1/2">

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhawhHOk2n0ohd9-LdQc0-KIOI3JXAWTjfA&s'
                    alt='vehicle image'
                    className='w-[180%] rounded-xl'
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
                <span className="ml-1 text-gray-700 font-medium">{vehicle.rating}</span>
              </div>
              <span className="text-gray-500">({vehicle.reviewCount} reviews)</span>
              <span className="text-gray-500">•</span>
            </div>

            <div className="mt-6">
              <span className="text-3xl font-bold text-[var(--primary-color)]">{vehicle.price}</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-white rounded-full">
                    {spec.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{spec.label}</div>
                    <div className="font-medium">{spec.value}</div>
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
