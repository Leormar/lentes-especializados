import type { Metadata } from "next";
import Link from "next/link";
import SectionBadge from "@/components/SectionBadge";

export const metadata: Metadata = {
  title: "Quiénes somos | Lentes Especializados",
  description:
    "Conozca al equipo de Lentes Especializados: especialistas en contactología de alta complejidad con más de 30 años de experiencia en Medellín.",
};

const equipo = [
  {
    nombre: "Dr. Leonardo Orjuela Mariño",
    titulo: "OD · Director Científico",
    inicial: "O",
    color: "from-[#2e3f8a] to-[#5b80d4]",
    especialidades: ["Contactología avanzada: esclerales, RGP, híbridos", "Lentes post-quirúrgicos", "Baja visión", "Queratocono y ectasias corneales"],
    bio: "Con más de 30 años de experiencia, el Dr. Orjuela es uno de los referentes de contactología especializada en Colombia. Fundó el centro en 1992 con la visión de ofrecer soluciones a los casos que la optometría convencional no puede resolver. Ha adaptado lentes a miles de pacientes con queratocono, córneas irregulares y ojo seco severo.",
  },
  {
    nombre: "Dra. Elizabeth Rueda",
    titulo: "OD · Especialista en Optometría Pediátrica",
    inicial: "R",
    color: "from-[#0f766e] to-[#0d9488]",
    especialidades: ["Optometría pediátrica", "Bebés canguro (seguimiento de prematuros)", "Contactología", "Desarrollo visual infantil"],
    bio: "Especialista en visión infantil con énfasis en el seguimiento de bebés prematuros y desarrollo visual temprano. Aporta al equipo la capacidad de atender desde los primeros meses de vida hasta la adolescencia, con protocolos específicos para cada etapa del desarrollo visual.",
  },
  {
    nombre: "Dra. Laura Montoya",
    titulo: "OD · Ortóptica y Prótesis",
    inicial: "M",
    color: "from-[#5b21b6] to-[#7c3aed]",
    especialidades: ["Ortóptica y visión binocular", "Prótesis ocular", "Rehabilitación visual", "Estrabismo y ambliopía"],
    bio: "Experta en ortóptica y rehabilitación de la visión binocular. Atiende casos de estrabismo, ambliopía y diplopía con enfoque funcional. Complementa su práctica con la adaptación de prótesis oculares personalizadas.",
  },
  {
    nombre: "Dra. Laura Silva",
    titulo: "MD · Oftalmóloga",
    inicial: "S",
    color: "from-[#b45309] to-[#d97706]",
    especialidades: ["Oftalmología general", "Superficie ocular y ojo seco", "Enfermedades del segmento anterior", "Diagnóstico con imágenes MediView"],
    bio: "Oftalmóloga especializada en superficie ocular y ojo seco. Su presencia en el equipo permite un manejo verdaderamente integral de condiciones como el síndrome de Sjögren, la rosácea ocular y el ojo seco severo, combinando el tratamiento médico con las soluciones de lentes del Dr. Orjuela.",
  },
];

