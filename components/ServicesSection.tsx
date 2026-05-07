"use client";

import { motion } from "framer-motion";
import { BookOpen, CalendarCheck, Compass, Heart, MessageCircle, School, Sparkles, Users } from "lucide-react";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

const iconMap = {
  message: MessageCircle,
  heart: Heart,
  book: BookOpen,
  school: School,
  calendar: CalendarCheck,
  sparkles: Sparkles,
  compass: Compass,
  users: Users
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-cielo/25">
      <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-fucsia/15 blur-3xl" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Servicios"
          title="Programas diseñados para acompañar cada proceso de aprendizaje"
          text="Conoce las opciones que Cerebritos ofrece para reforzar habilidades, acompañar el desarrollo y brindar apoyo cercano a cada familia."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {site.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: (index % 3) * 0.07 }}
                whileHover={{ y: -10, rotate: index % 2 ? -1 : 1 }}
                className="group overflow-hidden rounded-[2.2rem] bg-white shadow-soft"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full bg-[#f9f7ff] p-4 object-contain transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-tinta/25 to-transparent" />
                  <div style={{ backgroundColor: service.color }} className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl text-tinta shadow-soft">
                    <Icon size={27} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black leading-tight text-tinta">{service.title}</h3>
                  <p className="mt-3 min-h-[120px] leading-7 text-suave">{service.text}</p>
                  <a href={site.whatsapp} target="_blank" className="mt-5 inline-flex rounded-full bg-tinta px-5 py-3 text-sm font-black text-white transition hover:bg-fucsia">Consultar</a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
