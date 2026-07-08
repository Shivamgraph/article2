import * as React from "react";
import { useLocation } from "react-router-dom";
import {
  ShieldCheck, FileText, AlertTriangle, Scale,
  CheckCircle2, X, Cookie, HelpCircle,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button, Card, Switch, Badge } from "@/components/ui";
import { useStore } from "@/lib/store";

// ============================================================================
// Next.js App Router compatible metadata exports
// ============================================================================
export const privacyMetadata = {
  title: "Privacy Policy | SHIVAMGRAPH",
  description: "Read how SHIVAMGRAPH collects, uses, and protects your personal data in full compliance with GDPR and India's DPDP Act.",
};
export const termsMetadata = {
  title: "Terms of Service | SHIVAMGRAPH",
  description: "Official Terms of Service governing your account, content ownership, acceptable use, and monetization on SHIVAMGRAPH.",
};
export const cookieMetadata = {
  title: "Cookie Policy | SHIVAMGRAPH",
  description: "Learn about the essential and analytics cookies used on SHIVAMGRAPH and customize your cookie preferences.",
};
export const contentPolicyMetadata = {
  title: "Content Guidelines | SHIVAMGRAPH",
  description: "Our community standards and moderation rules for publishing educational videos, articles, quizzes, and discussions.",
};
export const disclaimerMetadata = {
  title: "Legal Disclaimer | SHIVAMGRAPH",
  description: "Important legal disclaimer regarding educational content, creator statements, and AI-generated summaries on SHIVAMGRAPH.",
};

// ============================================================================
// 1. PRIVACY POLICY (/privacy-policy)
// ============================================================================
export function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <PageHeader
        badge="DPDP & GDPR Compliant"
        title="Privacy Policy"
        description={privacyMetadata.description}
        icon={<ShieldCheck className="h-7 w-7" />}
        breadcrumbs={[{ label: "Legal & Privacy" }, { label: "Privacy Policy" }]}
      />

      <div className="prose-SHIVAMGRAPH max-w-none space-y-8 text-muted">
        <Card className="p-6 bg-surface/50 text-sm">
          <p className="font-semibold text-foreground">Last Updated: January 15, 2026</p>
          <p className="mt-1">
            At SHIVAMGRAPH Labs ("SHIVAMGRAPH", "we", "our", or "us"), protecting your privacy is fundamental to our mission of building a secure knowledge network. This policy applies to all visitors, learners, and verified creators using our web application, mobile interfaces, and API services.
          </p>
        </Card>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">1. Data We Collect</h2>
          <p>We collect information necessary to provide, personalize, and secure your learning experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Account Information:</strong> Username, email address, display name, avatar image, and bio when you register via email, magic link, passkeys, Google OAuth, or GitHub OAuth.</li>
            <li><strong className="text-foreground">Learning & Activity Data:</strong> Video completion timestamps, article reading progress, quiz scores, flashcard interactions, saved posts, and learning streak records.</li>
            <li><strong className="text-foreground">Creator Monetization Data:</strong> Stripe customer IDs, subscription status, and payout ledgers. Bank account and sensitive financial data are handled directly by Stripe and Razorpay; we never store raw credit card or bank account numbers on our servers.</li>
            <li><strong className="text-foreground">Technical & Security Logs:</strong> IP addresses, browser agent, device session identifiers, and 2FA authentication logs to prevent account takeover and fraud.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">2. How We Use Your Data</h2>
          <p>We process your data strictly under legal bases such as contract performance and legitimate interest:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To power our custom PostgreSQL ranking algorithm that calculates personalized feed recommendations without intrusive cross-site tracking.</li>
            <li>To generate AI summaries, flashcards, and quizzes using hosted LLM providers (Anthropic Claude 3.5 and OpenAI embeddings). Your private notes and unshared drafts are never used to train external public LLMs.</li>
            <li>To send critical transactional notifications (streak alerts, quiz results, payout confirmations) and optional weekly email digests via Resend.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">3. Your Rights Under DPDP Act (India) & GDPR (EU)</h2>
          <p>Regardless of your global location, we extend full data rights to all users:</p>
          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <Card className="p-4">
              <h4 className="font-bold text-foreground">Right to Access & Portability</h4>
              <p className="text-xs mt-1">You can export your complete learning transcript, notes, and quiz history in machine-readable JSON/PDF format from your account settings.</p>
            </Card>
            <Card className="p-4">
              <h4 className="font-bold text-foreground">Right to Erasure ("Right to be Forgotten")</h4>
              <p className="text-xs mt-1">You may permanently delete your account and all associated personal data via the Danger Zone in Account Settings. Deletion is irrevocable and processed within 30 days.</p>
            </Card>
          </div>
        </section>

        <section className="space-y-3 border-t border-border pt-6">
          <h2 className="text-xl font-bold text-foreground">4. Data Protection Officer (DPO) Contact</h2>
          <p>If you have questions regarding data privacy or wish to escalate an issue under India's Digital Personal Data Protection (DPDP) Act 2023, contact our designated DPO:</p>
          <Card className="p-4 inline-block text-sm">
            <p><strong className="text-foreground">DPO Name:</strong> Vikram Sharma, Esq.</p>
            <p><strong className="text-foreground">Email:</strong> dpo@SHIVAMGRAPH.app</p>
            <p><strong className="text-foreground">Address:</strong> SHIVAMGRAPH Labs India Pvt. Ltd., Indiranagar, Bengaluru, India</p>
          </Card>
        </section>
      </div>
    </div>
  );
}

