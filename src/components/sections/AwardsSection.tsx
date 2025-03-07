import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";

const placeholderAwards = [
  {
    _id: "award-1",
    title: "EDS Curriculum Overhauling",
    organization: "Centre of Entrepreneurship development Studies, Landmark University",
    year: 2024,
    description: "Recognition for curriculum development contributions"
  },
  {
    _id: "award-2",
    title: "Recognition in Academic Mutability and Tenacity",
    organization: "Centre of Entrepreneurship development Studies, Landmark University",
    year: 2024,
    description: "Acknowledged for academic excellence and persistence"
  },
  {
    _id: "award-3",
    title: "Certificate of Service",
    organization: "Department of Business Administration, Landmark University",
    year: 2019,
    description: "Recognition for service as Staff Adviser"
  },
  {
    _id: "award-4",
    title: "Recognition of Work Diligence",
    organization: "Office of the Vice-Chancellor",
    year: 2016,
    description: "Acknowledged for course rationalization efforts"
  },
  {
    _id: "award-5",
    title: "Entrepreneur of the Year",
    organization: "NUASA Covenant University Chapter",
    year: 2008,
    description: "Recognition for entrepreneurial excellence"
  }
];

export function AwardsSection() {
  const { data: awards, isLoading } = useQuery({
    queryKey: ['awards'],
    queryFn: async () => {
      try {
        const data = await client.fetch(`
          *[_type == "award"] | order(year desc) {
            _id,
            title,
            organization,
            year,
            category,
            description
          }
        `);
        return (!data || data.length === 0) ? placeholderAwards : data;
      } catch (error) {
        console.error('Error fetching awards:', error);
        return placeholderAwards;
      }
    },
    initialData: placeholderAwards,
  });

  if (isLoading) {
    return (
      <section id="awards" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Awards & Honors</h2>
          <div className="space-y-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="awards" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Awards & Honors</h2>
        <div className="space-y-6">
          {awards?.map((award) => (
            <div key={award._id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">{award.title}</h3>
              <p className="text-[#697484] mb-1">{award.organization}</p>
              <p className="text-[#697484] mb-2">{award.year}</p>
              {award.description && <p className="text-[#697484]">{award.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}