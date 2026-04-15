"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site-data";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-10">
      <div className="container-page">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-fucsia via-lila to-cielo px-6 py-16 text-center shadow-soft sm:px-12 lg:py-20">
          <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-sol/65 blur-2xl" />
          <div className="absolute -bottom-20 right-5 h-56 w-56 rounded-full bg-limon/55 blur-2xl" />
          <span className="absolute left-8 top-8 animate-floaty text-4xl">🌈</span>
          <span className="absolute bottom-8 right-10 animate-wiggle text-4xl">🧩</span>
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-balance text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">¿Tu hijo necesita apoyo para aprender con más confianza?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/90">En Cerebritos acompañamos cada proceso con amor, paciencia y herramientas pensadas para su desarrollo.</p>
            <a href={site.whatsapp} target="_blank" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-fucsia shadow-soft transition hover:-translate-y-1 hover:bg-tinta hover:text-white">
              Escribir por WhatsApp <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
