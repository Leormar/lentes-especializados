import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de contactología especializada: lentes esclerales, RGP, híbridos, adaptación post-quirúrgica y manejo de ojo seco severo en Medellín.",
};

const servicios = [
  {
    id: "esclerales",
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
    imagen: "/servicios/orthokeratologia.jpg",
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
      <section className="bg-gradient-to-br from-[#2e3f8a] to-[#1a2a5e] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sky-300 font-semibold text-sm uppercase tracking-widest mb-4">Servicios</p>
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

      <nav className="bg-white sticky top-28 z-40 border-b border-sky-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm scrollbar-hide">
            {servicios.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-slate-600 hover:text-[#2e3f8a] font-medium whitespace-nowrap transition-colors"
              >
                {s.titulo}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-24">
        {servicios.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-black text-sky-100 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f8a]">{s.titulo}</h2>
                <p className="text-[#5b80d4] font-medium">{s.subtitulo}</p>
              </div>
            </div>

            {"imagen" in s && s.imagen && (
              <div className="relative w-full rounded-2xl overflow-hidden mb-6 border border-blue-100 shadow-sm" style={{ height: 240 }}>
                <Image src={s.imagen as string} alt={s.titulo} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a5e]/30 to-transparent" />
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                {s.descripcion.split("\n\n").map((p, j) => (
                  <p key={j} className="text-slate-600 leading-relaxed">{p}</p>
                ))}
              </div>

              <div className="space-y-6">
                <div className="bg-[#f0f9ff] rounded-2xl p-5 border border-sky-100">
                  <p className="text-xs font-semibold text-[#5b80d4] uppercase tracking-wide mb-3">Indicaciones</p>
                  <ul className="space-y-2">
                    {s.indicaciones.map((ind) => (
                      <li key={ind} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-[#5b80d4] mt-0.5 shrink-0">✓</span>
                        {ind}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#2e3f8a] text-white rounded-2xl p-5">
                  <p className="text-xs font-semibold text-sky-300 uppercase tracking-wide mb-1">Inversión aproximada</p>
                  <p className="font-bold text-lg mb-1">{s.precio}</p>
                  <p className="text-sky-200 text-xs leading-relaxed">{s.nota}</p>
                  <a
                    href={`https://wa.me/573113154316?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.titulo)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shine mt-4 block text-center bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20b858] transition-colors"
                  >
                    Agendar consulta
                  </a>
                </div>
              </div>
            </div>

            {i < servicios.length - 1 && (
              <div className="mt-16 border-b border-sky-100" />
            )}
          </section>
        ))}
      </div>

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
