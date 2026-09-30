"use client";

import Script from "next/script";

/**
 * Google Analytics 4. No renderiza nada si falta el ID, de modo que en
 * desarrollo y en las vistas previas no se ensucian las estadísticas.
 * El ID se configura en Vercel como NEXT_PUBLIC_GA_ID (formato G-XXXXXXXXXX).
 */
export default function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
