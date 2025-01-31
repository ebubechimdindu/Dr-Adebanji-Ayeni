export function EducationSection() {
  return (
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
  );
}