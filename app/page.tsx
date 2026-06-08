import Link from "next/link";
import Carrusel from "@/components/Carrusel";
import SelectorInteractivo from "@/components/SelectorInteractivo";

export default function Home() {
  return (
    <>
      <Carrusel />
      <EquipoSection />
      <ValoresSection />
      <ServiciosSection />
      <SelectorSection />
      <SolicitarCitaSection />
    </>
  );
}

function EquipoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e3f8a] mb-4">
            Contamos con un excelente equipo de trabajo
          </h2>
          <div className="w-16 h-1 bg-[#5b80d4] mx-auto mb-6 rounded-full" />
          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-lg">
            Con más de 30 años de experiencia, somos el centro de referencia en contactología especializada de Medellín. Nuestro equipo interdisciplinario de optómetras y oftalmólogos atiende los casos más complejos: queratocono, córneas irregulares, ojo seco severo y adaptaciones post-quirúrgicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-3">
            <p className="font-semibold text-[#2e3f8a] text-lg mb-4">Nuestras especialidades:</p>
            {[
              "Adaptación de lentes esclerales y RGP",
              "Manejo de queratocono y ectasias corneales",
              "Lentes post-quirúrgicos (LASIK, trasplante de córnea)",
              "Tratamiento integral de ojo seco severo",
              "Optometría pediátrica y bebés canguro",
              "Ortóptica y rehabilitación visual",
              "Prótesis ocular personalizada",
              "Baja visión",
            ].map((esp) => (
              <div key={esp} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#5b80d4] shrink-0" />
                <span className="text-slate-700">{esp}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#f0f9ff] rounded-2xl p-8 border border-sky-100 flex flex-col justify-center">
            <p className="text-[#5b80d4] font-semibold text-sm uppercase tracking-widest mb-4">El equipo</p>
            {[
              { nombre: "Dr. Leonardo Orjuela Mariño", rol: "OD · Director Científico · Contactología, Baja Visión, Prótesis" },
              { nombre: "Dra. Elizabeth Rueda", rol: "OD · Optometría Pediátrica · Bebés Canguro" },
              { nombre: "Dra. Laura Montoya", rol: "OD · Ortóptica · Prótesis Ocular" },
              { nombre: "Dra. Laura Silva", rol: "MD · Oftalmología · Superficie Ocular" },
            ].map((p) => (
              <div key={p.nombre} className="py-3 border-b border-sky-100 last:border-0">
                <p className="font-semibold text-[#2e3f8a] text-sm">{p.nombre}</p>
                <p className="text-slate-500 text-xs mt-0.5">{p.rol}</p>
              </div>
            ))}
            <Link
              href="/quienes-somos"
              className="mt-5 text-center border-2 border-[#2e3f8a] text-[#2e3f8a] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2e3f8a] hover:text-white transition-colors"
            >
              Conocer al equipo completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValoresSection() {
  const valores = [
    {
      icono: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#5b80d4" strokeWidth="2" />
          <path d="M12 20l6 6 10-12" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titulo: "Calidad",
      desc: "Utilizamos topografía corneal de última generación y los materiales de lentes de mayor calidad disponibles en el mercado mundial.",
    },
    {
      icono: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#5b80d4" strokeWidth="2" />
          <path d="M20 10v10l6 4" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      titulo: "Experiencia",
      desc: "Más de 30 años adaptando lentes especializados nos convierten en el centro con mayor trayectoria en contactología de alta complejidad en Antioquia.",
    },
    {
      icono: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#5b80d4" strokeWidth="2" />
          <path d="M14 26c0-4 3-8 6-10M26 14c-1.5 4-4 7-6 9" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="#5b80d4" />
        </svg>
      ),
      titulo: "Innovación",
      desc: "Incorporamos los diseños más avanzados de lentes esclerales, RGP e híbridos, manteniéndonos a la vanguardia de la contactología especializada.",
    },
  ];

  return (
    <section className="py-14 bg-[#f0f9ff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((v) => (
            <div
              key={v.titulo}
              className="bg-white rounded-2xl p-8 text-center border border-sky-100 shadow-sm hover:shadow-md hover:border-[#5b80d4] transition-all"
            >
              <div className="flex justify-center mb-5">{v.icono}</div>
              <h3 className="text-xl font-bold text-[#2e3f8a] mb-3">{v.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiciosSection() {
  const servicios = [
    { titulo: "Lentes Esclerales", href: "/servicios#esclerales", desc: "Para queratocono, córneas irregulares y ojo seco severo." },
    { titulo: "Lentes RGP / Híbridos", href: "/servicios#rgp", desc: "Óptica superior para astigmatismo irregular y alta miopía." },
    { titulo: "Post-quirúrgico", href: "/servicios#post-quirurgico", desc: "Adaptación después de LASIK, trasplante o implante de IOL." },
    { titulo: "Ojo Seco Severo", href: "/servicios#ojo-seco", desc: "Protocolo integral + lentes como reservorio de lágrima." },
    { titulo: "Baja Visión", href: "/servicios#baja-vision", desc: "Ayudas ópticas y electrónicas para maximizar la visión restante." },
    { titulo: "Optometría Pediátrica", href: "/quienes-somos", desc: "Bebés canguro, desarrollo visual y contactología en niños." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">Nuestros Servicios</h2>
          <div className="w-16 h-1 bg-[#5b80d4] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s) => (
            <Link
              key={s.titulo}
              href={s.href}
              className="group bg-[#f0f9ff] border border-sky-100 rounded-xl p-6 hover:border-[#5b80d4] hover:bg-white hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2e3f8a] flex items-center justify-center mb-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <ellipse cx="9" cy="9" rx="7.5" ry="5" stroke="white" strokeWidth="1.5" />
                  <circle cx="9" cy="9" r="2.5" fill="white" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2e3f8a] mb-2 group-hover:text-[#5b80d4] transition-colors">{s.titulo}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/servicios"
            className="inline-block bg-[#2e3f8a] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#1a2a5e] transition-colors"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

function SelectorSection() {
  return (
    <section className="py-16 bg-[#f0f9ff]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">¿No sabe qué lente necesita?</h2>
          <div className="w-16 h-1 bg-[#5b80d4] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 leading-relaxed">
            Responda 3 preguntas y le indicamos qué tipo de lente especializado se adapta mejor a su caso.
          </p>
        </div>
        <SelectorInteractivo />
      </div>
    </section>
  );
}

function SolicitarCitaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">Solicitar Cita</h2>
          <div className="w-16 h-1 bg-[#5b80d4] mx-auto rounded-full mb-4" />
          <p className="text-slate-600">La forma más rápida de agendar es por WhatsApp. También puede dejarnos sus datos y le contactamos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <a
              href="https://wa.me/573113154316?text=Hola,%20quiero%20solicitar%20una%20cita%20en%20Lentes%20Especializados"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-6 hover:bg-[#20b858] transition-colors shadow-sm"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">Agendar por WhatsApp</p>
                <p className="text-white/80 text-sm">Aria le responde inmediatamente · 24/7</p>
                <p className="text-white font-medium text-sm mt-1">+57 311 315 4316</p>
              </div>
            </a>

            <div className="bg-[#f0f9ff] rounded-2xl p-6 border border-sky-100 space-y-4">
              <p className="font-semibold text-[#2e3f8a]">Información de contacto</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-slate-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b80d4" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Torre Médica Ciudad del Río, Medellín
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b80d4" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Lunes a viernes: 7:30 am – 5:30 pm
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5b80d4" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  info@lentesespecializados.com
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4" action="https://wa.me/573113154316" method="GET">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo *</label>
              <input
                type="text"
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] focus:border-transparent transition-all"
                placeholder="Su nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Documento de identidad</label>
              <input
                type="text"
                maxLength={20}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] focus:border-transparent transition-all"
                placeholder="Número de documento"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico *</label>
              <input
                type="email"
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] focus:border-transparent transition-all"
                placeholder="su@correo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono / Celular *</label>
              <input
                type="tel"
                required
                maxLength={15}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] focus:border-transparent transition-all"
                placeholder="+57 300 000 0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Motivo de consulta</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] focus:border-transparent transition-all">
                <option value="">Seleccione...</option>
                <option>Queratocono</option>
                <option>Post-LASIK / Post-cirugía</option>
                <option>Ojo seco severo</option>
                <option>Intolerancia a lentes convencionales</option>
                <option>Córnea irregular</option>
                <option>Baja visión</option>
                <option>Primera consulta / sin diagnóstico previo</option>
                <option>Otro</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2e3f8a] text-white py-3.5 rounded-xl font-semibold hover:bg-[#1a2a5e] transition-colors"
            >
              Enviar solicitud
            </button>
            <p className="text-xs text-slate-400 text-center">
              Para atención inmediata, prefiera el WhatsApp. Le contactamos en horario hábil.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
