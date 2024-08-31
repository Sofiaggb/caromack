import { NavLink } from "react-router-dom"
import { ProductsData } from "../data/ProductsData"

const Products = () => {

  return (
    <div>

      <section id="products" className="py-12 md:py-20 px-6 md:px-10">
        <div className="container mx-auto">
        <h1 className="text-4xl mb-10 sm:text-5xl text-gray-800  font-extrabold tracking-tight">
          Nuestros Productos
        </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ProductsData.map((product, index) => (
              <div key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                <NavLink to={"/product/" + product.id}
                  className="cursor-pointer group"  >

                  <div className="flex flex-col space-y-1.5 p-6">
                    <img
                      src={product.img}
                      alt="Product 1"
                      width="400"
                      height="300"
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">{product.title} </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      {/* <span className="font-bold">${product.price} c/u</span> */}
                      <span
                        className="relative inline-flex items-center justify-center
                         whitespace-nowrap text-sm font-medium ring-offset-background
                          transition-colors h-9 rounded-md 
                            px-3"
                      >
                        <span className="opacity-0 transform translate-x-2 transition-all
                         duration-300 ease-in-out group-hover:opacity-100 
                         group-hover:translate-x-0">
                          Ver más
                        </span>
                        <i
                          className="bx bx-chevrons-right text-3xl opacity-0 transform
                           translate-x-2 transition-all duration-300 ease-in-out
                            group-hover:opacity-100 group-hover:translate-x-0"
                        ></i>
                      </span>

                    </div>
                  </div>
                </NavLink>

              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
