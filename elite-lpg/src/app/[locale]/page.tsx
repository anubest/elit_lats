import { Hero } from "@/components/home/Hero";
import { TaxBenefitBanner } from "@/components/home/TaxBenefitBanner";
import { FeaturedProjectTeaser } from "@/components/home/FeaturedProjectTeaser";
import { BusinessCategoriesShowcase } from "@/components/home/BusinessCategoriesShowcase";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { EngineeringProcess } from "@/components/home/EngineeringProcess";
import { MediaCoverage } from "@/components/project/MediaCoverage";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Partners } from "@/components/home/Partners";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjectTeaser />
      <BusinessCategoriesShowcase />
      <ProjectsShowcase />
      <EngineeringProcess />
      <MediaCoverage />
      <WhyChooseUs />
      <Partners />
      <TaxBenefitBanner />
      <ContactCTA />
    </>
  );
}
