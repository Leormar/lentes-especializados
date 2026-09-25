import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { JsonLd, SITE_URL, clinicaJsonLd, sitioWebJsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Lentes Esclerales y Contactología Especializada en Medellín | Lentes Especializados",
    template: "%s | Lentes Especializados",
  },
  description:
    "Adaptación de lentes de contacto especializados en Medellín: esclerales, RGP e híbridos. Queratocono, córneas irregulares, post-cirugía y ojo seco severo. Agende su valoración.",
  applicationName: "Lentes Especializados",
  authors: [{ name: "Dr. Leonardo Orjuela Mariño" }],
  creator: "Lentes Especializados",
  publisher: "Lentes Especializados",
  keywords: [
    "lentes esclerales Medellín",
    "lentes RGP queratocono",
    "contactología especializada Colombia",
    "lentes de contacto post LASIK",
    "córnea irregular lentes",
    "queratocono Medellín",
    "ojo seco severo lentes esclerales",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Lentes Especializados",
    title:
      "Lentes Esclerales y Contactología Especializada en Medellín",
    description:
      "La solución cuando los demás han fallado. Adaptamos lentes para queratocono, post-cirugía y ojo seco severo.",
    images: [
      {
        url: "/logo-cuadrado.png",
        width: 1200,
        height: 1200,
        alt: "Lentes Especializados — PROLENS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lentes Esclerales y Contactología Especializada en Medellín",
    description:
      "Adaptamos lentes para queratocono, córneas irregulares, post-cirugía y ojo seco severo.",
    images: ["/logo-cuadrado.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
  formatDetection: { telephone: true, address: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={clinicaJsonLd()} />
        <JsonLd data={sitioWebJsonLd()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
