import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";
import { ExperienceCard } from "./ExperienceCard";
import { LoadingState } from "./LoadingState";
import { Briefcase } from "lucide-react";

const placeholderExperiences = [
  {
    _id: "placeholder-1",
    title: "Post Doctoral Fellow",
    organization: "North-West University",
    startDate: "2023-01-01",
    endDate: null,
    isCurrent: true,
    type: "Academic",
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
    type: "Academic",
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
        console.log('Fetching work experience data...');
        const data = await client.fetch(`
          *[_type == "workExperience"] | order(startDate desc) {
            _id,
            title,
            organization,
            startDate,
            endDate,
            isCurrent,
            type,
            description,
            responsibilities,
            achievements
          }
        `);
        console.log('Fetched data:', data);
        return (!data || data.length === 0) ? placeholderExperiences : data;
      } catch (error) {
        console.error('Error fetching work experience:', error);
        return placeholderExperiences;
      }
    },
    initialData: placeholderExperiences,
  });

  if (!experiences || experiences.length === 0) {
    return null;
  }

  if (isLoading) {
    return (
      <section id="experience" className="min-h-screen bg-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <Briefcase className="w-8 h-8 text-[#7E69AB]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] animate-fade-in">
              Work Experience
            </h2>
          </div>
          <LoadingState />
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="min-h-screen bg-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Briefcase className="w-8 h-8 text-[#7E69AB]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] animate-fade-in">
            Work Experience
          </h2>
        </div>
        <div className="space-y-8">
          {experiences?.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}