import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { ChevronDown, ChevronUp } from "lucide-react";

export function EducationSection() {
  const [showAll, setShowAll] = useState(false);

  const { data: education, isLoading } = useQuery({
    queryKey: ['education'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('end_year', { ascending: false });
      
      if (error) throw error;
      return data;
    },
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
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-4 w-40" />
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
            <div key={edu.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#A53DFF] mb-2">{edu.degree}</h3>
              <p className="text-[#697484] mb-1">{edu.institution}</p>
              <p className="text-[#697484] mb-1">{edu.field}</p>
              <p className="text-[#697484] mb-1">{`${edu.start_year} - ${edu.end_year}`}</p>
              {edu.dissertation_title && (
                <p className="text-[#697484] italic mt-2">
                  Dissertation: {edu.dissertation_title}
                </p>
              )}
              {(edu.principal_advisor || edu.co_advisor) && (
                <div className="mt-2 text-sm text-[#697484]">
                  {edu.principal_advisor && (
                    <p>Principal Advisor: {edu.principal_advisor}</p>
                  )}
                  {edu.co_advisor && <p>Co-Advisor: {edu.co_advisor}</p>}
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