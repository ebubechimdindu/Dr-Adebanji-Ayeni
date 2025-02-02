import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";

const placeholderExperiences = [
  {
    _id: "placeholder-1",
    title: "Post Doctoral Fellow",
    organization: "North-West University",
    startDate: "2023-01-01",
    endDate: null,
    isCurrent: true,
    description: "Research focus on informal entrepreneurship and business administration",
    responsibilities: [
      "Conducting research on informal entrepreneurship",
      "Publishing in high-impact peer-reviewed journals",
      "Mentoring graduate students"
    ],
    achievements: [
      "Published multiple Scopus-indexed papers",
      "Successfully mentored 5 graduate students",
      "Developed new research methodologies"
    ]
  },
  {
    _id: "placeholder-2",
    title: "Lecturer",
    organization: "Wigwe University",
    startDate: "2023-01-01",
    endDate: null,
    isCurrent: true,
    description: "Teaching and research in business administration",
    responsibilities: [
      "Teaching undergraduate courses",
      "Curriculum development",
      "Student mentoring"
    ],
    achievements: [
      "Developed innovative teaching methodologies",
      "High student satisfaction ratings",
      "Successfully implemented new curriculum"
    ]
  }
];

export function WorkExperienceSection() {
  const { data: experiences, isLoading } = useQuery({
    queryKey: ['work-experience'],
    queryFn: async () => {
      try {
        const data = await client.fetch(`
          *[_type == "workExperience"] | order(startDate desc) {
            _id,
            title,
            organization,
            startDate,
            endDate,
            isCurrent,
            description,
            responsibilities,
            achievements
          }
        `);
        return data.length > 0 ? data : placeholderExperiences;
      } catch (error) {
        console.error('Error fetching work experience:', error);
        return placeholderExperiences;
      }
    }
  });

  if (isLoading) {
    return (
      <section id="experience" className="min-h-screen bg-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Work Experience</h2>
          <div className="space-y-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-[#F8F9FA] p-6 rounded-xl shadow-lg animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="min-h-screen bg-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Work Experience</h2>
        <div className="space-y-8">
          {experiences?.map((exp) => (
            <div key={exp._id} className="bg-[#F8F9FA] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">{exp.title}</h3>
              <p className="text-[#697484] font-medium mb-1">{exp.organization}</p>
              <p className="text-[#697484] mb-4">
                {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - 
                {exp.isCurrent ? ' Present' : exp.endDate ? ` ${new Date(exp.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` : ''}
              </p>
              {exp.description && <p className="text-[#697484] mb-4">{exp.description}</p>}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-[#132238] mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="text-[#697484]">{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
              {exp.achievements && exp.achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#132238] mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="text-[#697484]">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}