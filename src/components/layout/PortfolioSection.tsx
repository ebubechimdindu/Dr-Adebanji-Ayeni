import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import type { PortfolioItem } from "@/types/sanity";
import { Skeleton } from "@/components/ui/skeleton";

export function PortfolioSection() {
  const { data: projects, isLoading, isError } = useQuery({
    queryKey: ['portfolio-items'],
    queryFn: async () => {
      try {
        return await client.fetch<PortfolioItem[]>(`
          *[_type == "portfolio"] {
            _id,
            title,
            description,
            image,
            projectUrl
          }
        `);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
        return [];
      }
    },
  });

  if (isError) {
    return (
      <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Research Projects</h2>
          <p className="text-gray-600">Currently updating research projects...</p>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Research Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative overflow-hidden rounded-xl shadow-lg">
                <Skeleton className="w-full h-[300px]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If no projects are available yet, show a message
  if (!projects || projects.length === 0) {
    return (
      <section className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Research Projects</h2>
          <p className="text-gray-600">Research projects will be available soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="research" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Research Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div 
              key={project._id} 
              className="group relative overflow-hidden rounded-xl shadow-lg animate-scale-in"
            >
              {project.image && (
                <div className="aspect-w-16 aspect-h-9 bg-[#F8F9FA]">
                  <img
                    src={urlFor(project.image).width(800).height(600).url()}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-[#A53DFF]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
                <div className="text-center p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-4">{project.description}</p>
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-white text-[#A53DFF] rounded-full hover:bg-[#F8F9FA] transition-colors duration-300"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}