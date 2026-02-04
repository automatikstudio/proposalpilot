import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { brief, services, rate, tone } = await req.json();

    if (!brief || typeof brief !== "string" || brief.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a project description (at least 10 characters)." },
        { status: 400 }
      );
    }

    const toneInstructions: Record<string, string> = {
      professional:
        "Use a professional, polished tone. Be clear, structured, and authoritative.",
      confident:
        "Use a confident, assertive tone. Show expertise and conviction. Be bold but not arrogant.",
      friendly:
        "Use a warm, friendly tone. Be approachable and personable while maintaining professionalism.",
    };

    const toneGuide = toneInstructions[tone] || toneInstructions.professional;

    const systemPrompt = `You are ProposalPilot, an expert freelance proposal writer. You create compelling, professional project proposals that win deals.

Your proposals are structured, persuasive, and tailored to each project. You write in a way that builds trust and demonstrates expertise.

${toneGuide}

IMPORTANT RULES:
- Write the proposal as plain text with clear section headers (use === for main sections)
- Do NOT use markdown formatting like **, ##, or bullet point markers
- Use clean, readable formatting
- Be specific and detailed but concise
- Include realistic timelines based on the project scope
- If an hourly rate is provided, calculate project pricing based on estimated hours
- Always include payment terms
- Make the client feel confident in hiring this freelancer`;

    const userMessage = `Write a complete project proposal based on the following:

PROJECT BRIEF:
${brief}

${services ? `FREELANCER'S SERVICES/SKILLS:\n${services}\n` : ""}
${rate ? `PRICING/RATE:\n${rate}\n` : ""}

Generate a complete proposal with these sections:

1. EXECUTIVE SUMMARY
A compelling overview that shows understanding of the project and why the freelancer is the right fit.

2. SCOPE OF WORK
Detailed breakdown of what will be delivered, organized into clear phases or deliverables.

3. TIMELINE
Realistic project timeline with milestones and estimated completion dates.

4. PRICING
Clear pricing breakdown. If an hourly rate was provided, estimate hours per phase. Include a total project cost.

5. TERMS & CONDITIONS
Standard freelance terms including payment schedule, revision policy, and communication expectations.

Write the proposal now. Make it specific to the project described — not generic.`;

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
      system: systemPrompt,
    });

    const proposalText =
      response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({ proposal: proposalText });
  } catch (error) {
    console.error("Generate error:", error);
    return NextResponse.json(
      { error: "Failed to generate proposal. Please try again." },
      { status: 500 }
    );
  }
}
