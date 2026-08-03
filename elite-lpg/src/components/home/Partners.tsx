import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/lib/content";

export function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-ink/8 bg-white py-12">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Хамтран ажилладаг байгууллага
        </p>
      </Container>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-4">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-ink/8 bg-surface-warm p-4 grayscale transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-12 w-full">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
