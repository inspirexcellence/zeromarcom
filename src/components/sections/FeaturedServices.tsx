"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface HighlightWord {
  text: string;
  highlightColor?: string; // If specified, illuminates to this color instead of #101012
}

const HIGHLIGHT_WORDS: HighlightWord[] = [
  { text: "Comprehensive" },
  { text: "digital" },
  { text: "capabilities" },
  { text: "engineered", highlightColor: "#0047FF" },
  { text: "from", highlightColor: "#0047FF" },
  { text: "scratch.", highlightColor: "#0047FF" },
  { text: "We" },
  { text: "combine" },
  { text: "strategic", highlightColor: "#059669" },
  { text: "brand", highlightColor: "#059669" },
  { text: "architecture,", highlightColor: "#059669" },
  { text: "full-stack", highlightColor: "#0047FF" },
  { text: "web", highlightColor: "#0047FF" },
  { text: "engineering,", highlightColor: "#0047FF" },
  { text: "and" },
  { text: "commercial", highlightColor: "#7C3AED" },
  { text: "media", highlightColor: "#7C3AED" },
  { text: "to" },
  { text: "multiply", highlightColor: "#0047FF" },
  { text: "business", highlightColor: "#0047FF" },
  { text: "velocity.", highlightColor: "#0047FF" },
];

interface DivisionItem {
  id: string;
  name: string;
  title: string;
  description: string;
  ctaText: string;
  image: string;
  themeColor: string;
  glowColor: string;
  bgGradient: string;
  secondaryGlow: string;
}

const DIVISIONS: DivisionItem[] = [
  {
    id: "personal-branding",
    name: "Personal Branding",
    title: "Executive Authority & Reputation",
    description:
      "We position founders, executives, and visionaries as undisputed industry authorities through strategic narrative, high-visibility digital PR, and bespoke executive web portals.",
    ctaText: "Explore Personal Branding",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    themeColor: "#0055FF",
    glowColor: "rgba(0, 85, 255, 0.35)",
    bgGradient:
      "radial-gradient(ellipse at 70% 45%, rgba(0, 85, 255, 0.22) 0%, rgba(56, 189, 248, 0.18) 38%, rgba(240, 246, 255, 0.98) 78%)",
    secondaryGlow:
      "radial-gradient(circle, rgba(0, 102, 255, 0.22) 0%, transparent 70%)",
  },
  {
    id: "business-growth",
    name: "Business Growth",
    title: "Brand Architecture & Scalable Systems",
    description:
      "We engineer distinctive corporate identities, cohesive design systems, and lean automated workflows built to eliminate friction and scale enterprise revenue.",
    ctaText: "Explore Business Growth",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    themeColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.35)",
    bgGradient:
      "radial-gradient(ellipse at 70% 45%, rgba(5, 150, 105, 0.22) 0%, rgba(52, 211, 153, 0.18) 38%, rgba(240, 253, 244, 0.98) 78%)",
    secondaryGlow:
      "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)",
  },
  {
    id: "creative-services",
    name: "Creative Services",
    title: "Next-Gen Web Platforms & Commercial Film",
    description:
      "We produce high-performance Next.js web applications, cinematic 4K commercial reels, and targeted performance funnels designed to convert high-ticket clients at scale.",
    ctaText: "Explore Creative Services",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    themeColor: "#7C3AED",
    glowColor: "rgba(124, 58, 237, 0.35)",
    bgGradient:
      "radial-gradient(ellipse at 70% 45%, rgba(124, 58, 237, 0.22) 0%, rgba(232, 121, 249, 0.18) 38%, rgba(250, 245, 255, 0.98) 78%)",
    secondaryGlow:
      "radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, transparent 70%)",
  },
];

