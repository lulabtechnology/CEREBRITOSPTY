"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-cielo/35 to-lila/40"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <div className="absolute inset-0">
            {['⭐','✏️','📚','🧩','🌈','☁️'].map((emoji, index) => (
              <motion.span
                key={emoji}
                className="absolute text-3xl sm:text-5xl"
                style={{ left: `${12 + index * 14}%`, top: `${18 + (index % 3) * 22}%` }}
                animate={{ y: [0, -22, 0], rotate: [-5, 8, -5], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="relative mx-6 flex w-full max-w-xl flex-col items-center rounded-[2.5rem] border border-white/80 bg-white/80 px-8 py-12 text-center shadow-soft backdrop-blur-xl"
            initial={{ y: 30, opacity: 0, scale: 0.92 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="drop-shadow-2xl"
            >
              <Logo className="justify-center" />
            </motion.div>
            <p className="mt-7 text-lg font-extrabold text-tinta">Preparando un mundo de aprendizaje...</p>
            <div className="relative mt-7 h-4 w-full overflow-hidden rounded-full bg-cielo/45">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-fucsia via-sol to-limon"
                initial={{ width: "12%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.65, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-5 flex gap-2">
              {[0,1,2].map(i => <motion.span key={i} className="h-3 w-3 rounded-full bg-fucsia" animate={{ opacity: [0.25,1,0.25] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }} />)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
