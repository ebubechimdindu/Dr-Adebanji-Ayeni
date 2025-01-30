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

      <section id="process" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">My Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {['Discovery', 'Design', 'Development', 'Testing', 'Launch', 'Maintenance'].map((step, index) => (
              <div 
                key={step} 
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:bg-[#A53DFF] hover:text-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#A53DFF] group-hover:text-white font-bold mb-2 text-lg sm:text-xl">0{index + 1}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{step}</h3>
                <p className="text-[#697484] group-hover:text-white/90">Brief description of the {step.toLowerCase()} phase and what it entails.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />
      
      <BlogSection />

      <section id="services" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              'UI/UX Design',
              'Web Development',
              'Mobile Apps',
              'Brand Identity',
              'Digital Marketing',
              'Consultation'
            ].map((service, index) => (
              <div 
                key={service} 
                className="p-6 sm:p-8 rounded-xl border-2 border-[#E2E8F0] hover:border-[#A53DFF] transition-all duration-500 shadow-lg hover:shadow-xl group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="w-16 h-16 bg-[#A53DFF]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-[#A53DFF]">0{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-[#A53DFF] transition-colors">{service}</h3>
                <p className="text-[#697484]">Comprehensive {service.toLowerCase()} services tailored to your needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Contact Me</h2>
          <form className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 hover:border-[#A53DFF]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 hover:border-[#A53DFF]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 hover:border-[#A53DFF]"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 hover:border-[#A53DFF] resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#A53DFF] text-white font-semibold py-3 rounded-lg hover:bg-[#8431CC] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
