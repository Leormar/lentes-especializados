import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agende su consulta en Lentes Especializados, Medellín. Torre Médica Ciudad del Río. WhatsApp, correo o formulario.",
};

const horarios = [
  { dia: "Lunes a viernes", hora: "7:30 am – 5:30 pm" },
  { dia: "Sábados", hora: "Ocasionales — confirmar por WhatsApp" },
  { dia: "Domingos y festivos", hora: "Cerrado" },
];

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#2e3f8a] to-[#1a2a5e] text-white pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-4">Contacto</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Agende su consulta</h1>
          <p className="text-sky-100 text-lg max-w-xl mx-auto leading-relaxed">
            La manera más rápida de agendar es por WhatsApp. Aria, nuestra asistente virtual, le atiende en segundos.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#2e3f8a] mb-6">Información de contacto</h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2e3f8a] flex items-center justify-center shrink-0 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#2e3f8a]">WhatsApp — Aria</p>
                  <a
                    href="https://wa.me/573113154316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5b80d4] hover:underline"
                  >
                    +57 311 315 4316
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Aria responde 24/7. El equipo humano responde en horario de atención.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2e3f8a] flex items-center justify-center shrink-0 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#2e3f8a]">Correo electrónico</p>
                  <a href="mailto:info@lentesespecializados.com" className="text-[#5b80d4] hover:underline">
                    info@lentesespecializados.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2e3f8a] flex items-center justify-center shrink-0 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#2e3f8a]">Ubicación</p>
                  <p className="text-slate-600">Torre Médica Ciudad del Río</p>
                  <p className="text-slate-600">Medellín, Colombia</p>
                  <p className="text-xs text-slate-400 mt-0.5">La dirección exacta y opciones de parqueo se confirman al agendar.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#2e3f8a] mb-4">Horario de atención</h3>
            <div className="space-y-2">
              {horarios.map((h) => (
                <div key={h.dia} className="flex justify-between text-sm py-2 border-b border-slate-100">
                  <span className="text-slate-700 font-medium">{h.dia}</span>
                  <span className="text-slate-500">{h.hora}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f0f9ff] rounded-2xl p-5 border border-sky-100">
            <p className="font-semibold text-[#2e3f8a] mb-1">Aria está disponible 24/7</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nuestra asistente virtual Aria puede agendar su cita, responder preguntas sobre servicios y orientarle sobre el tipo de lente que puede necesitar, en cualquier momento del día.
            </p>
            <a
              href="https://wa.me/573113154316?text=Hola,%20Aria.%20Me%20gustaría%20agendar%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-4 inline-block bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20b858] transition-colors"
            >
              Abrir WhatsApp con Aria
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#2e3f8a] mb-6">Envíenos un mensaje</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
