export function AwardsSection() {
  return (
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
  );
}