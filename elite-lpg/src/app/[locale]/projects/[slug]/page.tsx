import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectOverview } from "@/components/project/ProjectOverview";
import { DetailListSection } from "@/components/project/DetailListSection";
import { TechnicalSpecs } from "@/components/project/TechnicalSpecs";
import { ProjectStats } from "@/components/project/ProjectStats";
import { ProjectTimelineSection } from "@/components/project/ProjectTimelineSection";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { MediaCoverage } from "@/components/project/MediaCoverage";
import { LegalReference } from "@/components/project/LegalReference";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Container } from "@/components/ui/Container";
import { Scale, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { projects, featuredProject } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview[0].slice(0, 155),
    openGraph: {
      title: project.title,
      description: project.overview[0].slice(0, 155),
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((proj) => proj.slug === slug);
  if (!p) notFound();

  const isTaxBenefitCase = p.slug === featuredProject.slug;

  return (
    <>
      <ProjectHero project={p} />
      <ProjectOverview project={p} />
      {isTaxBenefitCase ? (
        <LegalReference />
      ) : (
        <section className="relative py-16">
          <Container>
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-ink/15 bg-white/70 p-6 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Scale className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Татварын 1%-ийн хөнгөлөлтийн хууль эрх зүйн үндэслэл
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Энэ төсөл мөн адил хуулийн хүрээнд хэрэгжсэн — дэлгэрэнгүй хууль эрх зүйн лавлагааг {featuredProject.shortLabel} төслийн хуудаснаас үзнэ үү.
                  </p>
                </div>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Container>
        </section>
      )}

      <div className="grid gap-0 lg:grid-cols-2">
        <DetailListSection
          eyebrow="Төслийн зорилго"
          title="Project"
          highlight="Goal"
          items={p.goal}
          icon="goal"
        />
        <DetailListSection
          eyebrow="Хамрах хүрээ"
          title="Project"
          highlight="Scope"
          items={p.scope}
          icon="scope"
        />
      </div>

      <DetailListSection
        eyebrow="Инженерингийн шийдэл"
        title="Engineering"
        highlight="Solution"
        description="Төслийн хүрээнд хэрэгжүүлсэн техникийн шийдлүүд."
        items={p.engineering}
        icon="engineering"
        dark
        columns={2}
      />

      <div className="grid gap-0 lg:grid-cols-2">
        <DetailListSection
          eyebrow="Ач холбогдол"
          title="Key"
          highlight="Benefits"
          items={p.benefits}
          icon="benefits"
        />
        <DetailListSection
          eyebrow="Байгаль орчны нөлөө"
          title="Environmental"
          highlight="Impact"
          items={p.environmental}
          icon="environmental"
        />
      </div>

      <TechnicalSpecs project={p} />

      <DetailListSection
        eyebrow="Аюулгүй ажиллагаа"
        title="Safety"
        highlight="Standard"
        description="Ажлын бүх шатанд мөрдсөн аюулгүй ажиллагааны шаардлага."
        items={p.safety}
        icon="safety"
        dark
        columns={2}
      />

      <ProjectStats project={p} />
      <ProjectTimelineSection project={p} />
      <ProjectGallery project={p} />

      <div className="grid gap-0 lg:grid-cols-2">
        <DetailListSection
          eyebrow="Үр дүн"
          title="Project"
          highlight="Result"
          items={p.result}
          icon="result"
        />
        <DetailListSection
          eyebrow="Ирээдүйн нөлөөлөл"
          title="Future"
          highlight="Impact"
          items={p.future}
          icon="future"
        />
      </div>

      <MediaCoverage project={p} />
      <ContactCTA />
    </>
  );
}