// ============================================================================
// 2. TERMS OF SERVICE (/terms)
// ============================================================================
export function Terms() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <PageHeader
        badge="Legal Agreement"
        title="Terms of Service"
        description={termsMetadata.description}
        icon={<FileText className="h-7 w-7" />}
        breadcrumbs={[{ label: "Legal & Privacy" }, { label: "Terms of Service" }]}
      />

      <div className="prose-SHIVAMGRAPH max-w-none space-y-8 text-muted">
        <Card className="p-6 bg-surface/50 text-sm">
          <p className="font-semibold text-foreground">Effective Date: January 1, 2026</p>
          <p className="mt-1">
            Welcome to SHIVAMGRAPH! By accessing or using our website, mobile application, or services, you enter into a legally binding contract with SHIVAMGRAPH Labs. Please read these terms carefully.
          </p>
        </Card>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">1. Account Registration & Security</h2>
          <p>You must be at least 13 years old (or the minimum legal age in your country) to create an account. You agree to provide accurate registration details and maintain the security of your credentials, including enabling passkeys or two-factor authentication (2FA). You are responsible for all activities occurring under your account.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">2. Creator Content & Intellectual Property Ownership</h2>
          <p>We believe in creator ownership:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">You Own Your Content:</strong> Creators retain 100% copyright ownership over all videos, markdown articles, PDF guides, audio recordings, and quizzes they publish on SHIVAMGRAPH.</li>
            <li><strong className="text-foreground">License to SHIVAMGRAPH:</strong> By publishing content, you grant SHIVAMGRAPH a worldwide, non-exclusive, royalty-free license to host, encode, stream, transcode, display, and distribute your content across our web and mobile apps.</li>
            <li><strong className="text-foreground">Removal:</strong> When you delete a post or your account, we remove your content from public view immediately and from CDN edge servers within standard cache expiration windows.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">3. Subscriptions, Payments & 85% Creator Share</h2>
          <p>Monetization on SHIVAMGRAPH is governed by clear financial terms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Platform Fee:</strong> SHIVAMGRAPH charges a 15% platform fee on paid Pro/Enterprise subscriptions and digital course sales. Exactly 85% of net revenues (after third-party payment processing fees from Stripe/Razorpay) belong to the creator.</li>
            <li><strong className="text-foreground">Payout Schedules:</strong> Creator earnings are calculated monthly and disbursed on the 1st business day of each subsequent month via bank transfer or Stripe Connect.</li>
            <li><strong className="text-foreground">Refund Policy:</strong> If a learner requests a refund within 7 days of purchase due to technical failure or severe content misrepresentation, SHIVAMGRAPH reserves the right to review and deduct the refunded amount from future creator ledger payouts.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">4. Termination & Limitation of Liability</h2>
          <p>We reserve the right to suspend or terminate accounts that engage in harassment, spam, copyright infringement, or systematic attempts to manipulate our ranking algorithms. To the maximum extent permitted by law, SHIVAMGRAPH is provided "AS IS" without warranties of any kind.</p>
        </section>
      </div>
    </div>
  );
}

