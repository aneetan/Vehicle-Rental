import { useEffect, useState } from "react"
import Button from "../custom/Button";
import { NavLink, useLocation, useNavigate } from "react-router";

//define routes for type safety
const AppRoutes = {
  HOME: "#home",
  RENT: "#rent",
  HOW_IT_WORKS: "#how-it-works",
  ABOUT: "#about",
  FAQS: "#faqs",
  CONTACT: "#contact"
} as const;

// Type for navigation items
interface NavItem {
  key: NavRoutes;
  label: string;
  path: string;
}

//Create type for route keys
type NavRoutes = keyof typeof AppRoutes;

const Navbar = () => {
  const[isOpen, setIsOpen] = useState<boolean>(false);
  const[isScrolled, setIsScrolled] = useState<boolean>(false);
  const[isActive, setIsActive] = useState<NavRoutes>("HOME");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems : NavItem[] = [
    { key: "HOME", label: "Home", path: AppRoutes.HOME },
    { key: "RENT", label: "Rent", path: AppRoutes.RENT },
    { key: "HOW_IT_WORKS", label: "How it works", path: AppRoutes.HOW_IT_WORKS },
    { key: "ABOUT", label: "About", path: AppRoutes.ABOUT },
    { key: "FAQS", label: "FAQs", path: AppRoutes.FAQS },
    { key: "CONTACT", label: "Contact", path: AppRoutes.CONTACT }
  ];

  const handleActiveState = (itemName : NavRoutes):void => {
    setIsActive(itemName);
  }

  const handleNavigate = (path: string):void => {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    setIsOpen(false);
  };

  // Set active route based on current location
  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash;

    if (path === AppRoutes.HOME && !hash) {
      setIsActive("HOME");
    } else if (hash === AppRoutes.HOW_IT_WORKS) {
      setIsActive("HOW_IT_WORKS");
    } else if (hash === AppRoutes.ABOUT) {
      setIsActive("ABOUT");
    } else if (hash === AppRoutes.FAQS) {
      setIsActive("FAQS");
    } else if (hash === AppRoutes.CONTACT) {
      setIsActive("CONTACT");
    } else if (path === AppRoutes.RENT) {
      setIsActive("RENT");
    }
  }, [location]);

  // Scroll behavior for hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Scroll event listener for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
     <nav className={`sticky top-0 z-50 ${isScrolled ? "shadow-md bg-white" : ""}`}>
      <div className={`flex justify-between w-full items-center sticky ${isScrolled ? " bg-white" : "bg-gray-100"}  p-6 z-100`}>
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
              {navItems.map((item) => ( 
                <li key={item.key}
                onClick={() => handleNavigate(item.path)}
                className={`${isActive === item.key ? 'text-[var(--primary-color)] font-semibold': ''} 
                cursor-pointer  hover:text-[var(--primary-color)]`}
                >
                  <NavLink to={item.path} end
                  onClick={() => handleActiveState(item.key)}> {item.label}
                  </NavLink>
                </li>
              ))}   
            </ul> 
        </div> 

        {/* -------------- Login Button --------------- */} 
        <div className="hidden md:flex items-center mr-12">
            <Button variant='primary'> Login </Button>
        </div> 
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-100 pb-4 px-6 shadow-md">
          <ul className="flex flex-col space-y-4 text-base mx-8">
             {navItems.map((item) => (
              <li 
                key={item.key}
                className={`hover:text-[var(--primary-color)] cursor-pointer pt-4
                 ${isActive === item.key ? 'text-[var(--primary-color)] font-semibold' : ''}`}
                onClick={() => {
                  handleActiveState(item.key);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}

            <li>
              <Button variant='primary'> Login </Button>
            </li>
          </ul>
        </div>
      )} 
      </nav>
    </>
  )
}

export default Navbar
