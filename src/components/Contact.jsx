
const Contact = () => {
  return (
    <div>

      <section id="contact" className="bg-muted py-12 md:py-20 px-6 md:px-10">
        <div className="container mx-auto sm:px-6 lg:px-8">
            <div className=" overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-6 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                  <h2 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                    Ubícanos
                  </h2>

                  <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-full">
                    Av. 7ma con calle 9, Torre Sofitasa piso 4, ofic. 4-3, 
                    Centro, San Cristóbal, edo. Táchira, Venezuela.
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    <p>0276-3444581</p>
                    <p>0414-7011631</p>
                    <p>0414-7498105</p>
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                     distribuidoracaromack@gmail.com
                    </div>
                  </div>
                </div>




                <form className=" w-full m-auto pr-5 text-center">
                  <h2 className="text-left text-2xl md:text-3xl font-bold mb-8">
                    Contactate con Nosotros
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      className="flex h-10 w-full rounded-md border border-teal-800
                        px-3 py-2 text-sm ring-offset-background file:border-0
                        file:bg-transparent file:text-sm file:font-medium 
                        placeholder:text-muted-foreground focus-visible:outline-none 
                        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                        disabled:cursor-not-allowed disabled:opacity-50"
                      label="Name"
                      placeholder="Nombre "
                    />
                    <input
                      className="flex h-10 w-full rounded-md border border-teal-800
                       px-3 py-2 text-sm ring-offset-background file:border-0 
                       file:bg-transparent file:text-sm file:font-medium 
                       placeholder:text-muted-foreground focus-visible:outline-none 
                       focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                        disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      label="Email"
                      placeholder="Email"
                    />
                  </div>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-teal-800
                      px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground 
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                       focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
                        mt-6"
                    label="Message"
                    placeholder="Escribe tu mensaje"
                  ></textarea>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap 
              rounded-md text-sm font-medium ring-offset-background transition-colors 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
               focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                bg-indigo-800 text-white hover:bg-indigo-950 h-10 px-8 py-2 mt-6"
                    type="submit"
                  >
                    Enviar
                  </button>
                </form>


              </div>
            </div>


        </div>
      </section>
    </div>
  )
}

export default Contact
