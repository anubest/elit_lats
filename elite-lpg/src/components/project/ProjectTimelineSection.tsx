import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/shared/Timeline";
import type { Project } from "@/lib/content";

export function ProjectTimelineSection({ project: p }: { project: Project }) {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Хэрэгжилтийн явц"
          title="Төслийн"
          highlight="цаг хугацааны хэлхээс"
          description="Судалгаанаас эхлээд ашиглалтад хүлээлгэн өгөх хүртэлх үе шатууд."
          align="center"
          className="mx-auto"
        />
        <div className="mt-16">
          <Timeline items={p.timeline} />
        </div>
      </Container>
    </section>
  );
}
