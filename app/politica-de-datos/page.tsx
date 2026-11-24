import type { Metadata } from "next";
import { NEGOCIO } from "@/lib/seo";
import { BOLETIN } from "@/lib/boletin";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos personales",
  alternates: { canonical: "/politica-de-datos" },
  description:
    "Qué datos recoge lentesespecializados.com, para qué se usan y cómo ejercer sus derechos, conforme a la Ley 1581 de 2012.",
  robots: { index: true, follow: true },
};

/**
 * Política acotada a lo que este sitio recoge de verdad hoy: el correo de
 * quien se suscribe al boletín, y nada más. El formulario de contacto no
 * guarda nada, abre WhatsApp. Si algún día el sitio empieza a almacenar
 * datos clínicos o de citas, esta página hay que ampliarla.
 */
export default function PoliticaDatosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#2e3f8a] to-[#1a2a5e] text-white pt-36 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Política de tratamiento de datos personales
          </h1>
          <p className="text-sky-100 text-sm">
            Conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-9 text-slate-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-[#2e3f8a] mb-3">1. Quién responde por sus datos</h2>
          <p>
            <strong>{NEGOCIO.nombre}</strong> ({NEGOCIO.marca})<br />
            {NEGOCIO.edificio} · {NEGOCIO.calle}<br />
            {NEGOCIO.barrio}, {NEGOCIO.ciudad}, Colombia<br />
            Correo:{" "}
            <a href={`mailto:${NEGOCIO.email}`} className="text-[#2e3f8a] font-semibold hover:underline">
              {NEGOCIO.email}
            </a>
            <br />
            Teléfono: {NEGOCIO.telefono}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#2e3f8a] mb-3">2. Qué recoge este sitio</h2>
          <p>
            Solo el <strong>correo electrónico</strong> de quien decide
            suscribirse al boletín {BOLETIN.nombre}. No pedimos nombre,
            documento ni datos clínicos para suscribirse.
          </p>
          <p className="mt-3">
            El formulario de contacto <strong>no guarda nada</strong>: arma un
            mensaje y abre WhatsApp para que usted lo envíe. Lo que escriba
            allí se rige por las condiciones de WhatsApp y queda en esa
            conversación, no en este sitio.
          </p>
          <p className="mt-3">
            El sitio usa Google Analytics para medir visitas de forma agregada
            (páginas vistas, origen del tráfico, tipo de dispositivo). Esa
            medición no identifica a nadie por su nombre.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#2e3f8a] mb-3">3. Para qué se usa</h2>
          <p>
            El correo se usa <strong>solo</strong> para enviarle el boletín.
            No lo vendemos, no lo arrendamos y no lo cruzamos con su historia
            clínica. Nunca le escribiremos para ofrecerle un tratamiento a
            partir de que esté en esta lista.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#2e3f8a] mb-3">4. Dónde vive la lista</h2>
          <p>
            La lista de suscriptores la administra <strong>Substack Inc.</strong>,
            la plataforma donde se publica {BOLETIN.nombre}. Al suscribirse,
            su correo queda registrado allí y es Substack quien le envía el
            correo de confirmación y cada entrega. Los servidores de Substack
            están en Estados Unidos.
          </p>
          <p className="mt-3">
            El sitio está alojado en <strong>Vercel Inc.</strong>, también en
            Estados Unidos. Ambos proveedores operan bajo estándares de
            seguridad equivalentes a los que exige la Ley 1581 de 2012.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#2e3f8a] mb-3">5. Sus derechos</h2>
          <p>Como titular de sus datos usted puede:</p>
          <ul className="list-disc pl-6 space-y-1 mt-3">
            <li><strong>Conocer</strong> qué datos suyos tenemos.</li>
            <li><strong>Actualizarlos</strong> o <strong>rectificarlos</strong> si están mal.</li>
            <li><strong>Revocar</strong> la autorización y <strong>suprimir</strong> su correo de la lista.</li>
            <li>Acceder a todo lo anterior <strong>sin costo</strong>.</li>
          </ul>
          <p className="mt-3">
            Para darse de baja, lo más rápido es el enlace{" "}
            <em>&ldquo;Unsubscribe&rdquo;</em> que va al pie de cada entrega del
            boletín: es inmediato y no hay que pedir permiso a nadie.
          </p>
          <p className="mt-3">
            Para cualquier otra solicitud, escríbanos a{" "}
            <a href={`mailto:${NEGOCIO.email}?subject=Habeas%20Data`} className="text-[#2e3f8a] font-semibold hover:underline">
              {NEGOCIO.email}
            </a>{" "}
            con el asunto <em>Habeas Data</em>. Respondemos dentro de los 10
            días hábiles siguientes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#2e3f8a] mb-3">6. Cuánto tiempo lo conservamos</h2>
          <p>
            Su correo permanece en la lista mientras usted quiera seguir
            recibiendo el boletín. Cuando se da de baja, sale de la lista de
            envío y deja de recibir correos nuestros.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#2e3f8a] mb-3">7. Historia clínica</h2>
          <p>
            Esta política cubre únicamente este sitio web. Los datos clínicos
            de los pacientes atendidos en el consultorio se manejan por
            separado, bajo la normativa de historia clínica (Resolución 1995 de
            1999 y las normas que la modifiquen), y no se tratan a través de
            esta página.
          </p>
        </div>

        <div className="rounded-2xl bg-[#f0f9ff] border-2 border-[#d7c874]/30 p-6 text-sm">
          <p className="font-bold text-[#2e3f8a] mb-1">¿Dudas sobre sus datos?</p>
          <p className="text-slate-600">
            Escríbanos a{" "}
            <a href={`mailto:${NEGOCIO.email}`} className="text-[#2e3f8a] font-semibold hover:underline">
              {NEGOCIO.email}
            </a>{" "}
            o llámenos al <strong>{NEGOCIO.telefono}</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
