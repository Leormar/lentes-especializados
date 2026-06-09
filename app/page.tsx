import Link from "next/link";
import Image from "next/image";
import Carrusel from "@/components/Carrusel";
import TabsInfo from "@/components/TabsInfo";
import SelectorInteractivo from "@/components/SelectorInteractivo";
import ReseñasSection from "@/components/ReseñasSection";

export default function Home() {
  return (
    <>
      <Carrusel />
      <ServiciosHomepage />
      <TabsInfo />
      <ValoresSection />
      <SelectorSection />
      <ReseñasSection />
      <MapaSection />
      <SolicitarCitaSection />
    </>
  );
}

const serviciosData = [
  {
    id: "esclerales",
    titulo: "Lentes Esclerales",
    desc: "Para queratocono, córneas irregulares y ojo seco severo. El estándar de oro en contactología.",
    foto: "/servicios/esclerales.jpg",
    tag: "Alta complejidad",
  },
  {
    id: "orthokeratologia",
    titulo: "Ortoqueratología · Ortho-K",
    desc: "Lentes nocturnos que remodelan la córnea durante el sueño. Visión clara todo el día sin gafas. Control científico de la miopía infantil.",
    foto: "/servicios/orthokeratologia.jpg",
    tag: "Control de miopía",
  },
  {
    id: "rgp",
    titulo: "Lentes RGP e Híbridos",
    desc: "Óptica superior para astigmatismo irregular y alta miopía. Adaptación con topografía corneal.",
    foto: "/servicios/rgp.jpg",
    tag: "Contactología",
  },
  {
    id: "post-quirurgico",
    titulo: "Post-Quirúrgico",
    desc: "Adaptación tras LASIK, trasplante de córnea o implante de IOL. Protocolos especializados.",
    foto: "/servicios/post-quirurgico.jpg",
    tag: "Rehabilitación",
  },
  {
    id: "ojo-seco",
    titulo: "Ojo Seco Severo",
    desc: "Protocolo integral de diagnóstico y tratamiento. Los esclerales como reservorio permanente de lágrima.",
    foto: "/servicios/ojo-seco.jpg",
    tag: "Superficie ocular",
  },
  {
    id: "mediview",
    titulo: "Imágenes MediView",
    desc: "Valoración diagnóstica del ojo seco y exámenes de superficie ocular para contactología y oftalmología.",
    foto: "/servicios/mediview.jpg",
    tag: "Diagnóstico",
  },
  {
    id: "baja-vision",
    titulo: "Baja Visión",
    desc: "Ayudas ópticas y electrónicas para maximizar el potencial visual restante. Todas las edades.",
    foto: "/servicios/baja-vision.jpg",
    tag: "Rehabilitación",
  },
];

function ServiciosHomepage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#d7c874] font-bold text-sm uppercase tracking-widest mb-2">Lo que hacemos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e3f8a] mb-3">Nuestros Servicios</h2>
          <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            La gama más completa de contactología especializada de Medellín, con tecnología diagnóstica de última generación.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosData.map((s) => (
            <Link
              key={s.id}
              href={`/servicios#${s.id}`}
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#d7c874] transition-all duration-400 flex flex-col"
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: 220 }}>
                <Image
                  src={s.foto}
                  alt={s.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a5e]/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#d7c874] text-[#1a2a5e] text-xs font-black px-3 py-1 rounded-full shadow-sm">
                  {s.tag}
                </span>
              </div>

              {/* Text */}
              <div className="p-5 flex flex-col flex-1 bg-white border-t-2 border-transparent group-hover:border-[#d7c874] transition-colors">
                <h3 className="font-bold text-[#2e3f8a] text-lg mb-2 group-hover:text-[#2e3f8a] transition-colors">
                  {s.titulo}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{s.desc}</p>
                <span className="text-[#d7c874] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver más
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/servicios"
            className="btn-shine inline-block border-2 border-[#d7c874] text-[#2e3f8a] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#d7c874] transition-colors"
          >
            Ver todos los servicios con detalle →
          </Link>
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
          <circle cx="20" cy="20" r="18" stroke="#d7c874" strokeWidth="2" />
          <path d="M12 20l6 6 10-12" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titulo: "Calidad",
      desc: "Topografía corneal de última generación y materiales de lentes de la más alta calidad disponibles en el mercado mundial.",
    },
    {
      icono: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#d7c874" strokeWidth="2" />
          <path d="M20 10v10l6 4" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      titulo: "Experiencia",
      desc: "Más de 30 años adaptando lentes especializados: el centro con mayor trayectoria en contactología de alta complejidad en Antioquia.",
    },
    {
      icono: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#d7c874" strokeWidth="2" />
          <path d="M14 26c0-4 3-8 6-10M26 14c-1.5 4-4 7-6 9" stroke="#2e3f8a" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3" fill="#d7c874" />
        </svg>
      ),
      titulo: "Innovación",
      desc: "Los diseños más avanzados de esclerales, RGP e híbridos, manteniéndonos a la vanguardia de la contactología especializada.",
    },
  ];

  return (
    <section className="py-14 bg-[#fffbeb]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-2">Por qué elegirnos</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f8a] mb-3">Nuestra promesa</h2>
          <div className="w-12 h-1 bg-[#d7c874] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((v) => (
            <div key={v.titulo} className="bg-white rounded-2xl p-8 text-center border-2 border-[#d7c874]/30 shadow-sm hover:shadow-md hover:border-[#d7c874] transition-all">
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

function SelectorSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-2">Guía personalizada</p>
          <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">¿No sabe qué lente necesita?</h2>
          <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 leading-relaxed">Responda 3 preguntas y le indicamos qué tipo de lente especializado se adapta mejor a su caso.</p>
        </div>
        <SelectorInteractivo />
      </div>
    </section>
  );
}

function MapaSection() {
  return (
    <section className="bg-[#f0f9ff]">
      {/* Título */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8 text-center">
        <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-2">Cómo llegar</p>
        <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">Nuestra ubicación</h2>
        <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full" />
      </div>

      {/* Mapa full-width */}
      <div className="w-full" style={{ height: "clamp(260px, 45vw, 480px)" }}>
        <iframe
          src="https://maps.google.com/maps?q=Torre+M%C3%A9dica+Ciudad+del+R%C3%ADo+Medell%C3%ADn+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación PROLENS – Torre Médica Ciudad del Río"
        />
      </div>

      {/* Barra de info debajo del mapa */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Dirección */}
          <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0f9ff] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2e3f8a" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#2e3f8a] mb-1">Dirección</p>
              <p className="text-slate-600 leading-snug">Torre Médica Ciudad del Río<br />Piso 16 · Of. 1628<br />Medellín, Colombia</p>
            </div>
          </div>

          {/* Horario */}
          <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0f9ff] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2e3f8a" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#2e3f8a] mb-1">Horario</p>
              <p className="text-slate-600 leading-snug">Lunes a viernes<br />7:30 am – 5:30 pm</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0f9ff] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#2e3f8a] mb-1">WhatsApp · Aria</p>
              <a href="https://wa.me/573113154316" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">+57 311 315 4316</a>
              <p className="text-slate-400 text-xs mt-0.5">Responde 24/7</p>
            </div>
          </div>

          {/* Botón Maps */}
          <div className="bg-[#2e3f8a] rounded-2xl p-5 flex items-center justify-center">
            <a
              href="https://maps.google.com/?q=Torre+M%C3%A9dica+Ciudad+del+R%C3%ADo+Medell%C3%ADn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white text-center hover:opacity-90 transition-opacity"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="font-bold text-sm">Abrir en</span>
              <span className="font-bold text-sm">Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolicitarCitaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-2">Agenda su consulta</p>
          <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">Solicitar Cita</h2>
          <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full mb-4" />
          <p className="text-slate-600">La forma más rápida de agendar es por WhatsApp. También puede dejarnos sus datos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <a
              href="https://wa.me/573113154316?text=Hola,%20quiero%20solicitar%20una%20cita%20en%20PROLENS"
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
                <p className="font-bold text-lg">Agendar con Aria por WhatsApp</p>
                <p className="text-white/80 text-sm">Responde inmediatamente · 24/7</p>
                <p className="font-medium text-sm mt-1">+57 311 315 4316</p>
              </div>
            </a>

            <div className="bg-[#f0f9ff] rounded-2xl p-6 border border-blue-100 space-y-3 text-sm text-slate-600">
              <p className="font-semibold text-[#2e3f8a]">Información de contacto</p>
              <div className="flex items-start gap-2"><svg className="shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b80d4" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Torre Médica Ciudad del Río · Piso 16 · Of. 1628 · Medellín</div>
              <div className="flex items-center gap-2"><svg className="shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b80d4" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Lunes a viernes · 7:30 am – 5:30 pm</div>
              <div className="flex items-center gap-2"><svg className="shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#5b80d4" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>info@lentesespecializados.com</div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo *</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] transition-all" placeholder="Su nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Documento</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] transition-all" placeholder="Número de documento" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico *</label>
              <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] transition-all" placeholder="su@correo.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono *</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] transition-all" placeholder="+57 300 000 0000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Motivo de consulta</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] transition-all">
                <option value="">Seleccione...</option>
                <option>Queratocono</option>
                <option>Post-LASIK / Post-cirugía</option>
                <option>Ojo seco severo</option>
                <option>Intolerancia a lentes convencionales</option>
                <option>Córnea irregular</option>
                <option>Baja visión</option>
                <option>Primera consulta</option>
                <option>Otro</option>
              </select>
            </div>
            <button type="submit" className="btn-shine w-full bg-[#2e3f8a] text-white py-3.5 rounded-xl font-bold hover:bg-[#1a2a5e] transition-colors border-b-4 border-[#d7c874]/60">
              Enviar solicitud
            </button>
            <p className="text-xs text-slate-400 text-center">Para atención inmediata, prefiera el WhatsApp.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
