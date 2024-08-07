import Categories from "../components/Categories"
import Contact from "../components/Contact"
import Products from "../components/Products"
import fondo from "../assets/img/fondo.jpg"

const Home = () => {
  return (

    <div className="flex flex-col min-h-screen">

      <div
        className="relative pt-16 pb-16 min-h-screen flex  content-center justify-center"
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover "
        >
          <img className="absolute top-0 w-full  h-full bg-center bg-cover"
          src={fondo}
            // src="https://forprojectpros.com/wp-content/uploads/2023/04/constructoras-en-Venezuela.jpg" alt="fondo" 
          />
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mt-6 mx-auto ">
          <div className=" items-center flex flex-wrap">
            <div className="w-full lg:w-3/5 w px-4 ml-auto mr-auto text-center">
              <div className=" m-auto">
                <h1 className="text-white font-semibold text-5xl">
                  Somos Lideres <br/> Productos de Alta Calidad
                </h1>
                <p className="mt-4 text-lg lg:w-4/5 m-auto text-gray-300">
                Nuestro compromiso es ofrecerte los mejores productos
                para que tu negocio siga en movimiento y brille en todo momento.
                </p>
              </div>
            </div>
            
          </div>
          <Categories />
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>



      <main className="flex-1">
        <Products />
        <Contact />
      </main>


    </div>
  )
}

export default Home