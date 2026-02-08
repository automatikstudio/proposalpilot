import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries, getIndustryBySlug } from "@/lib/templates";

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Template Not Found — ProposalPilot",
    };
  }

  return {
    title: `Free ${industry.name} Proposal Templates — ProposalPilot`,
    description: industry.metaDescription,
    keywords: [
      `${industry.name.toLowerCase()} proposal template`,
      `${industry.name.toLowerCase()} proposal`,
      `free ${industry.name.toLowerCase()} proposal`,
      "proposal template",
      "proposal generator",
      "AI proposal",
    ],
    openGraph: {
      title: `Free ${industry.name} Proposal Templates — ProposalPilot`,
      description: industry.metaDescription,
      type: "website",
      url: `https://proposalpilot-five.vercel.app/templates/${industry.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Free ${industry.name} Proposal Templates — ProposalPilot`,
      description: industry.metaDescription,
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/templates" className="hover:text-zinc-300 transition-colors">
              Templates
            </Link>
            <span>/</span>
            <span className="text-zinc-300">{industry.name}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {industry.name} Proposal Templates
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mb-8">
              {industry.heroDescription}
            </p>
            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-semibold px-6 py-3 rounded-btn transition-all"
            >
              Generate a {industry.name} Proposal
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* Templates */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="font-heading text-2xl font-bold mb-8">
            Popular {industry.name} Templates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.templates.map((template) => (
              <div
                key={template.slug}
                className="bg-surface border border-zinc-800/50 rounded-card p-6 hover:border-brand-amber/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-amber/10 flex items-center justify-center text-brand-amber group-hover:bg-brand-amber/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <span className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-400">
                    Template
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-zinc-100">
                  {template.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {template.description}
                </p>
                <Link
                  href="/app"
                  className="text-sm text-brand-amber font-medium hover:text-brand-amber-light transition-colors"
                >
                  Use this template →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="bg-surface/50 border border-zinc-800/50 rounded-card p-8 md:p-10">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center">
              What&apos;s Included in Every Proposal
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Executive Summary",
                  desc: "A compelling overview that captures your client's attention and sets the stage.",
                },
                {
                  title: "Scope of Work",
                  desc: "Clear deliverables, milestones, and expectations so everyone's aligned.",
                },
                {
                  title: "Timeline & Pricing",
                  desc: "Professional fee structures with payment terms and project schedules.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-amber/10 flex items-center justify-center text-brand-amber mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-zinc-100 mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Ready to win more {industry.name.toLowerCase()} clients?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Stop spending hours on proposals. Generate professional, tailored proposals in 60 seconds.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-semibold px-8 py-3.5 rounded-btn transition-all text-lg"
          >
            Try ProposalPilot Free
            <span>→</span>
          </Link>
          <p className="text-sm text-zinc-600 mt-3">Free to start · No credit card required</p>
        </section>

        {/* Other Industries */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="font-heading text-xl font-bold mb-6 text-center">
            Explore Other Industries
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries
              .filter((i) => i.slug !== industry.slug)
              .map((i) => (
                <Link
                  key={i.slug}
                  href={`/templates/${i.slug}`}
                  className="text-sm px-4 py-2 bg-surface border border-zinc-800 rounded-full text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
                >
                  {i.name}
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
