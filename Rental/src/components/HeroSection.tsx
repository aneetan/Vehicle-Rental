import Image from '../assets/images/car.png'
import Button from './Button'
const HeroSection = () => {
  return (
    <>  
        <section className="relative min-h-[500px] bg-[#e6e0dc] overflow-hidden md:pt-30 items-center py-12">
            {/* ------- Background shape ------- */}
            <div className="absolute inset-0 overflow-hidden">
                <div className=" absolute top-0 right-0 left-1/2 bg-[#f86c23] transform -skew-x-12 origin-top-left">
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 md:mx-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-[1/2] mb-8 md:mb-0">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Rent Your <br/> Dream Vehicle</h1>
                        <p className="text-sm text-gray-500 md:text-lg mb-6">Explore our wide range of vehicles available for rent.</p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            {/* <button className="bg-[#f86c23] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                Rent Now
                            </button> */}
                            <Button variant='primary'> Rent Now </Button>
                            <Button variant='secondary'> Learn More </Button>
                            <button className="bg-transparent border-2 border-[#f86c23] text-[#f86c23] px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#F86C23] transition">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="w-full hidden md:block md:w-[1/2] relative">
                        <div className="relative md:absolute md:-right-20 md:-top-20">
                            <img 
                                src={Image}
                                alt="Rental car" 
                                className="w-full max-w-md mx-auto md:mx-0 transform hover:scale-105 transition duration-300"
                            />             
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection
