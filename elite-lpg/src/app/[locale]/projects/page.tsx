import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/home/ContactCTA";
import { MajorProjectsGrid } from "@/components/business/MajorProjectsGrid";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Төслүүд",
  description:
    "Элит Эл Пи Жи ХХК-ийн хэрэгжүүлсэн төслүүдийн жагсаалт — Татварын 1%-ийн хөнгөлөлтөөр хэрэгжсэн 117-р сургуулийн хийн халаалтын төсөл, түүнчлэн үндсэн хэрэгжүүлсэн бусад томоохон ажлууд.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Төслүүд"
        title="Хэрэгжүүлсэн төслүүд"
        description="Компанийн хэрэгжүүлсэн болон одоогоор баримтжуулсан онцлох төслүүдийн жагсаалт."
        breadcrumb={[{ label: "Нүүр", href: "/" }, { label: "Төслүүд" }]}
      />

      <section id="tax-projects" className="scroll-mt-28 py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Онцлох төслүүд"
            title="Татварын 1%-ийн хөнгөлөлтөөр"
            highlight="хэрэгжсэн төслүүд"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-[2rem] border-2 border-brand/30 shadow-[0_25px_70px_-30px_rgba(244,122,32,0.4)] transition-transform hover:-translate-y-1"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-2 backdrop-blur">
                    Татварын 1% төсөл
                  </span>
                  <h3 className="mt-4 max-w-xl font-heading text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80">
                    Дэлгэрэнгүй үзэх
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative bg-surface-warm py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Үндсэн хэрэгжүүлсэн ажил"
            title="Бүх хэрэгжүүлсэн"
            highlight="төслүүд"
            description="2020 оноос өнөөг хүртэл гүйцэтгэсэн онцлох гэрээт ажлуудын жагсаалт."
          />
          <div className="mt-10">
            <MajorProjectsGrid />
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
