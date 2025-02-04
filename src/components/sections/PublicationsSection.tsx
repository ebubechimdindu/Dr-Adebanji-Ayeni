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
                title: "Organizational Citizenship Behavior, Employee Voice and Academic Staff Retention in Nigerian Universities: Mediating Role of Conflict Resolution",
                authors: "AS Sajuyigbe, AA Eniola, AW Ayeni, HL Ineba",
                journal: "Revista Colombiana de Psicología",
                volume: "33",
                issue: "1",
                pages: "87-106",
                year: "2024"
              },
              {
                title: "Green Human Resource Management Practices and Environmental Performance: The Mediating Effect of Organizational Culture",
                authors: "AS Sajuyigbe, AW Ayeni, AO Peter, SO Ighomereho, HE Inegbedion",
                journal: "Interdisciplinary Journal of Management Studies",
                year: "2024"
              },
              {
                title: "The impact of tax revenue on economic growth in Nigeria",
                authors: "OE David, O Brian-Kufre, AA Williams",
                journal: "International Journal of multidisciplinary Research and Growth Evaluation",
                volume: "5",
                issue: "1",
                pages: "566-571",
                year: "2024"
              },
              {
                title: "social media And The Electorate's Decisions In Nigeria 4th Republic: The Nigerian Conurbation Insight Of QSR-Nvivo From SNS (Social Networking Sites)",
                authors: "E Ayeni, A Ayeni, M Ake, B Omitola, E Abraham, K Kadiri, O C Nicholas",
                journal: "Journal for ReAttach Therapy and Developmental Diversities",
                volume: "6",
                issue: "6s",
                pages: "791-804",
                year: "2023"
              }
            ].map((paper, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-semibold text-[#A53DFF] mb-2">{paper.title}</h4>
                <p className="text-[#697484] mb-1">{paper.authors}</p>
                <p className="text-[#697484] mb-1">
                  {paper.journal}
                  {paper.volume && `, ${paper.volume}`}
                  {paper.issue && `(${paper.issue})`}
                  {paper.pages && `: ${paper.pages}`}
                </p>
                <p className="text-[#697484]">Year: {paper.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}