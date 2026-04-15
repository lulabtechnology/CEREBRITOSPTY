"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site-data";
import SectionHeading from "./SectionHeading";

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-cielo/25">
      <div className="container-page max-w-4xl">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Respuestas rápidas para empezar" text="Contenido prudente y editable para confirmar detalles específicos con Cerebritos." />
        <div className="space-y-4">
          {site.faqs.map((faq, index) => {
            const open = active === index;
            return (
              <div key={faq.q} className="overflow-hidden rounded-[1.8rem] bg-white shadow-soft">
                <button onClick={() => setActive(open ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-black text-tinta">
                  {faq.q}
                  <ChevronDown className={`shrink-0 transition ${open ? "rotate-180 text-fucsia" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <p className="px-6 pb-6 leading-7 text-suave">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
