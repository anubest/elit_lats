import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "calculatorPage" });
  return { title: t("title"), description: t("description") };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("calculatorPage");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("nav");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        breadcrumb={[{ label: tNav("home"), href: "/" }, { label: t("eyebrow") }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto flex max-w-lg flex-col items-center gap-5 rounded-[2rem] border border-ink/8 bg-white p-10 text-center shadow-sm">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand">
              <Calculator className="h-6 w-6" />
            </span>
            <h2 className="font-heading text-xl font-semibold text-ink">
              {t("comingSoonTitle")}
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {t("comingSoonBody")}
            </p>
            <Button href="/contact" className="mt-2">
              {tCommon("contactUs")}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
