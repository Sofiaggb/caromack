import sggb from "../assets/img/sggb.png"
import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div>
      <Link to={"https://wa.me/584147011631"}
        className=" fixed w-16 h-16 bottom-16 sm:bottom-20 right-4 sm:right-10 bg-[#25D366] transition-colors 
                   hover:bg-[#128C7E] focus:outline-none focus-visible:ring-2 
                   focus-visible:ring-[#25D366] focus-visible:ring-offset-2 text-white
                    rounded-full text-center text-5xl z-20"
        target="_blank">
        <i className='bx bxl-whatsapp mt-2  text-white'></i>
      </Link>
      <footer className="bg-gray-800 text-white py-3 px-6 md:px-10">
        <div className="container mx-auto flex   items-center justify-between">
            <div className="mt-6">
              <p className="text-sm">© 2024 Caromack.</p>
            </div>

            <div className="items-center flex">
              <p className="text-sm">Diseño</p>
              <Link to={""} >
                <img className="w-12  hover:w-16 hover:-mt-2 hover:-mr-2 transition-all "
                 src={sggb} alt="sggb" />
              </Link>
            </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
