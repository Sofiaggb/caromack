import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div>
      <Link to={"https://wa.me/584147011631"}
        className=" fixed w-16 h-16 bottom-10 right-10 bg-[#25D366] transition-colors 
                   hover:bg-[#128C7E] focus:outline-none focus-visible:ring-2 
                   focus-visible:ring-[#25D366] focus-visible:ring-offset-2 text-white
                    rounded-full text-center text-5xl z-20"
        target="_blank">
        <i className='bx bxl-whatsapp mt-2  text-white'></i>
      </Link>
      <footer className="bg-gray-800 text-white py-3 px-6 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2024 Caromack.</p>
          
          <Link to={'https://www.instagram.com/distribuidoracaromack?igsh=MzRlODBiNWFlZA=='} className=" relative flex items-center mt-2 mr-8 cursor-pointer group
           hover:text-fuchsia-300 transition-all">
            <i className='bx bxl-instagram text-3xl'></i>
            <span className="text-lg">Instagram</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-fuchsia-600
             transition-all duration-300 group-hover:w-full"></span>
    
          </Link>
        </div>
      </footer>
    
    </div>
  )
}

export default Footer
