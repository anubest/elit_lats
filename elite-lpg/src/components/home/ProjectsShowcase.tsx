import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MajorProjectsGrid } from "@/components/business/MajorProjectsGrid";

export function ProjectsShowcase() {
  return (
    <section className="relative bg-surface-warm py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Онцлох төслүүд"
            title="Түүх бүтээж,"
            highlight="итгэл олгодог."
            description="2020 оноос өнөөг хүртэл гүйцэтгэсэн онцлох гэрээт ажлууд."
          />
          <Button href="/projects" variant="secondary">
            Бүх төслийг үзэх
          </Button>
        </div>

        <div className="mt-12">
          <MajorProjectsGrid limit={4} />
        </div>
      </Container>
    </section>
  );
}
