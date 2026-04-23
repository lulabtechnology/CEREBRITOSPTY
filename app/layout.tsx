import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cerebritos | Centro de apoyo educativo en Panamá",
  description: "Estudio dirigido, tutorías, lectoescritura y apoyo educativo para niños y adolescentes en Panamá.",
  openGraph: {
    title: "Cerebritos | Centro de apoyo educativo en Panamá",
    description: "Acompañamiento educativo, tutorías, lectoescritura y apoyo escolar para niños, adolescentes y familias.",
    type: "website",
    images: ["/logo-cerebritos.png"]
  },
  icons: {
    icon: "/logo-cerebritos.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
