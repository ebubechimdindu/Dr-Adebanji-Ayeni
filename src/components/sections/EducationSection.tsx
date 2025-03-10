import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, ChevronUp } from "lucide-react";
import { client } from "@/lib/sanity";

const placeholderEducation = [
  {
    _id: "phd-1",
    degree: "Ph.D.",
    institution: "Covenant University",
    field: "Business Administration (Informal Entrepreneurship)",
    startYear: 2014,
    endYear: 2020,
    dissertationTitle: "Motivation For Informal Entrepreneurs: Implications for Business Performance in Selected Electronics Markets in Southwest, Nigeria",
    principalAdvisor: "Oluwole Iyiola",
    coAdvisor: "Olaleke Ogunnaike"
  },
  {
    _id: "ms-1",
    degree: "M.S.",
    institution: "Covenant University",
    field: "Business Administration",
    startYear: 2011,
    endYear: 2013,
    dissertationTitle: "Assessing the electronics market in an informal economy: a study of computer village, Ikeja, Lagos state"
  },
  {
    _id: "bs-1",
    degree: "B.S.",
    institution: "Covenant University",
    field: "Accounting",
    startYear: 2005,
    endYear: 2009,
    dissertationTitle: "The Role Of Accounting Standards in the Banking Industry"
  }
];

export function EducationSection() {
  const [showAll, setShowAll] = useState(false);

  const { data: education, isLoading } = useQuery({
    queryKey: ['education'],
    queryFn: async () => {
      try {
        const data = await client.fetch(`
          *[_type == "education"] | order(endYear desc) {
            _id,
            degree,
            institution,
            field,
            startYear,
            endYear,
            dissertationTitle,
            principalAdvisor,
            coAdvisor
          }
        `);
        return (!data || data.length === 0) ? placeholderEducation : data;
      } catch (error) {
        console.error('Error fetching education:', error);
        return placeholderEducation;
      }
    },
    initialData: placeholderEducation,
  });

  const displayedEducation = showAll ? education : education?.slice(0, 3);

  if (isLoading) {
    return (
      <section id="education" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Education</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-4 w-24 mb-4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Education</h2>
        <div className="space-y-8">
          {displayedEducation?.map((edu) => (
            <div key={edu._id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#A53DFF] mb-2">{edu.degree}</h3>
              <p className="text-[#697484] mb-1">{edu.institution}</p>
              <p className="text-[#697484] mb-1">{edu.field}</p>
              <p className="text-[#697484] mb-1">{`${edu.startYear} - ${edu.endYear}`}</p>
              {edu.dissertationTitle && (
                <p className="text-[#697484] italic mt-2">
                  Dissertation: {edu.dissertationTitle}
                </p>
              )}
              {(edu.principalAdvisor || edu.coAdvisor) && (
                <div className="mt-2 text-sm text-[#697484]">
                  {edu.principalAdvisor && (
                    <p>Principal Advisor: {edu.principalAdvisor}</p>
                  )}
                  {edu.coAdvisor && <p>Co-Advisor: {edu.coAdvisor}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
        {education && education.length > 3 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All Education <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}