
export function AboutSection() {
  return (
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
          <div className="relative h-[500px] w-full animate-scale-in">
            <img
              src="/lovable-uploads/026a489d-43ce-4287-996d-70c5d798c4cb.png"
              alt="Dr. Adebanji Ayeni"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              loading="eager"
              onError={(e) => {
                console.error("Failed to load About section image");
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
