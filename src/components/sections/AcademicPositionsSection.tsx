export function AcademicPositionsSection() {
  return (
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
  );
}