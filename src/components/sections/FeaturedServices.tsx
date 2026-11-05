"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Calculator,
  UserCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface DivisionItem {
  id: string;
  divisionNum: string;
  divisionName: string;
  category: string;
  tagline: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
  icon: typeof UserCheck;
}

const DIVISIONS: DivisionItem[] = [
  {
    id: "personal-branding",
    divisionNum: "01",
    divisionName: "DIVISION 01 // PERSONAL BRANDING",
    category: "EXECUTIVE SUITE",
    tagline: "EXECUTIVE REPUTATION & INFLUENCE",
    title: "Executive Authority, Coaching & Reputation Management",
    description:
      "1-on-1 brand coaching, executive reputation defense across LinkedIn and digital media, bespoke personal portfolio portals, and thought leadership ghostwriting designed to elevate founders, executives, and visionaries into unignorable market authorities.",
    deliverables: [
      "1-on-1 Executive Coaching",
      "Reputation Defense & PR",
      "Personal Next.js Portals",
      "Thought Leader Ghostwriting",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    icon: UserCheck,
  },
  {
    id: "business-growth",
    divisionNum: "02",
    divisionName: "DIVISION 02 // BUSINESS GROWTH",
    category: "ENTERPRISE",
    tagline: "SYSTEMS & SCALABLE REVENUE",
    title: "Strategic Brand Identity & Lean Operational Architecture",
    description:
      "Retooling businesses to run leaner, faster, and smarter. Transforming ventures into distinctive, iconic brands with memorable logos, cohesive design systems, and automated operational pipelines that eliminate friction and multiply bottom-line throughput.",
    deliverables: [
      "Monolithic Brand Identity & Logos",
      "Design Systems & Guidelines",
      "Lean Workflow Automation",
      "Competitive Market Positioning",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    icon: TrendingUp,
  },
  {
    id: "creative-services",
    divisionNum: "03",
    divisionName: "DIVISION 03 // CREATIVE SERVICES",
    category: "HIGH-VELOCITY",
    tagline: "DIGITAL ENGINEERING & MEDIA",
    title: "Modern Web Development, Cinematic Media & SEO Dominance",
    description:
      "High-performance Next.js web platforms, ultra-fast e-commerce architectures, 4K commercial video reels, and data-driven performance marketing funnels engineered to convert visitors into loyal high-ticket clients.",
    deliverables: [
      "Bespoke Next.js & React Apps",
      "4K Commercial Videos & Reels",
      "Meta & Google Ads Funnels",
      "On-Page & Off-Page SEO",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles,
  },
];

function ParallaxDivisionRow({
  division,
  index,
}: {
  division: DivisionItem;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Multi-plane Parallax transforms:
  // 1. Inner image glides inside its frame with generous headroom for deep parallax
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.12, 1.04]);

  // 2. Card itself floats smoothly relative to scroll
  const yCard = useTransform(scrollYProgress, [0, 1], [35, -35]);

  // 3. Text details glide with counter-momentum for optical depth
  const yText = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.85, 1, 1, 0.85]);

  return (
    <div
      ref={containerRef}
      id={division.id}
      className={`py-14 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28 ${
        index > 0 ? "border-t border-line/60" : ""
      }`}
    >
      {/* 1. Visual Picture Side (Alternates Left / Right on desktop) */}
      <motion.div
        style={{ y: yCard }}
        className={`lg:col-span-6 will-change-transform transform-gpu ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[620px] xl:h-[700px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-canvas border border-line shadow-2xl group select-none">
          {/* Parallax Image Container */}
          <motion.div
            style={{ y: yImage, scale: scaleImage }}
            className="absolute inset-[-20%] w-[140%] h-[140%] will-change-transform transform-gpu"
          >
            <Image
              src={division.image}
              alt={division.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority={index === 0}
            />
          </motion.div>

          {/* Floating Category Badge */}
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] tracking-wider uppercase border border-white/20 font-semibold shadow-sm">
              {division.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-ink font-mono text-[10px] tracking-wider font-bold shadow-sm">
              {division.divisionNum}
            </span>
          </div>

          {/* Luxury Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15 pointer-events-none" />

          {/* Bottom Floating Info */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-center text-white font-mono text-xs">
            <span className="tracking-widest uppercase text-[11px] font-semibold text-white/90">
              {division.tagline}
            </span>
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-sm">
              <division.icon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Text Details Side (Alternates Opposite Position) */}
      <motion.div
        style={{ y: yText, opacity }}
        className={`lg:col-span-6 flex flex-col justify-center will-change-transform transform-gpu ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink font-bold tracking-tight leading-[1.12] mb-5">
          {division.title}
        </h3>

        <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed mb-8">
          {division.description}
        </p>

        {/* Deliverables Card */}
        <div className="mb-8 p-6 sm:p-7 rounded-2xl bg-white border border-line shadow-sm">
          <div className="font-mono text-[11px] text-ink-subtle uppercase tracking-wider mb-3 font-semibold">
            CORE CAPABILITIES &amp; DELIVERABLES:
          </div>
          <div className="flex flex-wrap gap-2">
            {division.deliverables.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg bg-canvas border border-line/80 font-mono text-xs text-ink font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Action Links */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={`/services#${division.id}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-mono text-xs font-semibold hover:bg-cobalt transition-colors shadow-sm"
          >
            <span>EXPLORE THIS DIVISION</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/scope-lab"
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-canvas border border-line text-ink font-mono text-xs font-semibold hover:border-ink transition-colors"
          >
            <Calculator className="w-3.5 h-3.5 text-cobalt" />
            <span>ESTIMATE SCOPE</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturedServices() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-8 border-b border-line gap-6">
        <div>
          <h2 className="font-heading text-3xl sm:text-5xl text-ink font-bold tracking-tight">
            Comprehensive Digital Solutions<span className="text-cobalt">.</span>
          </h2>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-ink hover:text-cobalt transition-colors group"
        >
          <span>VIEW ALL 9 DETAILED CAPABILITIES</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Split-Screen Parallax Rows */}
      <div className="flex flex-col">
        {DIVISIONS.map((division, index) => (
          <ParallaxDivisionRow
            key={division.id}
            division={division}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
