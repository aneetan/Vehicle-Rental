
const HeroSection = () => {
  return (
    <>
        <section className="bg-gray-400 text-white py-20 z-[-100]">
            <div className="flex justify-between items-center">
                {/* Left Section */}
                <div className="container w-1/2 px-6 m-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Rent-All
                    </h1>
                    <p className="text-lg md:text-xl mb-8">Your one-stop solution for all vehicle rentals</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Get Started
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-1/2 hidden md:block">
                    <img className="h-120" src="https://cdn.pixabay.com/photo/2022/07/04/10/46/vintage-car-7300881_1280.jpg"/>
                </div>
            </div>
            
        </section>
    </>
  )
}

export default HeroSection
