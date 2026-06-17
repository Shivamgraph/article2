import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with actual newsletter service (ConvertKit/Mailchimp/Buttondown)
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="card relative overflow-hidden p-8 md:p-12">
      {/* Background orbs */}
      <div
        className="glow-orb"
        style={{ top: "-100px", right: "-50px", width: "300px", height: "300px", background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}
      />
      <div
        className="glow-orb"
        style={{ bottom: "-80px", left: "-30px", width: "200px", height: "200px", background: "radial-gradient(circle, #d97706 0%, transparent 70%)", opacity: 0.2 }}
      />
      <div className="pattern-grid absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient shadow-2xl shadow-amber-500/20">
          <svg className="h-7 w-7 text-black" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
          Newsletter Subscribe करो
        </h3>
        <p className="mb-6 font-hindi text-white/60 md:text-lg">
          हर हफ्ते एक कड़वा सच — सीधे तुम्हारे inbox में। कोई spam नहीं, कोई marketing बकवास नहीं।
        </p>

        {submitted ? (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-emerald-300">
            <svg className="mx-auto mb-2 h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-semibold">धन्यवाद! तुम subscribe हो गए।</p>
            <p className="mt-1 text-sm text-emerald-200/70 font-hindi">अपना inbox check करो।</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tumhara@email.com"
              className="flex-1 rounded-xl border border-white/10 bg-black/40 px-5 py-3.5 text-white placeholder:text-white/40 outline-none transition focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20"
            />
            <button type="submit" className="btn-primary whitespace-nowrap justify-center">
              Subscribe →
            </button>
          </form>
        )}
        <p className="mt-4 text-xs text-white/40">
          10,000+ readers already on the list. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
