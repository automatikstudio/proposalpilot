import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProposalPilot — AI Proposal Generator for Freelancers",
  description:
    "Win more deals. Generate polished client proposals in 60 seconds with AI. Scope, timeline, pricing, and terms — all done for you.",
  keywords: [
    "proposal generator",
    "freelancer tools",
    "AI proposals",
    "client proposals",
    "freelance",
    "project proposals",
  ],
  openGraph: {
    title: "ProposalPilot — AI Proposal Generator",
    description: "Write winning proposals in 60 seconds with AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased min-h-screen bg-surface-dark">
        {children}
      </body>
    </html>
  );
}
