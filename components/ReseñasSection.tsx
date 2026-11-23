import Image from "next/image";
import { obtenerResenasGoogle, type ResenaGoogle } from "@/lib/resenas";

const FICHA_GOOGLE = "https://share.google/fEwWsA3XU3lIVCjmE";

export default async function ReseñasSection() {
  const perfil = await obtenerResenasGoogle();
  const fichaUrl = perfil?.mapsUrl ?? FICHA_GOOGLE;
  const calificacion = perfil?.calificacion ?? 5;
  const resenas = perfil?.resenas ?? [];

  return (
    <section className="py-14 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#5b80d4] font-semibold text-sm uppercase tracking-widest mb-2">Lo que dicen nuestros pacientes</p>
          <h2 className="text-3xl font-bold text-[#2e3f8a] mb-3">Reseñas y Redes Sociales</h2>
          <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Google Reviews */}
          <a
            href={fichaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group flex flex-col items-center justify-center gap-5 rounded-2xl border-2 border-slate-100 hover:border-[#d7c874] bg-white hover:shadow-xl transition-all p-8 text-center"
          >
            {/* Google logo */}
            <div className="flex items-center gap-3">
              <GoogleColorIcon size={40} />
              <div className="text-left">
                <p className="font-black text-slate-800 text-lg leading-tight">Google</p>
                <p className="text-slate-500 text-sm">Reseñas verificadas</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex flex-col items-center gap-2">
              <Estrellas calificacion={calificacion} tamano={28} />
              <p className="text-4xl font-black text-slate-800">{calificacion.toFixed(1)}</p>
              <p className="text-slate-500 text-sm">
                {perfil?.total
                  ? `${perfil.total} ${perfil.total === 1 ? "reseña" : "reseñas"} en Google`
                  : "Calificación en Google"}
              </p>
            </div>

            <span className="inline-flex items-center gap-2 bg-[#2e3f8a] text-white px-6 py-3 rounded-full font-bold text-sm group-hover:bg-[#1a2a5e] transition-colors">
              Ver reseñas en Google
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/lentesdecontactomedellin/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group flex flex-col items-center justify-center gap-5 rounded-2xl border-2 border-slate-100 hover:border-[#E1306C] bg-white hover:shadow-xl transition-all p-8 text-center"
          >
            {/* Instagram gradient icon */}
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none"/>
              </svg>
            </div>

            <div>
              <p className="font-black text-slate-800 text-xl">@lentesdecontactomedellin</p>
              <p className="text-slate-500 text-sm mt-1">Síguenos · Casos clínicos · Educación visual</p>
            </div>

            <span className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-bold text-sm transition-opacity group-hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
              Seguir en Instagram
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

        </div>

        {/* Reseñas reales de la ficha de Google. Google devuelve 5 como máximo. */}
        {resenas.length > 0 && (
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {resenas.map((r) => (
                <TarjetaResena key={r.id} resena={r} />
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 mt-5">
              Reseñas publicadas por pacientes en Google. Se actualizan automáticamente desde nuestra ficha.
            </p>
          </div>
        )}

        {/* Dejar reseña CTA */}
        <div className="mt-8 text-center">
          <a
            href={fichaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 border-2 border-[#d7c874] text-[#2e3f8a] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#d7c874]/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
            </svg>
            Calificarnos en Google · Ayuda a otros pacientes
          </a>
        </div>
      </div>
    </section>
  );
}

function TarjetaResena({ resena }: { resena: ResenaGoogle }) {
  return (
    <figure className="flex flex-col h-full rounded-2xl border border-slate-100 bg-[#fbfdff] p-6 hover:border-[#5b80d4] hover:shadow-md transition-all">
      <div className="flex items-center gap-3 mb-4">
        {resena.fotoAutor ? (
          <Image
            src={resena.fotoAutor}
            alt=""
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover shrink-0"
            unoptimized
          />
        ) : (
          <span className="w-11 h-11 rounded-full bg-[#2e3f8a] text-white font-black flex items-center justify-center shrink-0">
            {resena.autor.charAt(0).toUpperCase()}
          </span>
        )}
        <div className="min-w-0">
          <p className="font-bold text-slate-800 text-sm truncate">{resena.autor}</p>
          <div className="flex items-center gap-2">
            <Estrellas calificacion={resena.calificacion} tamano={13} />
            {resena.cuando && <span className="text-xs text-slate-400">{resena.cuando}</span>}
          </div>
        </div>
      </div>

      <blockquote className="text-slate-600 text-sm leading-relaxed line-clamp-6 flex-1">
        {resena.texto}
      </blockquote>

      <figcaption className="flex items-center gap-1.5 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
        <GoogleColorIcon size={13} />
        Publicada en Google
      </figcaption>
    </figure>
  );
}

/**
 * Estrellas con relleno proporcional: la fila dorada se recorta al porcentaje
 * exacto de la calificación, así un 4.7 no se redondea visualmente a 5.
 */
function Estrellas({ calificacion, tamano = 20 }: { calificacion: number; tamano?: number }) {
  const porcentaje = Math.max(0, Math.min(100, (calificacion / 5) * 100));
  const fila = (color: string) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={tamano} height={tamano} viewBox="0 0 24 24" fill={color}>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <div
      className="relative inline-block"
      role="img"
      aria-label={`${calificacion.toFixed(1)} de 5 estrellas`}
    >
      {fila("#e2e8f0")}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${porcentaje}%` }}
        aria-hidden="true"
      >
        {fila("#FBBC05")}
      </div>
    </div>
  );
}

function GoogleColorIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
