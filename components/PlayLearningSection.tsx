"use client";

import { motion } from "framer-motion";
import { Gamepad2, Paintbrush, SmilePlus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  { icon: Gamepad2, title: "Juego con intención", text: "Actividades que despiertan curiosidad mientras desarrollan habilidades." },
  { icon: Paintbrush, title: "Exploración creativa", text: "Materiales, colores y dinámicas pensadas para disfrutar el proceso." },
  { icon: SmilePlus, title: "Confianza emocional", text: "Un ambiente cálido donde equivocarse también es parte de aprender." }
];

export default function PlayLearningSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-sol/35 via-white to-limon/25">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="absolute -inset-4 rounded-blob bg-fucsia/20 blur-2xl" />
          <img src="/images/custom/play-paint.png" alt="Aprender jugando" className="relative h-[440px] w-full rounded-[3rem] border-[10px] border-white bg-white p-5 object-contain shadow-soft sm:h-[560px] sm:p-8" />
                </motion.div>
        <div>
          <SectionHeading centered={false} eyebrow="Aprender jugando" title="El juego también construye habilidades importantes" text="La exploración, el disfrute y la creatividad son parte del desarrollo infantil. Por eso cada experiencia debe sentirse bonita, segura y llena de sentido." />
          <div className="grid gap-4">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] bg-white p-5 shadow-soft">
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cielo text-tinta"><Icon /></div>
                    <div><h3 className="text-xl font-black text-tinta">{item.title}</h3><p className="mt-1 leading-7 text-suave">{item.text}</p></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
