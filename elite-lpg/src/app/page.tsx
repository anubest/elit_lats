import { Hero } from "@/components/home/Hero";
import { BusinessActivitiesTeaser } from "@/components/home/BusinessActivitiesTeaser";
import { FeaturedProjectTeaser } from "@/components/home/FeaturedProjectTeaser";
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
      <BusinessActivitiesTeaser />
      <FeaturedProjectTeaser />
      <ProjectsShowcase />
      <EngineeringProcess />
      <MediaCoverage />
      <WhyChooseUs />
      <Partners />
      <ContactCTA />
    </>
  );
}
