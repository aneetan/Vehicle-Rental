import RentAVehicle from '../assets/images/rent.png'
import DriveVehicle from '../assets/images/drive.png'
import DropVehicle from '../assets/images/drop.png'

const HowItWorks = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container px-6 py-36">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center mx-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-16 h-16 mb-4" src={RentAVehicle} alt="Step 1 Icon"/>
                <h3 className="text-xl font-semibold mb-4">Book a Car</h3>
                <p className="text-sm text-neutral-600">Select from a wide range of vehicles that suit your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-16 h-16 mb-4" src={DriveVehicle} alt="Step 1 Icon"/>
                <h3 className="text-xl font-semibold mb-4">Enjoy Your Ride</h3>
                <p className="text-sm text-neutral-600">Book your vehicle online with just a few clicks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <img className="w-16 h-16 mb-4" src={DropVehicle} alt="Step 1 Icon"/>
                <h3 className="text-xl font-semibold mb-4">Return Car</h3>
                <p className="text-sm text-neutral-600">Pick up your vehicle and enjoy your ride!</p>
            </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default HowItWorks
