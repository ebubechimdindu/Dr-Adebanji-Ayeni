import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

export function ProfessionalAffiliationsSection() {
  const { data: affiliations } = useQuery({
    queryKey: ['affiliations'],
    queryFn: async () => {
      try {
        const data = await client.fetch(`
          *[_type == "affiliation"] | order(organization asc) {
            _id,
            organization,
            membershipNumber
          }
        `);
        return data || [];
      } catch (error) {
        console.error('Error fetching affiliations:', error);
        return [];
      }
    },
  });

  if (!affiliations || affiliations.length === 0) {
    return null;
  }

  return (
    <section id="affiliations" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Award className="w-8 h-8 text-[#7E69AB]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] animate-fade-in">
            Professional Affiliations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {affiliations.map((affiliation) => (
            <Card key={affiliation._id} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#7E69AB] mb-3">
                {affiliation.organization}
              </h3>
              <Badge variant="secondary" className="text-sm">
                Membership No: {affiliation.membershipNumber}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}