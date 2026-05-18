import { useState } from "react";
import {
  Phone,
  Calendar,
  Route,
  FileText,
  MessageSquare,
  Star,
  DollarSign,
  Inbox,
  BarChart3,
  Users,
  ArrowRight,
  Check,
  Menu,
  X,
} from "lucide-react";

const AGENTS = [
  { n: "01", icon: Phone, name: "Front Desk", desc: "Answers calls 24/7. Books jobs." },
  { n: "02", icon: Calendar, name: "Booker", desc: "Scheduling, deposits, confirmations." },
  { n: "03", icon: Route, name: "Dispatcher", desc: "Routes techs by skill and ETA." },
  { n: "04", icon: FileText, name: "Estimator", desc: "Quotes from photos in minutes." },
  { n: "05", icon: MessageSquare, name: "Follow-Up", desc: "Recovers stale leads and quotes." },
  { n: "06", icon: Star, name: "Reviewer", desc: "Earns reviews at the right moment." },
  { n: "07", icon: DollarSign, name: "Biller", desc: "Invoices, chases, reconciles." },
  { n: "08", icon: Inbox, name: "Inbox", desc: "Triages email and SMS in your voice." },
  { n: "09", icon: BarChart3, name: "Reporter", desc: "Daily digest. Plain English." },
  { n: "10", icon: Users, name: "Recruiter", desc: "Sources, screens, schedules hires." },
];

const STATS = [
  { value: "0", label: "Missed calls" },
  { value: "+30%", label: "Jobs booked" },
  { value: "−50%", label: "Days sales outstanding" },
  { value: "10 hrs", label: "Saved per week" },
];

const PLANS = [
  {
    name: "Solo",
    price: "$199",
    suffix: "/mo",
    tag: "Pick any 1 agent",
    desc: "For owners testing the water.",
    featured: false,
  },
  {
    name: "Top 10",
    price: "$899",
    suffix: "/mo",
    tag: "All 10 agents, unlimited usage",
    desc: "For operators who want the full stack.",
    featured: true,
  },
  {
    name: "Multi-location",
    price: "Custom",
    suffix: "",
    tag: "3+ locations",
    desc: "Volume pricing, dedicated onboarding.",
    featured: false,
  },
];