const diferenciales = [
  {
    titulo: "Casos complejos",
    desc: "Cuando otros dicen 'no hay solución', nosotros empezamos a buscar. Nuestra especialización nos permite atender lo que otros no pueden.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="#d7c874" strokeWidth="2"/>
        <path d="M16.5 16.5L21 21" stroke="#d7c874" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8.5 11l2 2 3.5-4" stroke="#d7c874" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    titulo: "Tecnología de punta",
    desc: "Topografía corneal de alta resolución, imágenes de glándulas de Meibomio y pruebas de superficie ocular para diagnóstico preciso.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 12S6 5.5 12 5.5 22 12 22 12s-4 6.5-10 6.5S2 12 2 12z" stroke="#d7c874" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="#d7c874" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    titulo: "Equipo interdisciplinario",
    desc: "Optómetras y oftalmólogos trabajando juntos bajo un mismo techo. El mismo paciente recibe tratamiento médico y adaptación de lentes.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8.5" cy="8" r="3.5" stroke="#d7c874" strokeWidth="2"/>
        <path d="M2.5 20c.7-3.5 3-5.5 6-5.5s5.3 2 6 5.5" stroke="#d7c874" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15.5 5.2a3.5 3.5 0 0 1 0 5.6M18.2 14.8c2 .9 3.1 2.6 3.5 5.2" stroke="#d7c874" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    titulo: "Seguimiento continuo",
    desc: "La adaptación no termina cuando el paciente se va a casa. Cada caso tiene seguimiento personalizado y acceso directo por WhatsApp.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-2.6-6.3" stroke="#d7c874" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 4v4h-4" stroke="#d7c874" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7.5V12l3 2" stroke="#d7c874" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2e3f8a] to-[#1a2a5e] text-white pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-4">
            Quiénes somos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Especialistas en lo que otros no pueden resolver
          </h1>
          <p className="text-sky-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Desde 1992, en Medellín, atendemos a los pacientes que han agotado las opciones convencionales y buscan una solución real para su visión.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge>Nuestra historia</SectionBadge>
              <h2 className="text-3xl font-bold text-[#2e3f8a] mb-5">30+ años buscando soluciones</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Lentes Especializados nació de una convicción: que los pacientes con condiciones visuales complejas merecen un lugar donde el &ldquo;no hay nada más que hacer&rdquo; no sea la respuesta.
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
                { num: "1992", label: "Año de fundación",    color: "from-[#b45309] to-[#d97706]" },
                { num: "+5.000", label: "Pacientes atendidos", color: "from-[#2e3f8a] to-[#5b80d4]" },
                { num: "4",    label: "Especialistas",        color: "from-[#0f766e] to-[#0d9488]" },
                { num: "+30",  label: "Años de experiencia",  color: "from-[#5b21b6] to-[#7c3aed]" },
              ].map((s) => (
                <div key={s.label} className={`bg-gradient-to-br ${s.color} text-white rounded-2xl p-6 text-center shadow-md`}>
                  <p className="text-3xl font-black">{s.num}</p>
                  <p className="text-white/75 text-xs mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores — Calidad, Experiencia, Innovación */}
      <section className="py-14 bg-[#fffbeb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <SectionBadge>Por qué elegirnos</SectionBadge>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f8a] mb-3">Nuestra promesa</h2>
            <div className="w-12 h-1 bg-[#d7c874] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titulo: "Calidad",
                desc: "Topografía corneal de última generación y materiales de lentes de la más alta calidad disponibles en el mercado mundial.",
                svg: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="18" stroke="#d7c874" strokeWidth="2"/>
                    <path d="M12 20l6 6 10-12" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                titulo: "Experiencia",
                desc: "Más de 30 años adaptando lentes especializados: el centro con mayor trayectoria en contactología de alta complejidad en Antioquia.",
                svg: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="18" stroke="#d7c874" strokeWidth="2"/>
                    <path d="M20 10v10l6 4" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                titulo: "Innovación",
                desc: "Los diseños más avanzados de esclerales, RGP e híbridos, manteniéndonos a la vanguardia de la contactología especializada.",
                svg: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="18" stroke="#d7c874" strokeWidth="2"/>
                    <path d="M14 26c0-4 3-8 6-10M26 14c-1.5 4-4 7-6 9" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="20" cy="20" r="3" fill="#d7c874"/>
                  </svg>
                ),
              },
            ].map((v) => (
              <div key={v.titulo} className="bg-white rounded-2xl p-8 text-center border-2 border-[#d7c874]/30 shadow-sm hover:shadow-md hover:border-[#d7c874] transition-all">
                <div className="flex justify-center mb-5">{v.svg}</div>
                <h3 className="text-xl font-bold text-[#2e3f8a] mb-3">{v.titulo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Profesionales */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionBadge>Nuestros Profesionales</SectionBadge>
            <h2 className="text-3xl font-bold text-[#2e3f8a] mb-2">Toda la experiencia en contactología</h2>
            <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipo.map((e) => (
              <div key={e.nombre} className="bg-white rounded-2xl p-7 border-2 border-[#d7c874]/20 shadow-sm hover:border-[#d7c874]/60 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${e.color} flex items-center justify-center text-white font-black text-xl shrink-0 shadow-md`}>
                    {e.inicial}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2e3f8a] text-lg leading-snug">{e.nombre}</h3>
                    <p className="text-[#5b80d4] text-sm font-semibold">{e.titulo}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{e.bio}</p>
                <div>
                  <p className="text-xs font-black text-[#d7c874] uppercase tracking-wide mb-2">Áreas de enfoque</p>
                  <ul className="space-y-1">
                    {e.especialidades.map((esp) => (
                      <li key={esp} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-[#d7c874] font-bold shrink-0">·</span>
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

      {/* Forma de trabajar */}
      <section className="py-16 bg-[#fffbeb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionBadge>Lo que nos diferencia</SectionBadge>
            <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">Nuestra forma de trabajar</h2>
            <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diferenciales.map((v) => (
              <div key={v.titulo} className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-[#d7c874]/20 hover:border-[#d7c874]/60 transition-colors shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#2e3f8a] flex items-center justify-center shrink-0 mt-0.5">
                  {v.svg}
                </div>
                <div>
                  <h3 className="font-bold text-[#2e3f8a] mb-1">{v.titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-[#2e3f8a] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-3">Dé el primer paso</p>
          <h2 className="text-2xl font-bold mb-4">¿Quiere conocernos?</h2>
          <p className="text-sky-200 mb-6">
            La primera consulta es el primer paso. Aria puede ayudarle a agendar ahora mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573113154316"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20b858] transition-colors"
            >
              Agendar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="border-2 border-[#d7c874]/60 text-[#d7c874] px-6 py-3 rounded-full font-bold hover:bg-[#d7c874]/10 transition-colors"
            >
              Ver información de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
