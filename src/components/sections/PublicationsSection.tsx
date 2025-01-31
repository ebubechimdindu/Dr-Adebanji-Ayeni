export function PublicationsSection() {
  return (
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
  );
}