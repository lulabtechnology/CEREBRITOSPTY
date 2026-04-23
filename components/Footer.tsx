import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site-data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-tinta py-12 text-white">
      <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-fucsia/30 blur-3xl" />
      <div className="container-page relative grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md leading-7 text-white/75">Cerebritos, un espacio de apoyo educativo para acompañar a niños, adolescentes y familias con cercanía, creatividad y profesionalismo.</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black">Menú</h3>
          <div className="grid gap-3 text-white/75">
            <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#metodo">Método</a><a href="#equipo">Equipo</a><a href="#contacto">Contacto</a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black">Conecta</h3>
          <div className="grid gap-3 text-white/75">
            <a href={site.whatsapp} target="_blank" className="inline-flex items-center gap-3"><MessageCircle size={18} /> {site.whatsappDisplay}</a>
            <div className="inline-flex items-center gap-3"><Phone size={18} /> {site.phoneAltDisplay}</div>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 break-all"><Mail size={18} /> {site.email}</a>
            <a href={site.instagram} target="_blank" className="inline-flex items-center gap-3"><Instagram size={18} /> @cerebritoscentro</a>
            <div className="inline-flex items-start gap-3"><MapPin size={18} className="mt-1 shrink-0" /> <span>{site.address}</span></div>
          </div>
          <p className="mt-8 text-sm text-white/65">Desarrollo por <a href="https://www.lulabtech.com/" target="_blank" className="font-black text-white underline decoration-fucsia decoration-2 underline-offset-4">Lulab Technology</a></p>
        </div>
      </div>
    </footer>
  );
}
