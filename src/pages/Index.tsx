import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Stats } from "@/components/layout/Stats";
import { BlogSection } from "@/components/layout/BlogSection";
import { PortfolioSection } from "@/components/layout/PortfolioSection";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AcademicPositionsSection } from "@/components/sections/AcademicPositionsSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <section id="home" className="pt-16 sm:pt-20">
        <Hero />
        <Stats />
      </section>

      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <AcademicPositionsSection />
      <PortfolioSection />
      <PublicationsSection />
      <AwardsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;