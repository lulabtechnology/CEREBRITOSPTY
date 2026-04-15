import { Instagram, MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-tinta py-12 text-white">
      <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-fucsia/30 blur-3xl" />
      <div className="container-page relative grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md leading-7 text-white/75">Cerebritos, un espacio de apoyo educativo y neurodesarrollo para acompañar a niños y familias con amor, paciencia y profesionalismo.</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black">Menú</h3>
          <div className="grid gap-3 text-white/75">
            <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#metodo">Método</a><a href="#equipo">Equipo</a><a href="#contacto">Contacto</a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black">Conecta</h3>
          <div className="flex gap-3">
            <a href={site.instagram} target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-fucsia"><Instagram /></a>
            <a href={site.whatsapp} target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-limon hover:text-tinta"><MessageCircle /></a>
          </div>
          <p className="mt-8 text-sm text-white/65">Desarrollo por <a href="https://www.lulabtech.com/" target="_blank" className="font-black text-white underline decoration-fucsia decoration-2 underline-offset-4">Lulab Technology</a></p>
        </div>
      </div>
    </footer>
  );
}
