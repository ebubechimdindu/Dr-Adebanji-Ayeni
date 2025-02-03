import { WorkExperience } from "@/types/sanity";

interface ExperienceCardProps {
  experience: WorkExperience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-[#F8F9FA] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">{experience.title}</h3>
      <p className="text-[#697484] font-medium mb-1">{experience.organization}</p>
      <p className="text-[#697484] mb-4">
        {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - 
        {experience.isCurrent ? ' Present' : experience.endDate ? 
          ` ${new Date(experience.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` : ''}
      </p>
      {experience.description && <p className="text-[#697484] mb-4">{experience.description}</p>}
      
      {experience.responsibilities && experience.responsibilities.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-[#132238] mb-2">Key Responsibilities:</h4>
          <ul className="list-disc list-inside space-y-1">
            {experience.responsibilities.map((resp, index) => (
              <li key={index} className="text-[#697484]">{resp}</li>
            ))}
          </ul>
        </div>
      )}
      
      {experience.achievements && experience.achievements.length > 0 && (
        <div>
          <h4 className="font-semibold text-[#132238] mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="text-[#697484]">{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}