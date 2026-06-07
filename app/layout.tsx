import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Lentes Especializados — Contactología de Alta Complejidad",
    template: "%s | Lentes Especializados",
  },
  description:
    "Adaptación de lentes de contacto especializados en Medellín: esclerales, RGP, híbridos y manejo post-quirúrgico. Atendemos queratocono, córneas irregulares y ojo seco severo.",
  keywords: [
    "lentes esclerales Medellín",
    "lentes RGP queratocono",
    "contactología especializada Colombia",
    "lentes de contacto post LASIK",
    "córnea irregular lentes",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Lentes Especializados",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
