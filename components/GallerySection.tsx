"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

export default function GallerySection() {
  return (
    <section className="section-padding overflow-hidden bg-gradient-to-b from-lila/25 to-white">
      <div className="container-page">
        <SectionHeading eyebrow="Momentos Cerebritos" title="Un lugar para aprender, jugar y crecer" text="Galería visual editable con imágenes reales del centro, actividades o material educativo." />
        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-4 md:auto-rows-[260px]">
          {site.gallery.map((src, index) => (
            <motion.div key={src} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className={`group overflow-hidden rounded-[2.2rem] shadow-soft ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ${index === 3 ? "md:col-span-2" : ""}`}>
              <img src={src} alt={`Galería Cerebritos ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
