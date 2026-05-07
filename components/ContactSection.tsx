"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle, Send } from "lucide-react";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState(site.serviceOptions[0] || "");
  const [message, setMessage] = useState("");

  const whatsappHref = useMemo(() => {
    const clean = site.whatsapp.replace("https://wa.me/", "");
    const text = `Hola Cerebritos, me gustaría recibir información.%0A%0A` +
      `Nombre: ${encodeURIComponent(name || "")}%0A` +
      `Teléfono: ${encodeURIComponent(phone || "")}%0A` +
      `Correo: ${encodeURIComponent(email || "")}%0A` +
      `Programa: ${encodeURIComponent(program || "")}%0A` +
      `Mensaje: ${encodeURIComponent(message || site.ctaMessage)}`;
    return `https://wa.me/${clean}?text=${text}`;
  }, [name, phone, email, program, message]);

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            centered={false}
            eyebrow="Contacto"
            title="Agenda una clase prueba o consulta"
            text="Completa los datos y envía el mensaje directo por WhatsApp. También puedes escribir por Instagram."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a href={site.whatsapp} target="_blank" className="flex items-center gap-4 rounded-[2rem] bg-limon/35 p-5 shadow-soft transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-tinta"><MessageCircle /></div>
              <div><p className="font-black text-tinta">WhatsApp</p><p className="text-suave">{site.whatsappDisplay}</p></div>
            </a>
            <a href={site.instagram} target="_blank" className="flex items-center gap-4 rounded-[2rem] bg-lila/30 p-5 shadow-soft transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-fucsia"><Instagram /></div>
              <div><p className="font-black text-tinta">Instagram</p><p className="text-suave">@cerebritoscentro</p></div>
            </a>
            <div className="flex items-start gap-4 rounded-[2rem] bg-sol/20 p-5 shadow-soft sm:col-span-2 lg:col-span-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-tinta"><MapPin /></div>
              <div>
                <p className="font-black text-tinta">Ubicación</p>
                <p className="text-suave">{site.address}</p>
                <p className="mt-1 text-sm text-suave">{site.addressFull}</p>
              </div>
            </div>
          </div>
        </div>
        <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2.5rem] bg-gradient-to-br from-cielo/45 via-white to-lila/35 p-6 shadow-soft sm:p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 font-bold text-tinta">Nombre
              <input value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia" placeholder="Tu nombre" />
            </label>
            <label className="grid gap-2 font-bold text-tinta">Teléfono
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia" placeholder="+507" />
            </label>
            <label className="grid gap-2 font-bold text-tinta sm:col-span-2">Correo electrónico
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia" placeholder="tuemail@correo.com" />
            </label>
            <label className="grid gap-2 font-bold text-tinta sm:col-span-2">Programa de interés
              <select value={program} onChange={(e) => setProgram(e.target.value)} className="rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia">
                {site.serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 font-bold text-tinta sm:col-span-2">Mensaje
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-36 rounded-2xl border border-tinta/10 bg-white px-4 py-4 outline-none focus:border-fucsia" placeholder="Cuéntanos brevemente qué apoyo necesitas" />
            </label>
          </div>
          <div className="mt-4 rounded-[1.5rem] bg-white/85 p-4 text-sm leading-6 text-suave shadow-soft">
            <span className="font-black text-tinta">Mensaje de conversión:</span> {site.ctaMessage}
          </div>
          <a href={whatsappHref} target="_blank" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-fucsia px-7 py-4 font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-tinta sm:w-auto">
            Enviar por WhatsApp <Send size={18} />
          </a>
        </motion.form>
      </div>
    </section>
  );
}
