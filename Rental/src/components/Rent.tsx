
const Rent = () => {
  return (
    <>
        <section className=" flex justify-center items-center bg-gray-200 text-gray-800 z-100">
            <div className="w-[60%] container p-6">
                <form className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-2">   
                    <input
                        type="text"
                        placeholder="Enter pickup location"
                        className="w-1/4 md:w-1/4 p-3 mb-4 border text-sm border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />

                    <input
                        type="datetime-local"
                        placeholder="Enter pickup time"
                        className="w-full md:w-1/4 p-3 mb-4 border text-sm border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />

                    <input
                        type="datetime-local"
                        placeholder="Enter return time"
                        className="w-full md:w-1/4 p-3 mb-4 border text-sm border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    
                    <button
                        type="submit"
                        className="bg-blue-500 mb-4 text-white text-sm py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                    > Search</button>

                </form>
            </div>

        </section>
      
    </>
  )
}

export default Rent
