import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function SkillsSection() {
  const [showAll, setShowAll] = useState(false);

  const skills = {
    "Technical Analysis": [
      "IBM SPSS",
      "PLS-SEM 3/4",
      "QSR Nvivo",
      "AMOS SPSS"
    ],
    "Research Tools": [
      "Mendeley",
      "Zotero"
    ],
    "Content Creation": [
      "Video Scribe",
      "Edraw Max",
      "Camtasia"
    ],
    "Office Tools": [
      "Microsoft Office Package"
    ],
    "Presentation": [
      "Prezi"
    ]
  };

  const categories = Object.keys(skills);
  const displayedCategories = showAll ? categories : categories.slice(0, 3);

  return (
    <section id="skills" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Skill Sets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#A53DFF] mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills[category].map((skill, index) => (
                  <li key={index} className="flex items-center text-[#697484]">
                    <span className="w-2 h-2 bg-[#A53DFF] rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {categories.length > 3 && (
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
                  View All Skills <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}