function EmailCapture({ variant = "light", placeholder = "you@company.com" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Email required");
      return;
    }
    // Simple format check — RFC-perfect validation isn't worth it client-side.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("That doesn't look right");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const isDark = variant === "dark";

  if (submitted) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-3 rounded-md ${
          isDark ? "bg-white/10 text-white" : "bg-emerald-50 text-emerald-900"
        }`}
      >
        <Check className="w-4 h-4" />
        <span className="text-sm font-medium">You're on the list. We'll be in touch within 24 hours.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder={placeholder}
          className={`flex-1 px-4 py-3 text-sm rounded-md border outline-none transition ${
            isDark
              ? "bg-white/5 border-white/15 text-white placeholder-white/40 focus:border-white/40"
              : "bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900"
          }`}
        />
        <button
          type="submit"
          className={`px-5 py-3 text-sm font-medium rounded-md transition inline-flex items-center gap-1.5 ${
            isDark
              ? "bg-white text-neutral-900 hover:bg-neutral-100"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          }`}
        >
          Start free
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      {error && (
        <p className={`mt-2 text-xs text-left ${isDark ? "text-red-300" : "text-red-600"}`}>{error}</p>
      )}
    </form>
  );
}

export default function Hit10Homepage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-neutral-900 text-white text-[10px] font-medium flex items-center justify-center tracking-wider">
                H10
              </span>
              <span className="font-medium text-[15px]">Hit10</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-[13px] text-neutral-600">
              <a href="#agents" className="hover:text-neutral-900">Agents</a>
              <a href="#industries" className="hover:text-neutral-900">Industries</a>
              <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
              <a href="#customers" className="hover:text-neutral-900">Customers</a>
              <a href="#docs" className="hover:text-neutral-900">Docs</a>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[13px]">
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Sign in</a>
            <a
              href="#cta"
              className="inline-flex items-center gap-1 bg-neutral-900 text-white px-3.5 py-1.5 rounded-md font-medium hover:bg-neutral-800 transition"
            >
              Start free <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200 px-6 py-4 space-y-3 text-sm bg-white">
            <a href="#agents" className="block text-neutral-700">Agents</a>
            <a href="#industries" className="block text-neutral-700">Industries</a>
            <a href="#pricing" className="block text-neutral-700">Pricing</a>
            <a href="#customers" className="block text-neutral-700">Customers</a>
            <a href="#docs" className="block text-neutral-700">Docs</a>
            <a href="#cta" className="block font-medium text-neutral-900">Start free →</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 text-xs text-neutral-600 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Now serving HVAC, plumbing, electrical
          </div>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-5">
            Hit your top 10.
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto mb-8">
            AI agents that run the 10 workflows every local service business repeats every day.
            Answer every call. Book every job. Collect every dollar.
          </p>
          <EmailCapture />
          <p className="text-xs text-neutral-400 mt-4">
            Live in 10 days. No card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Proof strip */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-[11px] tracking-[0.08em] text-neutral-400">
          <span>TRUSTED BY 200+ LOCAL OPERATORS</span>
          <span>NORTHWEST HVAC</span>
          <span>BRIGHT PLUMBING</span>
          <span>SUMMIT ELECTRIC</span>
          <span>RIDGELINE HEATING</span>
        </div>
      </section>

      {/* The 10 */}
      <section id="agents" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[0.08em] text-neutral-400 mb-3">THE TOP 10</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-3">
              Your business runs on 10 things.
              <br />
              We automate all of them.
            </h2>
            <p className="text-[15px] text-neutral-600 max-w-md mx-auto">
              Pre-built agents, industry-tuned. Start with one. Run all ten.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {AGENTS.map(({ n, icon: Icon, name, desc }) => (
              <div
                key={n}
                className="border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-5 h-5 text-neutral-900" />
                  <span className="text-[11px] text-neutral-400 tabular-nums">{n}</span>
                </div>
                <p className="text-sm font-medium mb-1">{name}</p>
                <p className="text-xs text-neutral-600 leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.08em] text-neutral-400 mb-3">WHAT OPERATORS SEE</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Results in the first 30 days.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white rounded-md p-5">
                <p className="text-3xl md:text-4xl font-medium tracking-tight mb-1">{s.value}</p>
                <p className="text-xs text-neutral-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="customers" className="bg-white border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-snug tracking-tight mb-6">
            "We stopped losing $400 jobs to voicemail. Hit10 paid for itself in week one."
          </p>
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[11px] font-medium">
              DM
            </div>
            <div className="text-left">
              <p className="text-[13px] font-medium">Dan Mercer</p>
              <p className="text-xs text-neutral-600">Owner, Northwest HVAC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.08em] text-neutral-400 mb-3">PRICING</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
              One agent, or all ten.
            </h2>
            <p className="text-[15px] text-neutral-600">No per-seat fees. No long contracts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-xl p-5 bg-white ${
                  p.featured ? "border-2 border-blue-600" : "border border-neutral-200"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-2.5 left-4 bg-blue-50 text-blue-800 text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                    Most popular
                  </span>
                )}
                <p className="text-[13px] text-neutral-600 mb-2">{p.name}</p>
                <p className="text-3xl font-medium tracking-tight mb-1">
                  {p.price}
                  {p.suffix && (
                    <span className="text-[13px] text-neutral-600 font-normal">{p.suffix}</span>
                  )}
                </p>
                <p className="text-xs text-neutral-400 mb-4">{p.tag}</p>
                <p className="text-xs text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-3">
            Hit your top 10.
          </h2>
          <p className="text-[15px] text-white/60 mb-8">Live in 10 days. Or it's free.</p>
          <EmailCapture variant="dark" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
          <span>© 2026 Hit10, Inc.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <a href="#" className="hover:text-neutral-700">Terms</a>
            <a href="#" className="hover:text-neutral-700">Security</a>
            <a href="#" className="hover:text-neutral-700">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
