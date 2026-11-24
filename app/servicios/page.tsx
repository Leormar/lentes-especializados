import type { Metadata } from "next";
import Link from "next/link";
import ServiciosPestanas, { type Servicio } from "@/components/ServiciosPestanas";

export const metadata: Metadata = {
  title: "Lentes Esclerales, RGP e Híbridos en Medellín",
  description:
    "Servicios de contactología especializada: lentes esclerales, RGP, híbridos, adaptación post-quirúrgica y manejo de ojo seco severo en Medellín.",
  alternates: { canonical: "/servicios" },
};

const servicios: Servicio[] = [
  {
    id: "esclerales",
    imagenes: ["/servicios/escleral-adaptado.jpg"],
    titulo: "Lentes Esclerales",
    subtitulo: "El estándar de oro en contactología de alta complejidad",
    descripcion: `Los lentes esclerales son lentes de contacto rígidos de gran diámetro que descansan completamente sobre la esclerótica (la parte blanca del ojo), creando un espacio entre el lente y la córnea que se llena de solución salina.

Este diseño único ofrece ventajas extraordinarias para casos complejos: la córnea no es tocada por el lente, eliminando la irritación; la cámara de líquido actúa como reservorio de lágrima artificial; y la superficie óptica perfectamente regular del lente compensa cualquier irregularidad corneal.`,
    indicaciones: [
      "Queratocono moderado a severo",
      "Córneas irregulares por cualquier causa",
      "Post-queratoplastia (trasplante de córnea) — penetrante o lamelar",
      "Post-queratotomía radial o cirugía incisional refractiva",
      "Ectasias corneales (degeneración pellucida marginal, keratoglobus)",
      "Síndrome de ojo seco severo (Sjögren, GVH, Stevens-Johnson)",
      "Intolerancia a lentes de contacto convencionales",
    ],
    precio: "COP 3.500.000 – 5.900.000",
    nota: "Incluye adaptación completa + par de lentes. El precio final depende de la complejidad del caso.",
  },
  {
    id: "orthokeratologia",
    imagenes: ["/servicios/orthok-comparativa.jpg", "/servicios/orthok-diana.jpg"],
    titulo: "Ortoqueratología · Control de Miopía",
    subtitulo: "Lentes nocturnos que corrigen la miopía mientras duerme — sin gafas ni lentes durante el día",
    descripcion: `La ortoqueratología (Ortho-K) utiliza lentes de contacto rígidos gas-permeables de geometría inversa, diseñados para usarse exclusivamente durante el sueño. Mientras el paciente duerme, el lente remodela de forma suave y controlada el epitelio corneal central: aplana la zona óptica y genera una zona periférica de tratamiento. Al retirar el lente en la mañana, la córnea mantiene temporalmente esa nueva forma y el paciente puede ver con claridad durante todo el día sin necesidad de gafas ni lentes de contacto blandos.

**Evidencia científica en control de miopía:** La Ortho-K es la técnica con mayor respaldo en la literatura internacional para frenar la progresión de la miopía infantil. Los estudios más citados demuestran reducciones del 36–56% en la elongación axial del ojo comparada con gafas convencionales:

• Estudio ROMIO (Cho & Cheung, Invest Ophthalmol Vis Sci, 2012): reducción del 43% en la elongación axial en niños de 6–12 años tras 2 años de uso.
• Santodomingo-Rubido et al. (Invest Ophthalmol Vis Sci, 2012): 55% de reducción en el crecimiento axial en 2 años.
• Estudio MCOS: beneficio sostenido y consistente a largo plazo.

El mecanismo principal es la inducción de un desenfoque miópico periférico retiniano: la señal óptica que genera el perfil de potencia del lente Ortho-K actúa directamente sobre los mecanismos de emetropización que regulan el crecimiento axial ocular durante la infancia y la adolescencia.`,
    indicaciones: [
      "Miopía leve a moderada (hasta –6.00 D; algunos diseños hasta –8.00 D)",
      "Astigmatismo hasta –1.75 D (diseños tóricos permiten valores mayores)",
      "Niños y adolescentes con miopía progresiva (indicación principal)",
      "Adultos miopes que buscan independencia de gafas y lentes durante el día",
      "Deportistas, nadadores y personas en entornos con polvo o viento",
      "Pacientes que no desean o no son candidatos a cirugía refractiva",
      "Miopía progresiva con antecedente familiar de miopía alta",
    ],
    precio: "COP 2.800.000 – 4.200.000",
    nota: "Incluye topografía corneal previa, adaptación completa y par de lentes Ortho-K. Requiere controles periódicos a 1 semana, 1 mes y cada 6 meses.",
  },
  {
    id: "rgp",
    imagenes: [
      "/servicios/rgp.jpg",
      "/servicios/rgp-lente-adaptado.jpg",
      "/servicios/rgp-borde-limbo.jpg",
    ],
    titulo: "Lentes RGP e Híbridos",
    subtitulo: "Óptica superior para casos de complejidad media",
    descripcion: `Los lentes de gas permeable rígido (RGP) son la tecnología de referencia para corrección de astigmatismo irregular. Gracias a su rigidez, crean una superficie de refracción perfectamente esférica sobre la córnea, compensando las irregularidades naturales.

Los lentes híbridos combinan un centro rígido (para óptica máxima) con una falda blanda (para confort superior), siendo una excelente opción para pacientes que no toleran los lentes puramente rígidos.`,
    indicaciones: [
      "Queratocono leve a moderado",
      "Astigmatismo irregular",
      "Alta miopía o hipermetropía",
      "Post-LASIK con regresión",
      "Pacientes que buscan óptica superior a los lentes blandos",
      "Primera adaptación en córneas irregulares",
    ],
    precio: "COP 1.200.000 – 2.800.000",
    nota: "Incluye valoración, pruebas diagnósticas y adaptación final.",
  },
  {
    id: "post-quirurgico",
    imagenes: ["/servicios/post-quirurgico-cicatrices.jpg", "/servicios/post-quirurgico-escleral.jpg"],
    titulo: "Adaptación Post-Quirúrgica",
    subtitulo: "Cuando la cirugía no es el final del camino",
    descripcion: `Las cirugías refractivas (LASIK, PRK, LASEK) cambian la geometría de la córnea de manera permanente. En algunos casos, el resultado visual no es el esperado, o aparecen cambios con el tiempo que requieren corrección adicional.

Los implantes de lente intraocular (IOL multifocal, EDOF, tórico) también pueden dejar residuales que se corrigen mejor con lentes de contacto que con gafas. Tenemos el protocolo y la tecnología para adaptar lentes en córneas post-quirúrgicas, que presentan geometrías que los sistemas convencionales no pueden manejar.`,
    indicaciones: [
      "Post-LASIK con miopía o hipermetropía residual",
      "Post-PRK / LASEK con cicatrices o irregularidades corneales",
      "Ectasia post-LASIK o post-PRK",
      "Post-queratoplastia penetrante o lamelar (trasplante de córnea)",
      "Post-queratotomía radial o cirugía incisional refractiva",
      "Post-IOL multifocal, EDOF o tórico con disfotopsias o residual",
      "Post-cirugía de pterygion con irregularidad corneal residual",
    ],
    precio: "Varía según complejidad",
    nota: "Requiere topografía corneal previa. Valoración inicial incluida en el presupuesto.",
  },
  {
    id: "ojo-seco",
    imagenes: ["/servicios/ojo-seco-tincion.jpg", "/servicios/ojo-seco-tincion-detalle.jpg"],
    titulo: "Ojo Seco Severo y Superficie Ocular",
    subtitulo: "Más allá de las lágrimas artificiales",
    descripcion: `El ojo seco severo es una enfermedad crónica de la superficie ocular que no se resuelve con lágrimas artificiales. Ofrecemos un protocolo integral que combina el diagnóstico preciso de la causa (deficiencia acuosa, disfunción de glándula de Meibomio, inflamación), el tratamiento específico, y cuando es apropiado, la adaptación de lentes esclerales como dispositivo terapéutico.

Los lentes esclerales en ojo seco actúan como una cámara de humedad permanente sobre la córnea, transformando la calidad de vida de pacientes que no toleraban ningún tratamiento convencional.`,
    indicaciones: [
      "Síndrome de Sjögren",
      "Enfermedad de injerto contra huésped (GVH)",
      "Ojo seco post-LASIK severo",
      "Quemaduras químicas o térmicas",
      "Síndrome de Stevens-Johnson",
      "Rosácea ocular con disfunción de Meibomio severa",
    ],
    precio: "Según protocolo requerido",
    nota: "Incluye evaluación completa de superficie ocular con imágenes MediView.",
  },
  {
    id: "mediview",
    imagenes: ["/servicios/mediview-equipo.jpg"],
    video: {
      src: "/servicios/mediview-nibut.mp4",
      poster: "/servicios/mediview-nibut-poster.jpg",
      pie: "Prueba de NIBUT grabada en consulta. Los anillos proyectados sobre la córnea se deforman en el momento en que la lágrima se rompe; el mapa de la derecha señala en rojo las zonas que se secan primero y el equipo calcula el tiempo exacto de ruptura.",
    },
    // Capturas del propio MediView del consultorio. Van con pie de foto porque
    // sin explicación una imagen de un ojo no le dice nada al paciente.
    galeria: [
      {
        src: "/servicios/mediview-capa-lipidica.jpg",
        pie: "Interferometría de la capa lipídica: mide el grosor de la película de grasa que impide que la lágrima se evapore. En este ojo el resultado es nivel 4, por encima de 80 nm.",
      },
      {
        src: "/servicios/mediview-menisco-lagrimal.jpg",
        pie: "Altura del menisco lagrimal: la franja de lágrima que se acumula sobre el párpado inferior. Aquí mide 0,20 mm, el límite por debajo del cual hablamos de déficit acuoso.",
      },
      {
        src: "/servicios/mediview-nibut-placido.jpg",
        pie: "NIBUT con anillos de Plácido: los anillos proyectados sobre la córnea permiten cronometrar en cuánto tiempo se rompe la lágrima, sin tocar el ojo y sin colorante.",
      },
      {
        src: "/servicios/mediview-meibografia-ir.jpg",
        pie: "Meibografía infrarroja: fotografía del interior del párpado que muestra las glándulas de Meibomio y permite ver cuántas se han atrofiado o perdido.",
      },
      {
        src: "/servicios/mediview-azul-cobalto.jpg",
        pie: "Fluoresceína con luz azul de cobalto: el colorante se adhiere a las zonas de epitelio dañado y las vuelve visibles sobre la córnea.",
      },
      {
        src: "/servicios/mediview-fluoresceina.jpg",
        pie: "Tinción con fluoresceína a dos aumentos: el mismo ojo de cerca y más abierto, para mapear hasta dónde llega el daño de la superficie.",
      },
      {
        src: "/servicios/mediview-segmento-anterior.jpg",
        pie: "Fotografía de segmento anterior de ambos ojos en alta resolución: queda como registro para comparar el antes y el después del tratamiento.",
      },
      {
        src: "/servicios/mediview-conjuntiva.jpg",
        pie: "Corte con lámpara de hendidura sobre la conjuntiva: la franja de luz revela el relieve y los vasos de la superficie del ojo.",
      },
    ],
    titulo: "Imágenes MediView · Diagnóstico de Ojo Seco",
    subtitulo: "Valoración diagnóstica avanzada de superficie ocular y ojo seco",
    descripcion: `MediView es nuestra plataforma de imagen ocular de última generación que permite evaluar con precisión el estado de la superficie ocular, las glándulas de Meibomio y la película lagrimal. Es indispensable para el diagnóstico diferencial del ojo seco, la planificación de la adaptación de lentes de contacto especializados y el seguimiento del tratamiento.

Los exámenes MediView incluyen: meibografía (imagen infrarroja de las glándulas de Meibomio), interferometría de la capa lipídica de la lágrima, evaluación del NIBUT (tiempo de ruptura no invasiva), clasificación del grado de blefaritis y disfunción glandular, y mapa de tinción corneal y conjuntival.

Este servicio es ofrecido tanto por el área de optometría especializada para la adaptación de lentes de contacto en ojo seco, como por el área de oftalmología de superficie ocular para el diagnóstico y manejo del ojo seco severo.`,
    indicaciones: [
      "Ojo seco sintomático sin diagnóstico preciso",
      "Disfunción de glándula de Meibomio (DGM)",
      "Blefaritis crónica posterior",
      "Evaluación previa a adaptación de lentes esclerales",
      "Seguimiento de tratamiento de ojo seco severo",
      "Valoración por oftalmología de superficie ocular",
      "Síndrome de Sjögren y otras enfermedades autoinmunes",
      "Post-LASIK con ojo seco persistente",
    ],
    precio: "COP 180.000 – 280.000",
    nota: "El costo varía según el número de exámenes requeridos. Incluye informe detallado con imágenes.",
  },
  {
    id: "baja-vision",
    imagenes: ["/servicios/baja-vision.jpg"],
    foco: "object-top",
    titulo: "Baja Visión",
    subtitulo: "Maximizando el potencial visual restante",
    descripcion: `La baja visión es la pérdida visual que no se puede corregir completamente con gafas, lentes de contacto o cirugía. Ofrecemos evaluación completa y prescripción de ayudas visuales ópticas y electrónicas para maximizar la funcionalidad visual de cada paciente.

Trabajamos con pacientes de todas las edades: desde niños con ambliopía refractaria hasta adultos con degeneración macular, glaucoma avanzado o retinitis pigmentosa.`,
    indicaciones: [
      "Degeneración macular relacionada con la edad",
      "Retinopatía diabética avanzada",
      "Glaucoma avanzado",
      "Retinitis pigmentosa",
      "Ambliopía refractaria",
      "Cualquier condición con visión < 20/70 con corrección máxima",
    ],
    precio: "COP 200.000 – 350.000",
    nota: "Valoración inicial. Las ayudas visuales tienen costo adicional según prescripción.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#2e3f8a] to-[#1a2a5e] text-white pt-36 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-4">Servicios</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Contactología de alta complejidad
          </h1>
          <p className="text-sky-100 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            La gama más completa de contactología especializada de Medellín, con tecnología de imagen corneal de última generación.
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {["Lentes blandos convencionales","Lentes rígidos gas-permeables","Lentes cosmoprotésicos","Lentes híbridos","Ortoqueratología · Control miopía","Lentes esclerales"].map((t) => (
              <span key={t} className="bg-white/15 border border-white/25 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ServiciosPestanas servicios={servicios} />

      <section className="bg-[#f0f9ff] py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#2e3f8a] mb-4">¿No sabe cuál servicio necesita?</h2>
          <p className="text-slate-600 mb-6">Use nuestro orientador interactivo o hable directamente con Aria, nuestra asistente virtual.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#selector" className="btn-shine border-2 border-[#2e3f8a] text-[#2e3f8a] px-6 py-3 rounded-full font-semibold hover:bg-[#2e3f8a] hover:text-white transition-colors">
              Usar el orientador
            </Link>
            <a
              href="https://wa.me/573113154316"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20b858] transition-colors"
            >
              Hablar con Aria
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
