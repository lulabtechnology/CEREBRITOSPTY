"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

const rotations = ["lg:-rotate-2", "lg:rotate-1", "lg:-rotate-1"];

export default function RealMomentsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cielo/35 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-fucsia/15 blur-3xl" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Momentos reales"
          title="Así se vive el aprendizaje en Cerebritos"
          text="Integramos actividades prácticas, apoyo personalizado y espacios guiados para que cada niño aprenda con seguridad, alegría y acompañamiento cercano."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {site.realMoments.map((moment, index) => (
            <motion.article
              key={moment.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className={`group h-full overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft transition duration-300 hover:-translate-y-2 ${rotations[index] || ""}`}
            >
              <div className="relative h-[360px] overflow-hidden rounded-[2rem] bg-cielo/20 sm:h-[430px] lg:h-[460px]">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: moment.position }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-tinta/70 via-tinta/20 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-tinta shadow-soft backdrop-blur">
                  <Camera size={16} className="text-fucsia" /> {moment.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] bg-white/90 p-4 shadow-soft backdrop-blur">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl text-tinta shadow-soft" style={{ backgroundColor: moment.color }}>
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-2xl font-black leading-tight text-tinta">{moment.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-suave">{moment.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-[2rem] bg-gradient-to-r from-cielo/35 via-lila/25 to-sol/30 p-6 text-center shadow-soft sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-lg font-black leading-7 text-tinta">
            Conoce un espacio donde el acompañamiento, el juego y el estudio se combinan para que cada niño avance con tranquilidad.
          </p>
          <a href={site.whatsapp} target="_blank" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-fucsia px-6 py-3 font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-tinta">
            Agendar visita <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
