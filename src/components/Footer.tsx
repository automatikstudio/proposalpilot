"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo size="small" />
            <p className="text-sm text-zinc-500">
              AI-powered proposals for freelancers
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms
            </Link>
            <a
              href="https://automatik.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              Built by Automatik.studio
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-zinc-800/30 text-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} ProposalPilot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
