import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conozca al equipo de Lentes Especializados: especialistas en contactología de alta complejidad con más de 30 años de experiencia en Medellín.",
};

const equipo = [
  {
    nombre: "Dr. Leonardo Orjuela Mariño",
    titulo: "OD · Director Científico",
    especialidades: ["Contactología avanzada: esclerales, RGP, híbridos", "Lentes post-quirúrgicos", "Baja visión", "Queratocono y ectasias corneales"],
    bio: "Con más de 30 años de experiencia, el Dr. Orjuela es uno de los referentes de contactología especializada en Colombia. Fundó el centro en 1992 con la visión de ofrecer soluciones a los casos que la optometría convencional no puede resolver. Ha adaptado lentes a miles de pacientes con queratocono, córneas irregulares y ojo seco severo.",
  },
  {
    nombre: "Dra. Elizabeth Rueda",
    titulo: "OD · Especialista en Optometría Pediátrica",
    especialidades: ["Optometría pediátrica", "Bebés canguro (seguimiento de prematuros)", "Contactología", "Desarrollo visual infantil"],
    bio: "Especialista en visión infantil con énfasis en el seguimiento de bebés prematuros y desarrollo visual temprano. Aporta al equipo la capacidad de atender desde los primeros meses de vida hasta la adolescencia, con protocolos específicos para cada etapa del desarrollo visual.",
  },
  {
    nombre: "Dra. Laura Montoya",
    titulo: "OD · Ortóptica y Prótesis",
    especialidades: ["Ortóptica y visión binocular", "Prótesis ocular", "Rehabilitación visual", "Estrabismo y ambliopía"],
    bio: "Experta en ortóptica y rehabilitación de la visión binocular. Atiende casos de estrabismo, ambliopía y diplopía con enfoque funcional. Complementa su práctica con la adaptación de prótesis oculares personalizadas.",
  },
  {
    nombre: "Dra. Laura Silva",
    titulo: "MD · Oftalmóloga",
    especialidades: ["Oftalmología general", "Superficie ocular y ojo seco", "Enfermedades del segmento anterior", "Diagnóstico con imágenes MediView"],
    bio: "Oftalmóloga especializada en superficie ocular y ojo seco. Su presencia en el equipo permite un manejo verdaderamente integral de condiciones como el síndrome de Sjögren, la rosácea ocular y el ojo seco severo, combinando el tratamiento médico con las soluciones de lentes del Dr. Orjuela.",
  },
];

const valores = [
  {
    titulo: "Casos complejos",
    desc: "Cuando otros dicen 'no hay solución', nosotros empezamos a buscar. Nuestra especialización nos permite atender lo que otros no pueden.",
  },
  {
    titulo: "Tecnología de punta",
    desc: "Topografía corneal de alta resolución, imágenes de glándulas de Meibomio y pruebas de superficie ocular para diagnóstico preciso.",
  },
  {
    titulo: "Equipo interdisciplinario",
    desc: "Optómetras y oftalmólogos trabajando juntos. El mismo paciente puede recibir tratamiento médico y adaptación de lentes en un solo lugar.",
  },
  {
    titulo: "Seguimiento continuo",
    desc: "La adaptación de lentes especializados no termina cuando el paciente se va a casa. Cada caso tiene seguimiento personalizado y acceso por WhatsApp.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0c4a6e] to-[#082f49] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sky-300 font-semibold text-sm uppercase tracking-widest mb-4">Quiénes somos</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Especialistas en lo que otros no pueden resolver
          </h1>
          <p className="text-sky-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Desde 1992, en Medellín, atendemos a los pacientes que han agotado las opciones convencionales y buscan una solución real para su visión.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-widest mb-3">Nuestra historia</p>
              <h2 className="text-3xl font-bold text-[#0c4a6e] mb-5">30+ años buscando soluciones</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Lentes Especializados nació de una convicción: que los pacientes con condiciones visuales complejas merecen un lugar donde el "no hay nada más que hacer" no sea la respuesta.
                </p>
                <p>
                  El Dr. Leonardo Orjuela fundó el centro en 1992, cuando los lentes esclerales y los RGP personalizados eran una rareza en Colombia. Desde entonces, el centro ha crecido hasta ser un equipo interdisciplinario que combina optometría clínica de alta complejidad con oftalmología especializada en superficie ocular.
                </p>
                <p>
                  Hoy contamos con tecnología de topografía corneal de última generación, imágenes de glándulas de Meibomio y el más amplio inventario de lentes especializados del país para adaptar a cada paciente la solución exacta que su córnea necesita.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "1992", label: "Año de fundación" },
                { num: "+5.000", label: "Pacientes atendidos" },
                { num: "4", label: "Especialistas" },
                { num: "+30", label: "Años de experiencia" },
              ].map((s) => (
                <div key={s.label} className="bg-[#f0f9ff] rounded-2xl p-6 text-center border border-sky-100">
                  <p className="text-3xl font-black text-[#0c4a6e]">{s.num}</p>
                  <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f0f9ff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-widest mb-3">El equipo</p>
            <h2 className="text-3xl font-bold text-[#0c4a6e]">Quiénes le atienden</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipo.map((e) => (
              <div key={e.nombre} className="bg-white rounded-2xl p-7 border border-sky-100 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0c4a6e] flex items-center justify-center text-white font-bold text-xl mb-4">
                  {e.nombre.split(" ")[1][0]}
                </div>
                <h3 className="font-bold text-[#0c4a6e] text-xl">{e.nombre}</h3>
                <p className="text-[#0ea5e9] text-sm font-semibold mb-3">{e.titulo}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{e.bio}</p>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Áreas de enfoque</p>
                  <ul className="space-y-1">
                    {e.especialidades.map((esp) => (
                      <li key={esp} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-[#0ea5e9] shrink-0">·</span>
                        {esp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-widest mb-3">Lo que nos diferencia</p>
            <h2 className="text-3xl font-bold text-[#0c4a6e]">Nuestra forma de trabajar</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valores.map((v) => (
              <div key={v.titulo} className="flex gap-4 p-6 bg-[#f0f9ff] rounded-2xl border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-[#0c4a6e] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0c4a6e] mb-1">{v.titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c4a6e] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">¿Quiere conocernos?</h2>
          <p className="text-sky-200 mb-6">La primera consulta es el primer paso. Aria puede ayudarle a agendar ahora mismo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573113154316"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20b858] transition-colors"
            >
              Agendar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="border border-sky-400 text-sky-100 px-6 py-3 rounded-full font-semibold hover:bg-sky-800/40 transition-colors"
            >
              Ver información de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
