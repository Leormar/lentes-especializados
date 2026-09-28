export const SITE_URL = "https://lentesespecializados.com";

export const NEGOCIO = {
  nombre: "Lentes Especializados",
  marca: "PROLENS",
  descripcion:
    "Centro de contactología especializada en Medellín. Adaptación de lentes esclerales, RGP e híbridos para queratocono, córneas irregulares, post-cirugía y ojo seco severo.",
  telefono: "+57 311 315 4316",
  telefonoE164: "+573113154316",
  email: "info@lentesespecializados.com",
  edificio: "Torre Médica Ciudad del Río",
  ciudad: "Medellín",
  region: "Antioquia",
  pais: "CO",
  fundador: "Dr. Leonardo Orjuela Mariño",
} as const;

/**
 * MedicalClinic: hereda de MedicalBusiness y LocalBusiness, que es lo que Google
 * usa para el panel local. No incluimos aggregateRating ni geo porque no tenemos
 * datos verificables; inventarlos viola las directrices de datos estructurados.
 */
export function clinicaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#clinica`,
    name: NEGOCIO.nombre,
    alternateName: NEGOCIO.marca,
    url: SITE_URL,
    description: NEGOCIO.descripcion,
    telephone: NEGOCIO.telefono,
    email: NEGOCIO.email,
    image: `${SITE_URL}/logo-cuadrado.png`,
    logo: `${SITE_URL}/logo-cuadrado.png`,
    priceRange: "$$",
    currenciesAccepted: "COP",
    address: {
      "@type": "PostalAddress",
      name: NEGOCIO.edificio,
      addressLocality: NEGOCIO.ciudad,
      addressRegion: NEGOCIO.region,
      addressCountry: NEGOCIO.pais,
    },
    areaServed: [
      { "@type": "City", name: "Medellín" },
      { "@type": "AdministrativeArea", name: "Antioquia" },
      { "@type": "Country", name: "Colombia" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:30",
      },
    ],
    medicalSpecialty: "Optometric",
    founder: { "@type": "Person", name: NEGOCIO.fundador },
    availableService: [
      "Adaptación de lentes esclerales",
      "Lentes rígidos gas permeable (RGP)",
      "Lentes híbridos",
      "Manejo de queratocono",
      "Contactología post-queratoplastia",
      "Lentes post-cirugía refractiva",
      "Manejo de ojo seco severo",
    ].map((s) => ({ "@type": "MedicalProcedure", name: s })),
  };
}

export function sitioWebJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: NEGOCIO.nombre,
    inLanguage: "es-CO",
    publisher: { "@id": `${SITE_URL}/#clinica` },
  };
}

export function migasJsonLd(items: { nombre: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.nombre,
      item: `${SITE_URL}${it.url}`,
    })),
  };
}

export function articuloJsonLd(a: {
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string;
  autor: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: a.titulo,
    description: a.resumen,
    datePublished: a.fecha,
    dateModified: a.fecha,
    inLanguage: "es-CO",
    mainEntityOfPage: `${SITE_URL}/blog/${a.slug}`,
    author: { "@type": "Person", name: a.autor },
    publisher: { "@id": `${SITE_URL}/#clinica` },
    reviewedBy: { "@type": "Person", name: NEGOCIO.fundador },
  };
}

/** Inserta JSON-LD sin usar dangerouslySetInnerHTML en cada página. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
