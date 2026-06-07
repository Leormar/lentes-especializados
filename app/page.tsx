import Link from "next/link";
import SelectorInteractivo from "@/components/SelectorInteractivo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PacientesSection />
      <ServiciosDestacados />
      <SelectorSection />
      <ProcesoSection />
      <BlogPreview />
      <CTAFinal />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#082f49] via-[#0c4a6e] to-[#0e6089] text-white">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-sky-500/20 text-sky-200 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest border border-sky-400/30">
            Contactología de Alta Complejidad
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ver bien no es un lujo.{" "}
            <span className="text-[#38bdf8]">Es una especialidad.</span>
          </h1>
          <p className="text-lg text-sky-100 leading-relaxed mb-8 max-w-lg">
            Adaptamos lentes de contacto para los casos que otros no pueden resolver: queratocono, córneas irregulares, post-cirugía y ojo seco severo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/573113154316?text=Hola,%20me%20interesa%20una%20consulta%20sobre%20lentes%20especializados"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-[#20b858] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar con Aria
            </a>
            <Link
              href="/servicios"
              className="flex items-center justify-center border border-sky-400 text-sky-100 px-6 py-3.5 rounded-full font-semibold hover:bg-sky-800/40 transition-colors"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <EyeIllustration />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "+30", label: "años de experiencia" },
          { num: "+5.000", label: "pacientes atendidos" },
          { num: "4", label: "especialistas en sala" },
          { num: "100%", label: "casos complejos resueltos" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur border border-white/10">
            <p className="text-2xl md:text-3xl font-bold text-white">{stat.num}</p>
            <p className="text-sky-200 text-xs mt-1 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function EyeIllustration() {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80">
      <svg viewBox="0 0 320 320" fill="none" className="w-full h-full drop-shadow-2xl">
        <circle cx="160" cy="160" r="155" fill="white" fillOpacity="0.05" stroke="#38bdf8" strokeWidth="1" />
        <circle cx="160" cy="160" r="120" fill="white" fillOpacity="0.03" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" />
        <ellipse cx="160" cy="160" rx="140" ry="90" fill="#0ea5e9" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="160" cy="160" r="55" fill="#0ea5e9" fillOpacity="0.3" />
        <circle cx="160" cy="160" r="38" fill="#0c4a6e" />
        <circle cx="160" cy="160" r="22" fill="#082f49" />
        <circle cx="150" cy="150" r="7" fill="white" fillOpacity="0.4" />
        <circle cx="170" cy="170" r="3" fill="white" fillOpacity="0.2" />
        <path d="M 20 160 Q 90 100 160 160 Q 230 220 300 160" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" fill="none" strokeDasharray="6 3" />
        <path d="M 20 160 Q 90 220 160 160 Q 230 100 300 160" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" fill="none" strokeDasharray="6 3" />
      </svg>
    </div>
  );
}

