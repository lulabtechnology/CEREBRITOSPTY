"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle, Send } from "lucide-react";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading centered={false} eyebrow="Contacto" title="Agenda una evaluación o consulta" text="Escríbenos y cuéntanos qué apoyo necesita tu hijo. Los datos de contacto quedan centralizados para editarlos fácil." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a href={site.whatsapp} target="_blank" className="flex items-center gap-4 rounded-[2rem] bg-limon/35 p-5 shadow-soft transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-tinta"><MessageCircle /></div>
              <div><p className="font-black text-tinta">WhatsApp</p><p className="text-suave">{site.whatsappDisplay}</p></div>
            </a>
            <a href={site.instagram} target="_blank" className="flex items-center gap-4 rounded-[2rem] bg-fucsia/10 p-5 shadow-soft transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-fucsia"><Instagram /></div>
              <div><p className="font-black text-tinta">Instagram</p><p className="text-suave">@cerebritoscentro</p></div>
            </a>
          </div>
        </div>
        <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2.5rem] bg-gradient-to-br from-cielo/45 via-white to-lila/35 p-6 shadow-soft sm:p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 font-bold text-tinta">Nombre del acudiente<input className="rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia" placeholder="Tu nombre" /></label>
            <label className="grid gap-2 font-bold text-tinta">Teléfono<input className="rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia" placeholder="+507" /></label>
            <label className="grid gap-2 font-bold text-tinta sm:col-span-2">Servicio de interés<input className="rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia" placeholder="Ej: lectoescritura, psicología, after school..." /></label>
            <label className="grid gap-2 font-bold text-tinta sm:col-span-2">Mensaje<textarea className="min-h-36 rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia" placeholder="Cuéntanos brevemente qué apoyo necesitas" /></label>
          </div>
          <a href={site.whatsapp} target="_blank" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-fucsia px-7 py-4 font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-tinta sm:w-auto">
            Enviar por WhatsApp <Send size={18} />
          </a>
        </motion.form>
      </div>
    </section>
  );
}
