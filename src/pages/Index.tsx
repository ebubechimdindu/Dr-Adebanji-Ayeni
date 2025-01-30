import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Stats } from "@/components/layout/Stats";
import { BlogSection } from "@/components/layout/BlogSection";
import { PortfolioSection } from "@/components/layout/PortfolioSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <section id="home" className="pt-16 sm:pt-20">
        <Hero />
        <Stats />
      </section>

      <section id="about" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-6 sm:mb-8 animate-fade-in">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-base sm:text-lg text-[#697484] leading-relaxed">
                Dr. Ayeni Adebanji Adejuwon William hails from Ekiti State, Nigeria, with B.Sc (Accounting), M.Sc and PhD in Business Administration (Informal Entrepreneurship) from Covenant University, Nigeria. A member of Nigerian Institute of Management, Institute of Debt Recovery Practitioners of Nigeria, and the Academy Of Management Nigeria with over nine years in Academia and currently serving at Wigwe University, Rivers state.
              </p>
              <p className="text-base sm:text-lg text-[#697484] leading-relaxed mt-4">
                A prolific writer with evidence of Scopus publications in the informal economy, human resource, strategic and educational management, he serves as a reviewer for high-impact journal outlets. Throughout his career, he has supervised both undergraduate and postgraduate students, while mentoring students in the literal and debate club.
              </p>
              <p className="text-base sm:text-lg text-[#697484] leading-relaxed mt-4">
                Currently employed at Wigwe University in the Faculty of Business and Social Sciences while pursuing Post-doctoral Research at North West University, South Africa. His research expertise includes both quantitative and qualitative methods, particularly utilizing PLS-SEM and QSR Nvivo for primary data analysis.
              </p>
            </div>
            <div className="relative h-[400px] animate-scale-in">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81"
                alt="About Me"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Skill Sets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Research Methods",
                skills: ["Quantitative Research", "Qualitative Research", "Mixed Methods", "PLS-SEM", "QSR Nvivo"]
              },
              {
                category: "Academic Skills",
                skills: ["Academic Writing", "Research Design", "Data Analysis", "Thesis Supervision", "Curriculum Development"]
              },
              {
                category: "Business Administration",
                skills: ["Strategic Management", "Entrepreneurship", "Human Resource Management", "Organizational Behavior"]
              }
            ].map((skillSet, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#A53DFF] mb-4">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-[#697484]">
                      <span className="w-2 h-2 bg-[#A53DFF] rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "Ph.D. in Business Administration",
                institution: "Covenant University",
                year: "2020",
                focus: "Informal Entrepreneurship"
              },
              {
                degree: "M.Sc. in Business Administration",
                institution: "Covenant University",
                year: "2015"
              },
              {
                degree: "B.Sc. in Accounting",
                institution: "Covenant University",
                year: "2010"
              }
            ].map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#A53DFF] mb-2">{edu.degree}</h3>
                <p className="text-[#697484] mb-1">{edu.institution}</p>
                <p className="text-[#697484] mb-1">{edu.year}</p>
                {edu.focus && <p className="text-[#697484] italic">Focus: {edu.focus}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="positions" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Academic Positions</h2>
          <div className="space-y-8">
            {[
              {
                position: "Faculty Member",
                institution: "Wigwe University",
                department: "Faculty of Business and Social Sciences",
                period: "2023 - Present"
              },
              {
                position: "Post-doctoral Researcher",
                institution: "North West University",
                location: "South Africa",
                period: "2023 - Present"
              }
            ].map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#A53DFF] mb-2">{position.position}</h3>
                <p className="text-[#697484] mb-1">{position.institution}</p>
                {position.department && <p className="text-[#697484] mb-1">{position.department}</p>}
                {position.location && <p className="text-[#697484] mb-1">{position.location}</p>}
                <p className="text-[#697484] font-medium">{position.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Publications</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#132238] mb-6">Peer-reviewed Journal Papers</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Sample Publication Title 1",
                  authors: "Ayeni, A. A. W., et al.",
                  journal: "Journal of Business Administration",
                  year: "2023",
                  doi: "10.1234/jba.2023.001"
                },
                {
                  title: "Sample Publication Title 2",
                  authors: "Ayeni, A. A. W., et al.",
                  journal: "International Journal of Management",
                  year: "2022",
                  doi: "10.1234/ijm.2022.001"
                }
              ].map((paper, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#A53DFF] mb-2">{paper.title}</h4>
                  <p className="text-[#697484] mb-1">{paper.authors}</p>
                  <p className="text-[#697484] mb-1">{paper.journal}, {paper.year}</p>
                  <p className="text-[#697484]">DOI: {paper.doi}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#132238] mb-6">Publications Under Review</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Sample Under Review Title 1",
                  authors: "Ayeni, A. A. W., et al.",
                  journal: "Journal of Management Studies",
                  submissionDate: "2024"
                }
              ].map((paper, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-semibold text-[#A53DFF] mb-2">{paper.title}</h4>
                  <p className="text-[#697484] mb-1">{paper.authors}</p>
                  <p className="text-[#697484]">Submitted to {paper.journal}, {paper.submissionDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Awards & Honors</h2>
          <div className="space-y-6">
            {[
              {
                title: "Sample Award 1",
                organization: "Sample Organization",
                year: "2023",
                description: "Brief description of the award and its significance."
              },
              {
                title: "Sample Honor 1",
                organization: "Sample Institution",
                year: "2022",
                description: "Brief description of the honor and its significance."
              }
            ].map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#A53DFF] mb-2">{award.title}</h3>
                <p className="text-[#697484] mb-1">{award.organization}</p>
                <p className="text-[#697484] mb-2">{award.year}</p>
                <p className="text-[#697484]">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
