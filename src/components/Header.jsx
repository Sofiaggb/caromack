import logo from "../assets/img/logo.png"
import { NavLink, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const textColor = isHomePage ? 'text-white' : 'text-black';

  return (
    <div>
      <header
        className={`${textColor} top-0 absolute z-50 w-full flex flex-wrap items-center
         justify-between px-6 py-3`}
      >
        <NavLink to={'/'} className="flex items-center gap-2" >
          <img className="w-16 h-16" src={logo} alt="logo" />
          <span className="text-xl font-bold">Caromack C. A.</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to={'/'} className="relative group" >
            Inicio
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500
             transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'#products'} className="relative group" >
            Productos
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500
             transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink to={'/#contact'} className="relative group">
            Contáctanos
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500
             transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </nav>

        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </header>
    </div>
  )
}

export default Header
