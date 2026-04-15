"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-page">
        <SectionHeading eyebrow="Testimonios" title="Familias que se sienten acompañadas" text="Testimonios editables para reemplazar con opiniones reales cuando estén disponibles." />
        <div className="grid gap-6 md:grid-cols-3">
          {site.testimonials.map((testimonial, index) => (
            <motion.article key={testimonial.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative rounded-[2.2rem] bg-gradient-to-br from-cielo/35 via-white to-sol/25 p-7 shadow-soft">
              <Quote className="absolute right-6 top-6 text-fucsia/35" size={42} />
              <div className="mb-5 flex gap-1 text-sol">{[0,1,2,3,4].map(i => <Star key={i} fill="currentColor" size={18} />)}</div>
              <p className="relative text-lg font-bold leading-8 text-tinta">“{testimonial.text}”</p>
              <p className="mt-6 font-black text-fucsia">{testimonial.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
