"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site-data";
import Logo from "./Logo";

const nav = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Método", "#metodo"],
  ["Equipo", "#equipo"],
  ["Testimonios", "#testimonios"],
  ["Contacto", "#contacto"]
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled || open ? "bg-white/88 py-3 shadow-soft backdrop-blur-xl" : "bg-transparent py-5"}`}>
      <div className="container-page flex items-center justify-between gap-4">
        <a href="#inicio" aria-label="Inicio Cerebritos" className="shrink-0"><Logo compact /></a>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-extrabold text-tinta/80 transition hover:text-fucsia">{label}</a>
          ))}
        </nav>
        <a href={site.whatsapp} target="_blank" className="hidden rounded-full bg-fucsia px-6 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-tinta lg:inline-flex">
          Agendar por WhatsApp
        </a>
        <button onClick={() => setOpen(v => !v)} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-tinta shadow-soft lg:hidden" aria-label="Abrir menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="container-page mt-4 overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-soft lg:hidden"
          >
            <div className="grid gap-2">
              {nav.map(([label, href]) => (
                <a onClick={() => setOpen(false)} key={href} href={href} className="rounded-2xl px-4 py-3 text-base font-black text-tinta hover:bg-cielo/40">{label}</a>
              ))}
              <a href={site.whatsapp} target="_blank" className="mt-2 rounded-2xl bg-fucsia px-4 py-4 text-center font-black text-white shadow-glow">Agendar por WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
