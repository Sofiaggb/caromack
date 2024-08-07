import armoleo_gf5 from "../assets/img/products/armoleo_gf5.png"
import aurum_sae from "../assets/img/products/aurum_sae.png"
import armoleo_syn_gl5 from "../assets/img/products/armoleo_syn_gl5.png"
import motus from "../assets/img/products/motus.png"
import ignis from "../assets/img/products/ignis.png"
import brava_atf from "../assets/img/products/brava_atf.png"
import atf_mercon_v from "../assets/img/products/atf_mercon_v.png"
import Brava_Aurum_20W50 from "../assets/img/products/Brava_Aurum_20W50.png"
import Motus_20W50 from "../assets/img/products/Brava_Motus_4T_20W50.png"
import Fulgar_1100 from "../assets/img/products/Fulgar_1100.png"
import luz_led from "../assets/img/products/luz_led.png"
import grapadora from "../assets/img/products/grapadora.png"
import silikon_glue from "../assets/img/products/silikon_glue.jpg"
import clips_mariposa from "../assets/img/products/clips_mariposa.png"
import clips_wingo from "../assets/img/products/clips_wingo.jpeg"
import tabla from "../assets/img/products/tabla.jpg"
import goma_kores from "../assets/img/products/goma_kores.jpg"
import resaltadores from "../assets/img/products/resaltadores.jpg"
import resaltadoresPrinta from "../assets/img/products/RESALTADOR_oprinta.jpg"
import lapiz from "../assets/img/products/lapiz.jpg"
import lapicero from "../assets/img/products/lapicero.jpg"
import papel_fotografico from "../assets/img/products/papel_fotografico.png"
import notas from "../assets/img/products/notas.png"
import marcador_pizarra from "../assets/img/products/marcador_pizarra.jpg"
import marcador_permanente from "../assets/img/products/marcador_permanente.jpg"
import Cartulina from "../assets/img/products/Cartulina.jpg"
import tubo_luz_led from "../assets/img/products/tubo_luz_led.png"
import bombillo from "../assets/img/products/bombillo.png"
import carpeta_pvc from "../assets/img/products/carpeta_pvc.jpg"
import hojas_adesivas from "../assets/img/products/hojas_adesivas.jpeg"
import hoja_pvc from "../assets/img/products/hoja_pvc.jpg"



