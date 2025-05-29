import Fast from '../assets/images/quick.png';
import Ride from '../assets/images/bicycle.png';
import Fee from '../assets/images/money.png';
import Image from '../assets/images/car.png';

const AboutUs = () => {
  return (
    <section className="overflow-hidden pb-24 pt-24">
        <div className="container mx-auto px-4">
          
            <div className="flex flex-wrap items-center justify-between mx-14">
                <div className="w-1/2">
                    <div className="w-full hidden md:block md:w-[1/2] relative">
                        <div className="relative md:absolute md:-left-40 md:-top-20">
                            <img 
                                src={Image}
                                alt="Rental car" 
                                className="w-full max-w-md mx-auto md:mx-0 transform hover:scale-105 transition duration-300"
                            />             
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="flex flex-col mb-6">
                        <h2 className=" relative text-3xl font-semibold mb-8 text-gray-900"> Feel the best experience <br/> with our rentals 
                            <hr className="w-[10%] bg-[var(--primary-color)] absolute py-0.5 border-none bottom-[-8px] mx-auto" />
                        </h2>
                    </div>
                
                    <ol className="relative text-gray-800 border-s border-orange-200">                  
                        <li className="mb-10 ms-6">            
                             <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white">
                                <img src={Fast}/>
                            </span>
                            <h3 className="font-medium leading-tight"> Fast & Easy </h3>
                            <p className="text-sm w-full md:w-1/2">Book your ride in minutes — no waiting, no hassle. </p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white">
                                <img src={Ride}/>
                            </span>
                            <h3 className="font-medium leading-tight">Rides That Fit</h3>
                            <p className="text-sm w-full md:w-1/2">From city cars to gateways — pick what works for you</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white ">
                                <img src={Fee}/>
                            </span>
                            <h3 className="font-medium leading-tight">No Surprises</h3>
                            <p className="text-sm w-full md:w-1/2">Clear pricing - Pay only for what you use.</p>
                        </li>  
                    </ol>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default AboutUs
