"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content";
import { StatsBar } from "@/components/home/StatsBar";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-28 pt-28 sm:pt-32"
    >
      {/* Background with crisp overlay */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <Image
          src="/images/hero/eco-gas-facility.jpg"
          alt="Элит Эл Пи Жи ХХК-ийн орчин үеийн хийн хангамжийн төв"
          fill
          priority
          className="object-cover grayscale mix-blend-luminosity opacity-40"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-ink/90"
      />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />

      <motion.div style={{ y: contentY }} className="w-full">
        <Container className="relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            Бид барьдаг зүйл бол — итгэл
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="max-w-4xl font-heading text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-[5rem] lg:leading-[1.05]"
          >
            Бид хийн{" "}
            <span className="text-brand">хангамж бүтээдэг.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {company.name} нь LPG систем, хийн зуух, барилгын халаалт, байгаль
            орчны инженерингийн чиглэлээр найдвартай, тогтвортой шийдлийг санал
            болгодог.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/projects" className="group">
              Төслүүд харах
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/contact" variant="outline-light" showArrow={false}>
              Холбоо барих
            </Button>
          </motion.div>
        </Container>

        <Container className="relative z-20 mt-20 sm:mt-24">
          <div className="-mb-24 sm:-mb-28">
            <StatsBar />
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
