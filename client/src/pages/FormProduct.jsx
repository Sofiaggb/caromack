import { useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

const FormProduct = () => {
  // Estado para manejar el color seleccionado y si se muestra la paleta o no
  const [color, setColor] = useColor('hex', '#121212'); // Color por defecto
  const [showPalette, setShowPalette] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]); // Lista de colores seleccionados


  // Función para manejar la selección de color
  const handleColorSelect = () => {
    setSelectedColors([...selectedColors, color.hex]); // Agrega el color seleccionado a la lista
    setShowPalette(false); // Ocultar la paleta después de seleccionar un color
  };

  // Función para manejar la eliminación de un color
  const handleColorRemove = (index) => {
    const newColors = selectedColors.filter((_, i) => i !== index);
    setSelectedColors(newColors); // Actualiza la lista sin el color eliminado
  };

  return (
    <div>
      {/* <div className="bg-gray-100 flex bg-local"> */}
      <div className=" mx-auto max-w-6xl py-20 px-12 lg:px-24 mb-24 max-[500px]:px-2">
        <form>
          <h2 className="text-2xl font-bold text-center">Agregar Producto</h2>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Categoria
                </label>
                <div>
                  <select className="w-full bg-gray-200 border border-gray-200 text-black text-base py-3 px-4 pr-8 mb-3 rounded" >
                    <option>selecciona...</option>
                    <option>Lubricantes</option>
                    <option>Baterias</option>
                    <option>Iluminación</option>
                    <option>Papeleria</option>
                  </select>
                </div>
                {/* <div>
              <span className="text-red-500 text-xs italic">
                Please fill out this field.
              </span>
            </div> */}
              </div>
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Titulo
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title" type="text" placeholder="" />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Descripción
                </label>

                <textarea className="w-full min-h-[80px] max-h-[100px] bg-gray-200 text-black border
                 border-gray-200 rounded py-3 px-4 mb-3" name="" id="">

                </textarea>
              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Precio ($)
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link" type="number" min="1" placeholder="35" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Color
                </label>
                <div className="p-4">
                  <div className='flex flex-wrap  '>
                    {/* Botón para mostrar la paleta de colores */}
                    <button
                      type="button"
                      className="bg-gray-300 text-2xl text-gray-700 w-10 h-10  mb-2 mr-2  rounded-full"
                      onClick={() => setShowPalette(!showPalette)}
                    >
                      +
                    </button>

                    {/* Mostrar los colores seleccionados en círculos */}
                    {selectedColors.map((col, index) => (
                      <div key={index} className="relative">
                        <div
                          className="w-10 h-10 rounded-full border border-gray-400"
                          style={{ backgroundColor: col }}
                        ></div>
                        {/* Botón para eliminar el color */}
                        <button
                          type="button"
                          onClick={() => handleColorRemove(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Mostrar la paleta de colores si showPalette es true */}
                  {showPalette && (
                    <div className="mt-4 text-center">
                    <ColorPicker
                      width={456}
                      height={228}
                      color={color}
                      onChange={setColor} // Actualiza el color mientras el usuario interactúa
                      hideInput={["rgb", "hsv", "hex"]}
                      
                    />
                    
                    <button
                      type="button"
                      className=" mt-1 w-full bg-gray-900 hover:bg-gray-600 text-white p-2 rounded-xl"
                      onClick={()=>handleColorSelect()} // Confirmar selección y agregar color
                    >
                      Confirmar
                    </button>
                  </div>
                  )}


                </div>
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" >
                  Imagen
                </label>
                <input type="file" accept="image/*"
                  className="w-full mt-2 text-sm text-grey-500  file:mx-5 file:py-2 file:px-6  file:rounded-md 
            file:border-0  file:text-sm file:font-medium  file:bg-gray-200 file:text-blue-900  
            hover:file:cursor-pointer hover:file:bg-gray-300 hover:file:text-blue-600  "
                />
              </div>
            </div>
            <div className=" md:flex  mt-auto justify-center ">
              <div className="p-4">
                <button className="md:w-full bg-gray-900 text-white py-2 px-5 border-b-4 hover:border-b-2
             border-gray-500 hover:border-gray-100 rounded-full">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    // </div>
  )
}

export default FormProduct
