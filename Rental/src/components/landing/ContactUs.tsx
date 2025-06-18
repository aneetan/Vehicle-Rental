import React from 'react'
import Button from '../custom/Button'

const ContactUs = () => {
  return (
    <section className="overflow-hidden pb-24 pt-34">
        <div className="container mx-auto px-4">
          
            <div className="flex flex-wrap items-center justify-between mx-14">
                <div className="w-1/2">
                    <div className="flex flex-col mb-6">
                        <h2 className=" relative text-3xl font-semibold mb-8 text-gray-900"> Feel free to reach out 
                            <hr className="w-[10%] bg-[var(--primary-color)] absolute py-0.5 border-none bottom-[-8px] mx-auto" />
                        </h2>
                    </div>
                
                    <ol className="relative text-gray-800 ml-5">                  
                        <li className="mb-10 ms-6">            
                             <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 mt-2 ring-4 ring-white bg-[var(--primary-color)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill text-white" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                                </svg>
                            </span>
                            <h3 className="font-semibold leading-tight text-xl"> Location </h3>
                            <p className="text-base w-full md:w-1/2"> Imadol, Lalitpur </p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 mt-2 ring-white bg-[var(--primary-color)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill text-white" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                                </svg>
                            </span>
                            <h3 className="font-semibold leading-tight text-xl">Email</h3>
                            <p className="text-base w-full md:w-1/2">rent.all@gmail.com</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 mt-2 ring-white bg-[var(--primary-color)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                            </span>
                            <h3 className="font-semibold leading-tight text-xl">Phone</h3>
                            <p className="text-base w-full md:w-1/2"> 9812345678 </p>
                        </li>  
                    </ol>
                </div>
                <div className="md:w-1/2 w-full">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message</h3>
                        
                        <form noValidate>
                            <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)]
                                }`}
                                placeholder="your@email.com"
                            />
                            </div>
                            
                            <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className={`w-full px-4 py-2 border resize-none border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary-color)] 
                                }`}
                                placeholder="Your message here..."
                            ></textarea>
                            </div>
                            
                            <Button variant='primary'> Send Message</Button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default ContactUs
