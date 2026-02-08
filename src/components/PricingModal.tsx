"use client";

import { useState } from "react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

export default function PricingModal({ isOpen, onClose, planName }: PricingModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) return;
    
    try {
      await fetch("http://77.42.94.208:3458/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          event: "email_capture", 
          email,
          plan: planName,
          product: "proposalpilot",
          timestamp: new Date().toISOString()
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to track email capture:", err);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-surface border border-zinc-800 rounded-card p-8 max-w-md w-full amber-glow">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-amber/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3v12" />
              <path d="M18 9a3 3 0 0 1 0 6h-6" />
              <path d="M6 21h12" />
              <circle cx="6" cy="15" r="3" />
            </svg>
          </div>
          
          {submitted ? (
            <>
              <h3 className="font-heading text-2xl font-bold text-zinc-100 mb-2">
                You&apos;re on the list! 🎉
              </h3>
              <p className="text-zinc-400 mb-6">
                We&apos;ll email you when {planName} launches with early-bird pricing.
              </p>
              <button
                onClick={onClose}
                className="bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-medium px-5 py-2.5 rounded-btn transition-all text-sm"
              >
                Got it
              </button>
            </>
          ) : (
            <>
              <h3 className="font-heading text-2xl font-bold text-zinc-100 mb-2">
                {planName} — Coming Soon
              </h3>
              <p className="text-zinc-400 mb-6">
                We&apos;re putting the finishing touches on paid plans. Leave your email and we&apos;ll
                notify you when {planName} launches with early-bird pricing.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="flex-1 bg-surface-dark border border-zinc-800 rounded-btn px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-brand-amber/50 transition-colors"
                />
                <button 
                  onClick={handleSubmit}
                  className="bg-brand-amber hover:bg-brand-amber-light text-zinc-950 font-medium px-5 py-2.5 rounded-btn transition-all text-sm whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-zinc-600 mt-3">No spam. Just launch updates.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
