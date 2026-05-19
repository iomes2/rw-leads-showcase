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
  Check,
  Globe,
  MapPin,
  Camera,
  Link2,
  Phone,
  BellRing,
  BarChart3,
  MousePointerClick,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useTranslation, type Locale } from "@/i18n/context";

export const Route = createFileRoute("/")({
  component: Landing,
});

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  return (
    <div className="relative inline-flex items-center gap-1.5 bg-surface-container border-2 border-charcoal rounded-sm px-2 py-1">
      <Globe size={14} className="text-charcoal" />
      <select
        aria-label="Language"
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="bg-transparent text-xs font-bold text-charcoal focus:outline-none cursor-pointer pr-1"
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}

function Nav() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-40 bg-surface border-b-2 border-charcoal">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold tracking-tight text-charcoal text-lg">
          RW Leads Generator
        </a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => scrollToId("cta")}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-sm border-2 border-charcoal hover:translate-y-[-1px] transition-transform"
          >
            {t("nav.bookCall")}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onPlay }: { onPlay: () => void }) {
  const { t } = useTranslation();
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-charcoal">
      <img
        src={heroBg}
        alt={t("hero.imgAlt")}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/65" />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-charcoal-foreground">
          <h1 className="font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            {t("hero.title")}
          </h1>
          <p className="mt-5 text-base md:text-lg text-charcoal-foreground/80 max-w-md leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToId("cta")}
              className="bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-sm border-2 border-primary hover:bg-primary/90 transition"
            >
              {t("hero.ctaPrimary")}
            </button>
            <button
              onClick={() => scrollToId("work")}
              className="bg-transparent text-charcoal-foreground font-semibold px-5 py-3 rounded-sm border-2 border-charcoal-foreground hover:bg-charcoal-foreground hover:text-charcoal transition"
            >
              {t("hero.ctaSecondary")}
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
  const { t } = useTranslation();
  const items = [
    { Icon: MessageSquareWarning, text: t("sound.i1") },
    { Icon: TrendingDown, text: t("sound.i2") },
    { Icon: EyeOff, text: t("sound.i3") },
    { Icon: Wrench, text: t("sound.i4") },
  ];
  return (
    <section id="work" className="bg-charcoal text-charcoal-foreground py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl mb-10">
          {t("sound.title")}
        </h2>
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
  const { t } = useTranslation();
  const items = [
    { Icon: Search, title: t("services.s1Title"), body: t("services.s1Body") },
    { Icon: LayoutTemplate, title: t("services.s2Title"), body: t("services.s2Body") },
    { Icon: Smartphone, title: t("services.s3Title"), body: t("services.s3Body") },
  ];
  return (
    <section id="services" className="bg-surface py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl text-charcoal mb-12">
          {t("services.title1")}
          <br />
          {t("services.title2")}
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

function GBPMockup({ variant }: { variant: "before" | "after" }) {
  const { t } = useTranslation();
  const isAfter = variant === "after";
  const tagLabel = isAfter ? t("compare.afterTag") : t("compare.beforeTag");
  const titleLabel = isAfter ? t("compare.afterTitle") : t("compare.beforeTitle");
  const bizName = isAfter ? t("compare.afterBiz") : t("compare.beforeBiz");
  const cat = isAfter ? t("compare.afterCat") : t("compare.beforeCat");

  return (
    <div className="relative">
      <div
        className={`absolute -top-3 left-4 z-10 px-3 py-1 rounded-sm border-2 border-charcoal text-xs font-extrabold tracking-wider ${
          isAfter ? "bg-primary text-primary-foreground" : "bg-surface-container text-charcoal"
        }`}
      >
        {tagLabel} — {titleLabel}
      </div>

      <div className="bg-white border-2 border-charcoal rounded-sm shadow-[6px_6px_0_0_var(--charcoal)] overflow-hidden">
        {/* photo strip */}
        <div className={`h-32 ${isAfter ? "bg-gradient-to-br from-primary/30 to-accent-rust/40" : "bg-zinc-200"} relative flex items-center justify-center border-b-2 border-charcoal`}>
          {isAfter ? (
            <div className="grid grid-cols-4 gap-1 w-full h-full p-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-zinc-700/80 rounded-sm" />
              ))}
            </div>
          ) : (
            <Camera size={32} className="text-zinc-400" strokeWidth={1.5} />
          )}
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h4 className="font-extrabold text-charcoal text-base">{bizName}</h4>
            <p className="text-xs text-muted-foreground">{cat}</p>
          </div>

          {/* reviews row */}
          <div className="flex items-center gap-2">
            {isAfter ? (
              <>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-bold text-charcoal">4.9 · {t("compare.reviews")}</span>
              </>
            ) : (
              <>
                <div className="flex gap-0.5 text-zinc-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{t("compare.noReviews")}</span>
              </>
            )}
          </div>

          {/* details */}
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-center gap-2">
              <Camera size={12} className={isAfter ? "text-primary" : "text-zinc-400"} />
              <span className={isAfter ? "text-charcoal font-semibold" : "text-muted-foreground"}>
                {isAfter ? t("compare.photos") : t("compare.noPhoto")}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Link2 size={12} className={isAfter ? "text-primary" : "text-zinc-400"} />
              <span className={isAfter ? "text-charcoal font-semibold" : "text-muted-foreground"}>
                {isAfter ? t("compare.website") : t("compare.noWebsite")}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={12} className={isAfter ? "text-primary" : "text-zinc-400"} />
              <span className={isAfter ? "text-charcoal font-semibold" : "text-muted-foreground"}>
                {isAfter ? t("compare.calls") : t("compare.noCalls")}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={12} className="text-zinc-400" />
              <span className="text-muted-foreground">Framingham, MA</span>
            </li>
          </ul>
        </div>
      </div>

      {isAfter && (
        <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground border-2 border-charcoal rounded-sm px-3 py-1.5 text-xs font-extrabold flex items-center gap-1.5 shadow-[3px_3px_0_0_var(--charcoal)] animate-pulse">
          <BellRing size={14} />
          {t("compare.leadBadge")}
        </div>
      )}
    </div>
  );
}

