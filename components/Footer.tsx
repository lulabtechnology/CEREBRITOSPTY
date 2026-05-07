import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-tinta py-12 text-white">
      <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-fucsia/30 blur-3xl" />
      <div className="container-page relative grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex rounded-full bg-white p-2 shadow-soft">
            <img src={site.logo} alt="Logo Cerebritos" className="h-20 w-20 rounded-full object-contain sm:h-24 sm:w-24" />
          </div>
          <p className="mt-5 max-w-md leading-7 text-white/75">Cerebritos, un espacio de apoyo educativo para acompañar a niños, adolescentes y familias con cercanía, creatividad y profesionalismo.</p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black">Menú</h3>
          <div className="grid gap-3 text-white/75">
            <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#metodo">Método</a><a href="#contacto">Contacto</a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-black">Conecta</h3>
          <div className="grid gap-3 text-white/75">
            <a href={site.whatsapp} target="_blank" className="inline-flex items-center gap-3"><MessageCircle size={18} /> {site.whatsappDisplay}</a>
            <a href={site.instagram} target="_blank" className="inline-flex items-center gap-3"><Instagram size={18} /> @cerebritoscentro</a>
            <div className="inline-flex items-start gap-3"><MapPin size={18} className="mt-1 shrink-0" /> <span>{site.address} {site.addressFull}</span></div>
          </div>
          <p className="mt-8 text-sm text-white/65">Desarrollo por <a href="https://www.lulabtech.com/" target="_blank" className="font-black text-white underline decoration-fucsia decoration-2 underline-offset-4">Lulab Technology</a></p>
        </div>
      </div>
    </footer>
  );
}
