"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Home, Puzzle, Users } from "lucide-react";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

const icons = [HeartHandshake, Home, Puzzle, Users];
const colors = ["bg-cielo", "bg-sol", "bg-lila", "bg-limon"];

export default function TrustSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Confianza para familias"
          title="Un acompañamiento pensado para cada niño"
          text="Cerebritos trabaja con un enfoque humano, integral y personalizado, ayudando a fortalecer habilidades educativas, emocionales, de lenguaje y aprendizaje."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.trust.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[2rem] border border-tinta/5 bg-white p-6 shadow-soft transition hover:-translate-y-2"
              >
                <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-3xl ${colors[index]} text-tinta shadow-soft transition group-hover:rotate-6 group-hover:scale-105`}>
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-black text-tinta">{item.title}</h3>
                <p className="mt-3 leading-7 text-suave">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
