import { NavLink } from "react-router-dom"
import { ProductsData } from "../data/ProductsData"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductCategorySection = ({ category, products }) => {
  return (
    <section className="py-4 px-6 md:px-10">
      <div className="container mx-auto">

        <div className="flex max-sm:flex-col justify-between  m-4">
          <h2 className="text-4xl  mb-6 tracking-tight">{category}</h2>
          <NavLink
            className="group relative inline-flex items-center justify-end  overflow-hidden rounded
            px-8 py-2 h-10 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            to={`/category/${category}`}
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-md font-medium transition-all group-hover:me-4"> Ver más </span>
          </NavLink>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            300: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation // Activa las flechas de navegación
          modules={[Navigation]} // Importa el módulo de navegación
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg border bg-card shadow-sm">
                <NavLink to={`/product/${product.id}`} className="group">
                  <img
                    src={product.img}
                    alt={product.title}
                    className=" object-cover rounded-t-lg h-52 m-auto"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                    <p className="text-gray-500 mb-4">{product.shortDescription}</p>
                    {/* <span className="font-bold">{product.price}</span> */}
                  </div>
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const categories = {
    PapeleriaCreativa: ProductsData.filter(product => product.category === 'Papelería Creativa'),
    Papeleria: ProductsData.filter(product => product.category === 'Papeleria'),
    Iluminación: ProductsData.filter(product => product.category === 'Iluminación'),
    Lubricantes: ProductsData.filter(product => product.category === 'Lubricantes'),

  };
  // Mapeo de nombres de categorías para mostrar el formato correcto
  const categoryDisplayNames = {
    PapeleriaCreativa: "Papelería Creativa",
    Papeleria: "Papeleria",
    Iluminación: "Iluminación",
    Lubricantes: "Lubricantes",
  };
  
  return (
    <div id="products">
      {Object.entries(categories).map(([category, products]) => (
        <ProductCategorySection 
          key={category} 
          category={categoryDisplayNames[category] || category} 
          products={products} 
        />
      ))}
    </div>
  );
};

export default ProductsSection;

// const Products = () => {

//   return (
//     <div>

//       <section id="products" className="py-12 md:py-20 px-6 md:px-10">
//         <div className="container mx-auto">
//         <h1 className="text-4xl mb-10 sm:text-5xl text-gray-800  font-extrabold tracking-tight">
//           Nuestros Productos
//         </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {ProductsData.map((product, index) => (
//               <div key={index}
//                 className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
//                 <NavLink to={"/product/" + product.id}
//                   className="cursor-pointer group"  >

//                   <div className="flex flex-col space-y-1.5 p-6">
//                     <img
//                       src={product.img}
//                       alt="Product 1"
//                       width="400"
//                       height="300"
//                       className="rounded-t-lg object-cover"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-lg font-medium mb-2">{product.title} </h3>
//                     <p className="text-muted-foreground mb-4">
//                       {product.shortDescription}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       {/* <span className="font-bold">${product.price} c/u</span> */}
//                       <span
//                         className="relative inline-flex items-center justify-center
//                          whitespace-nowrap text-sm font-medium ring-offset-background
//                           transition-colors h-9 rounded-md 
//                             px-3"
//                       >
//                         <span className="opacity-0 transform translate-x-2 transition-all
//                          duration-300 ease-in-out group-hover:opacity-100 
//                          group-hover:translate-x-0">
//                           Ver más
//                         </span>
//                         <i
//                           className="bx bx-chevrons-right text-3xl opacity-0 transform
//                            translate-x-2 transition-all duration-300 ease-in-out
//                             group-hover:opacity-100 group-hover:translate-x-0"
//                         ></i>
//                       </span>

//                     </div>
//                   </div>
//                 </NavLink>

//               </div>
//             ))}

//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Products
