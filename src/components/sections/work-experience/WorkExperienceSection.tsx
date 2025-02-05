import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";
import { ExperienceCard } from "./ExperienceCard";
import { LoadingState } from "./LoadingState";
import { Briefcase } from "lucide-react";

const placeholderExperiences = [
  {
    _id: "work-1",
    title: "Post Doctoral Researcher",
    organization: "North West University",
    startDate: "2024-07-01",
    endDate: null,
    isCurrent: true,
    type: "Academic",
    description: "Research and evaluation of postgraduate studies with focus on reducing unemployment through informal structures.",
    responsibilities: [
      "Conducting research on informal entrepreneurship",
      "Mentoring colleagues",
      "Publishing in SCOPUS-indexed journals",
      "Analyzing qualitative and quantitative data"
    ],
    achievements: [
      "In process of publishing 5+ SCOPUS papers",
      "Developing multidisciplinary research impact",
      "Contributing to unemployment reduction research"
    ]
  },
  {
    _id: "work-2",
    title: "Lecturer",
    organization: "Wigwe University",
    startDate: "2024-08-01",
    endDate: null,
    isCurrent: true,
    type: "Academic",
    description: "Teaching business-related courses and conducting research at a new university.",
    responsibilities: [
      "Delivering business lectures",
      "Conducting research",
      "Working with qualitative and quantitative data"
    ],
    achievements: []
  },
  {
    _id: "work-3",
    title: "Lecturer",
    organization: "Landmark University",
    startDate: "2018-02-01",
    endDate: "2024-05-31",
    isCurrent: false,
    type: "Academic",
    description: "Comprehensive academic role including teaching, research, and administrative duties.",
    responsibilities: [
      "Teaching business courses",
      "Managing NIM examinations",
      "Serving on university committees",
      "Advising student organizations"
    ],
    achievements: [
      "Published 20+ SCOPUS articles",
      "Established CIPM linkage",
      "Managed LUBACA as Staff Adviser",
      "Organized international conference"
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