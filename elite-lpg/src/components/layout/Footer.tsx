import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Globe, MessagesSquare, Briefcase, PlayCircle, ShieldCheck, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink border-t border-border-dark text-white">
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      
      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
          {/* Brand Column */}
          <div className="pr-4">
            <Link href="/" className="inline-flex items-center gap-3 transition-opacity hover:opacity-80">
              <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <Image
                  src="/images/brand/logo-icon.png"
                  alt={company.name}
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </span>
              <span className="font-heading text-lg font-bold tracking-tight">
                {company.name}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {company.founded} оноос хойш үйл ажиллагаа явуулж буй, хийн
              хангамж, LPG систем, барилгын халаалт, байгаль орчны
              инженерингийн чиглэлээр мэргэшсэн үндэсний компани.
            </p>
            
            {/* Social Icons */}
            <div className="mt-8 flex gap-3">
              {[
                { Icon: MessagesSquare, href: company.socials.facebook },
                { Icon: Briefcase, href: company.socials.linkedin },
                { Icon: PlayCircle, href: company.socials.youtube }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 transition-colors hover:bg-white hover:ring-white"
                >
                  <Icon className="h-4 w-4 text-white/70 transition-colors group-hover:text-ink" />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-10 flex flex-wrap gap-3">
               <div className="flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-white/70 tracking-wide ring-1 ring-white/10">
                 <ShieldCheck className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
                 MNS Стандарт
               </div>
               <div className="flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-white/70 tracking-wide ring-1 ring-white/10">
                 <Award className="h-3.5 w-3.5 text-brand" strokeWidth={2} />
                 Мэргэшсэн Инженерүүд
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-white/40">
              Шуурхай холбоос
            </h4>
            <ul className="mt-6 space-y-3.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-white/40">
              Үйл ажиллагаа
            </h4>
            <ul className="mt-6 space-y-3.5 text-sm">
              {[
                { label: "Үндсэн хэрэгжүүлсэн ажил", href: "/business-activities" },
                { label: "Татварын 1% төсөл", href: "/projects/117-surguuli" },
                { label: "Бүх төслүүд", href: "/projects" },
                { label: "Мэдээ мэдээлэл", href: "/news" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-white/40">
              Холбоо барих
            </h4>
            <ul className="mt-6 space-y-4 text-[13px] leading-relaxed text-white/60">
              <li className="flex items-start gap-3 transition-colors hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <a href={`tel:${company.phone.split(',')[0].trim()}`}>{company.phone}</a>
              </li>
              <li className="flex items-start gap-3 transition-colors hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className="flex items-start gap-3 transition-colors hover:text-white">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                {company.address}
              </li>
              <li className="flex items-start gap-3 transition-colors hover:text-white">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">{company.website}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] font-medium tracking-wide text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="transition-colors hover:text-white/80">Нууцлалын бодлого</Link>
            <Link href="#" className="transition-colors hover:text-white/80">Үйлчилгээний нөхцөл</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
