import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Stats } from "@/components/layout/Stats";
import { BlogSection } from "@/components/layout/BlogSection";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AcademicPositionsSection } from "@/components/sections/AcademicPositionsSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WorkExperienceSection } from "@/components/sections/work-experience/WorkExperienceSection";
import { ProfessionalAffiliationsSection } from "@/components/sections/ProfessionalAffiliationsSection";

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
      <WorkExperienceSection />
      <AwardsSection />
      <ProfessionalAffiliationsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;