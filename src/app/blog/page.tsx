import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "../../../sanity/lib/sanityClient";
import type { Metadata } from "next";
import { urlFor } from "../../../sanity/lib/sanityImage";
import BlogFade from "./BlogFade";   // <-- ADD THIS

type BlogPostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: { asset: { _ref: string; _type: string } };
  publishedAt: string;
};

const BLOG_QUERY = `
*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt
}
`;

export const metadata: Metadata = {
  title: "UK Immigration Insights & Updates | 1st Call UK Immigration Services",
  description:
    "Articles and guidance on UK immigration law, visa routes, appeals and status from 1st Call UK Immigration Services in Nottingham.",
};

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function BlogPage() {
  const posts = (await sanityClient.fetch(BLOG_QUERY)) as BlogPostCard[];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <BlogFade>
        <div className="max-w-6xl mx-auto blog-fade">
          <h1 className="text-4xl font-extrabold text-center text-[#2d459c] mb-4">
            Immigration News & Insights
          </h1>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Practical articles and commentary on UK immigration and asylum law
            from the team at 1st Call UK Immigration Services.
          </p>

          {posts.length === 0 && (
            <p className="text-center text-gray-600">
              No articles have been published yet. Please check back soon.
            </p>
          )}

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {post.mainImage?.asset && (
                  <div className="relative w-full aspect-[16/9] mb-4 rounded-xl overflow-hidden shadow">
                    <Image
                      src={urlFor(post.mainImage.asset).width(800).height(450).url()}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 mb-1">
                    {formatDate(post.publishedAt)}
                  </p>
                  <h2 className="text-xl font-semibold text-[#2d459c] mb-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="inline-block mt-2 text-[#2d459c] font-semibold hover:underline"
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </BlogFade>
    </main>
  );
}
