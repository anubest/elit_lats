import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { PageLoader } from "@/components/ui/PageLoader";
import { seo } from "@/lib/content";
import { routing } from "@/i18n/routing";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.titleDefault,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.description,
  keywords: [
    "Элит Эл Пи Жи",
    "LPG систем",
    "хийн хангамж",
    "хийн зуух",
    "барилгын халаалт",
    "газ хангамж Монгол",
    "industrial gas engineering Mongolia",
  ],
  openGraph: {
    title: seo.titleDefault,
    description: seo.description,
    url: seo.url,
    siteName: seo.siteName,
    images: [{ url: seo.ogImage, width: 1200, height: 630 }],
    locale: "mn_MN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titleDefault,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface-warm text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: seo.siteName,
              url: seo.url,
              logo: `${seo.url}/favicon.ico`,
              description: seo.description,
            }),
          }}
        />
        <NextIntlClientProvider>
          <PageLoader />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
