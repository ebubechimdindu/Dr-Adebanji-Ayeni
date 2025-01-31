export function SkillsSection() {
  return (
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
  );
}