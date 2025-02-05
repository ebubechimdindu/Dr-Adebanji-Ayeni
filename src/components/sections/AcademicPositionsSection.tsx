import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, ChevronUp } from "lucide-react";
import { client } from "@/lib/sanity";

const placeholderPositions = [
  {
    _id: "pos-1",
    title: "Post Doctoral Fellow",
    institution: "North-West University",
    startDate: "2024-07-01",
    endDate: null,
    isCurrent: true,
    researchAreas: [
      "ICT pedagogy impact on student performance",
      "Internal mobility and quality assurance",
      "Entrepreneurial abilities and business survival"
    ]
  },
  {
    _id: "pos-2",
    title: "Lecturer I",
    institution: "Wigwe University",
    startDate: "2024-08-01",
    endDate: null,
    isCurrent: true,
    researchAreas: []
  },
  {
    _id: "pos-3",
    title: "Lecturer II",
    institution: "Landmark University",
    startDate: "2020-01-01",
    endDate: "2024-06-30",
    isCurrent: false,
    researchAreas: [
      "Employee Welfare Impact",
      "Innovation Strategies in Skin Care",
      "Video Games and Academic Performance"
    ]
  }
];

export function AcademicPositionsSection() {
  const [showAll, setShowAll] = useState(false);

  const { data: positions, isLoading } = useQuery({
    queryKey: ['academic_positions'],
    queryFn: async () => {
      try {
        console.log('Fetching academic positions...');
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
        console.log('Fetched data:', data);
        return (!data || data.length === 0) ? placeholderPositions : data;
      } catch (error) {
        console.error('Error fetching academic positions:', error);
        return placeholderPositions;
      }
    },
    initialData: placeholderPositions,
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
                <Skeleton className="h-4 w-24 mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <Skeleton key={j} className="h-4 w-full" />
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
    <section id="positions" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Academic Positions</h2>
        <div className="space-y-8">
          {displayedPositions?.map((position) => (
            <div key={position._id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">{position.title}</h3>
              <p className="text-[#697484] font-medium mb-1">{position.institution}</p>
              <p className="text-[#697484] mb-4">
                {new Date(position.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - 
                {position.isCurrent ? ' Present' : position.endDate ? 
                  ` ${new Date(position.endDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` : ''}
              </p>
              {position.researchAreas && position.researchAreas.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {position.researchAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F8F9FA] text-[#697484] rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
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