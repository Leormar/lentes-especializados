import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold text-lg mb-2">Lentes Especializados</p>
          <p className="text-sky-200 text-sm leading-relaxed">
            Contactología de alta complejidad en Medellín. Adaptamos lentes para los casos que otros no pueden resolver.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sky-100">Servicios</p>
          <ul className="space-y-2 text-sm text-sky-200">
            <li><Link href="/servicios#esclerales" className="hover:text-white transition-colors">Lentes esclerales</Link></li>
            <li><Link href="/servicios#rgp" className="hover:text-white transition-colors">Lentes RGP</Link></li>
            <li><Link href="/servicios#queratocono" className="hover:text-white transition-colors">Queratocono</Link></li>
            <li><Link href="/servicios#post-quirurgico" className="hover:text-white transition-colors">Post-quirúrgico</Link></li>
            <li><Link href="/servicios#ojo-seco" className="hover:text-white transition-colors">Ojo seco severo</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sky-100">Contacto</p>
          <ul className="space-y-2 text-sm text-sky-200">
            <li>Medellín, Colombia</li>
            <li>Torre Médica Ciudad del Río</li>
            <li>
              <a
                href="https://wa.me/573113154316"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: +57 311 315 4316
              </a>
            </li>
            <li>
              <a href="mailto:info@lentesespecializados.com" className="hover:text-white transition-colors">
                info@lentesespecializados.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sky-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-sky-300">
          <p>© {new Date().getFullYear()} Lentes Especializados. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
