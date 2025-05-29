import Image from '../assets/images/car.png'
import Button from './Button'
const HeroSection = () => {
  return (
    <>  
        <section className="relative min-h-[500px] bg-[#e6e0dc] overflow-hidden md:pt-30 items-center py-12">
            {/* ------- Background shape ------- */}
            <div className="absolute inset-0 overflow-hidden">
                <div className=" absolute top-0 right-0 left-1/2 bg-[var(--primary-color)] transform -skew-x-12 origin-top-left">
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 md:mx-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-[1/2] mb-8 md:mb-0">
                    
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Need to Go? <br/>
                            <span className='text-[var(--primary-color)]'> We've Got the Keys! </span>
                        </h1>
                        <p className="text-sm text-gray-500 md:text-lg mb-6">Explore our wide range of vehicles available for rent.</p>

                        <div className="flex flex-wrap gap-4 mb-6">
                            <Button variant='primary'> Rent Now </Button>
                            <Button variant='secondary'> Learn More </Button>
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
