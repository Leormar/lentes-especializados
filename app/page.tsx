import Link from "next/link";
import Carrusel from "@/components/Carrusel";
import SelectorInteractivo from "@/components/SelectorInteractivo";
import ReseñasSection from "@/components/ReseñasSection";
import SectionBadge from "@/components/SectionBadge";

export default function Home() {
  return (
    <>
      <Carrusel />
      <LentesSection />
      <ReseñasSection />
      <MapaSection />
    </>
  );
}

/* ──────────── Qué lente necesita ──────────── */
const lensTypes = [
  { id: "esclerales",       label: "Lentes Esclerales",    sub: "Córneas irregulares · Ojo seco severo" },
  { id: "orthokeratologia", label: "Ortoqueratología",     sub: "Visión sin gafas · Control miopía" },
  { id: "rgp",              label: "RGP / Híbridos",       sub: "Alta miopía · Astigmatismo irregular" },
  { id: "post-quirurgico",  label: "Post-Quirúrgico",      sub: "LASIK · Trasplante · IOL" },
  { id: "ojo-seco",         label: "Ojo Seco Severo",      sub: "Diagnóstico y tratamiento integral" },
  { id: "mediview",         label: "Imágenes MediView",    sub: "Diagnóstico de superficie ocular" },
];

/* Íconos de línea profesionales — azul institucional con acento dorado */
function LensIcon({ id }: { id: string }) {
  const azul = "#2e3f8a";
  const dorado = "#d7c874";
  switch (id) {
    case "esclerales": // lente escleral: cúpula sobre la córnea
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M4 21c0-7 5-12 11-12s11 5 11 12" stroke={azul} strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 21c0-4.5 3.2-8 7-8s7 3.5 7 8" stroke={dorado} strokeWidth="2" strokeLinecap="round"/>
          <line x1="2" y1="21" x2="28" y2="21" stroke={azul} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "orthokeratologia": // luna: lentes de uso nocturno
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M25 18.5A10.5 10.5 0 0 1 11.5 5 10.5 10.5 0 1 0 25 18.5z" stroke={azul} strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="21" cy="8" r="1.5" fill={dorado}/>
        </svg>
      );
    case "rgp": // capas ópticas: centro rígido + falda
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <ellipse cx="15" cy="15" rx="12" ry="7.5" stroke={azul} strokeWidth="2"/>
          <ellipse cx="15" cy="15" rx="6.5" ry="4" stroke={dorado} strokeWidth="2"/>
          <circle cx="15" cy="15" r="1.5" fill={azul}/>
        </svg>
      );
    case "post-quirurgico": // cruz médica en escudo
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M15 3l9 3.5V14c0 5.5-3.8 9.5-9 11-5.2-1.5-9-5.5-9-11V6.5L15 3z" stroke={azul} strokeWidth="2" strokeLinejoin="round"/>
          <path d="M15 9.5v9M10.5 14h9" stroke={dorado} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "ojo-seco": // gota de línea
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M15 3.5S6.5 13 6.5 18.5a8.5 8.5 0 0 0 17 0C23.5 13 15 3.5 15 3.5z" stroke={azul} strokeWidth="2" strokeLinejoin="round"/>
          <path d="M11 18.5a4 4 0 0 0 3 4" stroke={dorado} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    default: // mediview: ojo con línea de escaneo
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M2.5 15S7.5 7 15 7s12.5 8 12.5 8-5 8-12.5 8S2.5 15 2.5 15z" stroke={azul} strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="15" cy="15" r="3.5" stroke={dorado} strokeWidth="2"/>
          <line x1="15" y1="4" x2="15" y2="7" stroke={dorado} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
  }
}

function LentesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <SectionBadge>Encuentre su solución</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e3f8a] mb-3">
            ¿Qué tipo de lente necesita?
          </h2>
          <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Adaptamos todos los tipos de lentes de contacto especializados. Seleccione el que se acerca a su caso o use el orientador interactivo.
          </p>
        </div>

        {/* Tarjetas compactas de tipos de lente */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {lensTypes.map((l) => (
            <Link
              key={l.id}
              href={`/servicios#${l.id}`}
              className="group flex items-center gap-3 bg-[#fffbeb] border-2 border-[#d7c874]/30 rounded-2xl p-4 hover:border-[#d7c874] hover:shadow-md transition-all"
            >
              <span className="shrink-0"><LensIcon id={l.id} /></span>
              <div>
                <p className="font-bold text-[#2e3f8a] text-sm leading-snug group-hover:text-[#2e3f8a]">
                  {l.label}
                </p>
                <p className="text-slate-400 text-xs leading-tight mt-0.5">{l.sub}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mb-12">
          <Link
            href="/servicios"
            className="btn-shine inline-block border-2 border-[#d7c874] text-[#2e3f8a] px-7 py-2.5 rounded-full font-bold text-sm hover:bg-[#d7c874] transition-colors"
          >
            Ver todos los servicios con detalle →
          </Link>
        </div>

        {/* Separador dorado */}
        <div id="selector" className="flex items-center gap-4 mb-10 scroll-mt-36">
          <div className="flex-1 h-px bg-[#d7c874]/30" />
          <span className="text-[#d7c874] font-black text-xs uppercase tracking-widest whitespace-nowrap">
            Orientador interactivo
          </span>
          <div className="flex-1 h-px bg-[#d7c874]/30" />
        </div>

        {/* Selector interactivo */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-6">
            Responda 3 preguntas y le indicamos qué tipo de lente se adapta mejor a su caso.
          </p>
          <SelectorInteractivo />
        </div>

      </div>
    </section>
  );
}

/* ──────────── Mapa y ubicación ──────────── */
function MapaSection() {
  return (
    <section className="bg-[#fffbeb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8 text-center">
        <SectionBadge>Cómo llegar</SectionBadge>
        <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">Nuestra ubicación</h2>
        <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full" />
      </div>

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border-2 border-[#d7c874]/20 shadow-sm flex gap-3 hover:border-[#d7c874]/60 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#fffbeb] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2e3f8a" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#2e3f8a] mb-1">Dirección</p>
              <p className="text-slate-600 leading-snug">Torre Médica Ciudad del Río<br />Piso 16 · Of. 1628<br />Medellín, Colombia</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border-2 border-[#d7c874]/20 shadow-sm flex gap-3 hover:border-[#d7c874]/60 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#fffbeb] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2e3f8a" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#2e3f8a] mb-1">Horario</p>
              <p className="text-slate-600 leading-snug">Lunes a viernes<br />7:30 am – 5:30 pm</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border-2 border-[#d7c874]/20 shadow-sm flex gap-3 hover:border-[#d7c874]/60 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#fffbeb] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#2e3f8a] mb-1">WhatsApp · Aria</p>
              <a href="https://wa.me/573113154316" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">+57 311 315 4316</a>
              <p className="text-slate-400 text-xs mt-0.5">Responde 24/7</p>
            </div>
          </div>

          <div className="bg-[#2e3f8a] rounded-2xl p-5 flex items-center justify-center border-2 border-[#d7c874]/40">
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
