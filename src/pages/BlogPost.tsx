import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { Skeleton } from "@/components/ui/skeleton";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      return await client.fetch(`
        *[_type == "post" && slug.current == $slug][0] {
          title,
          mainImage,
          body,
          publishedAt,
          description,
          author->{
            name,
            image
          }
        }
      `, { slug });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Skeleton className="h-64 w-full mb-8" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/4 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Post not found</h1>
            <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {post.mainImage && (
          <div className="relative h-[400px] w-full mb-8">
            <img
              src={urlFor(post.mainImage).width(1200).height(400).url()}
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        {post.publishedAt && (
          <p className="text-gray-600 mb-8">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
        <div className="prose prose-lg max-w-none">
          {post.body && <PortableText value={post.body} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;