function PacientesSection() {
  const casos = [
    {
      icon: "🔵",
      titulo: "Queratocono",
      desc: "La córnea pierde su forma esférica. Los lentes especializados son la única solución óptica efectiva.",
    },
    {
      icon: "⚡",
      titulo: "Post-LASIK / Post-cirugía",
      desc: "Después de cirugía refractiva, muchos pacientes necesitan corrección adicional con lentes de contacto.",
    },
    {
      icon: "💧",
      titulo: "Ojo seco severo",
      desc: "Los lentes esclerales actúan como reservorio de lágrima artificial, aliviando la irritación constante.",
    },
    {
      icon: "👁",
      titulo: "Córneas irregulares",
      desc: "Trasplantes de córnea, cicatrices, degeneraciones: adaptamos el lente exacto para cada anatomía.",
    },
    {
      icon: "🎯",
      titulo: "Intolerancia a lentes convencionales",
      desc: "Si los lentes blandos no le funcionan, existe un lente diseñado específicamente para usted.",
    },
    {
      icon: "📐",
      titulo: "Alta miopía y astigmatismo",
      desc: "Para prescripciones extremas que los lentes convencionales no pueden corregir bien.",
    },
  ];

  return (
    <section className="py-20 bg-[#f0f9ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-widest mb-3">Para quién es</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c4a6e] mb-4">
            Casos que otros no pueden resolver
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
            Somos el destino para pacientes con condiciones visuales complejas que han agotado las opciones convencionales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {casos.map((c) => (
            <div key={c.titulo} className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100 hover:border-[#0ea5e9] hover:shadow-md transition-all">
              <span className="text-3xl mb-4 block">{c.icon}</span>
              <h3 className="font-bold text-[#0c4a6e] text-lg mb-2">{c.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiciosDestacados() {
  const servicios = [
    {
      titulo: "Lentes Esclerales",
      desc: "El estándar de oro para córneas irregulares y ojo seco severo. Reposan sobre la esclerótica, sin tocar la córnea.",
      href: "/servicios#esclerales",
      color: "from-sky-500 to-blue-600",
    },
    {
      titulo: "Lentes RGP / Híbridos",
      desc: "Rígidos gas-permeables con óptica superior. Ideales para queratocono y astigmatismo irregular.",
      href: "/servicios#rgp",
      color: "from-teal-500 to-cyan-600",
    },
    {
      titulo: "Post-quirúrgico",
      desc: "Adaptación especializada tras LASIK, PRK, trasplante de córnea o implante de lente intraocular.",
      href: "/servicios#post-quirurgico",
      color: "from-blue-600 to-indigo-700",
    },
    {
      titulo: "Ojo Seco Severo",
      desc: "Protocolo integrado: diagnóstico, tratamiento de la glándula de Meibomio y adaptación de lentes.",
      href: "/servicios#ojo-seco",
      color: "from-cyan-500 to-sky-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-widest mb-3">Nuestros servicios</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c4a6e]">
              Tecnología de punta.<br />Experiencia clínica real.
            </h2>
          </div>
          <Link href="/servicios" className="text-[#0c4a6e] font-semibold text-sm hover:text-[#0ea5e9] transition-colors whitespace-nowrap">
            Ver todos los servicios →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {servicios.map((s) => (
            <Link
              key={s.titulo}
              href={s.href}
              className="group relative overflow-hidden rounded-2xl p-8 text-white transition-transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color}`} />
              <div className="absolute inset-0 bg-[#0c4a6e]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-3">{s.titulo}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors">
                  Conocer más →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectorSection() {
  return (
    <section className="py-20 bg-[#f0f9ff]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-widest mb-3">Orientador visual</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c4a6e] mb-4">
            ¿No sabe qué lente necesita?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Responda 3 preguntas y le diremos qué tipo de lente especializado se adapta mejor a su caso.
          </p>
        </div>
        <SelectorInteractivo />
      </div>
    </section>
  );
}

function ProcesoSection() {
  const pasos = [
    {
      n: "01",
      titulo: "Consulta inicial",
      desc: "Revisión completa del ojo, topografía corneal y análisis de su historial visual. Duración: 60-90 min.",
    },
    {
      n: "02",
      titulo: "Diseño del lente",
      desc: "Con los datos de su córnea diseñamos el lente exacto. En algunos casos probamos pruebas diagnósticas ese mismo día.",
    },
    {
      n: "03",
      titulo: "Adaptación y ajuste",
      desc: "Recibe el lente, aprende a manipularlo y hacemos ajustes de confort y visión hasta lograr el resultado ideal.",
    },
    {
      n: "04",
      titulo: "Seguimiento continuo",
      desc: "Controles periódicos para verificar salud ocular, confort y calidad visual. Atención de urgencias por WhatsApp.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-widest mb-3">El proceso</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c4a6e]">
            De la consulta a ver perfectamente
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#0ea5e9] to-[#0c4a6e] opacity-20" />
          {pasos.map((p) => (
            <div key={p.n} className="relative text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0c4a6e] text-white font-bold text-xl mb-5 shadow-lg">
                {p.n}
              </div>
              <h3 className="font-bold text-[#0c4a6e] text-lg mb-2">{p.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const articulos = [
    {
      slug: "que-es-el-queratocono",
      categoria: "Condiciones",
      titulo: "¿Qué es el queratocono y cómo afecta la visión?",
      desc: "Una guía completa sobre esta condición progresiva de la córnea: síntomas, diagnóstico y opciones de tratamiento con lentes especializados.",
      tiempo: "5 min",
    },
    {
      slug: "lentes-esclerales-guia",
      categoria: "Lentes",
      titulo: "Lentes esclerales: la solución cuando los demás fallan",
      desc: "Todo lo que necesita saber sobre los lentes esclerales: cómo funcionan, para quién son ideales y qué esperar de la adaptación.",
      tiempo: "7 min",
    },
    {
      slug: "post-lasik-lentes-contacto",
      categoria: "Post-quirúrgico",
      titulo: "Después del LASIK: cuando necesita lentes de contacto",
      desc: "No todos los resultados post-cirugía son perfectos. Explicamos cuándo y por qué los lentes especializados son la mejor opción.",
      tiempo: "6 min",
    },
  ];

  return (
    <section className="py-20 bg-[#f0f9ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#0ea5e9] font-semibold text-sm uppercase tracking-widest mb-3">Educación</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c4a6e]">
              Entienda su condición visual
            </h2>
          </div>
          <Link href="/blog" className="text-[#0c4a6e] font-semibold text-sm hover:text-[#0ea5e9] transition-colors whitespace-nowrap">
            Ver todos los artículos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articulos.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group bg-white rounded-2xl p-6 border border-sky-100 hover:border-[#0ea5e9] hover:shadow-md transition-all"
            >
              <span className="inline-block bg-sky-100 text-[#0c4a6e] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {a.categoria}
              </span>
              <h3 className="font-bold text-[#0c4a6e] text-lg mb-3 group-hover:text-[#0ea5e9] transition-colors leading-snug">
                {a.titulo}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{a.desc}</p>
              <p className="text-xs text-slate-400 font-medium">{a.tiempo} de lectura</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0c4a6e] to-[#082f49] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Lleva años sin ver bien?
        </h2>
        <p className="text-sky-200 text-lg leading-relaxed mb-8">
          Muchos de nuestros pacientes pensaban que no existía solución. Una sola consulta puede cambiar su panorama visual por completo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/573113154316?text=Hola,%20quiero%20agendar%20una%20consulta%20de%20lentes%20especializados"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#20b858] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hablar con Aria ahora
          </a>
          <Link
            href="/contacto"
            className="flex items-center justify-center border border-sky-400 text-sky-100 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-800/40 transition-colors"
          >
            Escribirnos por correo
          </Link>
        </div>
        <p className="text-sky-400 text-sm mt-6">
          Atención lunes a viernes · 7:30 am – 5:30 pm · Aria responde 24/7
        </p>
      </div>
    </section>
  );
}