export default function FeaturedServices() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const activeTabRef = useRef<number>(0);

  const highlightContainerRef = useRef<HTMLDivElement>(null);
  const pinnedSectionRef = useRef<HTMLElement>(null);
  const bgLayersRef = useRef<(HTMLDivElement | null)[]>([]);
  const textCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // 1. Text Progressive Scroll-Highlighting (Low muted font -> Colored / Dark crisp ink)
      const words = highlightContainerRef.current?.querySelectorAll<HTMLElement>(".service-highlight-word");
      if (words && words.length > 0) {
        const tlHighlight = gsap.timeline({
          scrollTrigger: {
            trigger: highlightContainerRef.current,
            start: "top 75%",
            end: "bottom 35%",
            scrub: 0.35,
          },
        });

        words.forEach((wordEl, idx) => {
          const targetColor = wordEl.dataset.highlightColor || "#101012";
          tlHighlight.to(
            wordEl,
            {
              color: targetColor,
              duration: 0.2,
              ease: "power1.out",
            },
            idx * 0.05
          );
        });
      }

      // 2. Single-Screen Pinned Services Showcase with Visible Light HD Atmosphere & Parallax
      const section = pinnedSectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=220%",
          pin: true,
          pinSpacing: true,
          scrub: 0.3,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const nextTab = p < 0.33 ? 0 : p < 0.66 ? 1 : 2;
            if (activeTabRef.current !== nextTab) {
              activeTabRef.current = nextTab;
              setActiveTab(nextTab);
            }
          },
        },
      });

      // Parallax continuous drift on the first image
      if (innerImagesRef.current[0]) {
        tl.to(innerImagesRef.current[0], { y: 35, ease: "none", duration: 0.34 }, 0);
      }

      // --- TRANSITION 1: Division 01 -> Division 02 (starts at 0.26, settles at 0.44) ---
      // Cross-fade Visible Light HD Background Layers (Cobalt -> Emerald)
      if (bgLayersRef.current[0]) {
        tl.to(bgLayersRef.current[0], { opacity: 0, duration: 0.18, ease: "power1.inOut" }, 0.28);
      }
      if (bgLayersRef.current[1]) {
        tl.to(bgLayersRef.current[1], { opacity: 1, duration: 0.18, ease: "power1.inOut" }, 0.28);
      }

      // Outgoing Division 01
      if (textCardsRef.current[0]) {
        tl.to(textCardsRef.current[0], { y: -30, autoAlpha: 0, duration: 0.16, ease: "power1.in" }, 0.26);
      }
      if (imageCardsRef.current[0]) {
        tl.to(imageCardsRef.current[0], { y: -45, scale: 0.96, autoAlpha: 0, duration: 0.16, ease: "power1.in" }, 0.26);
      }

      // Incoming Division 02
      if (textCardsRef.current[1]) {
        tl.to(textCardsRef.current[1], { y: 0, autoAlpha: 1, duration: 0.18, ease: "power1.out" }, 0.34);
      }
      if (imageCardsRef.current[1]) {
        tl.to(imageCardsRef.current[1], { y: 0, scale: 1, autoAlpha: 1, duration: 0.18, ease: "power1.out" }, 0.34);
      }
      if (innerImagesRef.current[1]) {
        tl.fromTo(innerImagesRef.current[1], { y: -35 }, { y: 35, ease: "none", duration: 0.34 }, 0.34);
      }

      // --- TRANSITION 2: Division 02 -> Division 03 (starts at 0.60, settles at 0.78) ---
      // Cross-fade Visible Light HD Background Layers (Emerald -> Violet)
      if (bgLayersRef.current[1]) {
        tl.to(bgLayersRef.current[1], { opacity: 0, duration: 0.18, ease: "power1.inOut" }, 0.62);
      }
      if (bgLayersRef.current[2]) {
        tl.to(bgLayersRef.current[2], { opacity: 1, duration: 0.18, ease: "power1.inOut" }, 0.62);
      }

      // Outgoing Division 02
      if (textCardsRef.current[1]) {
        tl.to(textCardsRef.current[1], { y: -30, autoAlpha: 0, duration: 0.16, ease: "power1.in" }, 0.60);
      }
      if (imageCardsRef.current[1]) {
        tl.to(imageCardsRef.current[1], { y: -45, scale: 0.96, autoAlpha: 0, duration: 0.16, ease: "power1.in" }, 0.60);
      }

      // Incoming Division 03
      if (textCardsRef.current[2]) {
        tl.to(textCardsRef.current[2], { y: 0, autoAlpha: 1, duration: 0.18, ease: "power1.out" }, 0.68);
      }
      if (imageCardsRef.current[2]) {
        tl.to(imageCardsRef.current[2], { y: 0, scale: 1, autoAlpha: 1, duration: 0.18, ease: "power1.out" }, 0.68);
      }
      if (innerImagesRef.current[2]) {
        tl.fromTo(innerImagesRef.current[2], { y: -35 }, { y: 35, ease: "none", duration: 0.34 }, 0.68);
      }

      // Settling buffer
      tl.to({}, { duration: 0.12 });

      const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 100);
      return () => clearTimeout(refreshTimer);
    },
    { scope: pinnedSectionRef }
  );

  return (
    <div className="w-full bg-[#FBFBFC]">
      {/* 
        ========================================================================
        PART 1: High-Impact Typography with Word-by-Word Scroll Highlighting
        (Centered, Clean Editorial Statement, Fits in one go on the screen)
        ========================================================================
      */}
      <section
        ref={highlightContainerRef}
        className="w-full min-h-[50vh] sm:min-h-[58vh] flex flex-col justify-center items-center py-16 sm:py-24 px-4 sm:px-8 select-none border-b border-line/60 bg-[#FBFBFC]"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Centered Full-Width Balanced Headline */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold tracking-tight leading-[1.24] sm:leading-[1.28] text-center w-full">
            {HIGHLIGHT_WORDS.map((item, i) => {
              const hasColor = Boolean(item.highlightColor);
              return (
                <span
                  key={`word-${i}`}
                  data-highlight-color={item.highlightColor || "#101012"}
                  className={`service-highlight-word inline-block mr-[0.24em] transition-colors will-change-[color] ${
                    hasColor ? "font-extrabold" : "font-bold"
                  }`}
                  style={{ color: "#D1D1D6" }}
                >
                  {item.text}
                </span>
              );
            })}
          </h2>
        </div>
      </section>

      {/* 
        ========================================================================
        PART 2: Single-Screen Pinned Services Showcase (Visible Light HD Colors)
        ========================================================================
      */}
      <div className="w-full relative">
      <section
        ref={pinnedSectionRef}
        id="services"
        className="relative w-full h-screen h-[100dvh] min-h-[620px] sm:min-h-[740px] lg:min-h-[820px] max-h-[100dvh] select-none bg-[#F8FAFC] border-b border-line/70 flex flex-col justify-center overflow-hidden z-20 isolate"
      >
        <span id="divisions" className="sr-only scroll-mt-28" />

        {/* 1. Dynamic Visible Light High-Definition Color Atmosphere Layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {DIVISIONS.map((division, i) => (
            <div
              key={`bg-layer-${division.id}`}
              ref={(el) => {
                bgLayersRef.current[i] = el;
              }}
              className="absolute inset-0 will-change-opacity transition-opacity duration-500"
              style={{
                opacity: i === 0 ? 1 : 0,
                background: division.bgGradient,
              }}
            >
              {/* Secondary Volumetric Light Flare for Rich Light HD Radiance */}
              <div
                className="absolute w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] rounded-full blur-[110px] pointer-events-none opacity-60"
                style={{
                  background: division.secondaryGlow,
                  right: "8%",
                  top: "15%",
                }}
              />
            </div>
          ))}

          {/* Crisp Blueprint Micro-Grid for Architecture Depth */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(16, 24, 40, 0.6) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(16, 24, 40, 0.6) 1px, transparent 1px)
              `,
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        {/* 2. Core Split-Screen Content & Picture Stage */}
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 my-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-center z-20">
          {/* LEFT: Editorial Content with Line Breathing Gaps */}
          <div className="lg:col-span-6 relative min-h-[250px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[460px] flex items-center">
            {DIVISIONS.map((division, i) => (
              <div
                key={`text-${division.id}`}
                ref={(el) => {
                  textCardsRef.current[i] = el;
                }}
                className="absolute inset-0 flex flex-col justify-center will-change-transform"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  transform: i === 0 ? "none" : "translateY(35px)",
                  pointerEvents: activeTab === i ? "auto" : "none",
                }}
              >
                {/* Minimal Division Indicator */}
                <div className="flex items-center gap-3 mb-3 sm:mb-5 lg:mb-6">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: division.themeColor,
                      boxShadow: `0 0 10px ${division.glowColor}`,
                    }}
                  />
                  <span
                    className="font-mono text-xs sm:text-sm uppercase tracking-[0.24em] font-bold"
                    style={{ color: division.themeColor }}
                  >
                    {division.name}
                  </span>
                </div>

                {/* Authority Headline with Generous Line Gap */}
                <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] text-[#0E0F12] font-extrabold tracking-tight leading-[1.2] sm:leading-[1.25] md:leading-[1.24] mb-3.5 sm:mb-6 lg:mb-7">
                  {division.title}
                </h3>

                {/* Clear, Minimal Value Proposition with Relaxed Line Gap */}
                <p className="font-sans text-xs sm:text-base md:text-lg text-[#475569] font-normal leading-[1.65] sm:leading-[1.8] md:leading-[1.85] mb-5 sm:mb-8 lg:mb-10 max-w-xl">
                  {division.description}
                </p>

                {/* Single Elegant Luxury CTA Button */}
                <div>
                  <Link
                    href={`/services#${division.id}`}
                    className="group inline-flex items-center gap-3 px-6 sm:px-9 py-3 sm:py-4.5 rounded-full text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer"
                    style={{
                      backgroundColor: division.themeColor,
                      boxShadow: `0 12px 32px -4px ${division.glowColor}`,
                    }}
                  >
                    <span>{division.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Tall Cinematic Visual Frame with Increased Height & Parallax */}
          <div className="lg:col-span-6 relative w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[620px] xl:h-[660px] rounded-[24px] sm:rounded-[38px] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-[0_30px_70px_-15px_rgba(15,23,42,0.18)]">
            {DIVISIONS.map((division, i) => (
              <div
                key={`img-${division.id}`}
                ref={(el) => {
                  imageCardsRef.current[i] = el;
                }}
                className="absolute inset-0 will-change-transform overflow-hidden"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  transform: i === 0 ? "none" : "translateY(50px) scale(1.05)",
                }}
              >
                {/* Parallax Image Container */}
                <div
                  ref={(el) => {
                    innerImagesRef.current[i] = el;
                  }}
                  className="absolute -inset-[15%] w-[130%] h-[130%] will-change-transform"
                >
                  <Image
                    src={division.image}
                    alt={division.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>

                {/* Clean Soft Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                {/* Subtle Ambient Corner Aura Tinted with Division Theme Color */}
                <div
                  className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full blur-[80px] pointer-events-none opacity-30"
                  style={{ backgroundColor: division.themeColor }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
