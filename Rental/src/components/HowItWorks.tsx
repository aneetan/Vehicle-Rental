import RentAVehicle from '../assets/images/rent.png'
import DriveVehicle from '../assets/images/drive.png'
import DropVehicle from '../assets/images/drop.png'

const HowItWorks = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container px-6 pt-60 pb-24 lg:pb-24 lg:py-36">
          <div className="flex flex-col items-center mb-12">
                <h2 className=" relative text-3xl font-bold text-center mb-8 text-gray-900">How It Works?
                    <hr className="w-[40%] bg-[var(--primary-color)] absolute left-1/2 py-0.5 border-none -translate-x-1/2 bottom-[-8px] mx-auto" />
                </h2>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-12">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow items-center">
              <div className=" relative flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <span className='absolute top-0 right-0 w-5 h-5 text-xs font-bold text-white bg-[var(--primary-color)] rounded-full flex items-center justify-center'> 1 </span>
                <img className="w-10 h-10" src={RentAVehicle} alt="Book a Car Icon" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2"> Book a Vehicle </h3>
              <p className="text-sm text-gray-600]">Choose a vehicle that fits your needs and reserve it online easily.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <img className="w-8 h-8" src={DriveVehicle} alt="Enjoy Your Ride Icon" />
                <span className='absolute top-0 right-0 w-5 h-5 text-xs font-bold text-white bg-[var(--primary-color)] rounded-full flex items-center justify-center'> 2 </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pick Up & Drive</h3>
              <p className="text-sm text-gray-600">Collect your vehicle and start your journey without hassle.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <img className="w-8 h-8" src={DropVehicle} alt="Return Car Icon" />
                <span className='absolute top-0 right-0 w-5 h-5 text-xs font-bold text-white bg-[var(--primary-color)] rounded-full flex items-center justify-center'> 3 </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Return the Vehicle</h3>
              <p className="text-sm text-gray-600">Drop off the car at the selected location and you're done!</p>
            </div>
          </div>

        </div>
        </section>
    </>
  )
}

export default HowItWorks
