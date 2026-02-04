"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tones = [
  { value: "professional", label: "Professional", icon: "🎯" },
  { value: "confident", label: "Confident", icon: "💪" },
  { value: "friendly", label: "Friendly", icon: "😊" },
];

export default function AppPage() {
  const [brief, setBrief] = useState("");
  const [services, setServices] = useState("");
  const [rate, setRate] = useState("");
  const [tone, setTone] = useState("professional");
  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [pdfModal, setPdfModal] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!brief.trim()) {
      setError("Please enter a project description.");
      return;
    }
    setError("");
    setLoading(true);
    setProposal("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brief: brief.trim(),
          services: services.trim(),
          rate: rate.trim(),
          tone,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate proposal");
      }

      const data = await res.json();
      setProposal(data.proposal);

      // Track
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "proposal_generated", product: "proposalpilot" }),
      }).catch(() => {});

      // Scroll to output
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(proposal);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = proposal;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Generate Your Proposal
            </h1>
            <p className="text-zinc-400 text-lg">
              Paste the project details below and let AI craft your winning proposal.
            </p>
          </div>

          {/* Input Form */}
          <div className="bg-surface border border-zinc-800/50 rounded-card p-6 md:p-8 mb-8">
            <div className="space-y-6">
              {/* Brief */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Project Description / Job Brief *
                </label>
                <textarea
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Paste the project description, job posting, or client message here..."
                  rows={6}
                  className="w-full bg-surface-dark border border-zinc-800 rounded-btn px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-amber/50 transition-colors resize-y text-sm leading-relaxed"
                />
              </div>

              {/* Services + Rate row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Your Services / Skills
                  </label>
                  <textarea
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    placeholder="e.g., Full-stack web development, React, Node.js, UI/UX design..."
                    rows={3}
                    className="w-full bg-surface-dark border border-zinc-800 rounded-btn px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-amber/50 transition-colors resize-y text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Your Hourly Rate
                  </label>
                  <input
                    type="text"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="e.g., $85/hr or $5,000 fixed"
                    className="w-full bg-surface-dark border border-zinc-800 rounded-btn px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-amber/50 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Tone selector */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-3">
                  Proposal Tone
                </label>
                <div className="flex flex-wrap gap-3">
                  {tones.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setTone(t.value)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-btn text-sm font-medium transition-all ${
                        tone === t.value
                          ? "bg-brand-amber/15 border-brand-amber/50 text-brand-amber-light border"
                          : "bg-surface-dark border border-zinc-800 text-zinc-400 hover:border-zinc-600"
                      }`}
                    >
                      <span>{t.icon}</span>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-btn px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-brand-amber hover:bg-brand-amber-light disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-semibold py-3.5 rounded-btn transition-all text-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin-slow w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Generating your proposal...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    Generate Proposal
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output */}
          {proposal && (
            <div ref={outputRef} className="bg-surface border border-zinc-800/50 rounded-card overflow-hidden">
              {/* Output header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-amber" />
                  <h2 className="font-heading text-lg font-semibold text-zinc-100">
                    Your Proposal
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-btn text-sm font-medium bg-surface-light hover:bg-zinc-700 text-zinc-300 transition-colors border border-zinc-700"
                  >
                    {copied ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                        Copy
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setPdfModal(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-btn text-sm font-medium bg-brand-amber hover:bg-brand-amber-light text-zinc-950 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download PDF
                  </button>
                </div>
              </div>
              {/* Proposal content */}
              <div className="p-6 md:p-8">
                <div className="prose prose-invert prose-zinc max-w-none text-sm leading-relaxed whitespace-pre-wrap font-body">
                  {proposal}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* PDF Coming Soon Modal */}
      {pdfModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setPdfModal(false)} />
          <div className="relative bg-surface border border-zinc-800 rounded-card p-8 max-w-sm w-full amber-glow text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-amber/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-zinc-100 mb-2">
              PDF Export — Coming Soon
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              We&apos;re building beautiful PDF exports. For now, use the Copy button to grab your proposal.
            </p>
            <button
              onClick={() => {
                setPdfModal(false);
                handleCopy();
              }}
              className="bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-medium px-6 py-2.5 rounded-btn transition-all text-sm"
            >
              Copy Proposal Instead
            </button>
          </div>
        </div>
      )}
    </>
  );
}
