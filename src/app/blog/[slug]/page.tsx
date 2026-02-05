import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — ProposalPilot`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      siteName: "ProposalPilot",
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <article className="max-w-3xl mx-auto px-6">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-zinc-500 hover:text-brand-amber transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
          <time className="text-sm text-zinc-500">{post.date}</time>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
            {post.title}
          </h1>
          {post.tags?.length > 0 && (
            <div className="flex gap-2 mb-8">
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
          <div
            className="prose prose-invert prose-zinc max-w-none text-zinc-400 prose-headings:text-zinc-200 prose-headings:font-heading prose-a:text-brand-amber prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-300 prose-li:marker:text-zinc-600"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
