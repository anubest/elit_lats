import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { MissionVisionHistory } from "@/components/about/MissionVisionHistory";
import { StatsSection } from "@/components/home/StatsSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/shared/Timeline";
import { companyMilestones } from "@/lib/content";

export const metadata: Metadata = {
  title: "Бидний тухай",
  description:
    "Элит Эл Пи Жи ХХК 2017 оноос хойш хийн хангамж, LPG систем, барилгын халаалтын инженерингийн чиглэлээр ажиллаж буй туршлагатай компани.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Бидний тухай"
        title="Инженерингийн туршлага, үндэсний итгэл"
        description="2017 оноос хойш хийн хангамж, LPG систем, барилгын халаалтын чиглэлээр найдвартай шийдэл үзүүлж буй компани."
        breadcrumb={[{ label: "Нүүр", href: "/" }, { label: "Бидний тухай" }]}
      />

      <MissionVisionHistory />

      <section className="relative py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Түүхэн замнал"
            title="Бидний өнгөрсөн"
            highlight="замнал"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16">
            <Timeline items={companyMilestones} />
          </div>
        </Container>
      </section>

      <StatsSection />
      <ContactCTA />
    </>
  );
}
