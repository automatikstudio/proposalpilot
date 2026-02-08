import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { industries } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Free Proposal Templates by Industry — ProposalPilot",
  description:
    "Browse free professional proposal templates for consulting, marketing, legal, accounting, real estate, construction, IT services, healthcare, education, and nonprofits. Generate winning proposals in 60 seconds.",
  keywords: [
    "proposal templates",
    "free proposal templates",
    "business proposal templates",
    "consulting proposal template",
    "marketing proposal template",
    "freelance proposal templates",
  ],
  openGraph: {
    title: "Free Proposal Templates by Industry — ProposalPilot",
    description: "Browse professional proposal templates for 10+ industries. Generate winning proposals in 60 seconds with AI.",
    type: "website",
    url: "https://proposalpilot-five.vercel.app/templates",
  },
};

const industryIcons: Record<string, React.ReactNode> = {
  consulting: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  marketing: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><rect width="20" height="14" x="2" y="4" rx="2"/></svg>
  ),
  legal: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
  ),
  accounting: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
  ),
  "real-estate": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  construction: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
  ),
  "it-services": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/></svg>
  ),
  healthcare: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  ),
  education: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  nonprofit: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
  ),
};

export default function TemplatesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Free Proposal Templates
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Professional proposal templates for every industry. Generate winning proposals in 60 seconds with AI.
            </p>
            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-semibold px-6 py-3 rounded-btn transition-all"
            >
              Try ProposalPilot Free
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">
            Browse Templates by Industry
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/templates/${industry.slug}`}
                className="group bg-surface border border-zinc-800/50 rounded-card p-6 hover:border-brand-amber/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-amber/10 flex items-center justify-center text-brand-amber mb-4 group-hover:bg-brand-amber/20 transition-colors">
                  {industryIcons[industry.slug]}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-zinc-100 group-hover:text-brand-amber transition-colors">
                  {industry.name} Proposals
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                  {industry.description}
                </p>
                <span className="text-sm text-brand-amber font-medium">
                  {industry.templates.length} templates →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
          <div className="bg-surface border border-zinc-800/50 rounded-card p-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Stop writing proposals from scratch
            </h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Paste your project brief. Get a complete, professional proposal with scope, timeline, pricing, and terms — ready to send.
            </p>
            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-semibold px-8 py-3.5 rounded-btn transition-all text-lg"
            >
              Generate a Proposal
              <span>→</span>
            </Link>
            <p className="text-sm text-zinc-600 mt-3">Free to start · No credit card required</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
