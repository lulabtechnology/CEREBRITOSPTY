"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

export default function MethodSection() {
  return (
    <section id="metodo" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading eyebrow="Método" title="Cómo trabajamos cada proceso" text="Un recorrido simple, humano y profesional para acompañar cada avance." />
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-20 hidden h-1 rounded-full bg-gradient-to-r from-cielo via-fucsia to-limon lg:block" />
          {site.method.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.09 }}
              className="relative rounded-[2rem] border border-tinta/5 bg-white p-7 shadow-soft"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-sol to-fucsia text-2xl font-black text-white shadow-glow">{item.step}</div>
              <h3 className="text-2xl font-black text-tinta">{item.title}</h3>
              <p className="mt-3 leading-7 text-suave">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