function Compare() {
  const { t } = useTranslation();
  return (
    <section id="compare" className="bg-surface-container py-16 md:py-24 border-y-2 border-charcoal/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl text-charcoal mb-3">
          {t("compare.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          {t("compare.subtitle")}
        </p>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-4xl mx-auto pt-4">
          <GBPMockup variant="before" />
          <GBPMockup variant="after" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t, locale } = useTranslation();
  const bullets = [t("about.b1"), t("about.b2"), t("about.b3")];
  return (
    <section id="about" className="bg-surface py-16 md:py-24 border-t-2 border-charcoal/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl text-charcoal mb-12">
          {t("about.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-5xl mx-auto">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[320px] aspect-[3/4] bg-surface-container border-2 border-charcoal rounded-sm shadow-[6px_6px_0_0_var(--charcoal)] flex items-center justify-center">
              <span className="text-charcoal/60 font-semibold text-sm tracking-wide text-center px-4">
                {t("about.photoPlaceholder")}
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-3xl md:text-4xl text-charcoal mb-4">
              {t("about.heading")}
            </h3>
            <p className="text-charcoal/80 leading-relaxed mb-6">{t("about.body")}</p>
            <ul className="space-y-3 mb-7">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="text-primary mt-0.5 shrink-0" size={20} strokeWidth={3} />
                  <span className="font-semibold text-charcoal">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToId("cta")}
                className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-sm border-2 border-charcoal shadow-[4px_4px_0_0_var(--charcoal)] hover:translate-y-[-1px] transition-transform"
              >
                {t("about.cta")}
              </button>
              {/* Conditional: WhatsApp CTA only for PT speakers */}
              {locale === "pt" && (
                <a
                  href="https://wa.me/15555555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-sm border-2 border-charcoal shadow-[4px_4px_0_0_var(--charcoal)] hover:translate-y-[-1px] transition-transform"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const { t } = useTranslation();
  const steps = [
    { Icon: PhoneCall, n: 1, title: t("steps.s1Title"), body: t("steps.s1Body") },
    { Icon: Rocket, n: 2, title: t("steps.s2Title"), body: t("steps.s2Body") },
    { Icon: PhoneIncoming, n: 3, title: t("steps.s3Title"), body: t("steps.s3Body") },
  ];
  return (
    <section id="pricing" className="bg-surface-container py-16 md:py-24 border-y-2 border-charcoal/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl text-charcoal mb-12">
          {t("steps.title")}
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
  const { t } = useTranslation();
  const reviews = [
    { initials: "CM", bg: "bg-primary", name: "Carlos M.", trade: t("reviews.t1"), city: "FRAMINGHAM", quote: t("reviews.r1") },
    { initials: "AR", bg: "bg-accent-rust", name: "Ana R.", trade: t("reviews.t2"), city: "MARLBOROUGH", quote: t("reviews.r2") },
    { initials: "MT", bg: "bg-accent-graphite", name: "Mike T.", trade: t("reviews.t3"), city: "NATICK", quote: t("reviews.r3") },
  ];
  return (
    <section id="reviews" className="bg-surface py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-2xl md:text-3xl text-charcoal mb-12">
          {t("reviews.title")}
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

function Results() {
  const { t } = useTranslation();
  return (
    <section id="results" className="bg-charcoal py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-center font-extrabold text-3xl md:text-4xl text-white mb-3">
          {t("results.title")}
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
          {t("results.subtitle")}
        </p>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-6 md:p-8 flex flex-col">
            <BarChart3 className="text-primary mb-5" size={32} strokeWidth={2.5} />
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              {t("results.c1Number")}
            </div>
            <div className="text-white font-semibold mb-3">{t("results.c1Label")}</div>
            <p className="text-sm text-zinc-400 leading-relaxed">{t("results.c1Body")}</p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-6 md:p-8 flex flex-col">
            <MousePointerClick className="text-primary mb-5" size={32} strokeWidth={2.5} />
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              {t("results.c2Number")}
            </div>
            <div className="text-white font-semibold mb-3">{t("results.c2Label")}</div>
            <p className="text-sm text-zinc-400 leading-relaxed">{t("results.c2Body")}</p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl p-6 md:p-8 flex flex-col">
            <div className="relative w-full aspect-video bg-[#1C1C1C] border border-[#3A3A3A] rounded-xl mb-5 overflow-hidden">
              <iframe
                src="https://lp-evolution.netlify.app"
                title={t("results.c3ImgLabel")}
                className="absolute inset-0 w-full h-full pointer-events-none"
                loading="lazy"
              />
            </div>
            <div className="text-white font-bold text-lg mb-2">{t("results.c3Title")}</div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-3 flex-1">
              {t("results.c3Body")}
            </p>
            <a
              href="https://lp-evolution.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-semibold hover:underline"
            >
              {t("results.c3Link")}
            </a>
          </div>
        </div>
        <p className="text-center text-xs italic text-zinc-500 mt-8">
          {t("results.disclaimer")}
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t, locale } = useTranslation();
  return (
    <section id="cta" className="bg-primary py-16 md:py-20 text-center">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="font-extrabold text-3xl md:text-4xl text-white mb-7">
          {t("cta.title")}
        </h2>
        <a
          href="https://calendly.com/renan/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-charcoal text-charcoal-foreground font-semibold px-8 py-4 rounded-sm border-2 border-charcoal hover:bg-charcoal/90 transition"
        >
          {t("cta.button")}
        </a>
        <p className="mt-4 text-xs font-semibold tracking-wide text-white/90">
          {t("cta.note")}
        </p>
        {locale === "pt" && (
          <div className="mt-5">
            <a
              href="https://wa.me/15555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/95 underline underline-offset-4 hover:text-white"
            >
              {t("cta.whatsapp")}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-charcoal text-charcoal-foreground py-6">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <p className="text-xs text-charcoal-foreground/70">{t("footer.rights")}</p>
        <a href="#" className="text-xs hover:text-primary">{t("footer.privacy")}</a>
      </div>
    </footer>
  );
}

function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useTranslation();
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
          {t("video.soon")}
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
        <Compare />
        <About />
        <Steps />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}
