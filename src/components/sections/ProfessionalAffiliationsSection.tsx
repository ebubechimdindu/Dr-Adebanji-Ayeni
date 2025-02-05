import { Award, Users, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const affiliations = [
  {
    organization: "Nigerian Institute of Management (NIM)",
    membershipNumber: "018832"
  },
  {
    organization: "Institute of Public Management (IPM)",
    membershipNumber: "141"
  },
  {
    organization: "Institute of Debt Recovery Practitioners of Nigeria (IDRPN)",
    membershipNumber: "G003"
  },
  {
    organization: "The International Society for Development and Sustainability (ISDS)",
    membershipNumber: "M170365"
  },
  {
    organization: "The Academy of Management Nigeria (TAMN)",
    membershipNumber: "TAMN/2021/815"
  },
  {
    organization: "Chartered Institute of Personnel Management (CIPM)",
    membershipNumber: "In view"
  }
];

export function ProfessionalAffiliationsSection() {
  return (
    <section id="affiliations" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <Users className="w-8 h-8 text-[#7E69AB]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] animate-fade-in">
            Professional Affiliations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {affiliations.map((affiliation, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-white/80 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-[#9b87f5] flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#132238]">
                    {affiliation.organization}
                  </h3>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7E69AB]" />
                    <Badge variant="secondary" className="text-sm bg-purple-50 text-[#7E69AB]">
                      Membership No: {affiliation.membershipNumber}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}