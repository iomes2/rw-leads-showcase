import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  
  X,
  Play,
  MessageSquareWarning,
  TrendingDown,
  EyeOff,
  Wrench,
  Search,
  LayoutTemplate,
  Smartphone,
  Star,
  PhoneCall,
  Rocket,
  PhoneIncoming,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-surface border-b-2 border-charcoal">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold tracking-tight text-charcoal text-lg">
          RW Leads Generator
        </a>
        <button
          onClick={() => scrollToId("cta")}
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-sm border-2 border-charcoal hover:translate-y-[-1px] transition-transform"
        >
          Book Call
        </button>
      </div>
    </header>
  );
}

function Hero({ onPlay }: { onPlay: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-charcoal">
      <img
        src={heroBg}
        alt="Residential outdoor garden patio at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/65" />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-charcoal-foreground">
          <h1 className="font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            The marketing machine for your trades business.
          </h1>
          <p className="mt-5 text-base md:text-lg text-charcoal-foreground/80 max-w-md leading-relaxed">
            Stop relying on referrals. We build high-converting ads and landing pages that get your phone ringing with exclusive local leads.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToId("cta")}
              className="bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-sm border-2 border-primary hover:bg-primary/90 transition"
            >
              Get My Free Audit
            </button>
            <button
              onClick={() => scrollToId("work")}
              className="bg-transparent text-charcoal-foreground font-semibold px-5 py-3 rounded-sm border-2 border-charcoal-foreground hover:bg-charcoal-foreground hover:text-charcoal transition"
            >
              See Our Results
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[240px] md:w-[280px] aspect-[9/19] bg-charcoal rounded-[2.5rem] border-[6px] border-charcoal shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] p-2">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-charcoal rounded-b-xl z-10" />
            <div className="relative w-full h-full bg-zinc-800 rounded-[2rem] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/30 to-zinc-900/60" />
              <button
                onClick={onPlay}
                aria-label="Play video"
                className="relative z-10 w-16 h-16 rounded-full bg-primary border-2 border-white flex items-center justify-center hover:scale-105 transition"
              >
                <Play className="text-white ml-1" fill="currentColor" size={24} />
              </button>
              <div className="absolute bottom-4 left-3 right-3 h-1 bg-white/30 rounded-full">
                <div className="h-full w-1/3 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SoundFamiliar() {
  const items = [
    { Icon: MessageSquareWarning, text: "Most of your jobs come from word of mouth" },
    { Icon: TrendingDown, text: "Zero real calls from boosted posts" },
    { Icon: EyeOff, text: "Competitors show up on Google, you don't" },
    { Icon: Wrench, text: "Too busy working to figure out marketing" },
  ];
  return (
    <section id="work" className="bg-charcoal text-charcoal-foreground py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl mb-10">Sound Familiar?</h2>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
          {items.map(({ Icon, text }) => (
            <div
              key={text}
              className="bg-surface-container text-charcoal p-5 rounded-sm flex items-start gap-4 border-2 border-charcoal"
            >
              <Icon className="text-primary shrink-0" size={24} strokeWidth={2.5} />
              <p className="font-semibold text-sm md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      Icon: Search,
      title: "Show Up on Google & Facebook",
      body: "We put your business exactly where local homeowners are looking for your services.",
    },
    {
      Icon: LayoutTemplate,
      title: "A Page That Actually Gets You Calls",
      body: "No more confusing websites. We build simple, high-converting landing pages focused on one thing: getting the phone to ring.",
    },
    {
      Icon: Smartphone,
      title: "Leads Go Straight To Your Phone",
      body: "Real-time notifications when a potential customer wants a quote. No logging into complicated dashboards.",
    },
  ];
  return (
    <section id="services" className="bg-surface py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl text-charcoal mb-12">
          We handle the marketing.
          <br />
          You handle the work.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="bg-card p-7 rounded-sm border-2 border-charcoal shadow-[4px_4px_0_0_var(--charcoal)]"
            >
              <Icon className="text-primary mb-5" size={28} strokeWidth={2.5} />
              <h3 className="font-bold text-lg text-charcoal mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { Icon: PhoneCall, n: 1, title: "Quick Call", body: "We learn about your business and area." },
    { Icon: Rocket, n: 2, title: "We Build & Launch", body: "Ads + page live in 7 days." },
    { Icon: PhoneIncoming, n: 3, title: "Your Phone Rings", body: "Real leads, real jobs, real money." },
  ];
  return (
    <section id="pricing" className="bg-surface-container py-16 md:py-24 border-y-2 border-charcoal/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl text-charcoal mb-12">
          Simple as a job quote.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map(({ Icon, n, title, body }) => (
            <div key={n} className="text-center">
              <div className="relative inline-flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-primary rounded-sm border-2 border-charcoal flex items-center justify-center text-white">
                  <Icon size={24} strokeWidth={2.5} />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-charcoal text-charcoal-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {n}
                </span>
              </div>
              <h3 className="font-bold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      initials: "CM",
      bg: "bg-primary",
      name: "Carlos M.",
      trade: "PAINTING CONTRACTOR",
      city: "FRAMINGHAM",
      quote: "Before I was just waiting for referrals. Now I get calls every week from people I've never met.",
    },
    {
      initials: "AR",
      bg: "bg-accent-rust",
      name: "Ana R.",
      trade: "HOUSE CLEANING",
      city: "MARLBOROUGH",
      quote: "I was scared to spend money on ads. First month I got 6 new clients.",
    },
    {
      initials: "MT",
      bg: "bg-accent-graphite",
      name: "Mike T.",
      trade: "LANDSCAPING",
      city: "NATICK",
      quote: "Simple and it works. My schedule is full now.",
    },
  ];
  return (
    <section id="reviews" className="bg-surface py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl text-charcoal mb-12">
          What Local Pros are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.initials}
              className="bg-card p-6 rounded-sm border-2 border-charcoal shadow-[4px_4px_0_0_var(--charcoal)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${r.bg} w-10 h-10 rounded-sm flex items-center justify-center text-white font-bold text-sm border-2 border-charcoal`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-charcoal">{r.name}</p>
                  <p className="text-[10px] font-bold tracking-wider text-muted-foreground">
                    {r.trade}, {r.city}
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-charcoal italic leading-relaxed">"{r.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="bg-primary py-16 md:py-20 text-center">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="font-extrabold text-3xl md:text-4xl text-white mb-7">
          Ready to stop waiting for referrals?
        </h2>
        <a
          href="mailto:hello@rwleads.example"
          className="inline-flex items-center justify-center bg-charcoal text-charcoal-foreground font-semibold px-8 py-4 rounded-sm border-2 border-charcoal hover:bg-charcoal/90 transition"
        >
          Book Your Free 15-Min Call
        </a>
        <p className="mt-4 text-xs font-semibold tracking-wide text-white/90">
          Only 3 spots available in Framingham this month
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground py-6">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <p className="text-xs text-charcoal-foreground/70">
          © 2024 RW Leads Generator. All rights reserved.
        </p>
        <a href="#" className="text-xs hover:text-primary">Privacy Policy</a>
      </div>
    </footer>
  );
}

function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl aspect-video bg-charcoal border-2 border-primary rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 w-9 h-9 bg-primary text-white rounded-full border-2 border-charcoal flex items-center justify-center"
        >
          <X size={18} />
        </button>
        <div className="w-full h-full flex items-center justify-center text-charcoal-foreground/60">
          Video coming soon
        </div>
      </div>
    </div>
  );
}

function Landing() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <main>
        <Hero onPlay={() => setVideoOpen(true)} />
        <SoundFamiliar />
        <Services />
        <Steps />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
