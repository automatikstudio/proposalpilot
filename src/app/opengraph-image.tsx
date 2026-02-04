import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ProposalPilot — AI Proposal Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "#080A12", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 80px", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #3B82F6, #8B5CF6)", display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "64px", fontWeight: 800, color: "#ffffff", letterSpacing: "-2px", display: "flex" }}>ProposalPilot</div>
          <div style={{ fontSize: "32px", fontWeight: 500, color: "#3B82F6", display: "flex" }}>AI Proposal Generator</div>
          <div style={{ fontSize: "24px", color: "#6B7280", maxWidth: "700px", lineHeight: 1.4, display: "flex" }}>Win more clients with polished, professional proposals in minutes. Not hours.</div>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {["Scope", "Timeline", "Pricing", "Terms", "PDF Export"].map((t) => (
            <div key={t} style={{ background: "#3B82F620", border: "1px solid #3B82F640", borderRadius: "12px", padding: "8px 20px", fontSize: "18px", color: "#3B82F6", fontWeight: 600, display: "flex" }}>{t}</div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "18px", color: "#4B5563", display: "flex" }}>proposalpilot-five.vercel.app</div>
          <div style={{ fontSize: "18px", color: "#4B5563", display: "flex" }}>automatik.studio</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
