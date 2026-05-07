"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site-data";
import FloatingShapes from "./FloatingShapes";
import Logo from "./Logo";

const chips = [
  "Programa After school / estudio dirigido",
  "Programa de Lectoescritura intensivo",
  "Programa de Lectoescritura sabatino",
  "Tutoría sombra especializada",
  "Clases de bailes urbanos"
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cielo/45 via-white to-lila/55 pt-32 sm:pt-36">
      <FloatingShapes />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sol/50 blur-3xl" />
      <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-fucsia/25 blur-3xl" />
      <div className="container-page relative grid min-h-[calc(100vh-9rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
          <div className="mb-5 flex justify-center lg:justify-start"><Logo /></div>
          <motion.div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white bg-white/75 px-4 py-2 text-sm font-black text-fucsia shadow-soft backdrop-blur" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <span className="text-base">✦</span>
            <span className="text-balance">{site.hero.eyebrow}</span>
          </motion.div>
          <motion.h1 className="text-balance text-5xl font-black leading-[0.95] tracking-[-0.055em] text-tinta sm:text-6xl lg:text-7xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            {site.hero.title}
          </motion.h1>
          <motion.p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-suave sm:text-xl lg:mx-0" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            {site.hero.subtitle}
          </motion.p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            <a href={site.whatsapp} target="_blank" className="group inline-flex items-center justify-center gap-2 rounded-full bg-fucsia px-7 py-4 text-base font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-tinta">
              {site.hero.primaryCta} <ArrowRight className="transition group-hover:translate-x-1" size={20} />
            </a>
            <a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-tinta/10 bg-white px-7 py-4 text-base font-black text-tinta shadow-soft transition hover:-translate-y-1 hover:border-fucsia hover:text-fucsia">
              {site.hero.secondaryCta}
            </a>
          </motion.div>
          <motion.div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:mx-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            {chips.map((chip) => (
              <span key={chip} className="inline-flex min-h-[56px] w-full items-center gap-3 rounded-full bg-white/90 px-4 py-3 text-left text-sm font-black text-tinta shadow-soft sm:text-[15px]">
                <CheckCircle2 size={18} className="shrink-0 text-limon" />
                <span className="leading-5">{chip}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -inset-5 rounded-blob bg-gradient-to-br from-sol via-fucsia/50 to-limon opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[3rem] border-[10px] border-white bg-white shadow-soft">
            <img src={site.hero.image} alt="Mascota principal de Cerebritos" className="h-[430px] w-full bg-white p-5 object-contain sm:h-[560px] sm:p-8" />
          </div>
          <motion.div className="glass-card absolute -left-3 top-8 rounded-[1.5rem] p-4 sm:-left-10" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <p className="text-3xl">🧠</p><p className="text-sm font-black text-tinta">Aprender con alegría</p>
          </motion.div>
          <motion.div className="glass-card absolute -bottom-4 right-0 rounded-[1.5rem] p-4 sm:-right-8" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 4.5 }}>
            <p className="text-3xl">🌟</p><p className="text-sm font-black text-tinta">Confianza paso a paso</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
