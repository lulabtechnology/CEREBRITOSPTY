"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

export default function TeamSection() {
  return (
    <section id="equipo" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading eyebrow="Equipo" title="Un equipo cálido para acompañar cada historia" text="Esta sección queda editable para colocar nombres, roles y fotos reales cuando el cliente los confirme." />
        <div className="grid gap-6 md:grid-cols-3">
          {site.team.map((member, index) => (
            <motion.article key={index} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group rounded-[2.5rem] bg-gradient-to-br from-white to-cielo/25 p-5 shadow-soft">
              <img src={member.image} alt={member.name} className="h-72 w-full rounded-[2rem] object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="p-3 pt-6 text-center">
                <h3 className="text-2xl font-black text-tinta">{member.name}</h3>
                <p className="mt-1 font-extrabold text-fucsia">{member.role}</p>
                <p className="mt-3 leading-7 text-suave">{member.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
