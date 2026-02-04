"use client";

export default function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizeClasses = {
    small: "text-lg",
    default: "text-xl",
    large: "text-3xl",
  };

  return (
    <span className={`font-heading font-bold ${sizeClasses[size]} text-zinc-100`}>
      Proposal<span className="text-brand-amber">Pilot</span>
    </span>
  );
}
