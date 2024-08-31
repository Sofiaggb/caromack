import { useParams } from "react-router-dom";
import { ProductsData } from "../data/ProductsData";
import Products from "../components/Products";

export const ProductPage = () => {
  const { id } = useParams()
  const product = ProductsData.find(p => p.id === parseInt(id))
  //  const headers = Object.keys(product.characteristics[0]);


  if (!product) {
    return <div>No se encontro el producto</div>
  }
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-24 ">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="grid gap-4">
                <img
                  src={product.img}
                  width="600"
                  height="500"
                  alt="Product Image"
                  className="w-full rounded-lg object-cover"
                />
                {/* {product.specifications || product.categories || product.availableIn && */}
                <div className="w-full py-12 md:p-24 lg:p-12  container space-y-12 px-4 md:px-6 ">
                  <div className="flex justify-between">
                    {product.specifications &&
                      <div className="space-y-4 ">
                        <h2 className="text-2xl font-bold">Especificaciones</h2>
                        <ul className="space-y-2">
                          {product.specifications.map((esp, index) => (
                            <li key={index}
                              className="flex items-center ">
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
                                className="w-5 h-5 fill-primary"
                              >
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              {esp}
                            </li>
                          ))}

                        </ul>
                      </div>
                    }
                    {product.categories &&
                      <div className="space-y-4">
                        <h2 className="text-2xl text-center font-bold">Categorías</h2>
                        <ul className="flex space-x-2">
                          {product.categories.map((category, index) => (
                            <li key={index} className="space-y-2">
                              <div className="flex items-center">
                                <span className="ml-2 font-bold">{category.grade}</span>
                              </div>
                              <ul className="ml-1 space-y-1">
                                {category.specifications.map((spec, specIndex) => (
                                  <li key={specIndex} className="flex  mr-3 items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="w-4 h-4 fill-primary"
                                    >
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                    <span className="ml-2">{spec}</span>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>

                    }


                    {product.availableIn &&
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Disponible en</h2>
                        <ul className="space-y-2">
                          {product.availableIn.map((bottle, i) => (
                            <li key={i}
                              className="flex ">
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
                                className="w-5 h-5 fill-primary"
                              >
                                <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path>
                                <path d="m14.5 12.5 2-2"></path>
                                <path d="m11.5 9.5 2-2"></path>
                                <path d="m8.5 6.5 2-2"></path>
                                <path d="m17.5 15.5 2-2"></path>
                              </svg>
                              {bottle}
                            </li>
                          ))}


                        </ul>
                      </div>
                    }


                  </div>
                </div>
                {/* } */}



              </div>

              <div className="flex flex-col items-start space-y-6">
                <h1 className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-[3rem] 2xl:text-[3.75rem]">
                  {product.title}
                </h1>
                {/* <div className="grid gap-2">
                 
                  <p className="font-bold text-green-600 text-xl">$59.99</p>
                </div> */}
                <h2 className="text-2xl font-bold">Descripción</h2>
                <p className=" text-lg">
                  {product.description}
                </p>
                {product.applications &&
                  <div>
                    <h2 className="text-2xl font-bold">Aplicaciones</h2>
                    <p className="text-lg">
                      {product.applications}
                    </p>
                  </div>
                }


              </div>
            </div>
          </div>
        </section>

        {product.characteristics &&

          <section className="w-2/3 py-12 m-auto md:p-24 lg:p-12 lg:px-20 container space-y-12 px-4 md:px-6 ">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Características</th>
                    {Object.keys(product.characteristics[0]).slice(1).map((header) => (
                      <th key={header} className="py-2 px-4 border-b" >{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.characteristics.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      {Object.keys(product.characteristics[0]).map((header) => (
                        <td key={header} className="py-2 px-4 border-b">{item[header]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </section>

        }

      </main>
      <Products />
    </div>
  );
};
