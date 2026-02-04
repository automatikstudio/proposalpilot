"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingModal from "@/components/PricingModal";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/></svg>
    ),
    title: "AI-Powered Proposals",
    desc: "Claude AI reads your brief and generates a complete, professional proposal tailored to the project.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
    ),
    title: "Professional Templates",
    desc: "Every proposal follows proven structures that clients trust — executive summary, scope, timeline, and pricing.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: "Smart Pricing",
    desc: "Input your hourly rate and let AI suggest competitive pricing with clear breakdowns and payment terms.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
    title: "PDF Export",
    desc: "Download your proposal as a polished PDF ready to send to clients. One click, done.",
  },
];

const steps = [
  {
    num: "01",
    title: "Paste the brief",
    desc: "Drop in the project description, job posting, or client message.",
  },
  {
    num: "02",
    title: "AI generates your proposal",
    desc: "Claude analyzes the brief and writes a tailored proposal in seconds.",
  },
  {
    num: "03",
    title: "Send & win the deal",
    desc: "Copy or download as PDF. Send it off and close more projects.",
  },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    proposals: "3 proposals / month",
    features: ["AI-generated proposals", "Copy to clipboard", "Basic templates"],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$15",
    period: "/month",
    proposals: "30 proposals / month",
    features: [
      "Everything in Free",
      "PDF export",
      "Custom tone selection",
      "Priority generation",
    ],
    cta: "Start Pro Plan",
    highlighted: true,
  },
  {
    name: "Unlimited",
    price: "$29",
    period: "/month",
    proposals: "Unlimited proposals",
    features: [
      "Everything in Pro",
      "Unlimited generation",
      "Saved templates",
      "Team sharing",
    ],
    cta: "Go Unlimited",
    highlighted: false,
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePricingClick = (planName: string) => {
    if (planName === "Free") {
      window.location.href = "/app";
      return;
    }
    setSelectedPlan(planName);
    setModalOpen(true);
    // Track
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "pricing_click", plan: planName, product: "proposalpilot" }),
    }).catch(() => {});
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-amber/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-amber/5 rounded-full blur-[120px]" />
          <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber text-sm font-medium mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              AI-Powered Proposal Generator
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Win more deals.
              <br />
              <span className="gradient-text">Write proposals in 60s.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Paste a project brief. Get a complete, professional proposal with scope,
              timeline, pricing, and terms — ready to send.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/app"
                className="group relative bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-semibold px-8 py-3.5 rounded-btn transition-all text-lg pulse-amber"
              >
                Generate a Proposal
                <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="#how-it-works"
                className="text-zinc-400 hover:text-zinc-200 font-medium px-6 py-3.5 transition-colors"
              >
                See how it works
              </a>
            </div>
            <p className="text-sm text-zinc-600 mt-4">Free to start · No credit card required</p>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-24 bg-surface/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                How it works
              </h2>
              <p className="text-zinc-400 text-lg">Three steps. Sixty seconds. One winning proposal.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="relative bg-surface border border-zinc-800/50 rounded-card p-8 hover:border-brand-amber/30 transition-all group"
                >
                  <span className="text-5xl font-heading font-bold text-brand-amber/20 group-hover:text-brand-amber/40 transition-colors">
                    {step.num}
                  </span>
                  <h3 className="font-heading text-xl font-semibold mt-4 mb-2 text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Everything you need to close deals
              </h2>
              <p className="text-zinc-400 text-lg">
                Professional proposals that make clients say yes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-surface border border-zinc-800/50 rounded-card p-8 hover:border-brand-amber/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-amber/10 flex items-center justify-center text-brand-amber mb-4 group-hover:bg-brand-amber/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2 text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-surface/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-zinc-400 text-lg">
                Start free. Upgrade when you&apos;re winning too many deals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-surface border rounded-card p-8 flex flex-col ${
                    plan.highlighted
                      ? "border-brand-amber/50 amber-glow"
                      : "border-zinc-800/50"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-amber text-zinc-950 text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-zinc-100">
                    {plan.name}
                  </h3>
                  <div className="mt-4 mb-1">
                    <span className="text-4xl font-heading font-bold text-zinc-100">
                      {plan.price}
                    </span>
                    <span className="text-zinc-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-brand-amber font-medium mb-6">{plan.proposals}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#D97706"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 flex-shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePricingClick(plan.name)}
                    className={`w-full py-3 rounded-btn font-medium transition-all text-sm ${
                      plan.highlighted
                        ? "bg-brand-amber hover:bg-brand-amber-light text-zinc-950"
                        : "bg-surface-light hover:bg-zinc-700 text-zinc-100 border border-zinc-700"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Stop spending hours on proposals
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Join freelancers who close more deals in less time.
            </p>
            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-semibold px-8 py-3.5 rounded-btn transition-all text-lg"
            >
              Try ProposalPilot Free
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <PricingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={selectedPlan}
      />
    </>
  );
}
