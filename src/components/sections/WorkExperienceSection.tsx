import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function WorkExperienceSection() {
  const { data: experiences, isLoading } = useQuery({
    queryKey: ['work-experience'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('work_experience')
        .select('*')
        .order('start_date', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <section id="experience" className="min-h-screen bg-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Work Experience</h2>
          <div className="space-y-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-[#F8F9FA] p-6 rounded-xl shadow-lg animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
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
    <section id="experience" className="min-h-screen bg-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Work Experience</h2>
        <div className="space-y-8">
          {experiences?.map((exp) => (
            <div key={exp.id} className="bg-[#F8F9FA] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">{exp.title}</h3>
              <p className="text-[#697484] font-medium mb-1">{exp.organization}</p>
              <p className="text-[#697484] mb-4">
                {new Date(exp.start_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - 
                {exp.is_current ? ' Present' : exp.end_date ? ` ${new Date(exp.end_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}` : ''}
              </p>
              {exp.description && <p className="text-[#697484] mb-4">{exp.description}</p>}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-[#132238] mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="text-[#697484]">{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
              {exp.achievements && exp.achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#132238] mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="text-[#697484]">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}