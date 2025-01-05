import { useParams } from "react-router-dom";
import {ProductsData} from "../data/ProductsData"; // Asegúrate de tener la ruta correcta
import { NavLink } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams(); // Obtiene la categoría desde la URL
  console.log(category)
  const products = ProductsData.filter(
    (product) => product.category === category
  );
  
  return (
    <div className="container mx-auto pt-24  py-6 px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl  mb-2">{category}</h1>
            <div className="mx-auto w-24 h-1 bg-orange-500 mt-4"></div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg border bg-card shadow-sm">
            <NavLink to={`/product/${product.id}`} className="group">
              <img
                src={product.img}
                alt={product.title}
                className="object-cover rounded-t-lg h-52 w-full"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-gray-500 mb-4">{product.shortDescription}</p>
                {/* <span className="font-bold">{product.price}</span> */}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
