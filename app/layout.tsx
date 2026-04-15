import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cerebritos | Centro de apoyo educativo y neurodesarrollo",
  description: "Apoyo educativo, psicología, fonoaudiología, lectoescritura y estudio dirigido para niños.",
  openGraph: {
    title: "Cerebritos | Centro de apoyo educativo y neurodesarrollo",
    description: "Acompañamiento educativo, emocional y de lenguaje para niños y familias.",
    type: "website",
    images: ["/images/hero/hero-kids-learning.svg"]
  },
  icons: {
    icon: "/logo-cerebritos.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
