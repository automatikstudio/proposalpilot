"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-surface-dark/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/templates"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Templates
          </Link>
          <Link
            href="/#pricing"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/app"
            className="text-sm font-medium bg-brand-amber hover:bg-brand-amber-light text-zinc-950 px-5 py-2 rounded-btn transition-all hover:shadow-lg hover:shadow-amber-900/20"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  );
}
