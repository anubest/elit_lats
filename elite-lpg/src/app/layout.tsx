import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { PageLoader } from "@/components/ui/PageLoader";
import { seo } from "@/lib/content";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
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
        <PageLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
