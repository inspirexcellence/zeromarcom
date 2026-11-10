"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
  UserCheck,
  Briefcase,
  Sparkles,
  Video,
  Code,
  TrendingUp,
  Search,
  Layers,
  ArrowUpRight,
  Calculator,
} from "lucide-react";

interface ServiceItem {
  division: "personal" | "business" | "creative";
  slug: string;
  divisionName: string;
  category: string;
  tagline: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
  icon: typeof UserCheck;
}

const SERVICES: ServiceItem[] = [
  // 1. Personal Branding
  {
    division: "personal",
    slug: "personal-branding",
    divisionName: "DIVISION 01 // PERSONAL BRANDING",
    category: "PERSONAL BRANDING",
    tagline: "EXECUTIVE AUTHORITY & REPUTATION",
    title: "Personal Brand Coaching & 1-on-1 Strategy",
    description:
      "One-on-one coaching and personalized branding strategy sessions to define and refine your unique value proposition. Includes executive public speaking and presentation training to position you as an unignorable industry authority.",
    deliverables: [
      "1-on-1 Executive Brand Coaching",
      "Value Proposition & Positioning Blueprint",
      "Public Speaking & Keynote Coaching",
      "Executive Media Training",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    icon: UserCheck,
  },
  {
    division: "personal",
    slug: "online-reputation",
    divisionName: "DIVISION 01 // PERSONAL BRANDING",
    category: "REPUTATION MANAGEMENT",
    tagline: "DIGITAL IDENTITY & GUARD",
    title: "Online Presence & Reputation Management",
    description:
      "Comprehensive optimization across LinkedIn, Instagram, and Twitter. Proactive content architecture for executive profiles, sentiment protection, and digital reputation guard to turn your online presence into a commercial asset.",
    deliverables: [
      "LinkedIn & Multi-Platform Profile Optimization",
      "Digital Reputation Monitoring & Defense",
      "Thought Leadership Editorial Calendar",
      "Strategic Executive Networking Playbook",
    ],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    icon: Layers,
  },
  {
    division: "personal",
    slug: "portfolio-websites",
    divisionName: "DIVISION 01 // PERSONAL BRANDING",
    category: "DIGITAL SHOWCASE",
    tagline: "CUSTOM PERSONAL WEBSITES",
    title: "Bespoke Personal Portfolio Portals",
    description:
      "Custom-crafted personal portfolio websites highlighting your achievements, publications, speaking engagements, and ventures. Powered by modern Next.js architecture with insights blog integration and personal Google SEO dominance.",
    deliverables: [
      "Custom Next.js Personal Portfolio Website",
      "Executive Insights & Blog Architecture",
      "Personal Search Engine Optimization (SEO)",
      "High-Fidelity Mobile Responsive Experience",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    icon: Code,
  },
  {
    division: "personal",
    slug: "ghostwriting",
    divisionName: "DIVISION 01 // PERSONAL BRANDING",
    category: "EXECUTIVE EDITORIAL",
    tagline: "STORYTELLING & GHOSTWRITING",
    title: "Thought Leader Storytelling & Ghostwriting",
    description:
      "Compelling personal narrative crafting that connects with boardrooms, investors, and high-value audiences. Professional commercial headshot & video production paired with ghostwriting for op-eds, articles, and speeches.",
    deliverables: [
      "Narrative & Origin Story Crafting",
      "Commercial Photography & Video Production",
      "Executive Op-Ed & Article Ghostwriting",
      "Keynote Script & Speechwriting",
    ],
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles,
  },

  // 2. Business Growth Solutions
  {
    division: "business",
    slug: "business-growth",
    divisionName: "DIVISION 02 // BUSINESS GROWTH",
    category: "BRAND ARCHITECTURE",
    tagline: "VISUAL SYSTEMS & LOGOS",
    title: "Business Branding & Strategic Identity Systems",
    description:
      "Transforming ventures into distinctive, iconic brands with memorable logos, cohesive visual identity guidelines, and strategic market positioning plans that connect on a deeper psychological level.",
    deliverables: [
      "Monolithic Brand Identity & Logo Architecture",
      "Typography, Color & Asset Design Systems",
      "Comprehensive Brand Style Guidelines",
      "Competitive Market Positioning Strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    icon: Briefcase,
  },
  {
    division: "business",
    slug: "operational-efficiency",
    divisionName: "DIVISION 02 // BUSINESS GROWTH",
    category: "LEAN OPERATIONS",
    tagline: "WORKFLOW AUTOMATION & SCALING",
    title: "Operational Efficiency & Automation Consulting",
    description:
      "Retooling businesses to run leaner, faster, and smarter. Comprehensive operational workflow audits, affordable automation integrations, eliminating wasted friction, and reducing overhead while scaling throughput.",
    deliverables: [
      "End-to-End Workflow Process Audits",
      "Affordable Automation & Toolstack Integration",
      "Friction Reduction & Cost Optimization",
      "Lean Scaling Strategic Roadmaps",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    icon: TrendingUp,
  },

  // 3. Creative Services
  {
    division: "creative",
    slug: "creative-services",
    divisionName: "DIVISION 03 // CREATIVE SERVICES",
    category: "CONTENT ENGINE",
    tagline: "CINEMATIC VIDEO & PRODUCTION",
    title: "High-Impact Content Creation & Video Production",
    description:
      "Commercial promotional films, client case study reels, animated explainer videos, studio podcasts, and social media creative assets designed to capture immediate attention and drive measurable customer action.",
    deliverables: [
      "4K Commercial Promotional Videos",
      "High-Retention Reels & Social Shorts",
      "Explainer Films & Motion Graphics",
      "Studio Podcast Production & Master Audio",
    ],
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    icon: Video,
  },
  {
    division: "creative",
    slug: "web-development",
    divisionName: "DIVISION 03 // CREATIVE SERVICES",
    category: "DIGITAL ENGINEERING",
    tagline: "NEXT.JS & FULL-STACK DEVELOPMENT",
    title: "Modern UI/UX Design & Full-Stack Web Development",
    description:
      "High-performance website engineering across Next.js, React, Laravel, PHP, WordPress, and Shopify. From custom corporate flagships to high-converting e-commerce portals, backed by rock-solid AMC maintenance and SLAs.",
    deliverables: [
      "Bespoke Next.js & React Web Applications",
      "High-Converting Shopify & Laravel E-Commerce",
      "Custom UI/UX Prototypes & Figma Design",
      "Annual AMC Maintenance, Backups & SLAs",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    icon: Code,
  },
  {
    division: "creative",
    slug: "performance-marketing",
    divisionName: "DIVISION 03 // CREATIVE SERVICES",
    category: "GROWTH MARKETING",
    tagline: "PAID MEDIA & SEARCH DOMINANCE",
    title: "Performance Marketing, Sales Funnels & SEO",
    description:
      "Data-driven advertising campaigns across Google Ads and Meta platforms, precision conversion funnel optimization, and comprehensive On-Page & Off-Page SEO to secure organic search leadership and maximize ROI.",
    deliverables: [
      "Meta Ads & Google Ads Management",
      "Conversion Funnel Architecture & CRO",
      "Comprehensive On-Page & Technical SEO",
      "High-Yield Off-Page Authority Building",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    icon: Search,
  },
];

/**
 * Split-Screen Parallax Row for each individual service
 */
function ParallaxServiceRow({
  service,
  index,
}: {
  service: ServiceItem;
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
      id={service.slug}
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
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              priority={index === 0}
            />
          </motion.div>

          {/* Floating Category Badge */}
          <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] tracking-wider uppercase border border-white/20 font-semibold shadow-sm">
              {service.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-ink font-mono text-[10px] tracking-wider font-bold shadow-sm">
              0{index + 1}
            </span>
          </div>

          {/* Luxury Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15 pointer-events-none" />

          {/* Bottom Floating Info */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex justify-between items-center text-white font-mono text-xs">
            <span className="tracking-widest uppercase text-[11px] font-semibold text-white/90">
              {service.tagline}
            </span>
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-sm">
              <service.icon className="w-4 h-4 text-white" />
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
          {service.title}
        </h3>

        <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed mb-8">
          {service.description}
        </p>

        {/* Deliverables Card */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          className="mb-8 p-5 sm:p-7 rounded-2xl bg-white border border-line shadow-sm hover:border-cobalt/40 hover:shadow-md transition-all relative overflow-hidden group"
        >
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-blue-500/5 blur-2xl group-hover:bg-blue-500/12 transition-colors pointer-events-none" />
          <div className="font-mono text-[11px] text-ink-subtle uppercase tracking-wider mb-3 font-semibold relative z-10">
            CORE DELIVERABLES &amp; CAPABILITIES:
          </div>
          <div className="flex flex-wrap gap-2 relative z-10">
            {service.deliverables.map((item, idx) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="px-3 py-1.5 rounded-lg bg-canvas border border-line/80 font-mono text-xs text-ink font-medium hover:border-cobalt/50 hover:bg-blue-50/40 transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Direct Action Links */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-mono text-xs font-semibold hover:bg-cobalt transition-colors shadow-sm"
          >
            <span>INQUIRE FOR THIS SOLUTION</span>
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

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<"all" | "personal" | "business" | "creative">("all");

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.division === activeTab);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24 select-none"
    >
      {/* Anchor aliases for dropdown navigation */}
      <span id="capabilities" className="sr-only" />

      {/* Section Sub-Nav & Aceternity Animated Tab Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-4 border-b border-line gap-4">
        <div className="font-mono text-xs text-ink-muted">
          SHOWING <span className="text-ink font-semibold">{filteredServices.length}</span> STRATEGIC DISCIPLINES
        </div>

        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {[
            { id: "all" as const, label: `All Disciplines (${SERVICES.length})` },
            { id: "personal" as const, label: "Personal Branding (4)" },
            { id: "business" as const, label: "Business Growth (2)" },
            { id: "creative" as const, label: "Creative Services (3)" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-full border transition-colors cursor-pointer ${
                  isActive
                    ? "text-white border-ink"
                    : "bg-white text-ink-muted border-line hover:border-ink hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="services-active-tab-pill"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                    className="absolute inset-0 rounded-full bg-ink shadow-sm"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Split-Screen Parallax Scrolling List */}
      <div className="flex flex-col">
        {filteredServices.map((service, index) => (
          <ParallaxServiceRow
            key={service.slug}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

