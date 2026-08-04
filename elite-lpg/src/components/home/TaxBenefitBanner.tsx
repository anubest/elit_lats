"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function TaxBenefitBanner() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="tech-card-dark relative flex flex-col items-center gap-8 p-10 text-center sm:p-14"
        >
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand/15 text-brand ring-1 ring-brand/30">
            <Flame className="h-8 w-8" strokeWidth={1.5} />
          </span>
          <p className="max-w-3xl text-lg font-medium leading-relaxed text-white sm:text-xl">
            Нийслэл Улаанбаатар хотын хэмжээнд{" "}
            <span className="font-semibold text-brand">750 гаруй</span>{" "}
            нүүрсэн зуух, мөн улсын хэмжээнд буюу{" "}
            <span className="font-semibold text-brand">
              21 аймаг, 300 гаруй сумдад
            </span>{" "}
            байрлах нүүрсэн зуухуудыг{" "}
            <span className="font-semibold text-brand">
              ТАТВАРЫН ХӨНГӨЛӨЛТӨД ХАМРАГДАН
            </span>{" "}
            — <span className="font-semibold text-brand">ХИЙН ЗУУХ</span> руу
            солих боломжтой.
          </p>
          <Button href="/calculator" className="h-12 px-6">
            Халаалтын зардлаа тооцуулах уу?
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
