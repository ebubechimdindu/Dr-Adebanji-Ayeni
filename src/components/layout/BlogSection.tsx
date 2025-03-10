import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import type { BlogPost } from "@/types/sanity";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

export function BlogSection() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      try {
        return await client.fetch<BlogPost[]>(`
          *[_type == "post"] | order(publishedAt desc) [0...3] {
            _id,
            title,
            slug,
            mainImage,
            description,
            publishedAt
          }
        `);
      } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
      }
    },
  });

  if (isError) {
    return (
      <section className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Articles</h2>
          <p className="text-gray-600">Currently updating article list...</p>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Articles</h2>
          <p className="text-gray-600">Articles will be available soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <article 
              key={post._id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in"
            >
              {post.mainImage && (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={urlFor(post.mainImage).width(800).height(600).url()}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 hover:text-[#A53DFF] transition-colors">{post.title}</h3>
                <p className="text-[#697484] mb-4">{post.description}</p>
                <Link 
                  to={`/articles/${post.slug.current}`}
                  className="text-[#A53DFF] font-semibold hover:text-[#8431CC] transition-colors group inline-flex items-center"
                >
                  Read More
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}