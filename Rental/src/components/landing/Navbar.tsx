import { useState } from "react"
import Button from "../custom/Button";

const Navbar = () => {
  const[isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 p-6 shadow-md">
        <span className="font-bold text-2xl md:ml-12 ml-6"> Rent
            <span className="text-[var(--primary-color)]">-ALL </span>
        </span>

        {/* -------------------- Menu for mobile view -------------------- */}
        <div className="md:hidden md:mr-12 mr-6">
          <button onClick={()=> setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none hover:text-[#F86C23]">
             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* -------------- Navlinks --------------- */}
        <div className="hidden md:flex justify-center items-center">
            <ul className="flex space-x-8 text-base">
                <li className="hover:text-[var(--primary-color)] cursor-pointer">Home</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer">Rent</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer">How it works</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer">About</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer">FAQs</li>
                <li className="hover:text-[var(--primary-color)] cursor-pointer">Contact </li>
            </ul> 
        </div> 

        {/* -------------- Login Button --------------- */} 
        <div className="hidden md:flex items-center mr-12">
            <Button variant='primary'> Login </Button>
        </div> 
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 pb-4 px-6 shadow-md">
          <ul className="flex flex-col space-y-4 text-base mx-8 ">
            <li className="hover:text-[var(--primary-color)] cursor-pointer"> Home </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer"> Rent </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer"> How it works </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer"> About </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer"> FAQs </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer"> Contact </li>

            <li>
              <Button variant='primary'> Login </Button>
            </li>
          </ul>
        </div>
      )} 
    </>
  )
}

export default Navbar