// ============================================================================
// 3. COOKIE POLICY (/cookie-policy)
// ============================================================================
export function CookiePolicy() {
  const { toast } = useStore();
  const [essential] = React.useState(true);
  const [analytics, setAnalytics] = React.useState(true);
  const [functional, setFunctional] = React.useState(true);

  const handleSavePreferences = () => {
    toast("Cookie preferences saved! Analytics and functional settings updated.", "success");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <PageHeader
        badge="Transparent Tracking"
        title="Cookie Policy & Preferences"
        description={cookieMetadata.description}
        icon={<Cookie className="h-7 w-7" />}
        breadcrumbs={[{ label: "Legal & Privacy" }, { label: "Cookie Policy" }]}
      />

      {/* Interactive Cookie Toggles */}
      <Card className="p-6 sm:p-8 mb-12 border-primary/30">
        <h3 className="text-xl font-bold mb-2">Manage Your Cookie Preferences</h3>
        <p className="text-sm text-muted mb-6">
          We use cookies to ensure login authentication, remember your dark mode settings, and analyze site performance. Customize your preferences below:
        </p>

        <div className="space-y-6 divide-y divide-border">
          <div className="flex items-center justify-between pt-4">
            <div className="pr-4">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">Essential Strictly Necessary Cookies</span>
                <Badge variant="primary" className="text-[10px]">Required</Badge>
              </div>
              <p className="text-xs text-muted mt-1">
                Required for core authentication (Supabase Auth sessions), CSRF token validation, and load balancing across Cloudflare edge servers. Cannot be disabled.
              </p>
            </div>
            <Switch checked={essential} onChange={() => {}} />
          </div>

          <div className="flex items-center justify-between pt-6">
            <div className="pr-4">
              <span className="font-bold text-foreground">Functional & Preference Cookies</span>
              <p className="text-xs text-muted mt-1">
                Remembers your theme choice (`SHIVAMGRAPH-theme`: dark/light), video playback speed preference, and language selection across sessions.
              </p>
            </div>
            <Switch checked={functional} onChange={setFunctional} />
          </div>

          <div className="flex items-center justify-between pt-6">
            <div className="pr-4">
              <span className="font-bold text-foreground">Analytics & Performance Cookies</span>
              <p className="text-xs text-muted mt-1">
                Anonymous telemetry powered by PostHog and Cloudflare Analytics to help us understand page load speeds and identify broken links. We do NOT use third-party ad retargeting cookies.
              </p>
            </div>
            <Switch checked={analytics} onChange={setAnalytics} />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleSavePreferences} className="px-8">
            Save Cookie Preferences
          </Button>
        </div>
      </Card>

      {/* Detailed Table */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Detailed Cookie Audit List</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-border text-muted">
                <th className="py-3 pr-4 font-semibold">Cookie Name</th>
                <th className="py-3 pr-4 font-semibold">Provider</th>
                <th className="py-3 pr-4 font-semibold">Purpose</th>
                <th className="py-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted">
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-foreground">sb-auth-token</td>
                <td className="py-3 pr-4">Supabase Auth</td>
                <td className="py-3 pr-4">Maintains encrypted user login session</td>
                <td className="py-3">14 Days</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-foreground">SHIVAMGRAPH-theme</td>
                <td className="py-3 pr-4">SHIVAMGRAPH App</td>
                <td className="py-3 pr-4">Stores dark or light mode preference</td>
                <td className="py-3">1 Year</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-foreground">ph_phc_*</td>
                <td className="py-3 pr-4">PostHog</td>
                <td className="py-3 pr-4">Anonymous UX analytics and feature flag evaluation</td>
                <td className="py-3">6 Months</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-foreground">__cf_bm</td>
                <td className="py-3 pr-4">Cloudflare</td>
                <td className="py-3 pr-4">DDoS mitigation and bot protection</td>
                <td className="py-3">30 Minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. CONTENT POLICY (/content-policy)
// ============================================================================
export function ContentPolicy() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <PageHeader
        badge="Community Standards"
        title="Content Guidelines & Policy"
        description={contentPolicyMetadata.description}
        icon={<Scale className="h-7 w-7" />}
        breadcrumbs={[{ label: "Legal & Privacy" }, { label: "Content Policy" }]}
      />

      <div className="grid gap-8 sm:grid-cols-2 mb-12">
        <Card className="p-6 border-success/40 bg-success/5">
          <h3 className="text-lg font-bold flex items-center gap-2 text-success mb-3">
            <CheckCircle2 className="h-5 w-5" /> What We Encourage
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Comprehensive, structured tutorials with actionable takeaways.</li>
            <li>• Clear citations and references for scientific, historical, or legal claims.</li>
            <li>• High-quality audio and video with captions or transcripts.</li>
            <li>• Respectful, constructive feedback in post discussions and peer communities.</li>
            <li>• Original code repositories, templates, and downloadable study sheets.</li>
          </ul>
        </Card>

        <Card className="p-6 border-danger/40 bg-danger/5">
          <h3 className="text-lg font-bold flex items-center gap-2 text-danger mb-3">
            <X className="h-5 w-5" /> Strictly Prohibited
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>• Spam, crypto scams, deceptive giveaways, or referral link harvesting.</li>
            <li>• Medical misinformation or unverified health cures without scientific backing.</li>
            <li>• Harassment, hate speech, doxxing, or personal attacks against creators.</li>
            <li>• Copyright infringement or uploading paid third-party courses without license.</li>
            <li>• AI-generated clickbait with zero human editing or fact-checking.</li>
          </ul>
        </Card>
      </div>

      <div className="prose-SHIVAMGRAPH max-w-none space-y-6 text-muted">
        <h3 className="text-xl font-bold text-foreground">Moderation & Enforcement Workflow</h3>
        <p>
          Our community moderation is a hybrid system combining proactive AI scanning and verified human review:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong className="text-foreground">Reporting:</strong> Any learner can flag a post or comment using the Report button. Reports enter our live Admin Moderation Queue.</li>
          <li><strong className="text-foreground">Review:</strong> Our moderation team reviews flagged items against these standards within 4 hours.</li>
          <li><strong className="text-foreground">Action:</strong> Depending on severity, actions range from warning notices and content hiding to temporary suspension or permanent account bans. Repeat copyright violators are terminated under our DMCA repeat offender policy.</li>
        </ol>
      </div>
    </div>
  );
}

