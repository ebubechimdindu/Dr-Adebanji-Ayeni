import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, ChevronUp } from "lucide-react";
import { client } from "@/lib/sanity.client";

export function AcademicPositionsSection() {
  const [showAll, setShowAll] = useState(false);

  const { data: positions, isLoading } = useQuery({
    queryKey: ['academic_positions'],
    queryFn: async () => {
      try {
        const data = await client.fetch(`
          *[_type == "academicPosition"] | order(startDate desc) {
            _id,
            title,
            institution,
            startDate,
            endDate,
            isCurrent,
            researchAreas
          }
        `);
        return data || [];
      } catch (error) {
        console.error('Error fetching academic positions:', error);
        return [];
      }
    },
  });

  const displayedPositions = showAll ? positions : positions?.slice(0, 3);

  if (isLoading) {
    return (
      <section id="positions" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Academic Positions</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-4 w-40 mb-1" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!positions || positions.length === 0) {
    return null;
  }

  return (
    <section id="positions" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Academic Positions</h2>
        <div className="space-y-8">
          {displayedPositions?.map((position) => (
            <div key={position._id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#A53DFF] mb-2">{position.title}</h3>
              <p className="text-[#697484] mb-1">{position.institution}</p>
              <p className="text-[#697484] mb-2">
                {new Date(position.startDate).getFullYear()} - {position.isCurrent ? 'Present' : new Date(position.endDate).getFullYear()}
              </p>
              {position.researchAreas && position.researchAreas.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium text-[#697484]">Research Areas:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {position.researchAreas.map((area: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm bg-[#F8F9FA] text-[#697484] rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {positions && positions.length > 3 && (
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
                  View All Positions <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}