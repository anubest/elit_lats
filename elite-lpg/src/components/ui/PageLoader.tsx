"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        >
          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative grid h-20 w-20 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10"
          >
            <Image
              src="/elit_lats/images/brand/logo-icon.png"
              alt="Элит Эл Пи Жи"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            {/* Smooth pulse glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 rounded-2xl bg-brand/20 blur-xl"
            />
          </motion.div>
          
          {/* Company Name */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-heading text-[11px] font-bold uppercase tracking-[0.3em] text-white/60"
          >
            Elite LPG
          </motion.div>
          
          {/* Progress Line */}
          <div className="mt-5 h-px w-24 overflow-hidden bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-transparent via-brand to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