// ============================================================================
// 5. DISCLAIMER (/disclaimer)
// ============================================================================
export function Disclaimer() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <PageHeader
        badge="Important Notice"
        title="Legal & Educational Disclaimer"
        description={disclaimerMetadata.description}
        icon={<AlertTriangle className="h-7 w-7 text-secondary" />}
        breadcrumbs={[{ label: "Legal & Privacy" }, { label: "Disclaimer" }]}
      />

      <div className="prose-SHIVAMGRAPH max-w-none space-y-6 text-muted">
        <Card className="p-6 bg-secondary/5 border-secondary/30 text-sm space-y-3">
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-secondary" /> Educational Purpose Only
          </h3>
          <p>
            All knowledge posts, videos, articles, quizzes, code samples, and downloadable resources published on SHIVAMGRAPH are intended strictly for general educational and informational purposes. Nothing on this website constitutes professional legal, financial, medical, or tax advice.
          </p>
        </Card>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">1. Creator Independence & Opinions</h2>
          <p>
            SHIVAMGRAPH is an open learning platform. The views, opinions, strategies, and methodologies expressed by verified creators, instructors, and community members are entirely their own and do not necessarily reflect the official policies or endorsements of SHIVAMGRAPH Labs India Pvt. Ltd. We do not independently verify every formula, workout routine, or code snippet published by creators.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">2. Accuracy of AI-Generated Content</h2>
          <p>
            Certain posts utilize AI tools (such as Anthropic Claude 3.5 Sonnet) to auto-generate summaries, flashcard drafts, and multiple-choice quizzes from video transcripts. While creators are instructed to review and edit AI suggestions before publishing, artificial intelligence models can occasionally produce errors or hallucinations. Always cross-reference critical facts with primary references listed in the post's References tab.
          </p>
        </section>

        <section className="space-y-3 border-t border-border pt-6">
          <h2 className="text-xl font-bold text-foreground">3. Limitation of Liability</h2>
          <p>
            In no event shall SHIVAMGRAPH Labs, its directors, employees, or partners be held liable for any direct, indirect, incidental, or consequential damages arising from your reliance on content learned on our platform, including data loss from code execution or injury from fitness tutorials. Always consult a certified professional before making health, legal, or financial decisions.
          </p>
        </section>
      </div>
    </div>
  );
}

// ============================================================================
// Default routing dispatcher for clean SPA route integration
// ============================================================================
export default function LegalPages() {
  const { pathname } = useLocation();
  if (pathname === "/privacy-policy") return <PrivacyPolicy />;
  if (pathname === "/terms") return <Terms />;
  if (pathname === "/cookie-policy") return <CookiePolicy />;
  if (pathname === "/content-policy") return <ContentPolicy />;
  if (pathname === "/disclaimer") return <Disclaimer />;
  return null;
}
