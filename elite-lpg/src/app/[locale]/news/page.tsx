import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";
import { featuredProject } from "@/lib/content";

export const metadata: Metadata = {
  title: "Мэдээ мэдээлэл",
  description:
    "Элит Эл Пи Жи ХХК-тай холбоотой мэдээ, төслийн явц, хэвлэл мэдээллийн сурвалжлагууд.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Мэдээ мэдээлэл"
        title="Мэдээ, хэвлэлийн сурвалжлага"
        description="Компанийн үйл ажиллагаа, төслийн явцтай холбоотой сүүлийн үеийн мэдээлэл."
        breadcrumb={[{ label: "Нүүр", href: "/" }, { label: "Мэдээ" }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-ink/8 shadow-sm transition-transform hover:-translate-y-1 lg:col-span-2"
            >
              <div className="relative h-80 w-full">
                <Image
                  src="/images/gallery/11-opening-ceremony.jpg"
                  alt="117-р сургуулийн хийн халаалтын системийн нээлтийн ёслол"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Онцлох мэдээ
                </span>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
                  {featuredProject.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/60">
                  {featuredProject.subtitle} — 117 дугаар сургуулийн дулаан
                  хангамжийг хийн түлшний системд амжилттай шилжүүлэв.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Дэлгэрэнгүй унших
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <div className="flex flex-col gap-6">
              {featuredProject.news.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 flex-col justify-between rounded-[2rem] border border-ink/8 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div>
                    <span className="inline-flex items-center rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted">
                      Гадаад сурвалжлага
                    </span>
                    <p className="mt-5 font-heading text-2xl font-bold text-ink">
                      {item.logoText}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      117-р сургуулийн хийн халаалтын төслийн тухай нийтлэл
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-dark">
                    Эх сурвалж руу очих
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
