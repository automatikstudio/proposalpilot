import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — ProposalPilot | Proposal Writing Tips & Guides",
  description:
    "Expert guides on writing winning proposals. Tips for freelancers, consultants, and agencies on crafting proposals that close deals.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-zinc-400 mb-12 text-lg">
            Guides, tips, and strategies to help you write proposals that win.
          </p>

          {posts.length === 0 ? (
            <p className="text-zinc-500">No posts yet. Check back soon!</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <time className="text-sm text-zinc-500">{post.date}</time>
                    <h2 className="font-heading text-xl font-semibold mt-1 mb-2 text-zinc-100 hover:text-brand-amber transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">
                      {post.description}
                    </p>
                    {post.tags?.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
