import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/shopify/queries/blogs";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  // Flatten all articles
  const articles = blogs.flatMap(blog =>
    blog.articles.edges.map((a: any) => ({
      ...a.node,
      blogHandle: blog.handle
    }))
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article: any) => (
          <Link
            key={article.id}
            href={`/blogs/${article.blogHandle}/${article.handle}`}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            {article.image?.src && (
              <div className="relative w-full h-64">
                <Image
                  src={article.image.src}
                  alt={article.image.altText || article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