export const ProductsData = [
  {
      id: 1,
      title: "Brava ATF Mercon V",
      shortDescription: "Especialmente diseñado para transmisiones automáticas, convertidores hidráulicos y direcciones asistidas.",
      description: "Los lubricantes Brava ATF Mercon V están formulados a partir de bases parafínicas de alta calidad y un paquete de aditivos cuyas características de resistencia a la oxidación, corrosión, desgaste y herrumbre permiten un buen rendimiento en la lubricación y protección de la compleja operación de una transmisión automática.",
      applications: "El lubricante Brava ATF Mercon V está especialmente diseñado para transmisiones automáticas, convertidores hidráulicos y direcciones asistidas donde el fabricante recomienda un fluido de nivel Mercon V.",
      availableIn: ["Botellas"],
      specifications: ["GM DEXRON® II y III", "FORD MERCON® V", "Caterpillar TO-2", "Allison C-4"],
      price: "$19.99",
      img: atf_mercon_v
  },
  {
    id: 2,
      title: "Brava Aurum 20W50",
      shortDescription: "Lubricante sintético avanzado que ofrece mayor durabilidad del motor y prolongados intervalos de cambio.",
      description: "Formulado con la mejor tecnología sintética, el Brava Aurum 20W50 proporciona una excelente protección y limpieza del motor, manteniéndolo en óptimas condiciones por más tiempo.",
      applications:"Este aceite proporciona a su motor la durabilidad y potencia que necesita para funcionar en condiciones de operación severas e intervalos de drenaje mas prolongados entre cada cambio de aceite necesario, en comparación con otros aceites de base mineral. También se adapta a motores de inyección directa, multiválvulas o turbocompresores. Consulte el manual de su vehículo para seleccionar la viscosidad adecuada.",
      price: "$19.99",
      img: Brava_Aurum_20W50
  },
  {
    id: 3,
      title: "Brava Aurum SAE",
      shortDescription: "Se adapta perfectamente a motores de inyección directa, multiválvulas o con turbocompresores.",
      description: "Los lubricantes Brava Aurum SAE están diseñados para proporcionar una protección excepcional en motores modernos, ayudando a mejorar su rendimiento y eficiencia.",
      applications:"Recomendados para ser utilizados en motores de gasolina de todos los fabricantes del mundo. Se adapta perfectamente a motores de inyección directa, multiválvulas o con turbocompresores. Consulte el manual de su vehículo para seleccionar la viscosidad apropiada.",
      categories: [
          {
              grade: "SAE 15W40",
              specifications: ["API SN / CF", "ILSAC GF-5", "GM 6094M"]
          },
          {
              grade: "SAE 20W50",
              specifications: ["API SN / CF", "ILSAC GF-5"]
          }
      ],
      price: "$19.99",
      img: aurum_sae
  },
  {
    id: 4,
      title: "Brava Ignis SAE",
      shortDescription: "Se adapta perfectamente a motores de inyección directa, multiválvulas y/o con turbocompresores.",
      description: "Elaborados con las bases minerales más puras del mundo, los lubricantes Brava Ignis son desarrollados a partir de bases minerales micro fragmentadas y un paquete de aditivos de tecnología avanzada para un desempeño excepcional.",
      applications: "Recomendados para su uso en motores de gasolina de todos los fabricantes del mundo. Se adapta perfectamente a motores de inyección directa, multiválvulas y con turbocompresores.",
      categories: [
          {
              grade: "SAE 15W40",
              specifications: ["API SN / CF", "ILSAC GF-5", "GM 6094M"]
          },
          {
              grade: "SAE 20W50",
              specifications: ["API SN / CF", "ILSAC GF-5"]
          }
      ],
      availableIn: ["Botellas", "Barriles"],
      price: "$19.99",
      img: ignis
  },
  {
    id: 5,
      title: "Brava ATF",
      shortDescription: "Especialmente diseñado para transmisiones automáticas, convertidores hidráulicos y direcciones asistidas.",
      description: "Los lubricantes Brava ATF están formulados a partir de bases parafínicas de alta calidad y un paquete de aditivos cuyas características de resistencia a la oxidación, corrosión, desgaste y herrumbre permiten un buen rendimiento en la lubricación y protección de la compleja operación de una transmisión automática.",
      applications: "El lubricante Brava ATF está especialmente diseñado para transmisiones automáticas, convertidores hidráulicos y direcciones asistidas donde el fabricante recomienda un fluido de nivel Dexron® III. Es apropiado para sistemas hidráulicos, compresores, direcciones hidráulicas y equipos agrícolas, cuando el fabricante recomienda este tipo de fluido.",
      availableIn: ["Botellas", "Barriles"],
      specifications: ["GM DEXRON® III", "FORD MERCON®"],
      price: "$19.99",
      img: brava_atf
  },
  {
    id:6,
      title: "Brava Armoleo GL-5",
      shortDescription: "Trabajan bajo condiciones manuales y mandos finales de automóviles y equipos de trabajo pesado.",
      description: "Los lubricantes Brava Armoleo GL-5 están formulados para soportar condiciones de extrema presión, a partir de bases parafínicas de alta calidad y un paquete de aditivos de extrema presión, con inhibidores de corrosión, de herrumbre, de oxidación, dispersores del punto de fluidez y antiespumante.",
      applications: "La Serie Brava Armoleo GL-5 está especialmente diseñada para transmisiones manuales y diferenciales, ejes traseros, cajas de dirección manuales y mandos finales de automóviles, camiones, cajas de carga, pasajeros y equipos de trabajo pesado.",
      characteristics: [
          { characteristic: "Peso específico a 15°C",ASTM: "D-1298", sae80w90: "0.89", sae85w140: "0.89" },
          { characteristic: "Viscosidad cinemática a 40°C, cSt",ASTM: "D-445", sae80w90: "136", sae85w140: "340" },
          { characteristic: "Viscosidad cinemática a 100°C, cSt",ASTM: "D-445", sae80w90: "14.5", sae85w140: "24.52" },
          { characteristic: "Índice de viscosidad",ASTM: "D-2270",  sae80w90: "119",sae85w140: "116" },
          { characteristic: "Punto de inflamación, °C",ASTM: "D-92", sae80w90: "196", sae85w140: "224" },
          { characteristic: "Punto de congelación, °C",ASTM: "D-97", sae80w90: "-12", sae85w140: "-14" }
      ],
      price: "$19.99",
      img: armoleo_gf5
  },
  {
    id: 7,
      title: "Brava Armoleo SYN GL-5",
      shortDescription: "Formulados para soportar condiciones de extrema presión, a partir de bases sintéticas de la mejor calidad.",
      description: "Los lubricantes Brava Armoleo SYN GL-5 están formulados para soportar condiciones de extrema presión, a partir de bases sintéticas de la mejor calidad y un paquete de aditivos de extrema presión, con inhibidores de corrosión, de herrumbre, de oxidación, dispersores del punto de fluidez y antiespumante.",
      applications: "La Serie Brava Armoleo GL-5 está especialmente diseñada para cumplir los requerimientos de la T.D.L. (Total Driveline), para la lubricación de alto rendimiento de ejes hipoides y cajas de cambio sincronizadas. Especialmente recomendado para la lubricación de los ejes traseros y mandos finales de vehículos comerciales de Mack, MAN, DAF, Mercedes, Iveco, Volvo, Renault Trucks, Mercedes-Benz, con intervalos de cambio extendido hasta 540,000 kilómetros.",
      characteristics: [
          { characteristic: "Peso específico a 15°C", sae75w90: "0.86" },
          { characteristic: "Viscosidad cinemática a 40°C, cSt", sae75w90: "108" },
          { characteristic: "Viscosidad cinemática a 100°C, cSt", sae75w90: "15" },
          { characteristic: "Índice de viscosidad", sae75w90: "160" },
          { characteristic: "Punto de inflamación, °C", sae75w90: "196" },
          { characteristic: "Punto de congelación, °C", sae75w90: "-43" }
      ],
      price: "$19.99",
      img: armoleo_syn_gl5
  },
  {
    id: 8,
      title: "Brava Motus Synthetic Science 4T",
      shortDescription: "Especialmente diseñados para todo tipo de motores de cuatro tiempos.",
      description: "Los lubricantes BRAVA SCIENCE 4T son lubricantes desarrollados con tecnología sintética muy avanzada que les permite un desempeño excepcional que se traduce en mayor durabilidad del aceite como del motor con intervalos de cambio de aceite mucho más prolongados que los recomendados cuando se utiliza un aceite mineral.",
      applications: "Especialmente diseñados para todo tipo de motores de cuatro tiempos (4T). Responde a las exigencias más severas de la circulación urbana y sport-turismo. Su fórmula responde a la nueva especificación JASO MA2 (Japanese Automotive Standards Organisation) para motores 4 tiempos de motos con embrague sumergido.",
      characteristics: [
          { characteristic: "Peso específico a 15°C", ASTM: "D-1298", sae10w40: "0.854" , sae20w50: "0.890" },
          { characteristic: "Viscosidad cinemática a 40°C, cSt", ASTM: "D-445",sae10w40:"96.5", sae20w50: "175" },
          { characteristic: "Viscosidad cinemática a 100°C, cSt",ASTM: "D-445", sae10w40: "14.87", sae20w50: "18.25"},
          { characteristic: "Índice de viscosidad	", ASTM: "D-2270", sae10w40: "160", sae20w50: "133"},
          { characteristic: "Punto de inflamación, °C",ASTM: "D-92", sae10w40: "232", sae20w50: "232"},
          { characteristic: "Punto de congelación, °C	",ASTM: "D-97", sae10w40: "-28", sae20w50: "-22"},
          { characteristic: "TBN, mg KOH/g",ASTM: "D-2896	", sae10w40: "11.4", sae20w50: "9.6"},
          { characteristic: "Cenizas Sulfatadas, % p/p",ASTM: "D-874", sae10w40: "1.1", sae20w50: "1.3 "},

      ],
      price: "$19.99",
      img: motus
        },

    {
      id: 9,
      title: "Brava Motus 4T 20W50",
      shortDescription: "Lubricante sintético de alto rendimiento para motores de cuatro tiempos, ideal para uso en condiciones severas y prolongados intervalos de cambio.",
      description:"El Brava Motus 4T 20W50 es un lubricante sintético de alto rendimiento diseñado para motores de cuatro tiempos. Ideal para uso en condiciones severas y con intervalos de cambio prolongados, este aceite ofrece una mayor resistencia de la película en comparación con otros aceites sintéticos y minerales líderes para motocicletas.",
      applications:"Este aceite proporciona una excelente protección contra el desgaste, minimiza la fricción y garantiza una lubricación óptima en todas las partes del motor. Además, su fórmula sintética permite intervalos de cambio prolongados, lo que es beneficioso tanto para los conductores como para el medio ambiente. Ya sea en motocicletas de uso diario o en vehículos de alto rendimiento, el Brava Motus 4T 20W50 ofrece confiabilidad y un funcionamiento suave en cualquier situación.",
      price: "$19.99",
      img: Motus_20W50
    },
    {
      id: 10,
      title: "Bateria Fulgor 24MR-1100",
      shortDescription: "La batería Fulgor 24MR-1100 es una batería de alto rendimiento diseñada para automóviles, ofreciendo una durabilidad excepcional y una vida útil de 15 meses.",
      description:"La batería Fulgor 24MR-1100 es una opción premium para vehículos que demandan un rendimiento confiable y duradero. Diseñada con tecnología de punta, esta batería está optimizada para ofrecer una alta capacidad de arranque en frío, asegurando que tu vehículo arranque sin problemas incluso en condiciones climáticas extremas.",
      applications:"Ideal para vehículos de pasajeros como automóviles, SUVs y camionetas, así como para vehículos comerciales ligeros que requieren energía confiable. Es especialmente útil en condiciones climáticas extremas por su alta capacidad de arranque en frío y es perfecta para flotas que buscan reducir costos de mantenimiento y maximizar el tiempo de operación. Además, es adecuada para vehículos con sistemas de alto consumo energético, como sistemas de sonido avanzados e iluminación adicional.",
      specifications: ["Capacidad: 1100 amperios.",
                      "Durabilidad: 15 meses de vida útil.",
                      "Construcción: Resistente a vibraciones y condiciones adversas.",
                      "Tecnología: Placas reforzadas y electrolito de alta densidad.",
                      "Mantenimiento: Bajo mantenimiento.",
                      "Rendimiento en frío: Alta capacidad de arranque en climas extremos."
                        ],
      price: "$19.99",
      img: Fulgar_1100
    },
    {
      id: 11,
      title: "Claic Lux Lampara Led Solar",
      shortDescription: "La lámpara LED solar Claic Lux es una solución de iluminación exterior autónoma y eficiente, equipada con panel solar y múltiples LED de alta intensidad.",
      description:"La lámpara LED solar Claic Lux es un dispositivo avanzado de iluminación diseñado para ofrecer una solución ecológica y eficiente en energía para diversas aplicaciones exteriores. Esta lámpara cuenta con un diseño integrado que combina un panel solar, una batería recargable y un conjunto de LEDs de alta intensidad, proporcionando una iluminación potente y duradera.",
      applications:"La lámpara LED solar Claic Lux es ideal para iluminar calles, caminos, jardines, patios, estacionamientos, entradas, accesos, parques y áreas recreativas, proporcionando una solución eficiente y segura para cualquier espacio exterior sin necesidad de conexión a la red eléctrica.",
      specifications: ["Panel Solar",
        "Batería recargable y de larga duración",
        "LEDs de alta intensidad.",
        "Sensor de Movimiento",
        "Resistente a la intemperie y al agua.",
        "Instalación fácil, sin cableado."
          ],
      price: "$19.99",
      img: luz_led
    },
    {
      id: 27,
      title: "Iluminación Tubo Led 10wT8 60cm",
      shortDescription:" Tubo LED de 10W, eficiente y duradero, con luz de 6500K para una iluminación clara y brillante.",
      description: "El Tubo LED de última generación, ideal para iluminar cualquier espacio con su luz blanca y fría de 6500K. Este tubo de 10W no solo es energéticamente eficiente, sino que también tiene una vida útil prolongada, reduciendo la necesidad de reemplazos frecuentes. Con un flujo luminoso de 700lm, proporciona una iluminación potente mientras ahorra hasta un 80% en consumo eléctrico comparado con los tubos fluorescentes tradicionales. Su diseño clásico se adapta perfectamente a los soportes G13 existentes, facilitando la instalación sin complicaciones. Ideal para oficinas, cocinas o garajes; este Tubo LED es la elección inteligente para una iluminación sostenible y económica.",
      price: "$19.99",   
      img: tubo_luz_led
    },
    {
      id: 28,
      title: "Bombillo dicroico WU10, Luz blanca",
      shortDescription:"Bombilla LED CLASSIC LUX de alto rendimiento, modelo GU10-LED.",
      description: "La bombilla LED CLASSIC LUX, la solución perfecta para iluminar su espacio con una luz clara y potente mientras reduce el consumo de energía. Este modelo GU10-LED es compatible con 120V y 60Hz, ideal para uso doméstico o comercial. Su diseño robusto promete durabilidad y un rendimiento constante. Con la tecnología SUPER BRIGHT LED, esta bombilla no solo ilumina más que las tradicionales sino que también dura mucho más tiempo, garantizando así un ahorro significativo en reemplazos y mantenimiento. Perfecta para aquellos que buscan calidad, eficiencia y sostenibilidad en su iluminación.",
      price: "$19.99",   
      img: bombillo
    },
    {
      id: 12,
      title: "Engrapadora Stapler Ofimack",
      shortDescription:"Diseñada para grapas planas y corrugadas. Su capacidad es de 22 hojas.",
      description: "Fabricada con materiales duraderos, esta engrapadora está diseñada para ofrecer un rendimiento óptimo y una larga vida útil. Es capaz de manejar diferentes formas de grapas, tanto lisas como corrugadas, y admite grapas de tamaños 24/6, 26/6",
      price: "$19.99",
      img: grapadora
    },
    {
      id: 13,
      title: "Pegamento Kores Silikon Glue ",
      shortDescription:"Garantiza una unión resistente y duradera en superficies como papel, cartón, foami y plástico.",
      description: "El pegamento Kores Silikon Glue es un adhesivo versátil y de alta calidad, formulado con silicona para ofrecer una adherencia excepcional en múltiples materiales. Con una presentación de 30 gramos (29 ml), este pegamento es perfecto tanto para uso doméstico como profesional, siendo indispensable en oficinas, escuelas y talleres de manualidades.",
      price: "1,50",
      img: silikon_glue
    },
    {
      id: 14,
      title: "Clips Mariposa Ofiart",
      shortDescription:"Sujetapapeles metálicos de alta calidad, diseñados para unir documentos de manera segura y ordenada.",
      description: "Los Clips Mariposa Ofiart N°1 son una solución eficiente y elegante para la organización de documentos. Fabricados con metal de alta calidad, estos clips aseguran una sujeción firme y duradera sin dañar los papeles. Su diseño distintivo en forma de mariposa no solo añade un toque estético, sino que también facilita la inserción y extracción de los papeles, evitando desgarros y arrugas.",
      price: "$19.99",
      img: clips_mariposa
    },
    {
      id: 15,
      title: "Clips Wingo de Metal",
      shortDescription:"Un sujetapapeles resistente y duradero, ideal para mantener tus documentos organizados y seguros en oficinas, escuelas y hogares.",
      description: "Es una solución eficiente y robusta para la organización de documentos. Fabricado con metal de alta calidad, este clip garantiza una sujeción firme y duradera sin dañar tus papeles. Su diseño ergonómico facilita la inserción y extracción de documentos, proporcionando una experiencia de uso cómoda y efectiva.",
      price: "$19.99",
      img: clips_wingo
    },
    {
      id: 16,
      title: "Tabla De Inventario Ofimak",
      shortDescription:"Es una herramienta eficiente y práctica para gestionar y controlar el inventario de bienes y suministros en oficinas, almacenes y negocios.",
      description: "La Tabla de Inventario Ofimak es un dispositivo esencial para la gestión efectiva de inventarios en cualquier entorno de trabajo. Diseñada con materiales duraderos y un formato claro, esta tabla permite a los usuarios registrar y controlar con precisión los bienes y suministros disponibles.",
      price: "$19.99",
      img: tabla
    },
    {
      id: 17,
      title: "Pegamento Escolar Blanco Kores",
      shortDescription:"Un adhesivo no tóxico de secado rápido, ideal para proyectos escolares y manualidades.",
      description: "El pegamento escolar blanco Kores es un adhesivo versátil y seguro, diseñado específicamente para uso escolar y manualidades. Formulado sin sustancias tóxicas, es completamente seguro para los niños y adecuado para una variedad de aplicaciones. Este pegamento ofrece una unión fuerte y duradera en materiales como papel, cartón, fotos y otros artículos ligeros, convirtiéndolo en una herramienta esencial para proyectos escolares y actividades creativas.",
      price: "$19.99",
      img: goma_kores
    },
    {
      id: 18,
      title: "Resaltadores Ofimak Colores Varios",
      shortDescription:"Herramientas de marcación vibrantes y duraderas, ideales para subrayar y destacar textos.",
      description: "Los resaltadores Ofimak en colores variados (rosado, naranja, azul, verde y amarillo) son una excelente opción para quienes buscan una herramienta eficiente y de alta calidad para marcar y destacar información importante. Estos resaltadores están diseñados con tinta fluorescente de alta visibilidad que garantiza una marcación clara y duradera. El diseño ergonómico y el trazo suave permiten un uso cómodo, ideal para largas sesiones de estudio o trabajo.",
      price: "$19.99",
      img: resaltadores
    },
        {
      id: 19,
      title: "Resaltadores Fluorescentes Printa",
      shortDescription:"En colores rosa y amarillo son útiles en oficinas para resaltar datos cruciales en informes, documentos y presentaciones.",
      description: "Los resaltadores fluorescentes Printa en colores rosa y amarillo son herramientas esenciales para quienes buscan una manera eficiente de resaltar y organizar información importante. Diseñados con tinta fluorescente de alta visibilidad, estos resaltadores aseguran una marcación clara y duradera. El diseño ergonómico y la punta biselada permiten un trazo suave y preciso, adaptándose a diversas necesidades de marcado.",
      price: "$19.99",
      img: resaltadoresPrinta
    },
    {
      id: 20,
      title: "Lapíz de Grafito Kores",
      shortDescription:"Herramientas esenciales para escribir y dibujar, ofreciendo una calidad de trazo suave y preciso.",
      description: "Cada lápiz está equipado con una mina de alta calidad que proporciona un trazo suave y uniforme, asegurando precisión y facilidad en el uso. La resistencia de la mina reduce la rotura, prolongando la vida útil del lápiz. Además, cada lápiz incluye una goma de borrar integrada, permitiendo correcciones rápidas y eficientes. Presentados en una caja de 12 unidades, estos lápices son perfectos para estudiantes, profesionales y artistas que buscan herramientas confiables y duraderas.",
      price: "$19.99",
      img: lapiz
    },
    {
      id: 21,
      title: "Bolígrafo Kores K-Pen Super Slide",
      shortDescription:"Presentado en una caja de 12 unidades, ofrece una escritura suave y precisa con su diseño ergonómico y tinta de alta calidad.",
      description: "Cada bolígrafo en esta caja de 12 unidades está equipado con un sistema de tinta de alta calidad que asegura un flujo continuo y sin interrupciones, resultando en una escritura clara y nítida. El diseño ergonómico triangular con grip garantiza un agarre cómodo, reduciendo la fatiga durante el uso prolongado. ",
      price: "$19.99",   
      img: lapicero
    },
    {
      id: 22,
      title: "Papel Fotográfico Profesional Kores",
      shortDescription:"El papel fotográfico Kores para impresoras de inyección de tinta, en tamaño carta (216 x 279 mm) y con un gramaje de 180 g/m².",
      description: " Cada paquete contiene 50 hojas de papel tamaño carta (216 x 279 mm) con un gramaje de 180 g/m², ofreciendo una superficie robusta y duradera para la impresión de fotografías y otros proyectos gráficos. El acabado brillante de cada hoja proporciona colores vibrantes y detalles nítidos, mejorando significativamente la calidad visual de las impresiones.",
      price: "$19.99",   
      img: papel_fotografico
    },
    {
      id: 23,
      title: "Notas Adhesivas Kores",
      shortDescription:"Las notas adhesivas Kores, en tamaño 75 mm x 75 mm (3 pulgadas x 3 pulgadas), vienen en un paquete de 400 hojas en colores pastel surtidos.",
      description: "Las notas adhesivas Kores son una herramienta esencial para la organización y la toma de notas, diseñadas en un práctico tamaño de 75 mm x 75 mm (3 pulgadas x 3 pulgadas). Cada paquete contiene 400 hojas en una atractiva variedad de colores pastel surtidos, proporcionando una solución visualmente agradable para recordatorios, listas de tareas y mensajes rápidos.",
      price: "$19.99",   
      img: notas
    },
    {
      id: 24,
      title: "Marcador De Pizarra Acrílica Ofimak (azul y rojo)",
      shortDescription:"Marcadores para pizarra de la marca Ofimak con punta redonda, presentados en un empaque que contiene 12 unidades.",
      description: "El producto es un conjunto de marcadores para pizarra de la marca Ofimak, específicamente diseñados para uso en superficies de pizarras blancas. Los marcadores cuentan con una punta redonda que facilita la escritura suave y uniforme. El empaque incluye 12 marcadores en colores azul y rojo, ideal para un uso prolongado en entornos educativos, oficinas o cualquier lugar que requiera escritura en pizarras.",
      price: "$19.99",   
      img: marcador_pizarra
    },
    {
      id: 25,
      title: "Marcador Permanente Ofimack (azul, negro y rojo)",
      shortDescription:"Marcadores permanentes Ofimak con punta redonda de 4mm para escritura duradera y precisa.",
      description: "Los marcadores permanentes Ofimak modelo 806 con punta redonda de 4mm, perfectos para profesionales y estudiantes que buscan calidad y durabilidad en su material de escritura. Este paquete contiene 12 piezas en colores vibrantes como azul profundo, negro intenso y rojo brillante que garantizan una aplicación suave y resistente al agua. Ideal para todo tipo de superficies; estos marcadores son la elección acertada para destacar sus ideas con claridad y permanencia.",
      price: "$19.99",   
      img: marcador_permanente
    },
    {
      id: 26,
      title: "Cartlina Kores Tamaño Carta",
      shortDescription:"Paquete de cartulina amarilla Kores, ideal para proyectos creativos y manualidades.",
      description: "La cartulina Kores, el complemento perfecto para cualquier proyecto artístico o escolar.  La robustez del papel garantiza durabilidad mientras que su superficie lisa asegura una aplicación uniforme de adhesivos, pinturas y otros materiales. Con la confianza de la marca Kores, esta cartulina es una elección excelente para trabajos manuales, presentaciones escolares o cualquier actividad que requiera un toque de color y originalidad.",
      price: "$19.99",   
      img: Cartulina
    },
    {
      id: 29,
      title: "Carpeta oficio PVC con Ligas",
      shortDescription:"Esta carpeta de PVC en colores verde, transparente y azul cuenta con ligas elásticas para mantener tus papeles seguros y ordenados.",
      description: "Optimiza tu espacio de trabajo con nuestra carpeta de oficio en PVC. Disponible en tres colores vibrantes (verde, transparente y azul), esta carpeta combina funcionalidad y diseño. Las ligas elásticas mantienen tus documentos en su lugar, mientras que el material resistente protege contra rasgaduras y derrames. Ideal para profesionales y estudiantes, esta carpeta es una inversión inteligente para mantener tu vida organizada.",
      price: "$19.99",   
      img: carpeta_pvc
    },
    {
      id: 30,
      title: "Hojas Autoadhesivas Tamaño Carta",
      shortDescription:"Imprime tus diseños y pégales en documentos, frascos o productos.",
      description: "Optimiza tu organización con nuestras hojas autoadhesivas tamaño carta. Estas hojas son perfectas para imprimir etiquetas personalizadas, stickers o calcomanías. El papel adhesivo de alta calidad garantiza una fijación segura en documentos, cuadernos o productos. Ya sea en la oficina o en casa, estas hojas son versátiles y fáciles de desprender. ¡Dale un toque creativo a tus proyectos con estas hojas autoadhesivas!",
      price: "$19.99",   
      img: hojas_adesivas
    },
    {
      id: 31,
      title: "Hoja Tamaño Carta en PVC",
      shortDescription:"Organiza y protege tus documentos con esta hoja de PVC transparente. Ideal para crear etiquetas, separadores o cubiertas personalizadas.",
      description: "Maximiza la organización y la presentación de tus documentos con nuestra hoja de PVC transparente tamaño carta. Esta lámina duradera es perfecta para crear etiquetas, separadores, portadas o protectores. Su flexibilidad y transparencia la hacen versátil para proyectos en la oficina, la escuela o el hogar. ¡Añade un toque profesional a tus documentos con esta hoja de PVC!",
      price: "$19.99",   
      img: hoja_pvc
    },
  ];