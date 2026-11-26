/**
 * Los dos WhatsApp del consultorio, en un solo lugar.
 *
 * Aria es el bot: contesta al instante, a cualquier hora, y escala a la
 * asistente cuando no puede resolver o cuando el paciente pide una persona.
 * La asistente es humana y atiende en horario de oficina.
 *
 * Los botones de la página ("escríbenos", "agendar") van a Aria.
 * La línea de la asistente se muestra en contacto y en el footer, para quien
 * prefiera hablar con una persona desde el principio.
 *
 * Para devolver todo a la asistente —si Aria resulta no servir— basta cambiar
 * `destinoPrincipal` abajo. No hay que tocar ninguna página.
 */

export const ARIA = {
  /** WhatsApp Business API. Es el número que atiende el bot. */
  numero: '573171802160',
  visible: '+57 317 180 2160',
} as const

export const ASISTENTE = {
  /** WhatsApp de la asistente del consultorio. Lo contesta una persona. */
  numero: '573113154316',
  visible: '+57 311 315 4316',
} as const

export const HORARIO_ASISTENTE = 'Lun–Vie · 8:00 am – 5:00 pm'

/** A dónde van los botones de la página. Cambiar a ASISTENTE lo revierte todo. */
const destinoPrincipal = ARIA

function enlace(destino: { numero: string }, mensaje?: string): string {
  const base = `https://wa.me/${destino.numero}`
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base
}

/** Enlace del botón principal. Hoy va a Aria. */
export function enlaceWhatsApp(mensaje?: string): string {
  return enlace(destinoPrincipal, mensaje)
}

/** Enlace explícito a la asistente humana, para quien la pida. */
export function enlaceAsistente(mensaje?: string): string {
  return enlace(ASISTENTE, mensaje)
}
