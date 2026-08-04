import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description:
    "Элит Эл Пи Жи ХХК-той холбоо барих утас, и-мэйл, хаяг, сошиал медиа сувгууд.",
};

const info = [
  { icon: Phone, label: "Утас", value: company.phone },
  { icon: Mail, label: "И-мэйл", value: company.email },
  { icon: MapPin, label: "Хаяг", value: company.address },
  { icon: Clock, label: "Ажиллах цаг", value: "24/7" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Холбоо барих"
        title="Бидэнтэй холбогдоорой"
        description="Таны төслийн талаар ярилцахад бэлэн байна. Дараах мэдээллээр эсвэл маягтаар холбогдоно уу."
        breadcrumb={[{ label: "Нүүр", href: "/" }, { label: "Холбоо барих" }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {info.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-sm"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                  Сошиал медиа
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: FaFacebookF, href: company.socials.facebook },
                    { Icon: FaLinkedinIn, href: company.socials.linkedin },
                    { Icon: FaYoutube, href: company.socials.youtube },
                  ].map(({ Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white text-ink/60 transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative h-56 overflow-hidden rounded-[2rem] border border-ink/8">
                <iframe
                  src={company.mapEmbed}
                  title="Байршил — Google Maps"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
