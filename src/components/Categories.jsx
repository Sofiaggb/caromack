import { categoriesData } from "../data/CategoriesData";

const Categories = () => {
    
      return (
        <div>
          <section className=" relative bottom-0  z-20 ">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                {categoriesData.map((category, index) => (
                  <div
                    key={index}
                    className={`${category.pt} pt-6 w-full md:w-4/12 px-4 text-center`}>
                    <div
                      className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                    >
                      <div className="px-4 py-5 flex-auto">
                        <div
                          className={` text-center inline-flex items-center justify-center w-16 h-16 mb-3 shadow-lg rounded-full ${category.bgColor}`}
                        >
                          <img className={`absolute ${category.Cimg}`} src={category.icon} alt="motos y carros" />
             
                        </div>
                        <h6 className="text-xl font-semibold">{category.title}</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
}

export default Categories
