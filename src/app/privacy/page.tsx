import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 space-y-6">
            <p className="text-sm text-zinc-500">Last updated: February 2026</p>

            <section>
              <h2 className="font-heading text-xl font-semibold text-zinc-200 mb-3">1. Overview</h2>
              <p>
                ProposalPilot (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is operated by Automatik.studio. This privacy policy
                explains how we collect, use, and protect your information when you use our service.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-zinc-200 mb-3">2. Information We Collect</h2>
              <p>
                <strong className="text-zinc-300">Input Data:</strong> When you use ProposalPilot, you provide project descriptions,
                service details, and pricing information. This data is sent to our AI provider (Anthropic) to generate proposals.
              </p>
              <p>
                <strong className="text-zinc-300">Usage Data:</strong> We collect basic analytics such as page views, feature usage,
                and error logs to improve our service.
              </p>
              <p>
                <strong className="text-zinc-300">Email:</strong> If you sign up for updates, we collect your email address.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-zinc-200 mb-3">3. How We Use Your Data</h2>
              <p>Your data is used exclusively to:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-400">
                <li>Generate proposals based on your input</li>
                <li>Improve our service and user experience</li>
                <li>Send product updates (if you opted in)</li>
              </ul>
              <p>We do not sell or share your personal data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-zinc-200 mb-3">4. Data Retention</h2>
              <p>
                We do not store your project briefs or generated proposals on our servers beyond the duration of
                the request. All processing happens in real-time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-zinc-200 mb-3">5. Third-Party Services</h2>
              <p>
                We use Anthropic&apos;s Claude API for AI generation. Your input data is processed according to
                Anthropic&apos;s usage policies. We recommend reviewing their privacy policy for more information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-zinc-200 mb-3">6. Contact</h2>
              <p>
                For privacy-related questions, contact us at{" "}
                <a href="mailto:automatikstudiomail@gmail.com" className="text-brand-amber hover:underline">
                  automatikstudiomail@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
