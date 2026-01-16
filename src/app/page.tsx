import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import NewsSection from "@/components/NewsSection";
import Newsletter from "@/components/Newsletter";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ProgramsSection />
      <NewsSection />
      <Newsletter />
      <CTASection />
      <Partners />
    </>
  );
}
