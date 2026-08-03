import type { Metadata } from "next";
import Image from "next/image";
import { Hammer, Sparkles, ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { MajorProjectsGrid } from "@/components/business/MajorProjectsGrid";
import { Button } from "@/components/ui/Button";
import { featuredProject, majorProjectsGallery, whyChooseGasHeating } from "@/lib/content";

export const metadata: Metadata = {
  title: "Үйл ажиллагаа",
  description:
    "Элит Эл Пи Жи ХХК-ийн үндсэн хэрэгжүүлсэн ажил болон Татварын 1%-ийн хөнгөлөлтөөр хэрэгжүүлсэн төслийн ангилал.",
};

export default function BusinessActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Үйл ажиллагаа"
        title="Хэрэгжүүлж буй ажлын ангилал"
        description="Компанийн үйл ажиллагааг одоогоор хоёр үндсэн ангилалд хуваан толилуулж байна."
        breadcrumb={[{ label: "Нүүр", href: "/" }, { label: "Үйл ажиллагаа" }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Category A - Major projects */}
            <a
              href="#major-projects"
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-10 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(255,255,255,0.1)]"
            >
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/hero/steel-structure.jpg"
                  alt="Үндсэн хэрэгжүүлсэн томоохон төслүүд"
                  fill
                  className="object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
              </div>

              <div className="relative">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-[0_0_20px_rgba(244,122,32,0.3)] ring-1 ring-white/20">
                  <Hammer className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h2 className="mt-8 font-heading text-2xl font-semibold text-white">
                  Үндсэн хэрэгжүүлсэн ажил
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                  2020 оноос хойш хэрэгжүүлсэн шатахуун түгээх станц, үйлдвэр,
                  сургууль, хийн хангамжийн угсралтын томоохон гэрээт
                  ажлуудын жагсаалт.
                </p>
              </div>
              <div className="relative mt-10 flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                <span className="text-sm font-semibold text-white">
                  Жагсаалтыг доор харах
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-y-0.5">
                  <ArrowDown className="h-4 w-4" />
                </span>
              </div>
            </a>

            {/* Category B - Tax benefit featured */}
            <Link
              href="/projects#tax-projects"
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-2 border-brand/40 bg-ink p-10 shadow-[0_30px_80px_-30px_rgba(244,122,32,0.5)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/images/hero/boiler-room-completed.jpg"
                  alt="Татварын 1%-ийн хөнгөлөлтөөр хэрэгжсэн төслийн хийн зуухны систем"
                  fill
                  className="object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
              </div>

              <div className="relative">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-[0_0_20px_rgba(244,122,32,0.3)] ring-1 ring-white/20">
                  <Sparkles className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h2 className="mt-8 font-heading text-2xl font-semibold text-white">
                  Татварын 1%-ийн хөнгөлөлтөөр хэрэгжүүлсэн төсөл
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                  ААНОАТ-ын тухай хуулийн 22.9 дэх заалтын хүрээнд, нийгмийн
                  хариуцлагын хөрөнгө оруулалтаар хэрэгжүүлсэн, 117 дугаар
                  сургуулийн хийн халаалтын систем рүү шилжсэн онцлох төсөл.
                </p>
              </div>

              <div className="relative mt-10 flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                <span className="text-sm font-semibold text-white">
                  Дэлгэрэнгүй танилцах
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <ServicesGrid />

      <section id="major-projects" className="relative scroll-mt-28 bg-surface-warm py-20 lg:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Үндсэн хэрэгжүүлсэн ажил"
              title="Томоохон төслүүд"
              highlight="дээр ажилласан байдал"
              description="2020 оноос өнөөг хүртэл гүйцэтгэсэн онцлох гэрээт ажлуудаас түүвэр."
            />
            <Button href="/projects" variant="secondary">
              Бүх төслийг үзэх
            </Button>
          </div>

          <div className="mt-12">
            <MajorProjectsGrid limit={4} />
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Ажлын явц"
              title="Талбай дээрх"
              highlight="бодит ажил"
            />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {majorProjectsGallery.map((g) => (
                <div
                  key={g.src}
                  className="group relative h-48 overflow-hidden rounded-2xl border border-ink/8 shadow-sm"
                >
                  <Image
                    src={g.src}
                    alt={g.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-[11px] leading-snug text-white">
                      {g.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-ink">
        <Container>
          <SectionHeading
            eyebrow="Яагаад хийн халаалт?"
            title="Хийн халаалтыг"
            highlight="сонгох 5 шалтгаан"
            description="Орон гэр, сургууль, цэцэрлэг эсвэл үйлдвэрийн байгууллагаа халаах хамгийн ухаалаг шийдлийг хайж байгаа бол — энэ танд зориулагдсан."
            dark
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseGasHeating.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-brand/40 hover:bg-white/8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/20 font-heading text-lg font-bold text-brand">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-2/80">{item.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.items.map((point, i) => (
                    <li key={i} className="text-sm leading-relaxed text-white/70">
                      {point.bold && (
                        <span className="font-semibold text-white/90">{point.bold}</span>
                      )}
                      {point.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-brand/20 bg-brand/10 p-6 text-center">
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-semibold text-brand">"Элит Эл Пи Жи" ХХК</span> нь таны хэрэгцээнд тохирсон инженерийн оновчтой тооцооллыг хийж, хийн халаалтын системийг мэргэжлийн өндөр түвшинд, аюулгүй байдлын бүрэн баталгаатайгаар угсарч суурилуулж байна.{" "}
              <span className="italic text-white/60">Та зүгээр л тав тухыг мэдэр, бусдыг нь бид хариуцна.</span>
            </p>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
