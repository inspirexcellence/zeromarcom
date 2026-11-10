"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { BackgroundCubesGrid } from "@/components/ui/background-cubes-grid";

// Brand paths from simple-icons (CC0), viewBox 0 0 24 24.
const ICONS = {
  whatsapp:
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
};

type Glyph = keyof typeof ICONS;
type Platform = { word: string; bg: string; fg: string; glyph: Glyph; href: string };

const platforms: Platform[] = [
  {
    word: "WhatsApp",
    bg: "#25D366",
    fg: "#ffffff",
    glyph: "whatsapp",
    href: "https://wa.me/919432497871",
  },
  {
    word: "Instagram",
    bg: "#E4405F",
    fg: "#ffffff",
    glyph: "instagram",
    href: "https://instagram.com/zeromarcom",
  },
  {
    word: "Facebook",
    bg: "#1877F2",
    fg: "#ffffff",
    glyph: "facebook",
    href: "https://facebook.com/zeromarcom",
  },
  {
    word: "LinkedIn",
    bg: "#0A66C2",
    fg: "#ffffff",
    glyph: "linkedin",
    href: "https://linkedin.com/company/zeromarcom",
  },
];

const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;
const STAGGER = 0.09;
const START = 0.15;

const TONES = {
  light: {
    heading: "text-[#111]",
    body: "text-neutral-500",
    note: "text-neutral-400",
    pill: "bg-white text-[#111] shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_0_0_1px_rgba(0,71,255,0.28),0_6px_16px_rgba(0,71,255,0.12)]",
    primary: "bg-[#111] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-[#0047FF]",
    secondary: "text-[#111] hover:bg-black/[0.04]",
  },
};

type HeroTone = keyof typeof TONES;

function Icon({ name, className }: { name: Glyph; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d={ICONS[name]} />
    </svg>
  );
}

function InlinePill({ platform, delay, tone }: { platform: Platform; delay: number; tone: HeroTone }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
      className={cn(
        "pointer-events-auto cursor-pointer mx-[0.06em] inline-flex translate-y-[-0.06em] items-center gap-[0.28em] rounded-full py-[0.08em] pr-[0.42em] pl-[0.1em] align-middle leading-none transition-shadow",
        TONES[tone].pill,
      )}
    >
      <span
        className="inline-flex size-[0.92em] items-center justify-center rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
        style={{ backgroundColor: platform.bg, color: platform.fg }}
      >
        <Icon name={platform.glyph} className="size-[0.5em]" />
      </span>
      {platform.word}
    </motion.a>
  );
}

function HeroContent({ tone }: { tone: HeroTone }) {
  const reduceMotion = useReducedMotion();
  const t = TONES[tone];
  const [whatsapp, instagram, facebook, linkedin] = platforms;

  const pill = (p: Platform, suffix = ""): ReactNode => (
    <span className="whitespace-nowrap">
      <InlinePill platform={p} tone={tone} delay={START + platforms.indexOf(p) * STAGGER} />
      {suffix}
    </span>
  );

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  });

  return (
    <div className="pointer-events-none mx-auto flex max-w-[1080px] flex-col items-center text-center antialiased">
      <h2
        className={cn(
          "max-w-[24ch] text-[clamp(30px,4.6vw,58px)] leading-[1.32] font-medium tracking-[-0.03em] text-balance",
          t.heading,
        )}
      >
        Elevate &amp; connect your brand on {pill(whatsapp, ",")} {pill(instagram, ",")}{" "}
        {pill(facebook)} and {pill(linkedin)} with ZEROMARCOM.
      </h2>

      <motion.p
        {...fadeUp(0.55)}
        className={cn("mt-8 max-w-[650px] text-[clamp(16px,1.5vw,19px)] leading-[1.65] text-pretty", t.body)}
      >
        We craft everything from scratch — from 1-on-1 personal brand coaching and viral social reels to high-performance Next.js websites and targeted ad campaigns that turn your brand into a market leader.
      </motion.p>

      <motion.div
        {...fadeUp(0.68)}
        className="pointer-events-auto mt-9 flex flex-col items-center gap-2.5 sm:flex-row"
      >
        <Link
          href="/contact"
          className={cn(
            "inline-flex h-11 items-center rounded-full px-6 text-[15px] font-medium transition-colors",
            t.primary,
          )}
        >
          Book a Strategy Session
        </Link>
        <Link
          href="/scope-lab"
          className={cn(
            "inline-flex h-11 items-center rounded-full px-6 text-[15px] font-medium transition-colors",
            t.secondary,
          )}
        >
          Estimate Your Scope
        </Link>
      </motion.div>

      <motion.p {...fadeUp(0.78)} className={cn("mt-4 text-[13px]", t.note)}>
        100% Scratch-Crafted · Led by Prerona Roy &amp; Lt Col Abhinandan Roy · Kolkata &amp; USA
      </motion.p>
    </div>
  );
}

export function BackgroundCubesGridDemo() {
  return (
    <section className="relative isolate flex min-h-[42rem] sm:min-h-[48rem] w-full items-center justify-center overflow-hidden px-5 py-24 sm:py-28 sm:px-8">
      <BackgroundCubesGrid className="-z-20" />

      {/* Smooth Top & Bottom Fade-In / Fade-Out Blending Masks (Zero Hard Separator Line) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 sm:h-48 bg-gradient-to-b from-[#FBFBFC] via-[#FBFBFC]/85 to-transparent -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-white via-white/85 to-transparent -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_50%,transparent_45%,rgba(251,251,252,0.85)_100%)] -z-10"
      />

      <div className="relative z-10 w-full">
        <HeroContent tone="light" />
      </div>
    </section>
  );
}

export default BackgroundCubesGridDemo;
