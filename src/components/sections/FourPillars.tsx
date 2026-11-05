"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface BaseCard {
  id: string;
  baseY: number;
  baseRotate: number;
}

interface TextCard extends BaseCard {
  type: "text";
  metric: string;
  title: string;
  description: string;
  bgColor: string;
}

interface MediaCard extends BaseCard {
  type: "media";
  badge: string;
  mediaType: "video" | "hud-clock";
  videoSrc?: string;
  poster: string;
  alt: string;
}

type CardItem = TextCard | MediaCard;

// Exact cards, texts, and uneven staggered geometry from user's reference images
const CARDS: CardItem[] = [
  {
    type: "text",
    id: "card-1",
    metric: "10+",
    title: "Years of Combined Team Experience",
    description:
      "Our designers developers, and marketers bring over a decade of industry expertise to every project.",
    bgColor: "bg-[#1E60F2]", // Vibrant Royal Blue
    baseY: 14, // Lower
    baseRotate: -4,
  },
  {
    type: "media",
    id: "card-2",
    badge: "COLLABORATIVE CRAFT",
    mediaType: "video",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-colleagues-holding-a-meeting-in-an-office-42993-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Colleagues collaborating at meeting desk",
    baseY: -16, // Higher (uneven top/bottom)
    baseRotate: 1.5,
  },
  {
    type: "text",
    id: "card-3",
    metric: "100%",
    title: "On Time Project Delivery",
    description:
      "Every project ships on schedule with quality that meets our standards and exceeds your expectations.",
    bgColor: "bg-[#15803D]", // Vibrant Emerald Green
    baseY: 8, // Lower
    baseRotate: -1.2,
  },
  {
    type: "media",
    id: "card-4",
    badge: "HIGH-VELOCITY DIGITAL",
    mediaType: "hud-clock",
    poster:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    alt: "Futuristic Precision Clock HUD",
    baseY: -14, // Higher (uneven top/bottom)
    baseRotate: 3.2,
  },
  {
    type: "text",
    id: "card-5",
    metric: "98%",
    title: "Client Satisfaction",
    description:
      "Our clients trust us for consistent quality, on time delivery, and creative work that genuinely moves their business forward.",
    bgColor: "bg-[#7C3AED]", // Rich Violet Purple
    baseY: 12, // Lower
    baseRotate: -2.2,
  },
];

/**
 * Futuristic Cyan HUD Clock Interface matching Card 4 in reference images
 */
function HudClockGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#070b14]">
      {/* Background Architectural Texture with deep moody tone */}
      <Image
        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80"
        alt="Urban Architectural Tech"
        fill
        className="object-cover opacity-40 mix-blend-luminosity"
      />

      {/* Radial Cyan Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.38)_0%,transparent_70%)] pointer-events-none" />

      {/* Concentric Rotating HUD Rings */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center">
        {/* Outer dashed spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-cyan-400/60"
        />

        {/* Outer segmented tick ring */}
        <div className="absolute inset-2 rounded-full border-2 border-cyan-400/35 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[3px] border-dotted border-cyan-300/50" />
        </div>

        {/* Inner glow disc */}
        <div className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-cyan-950/70 border border-cyan-400/75 shadow-[0_0_35px_rgba(6,182,212,0.5)] backdrop-blur-sm flex items-center justify-center">
          {/* Concentric rings */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-400/50 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cyan-300/40" />
          </div>

          {/* Clock Needle / Pointer Hand pointing towards ~1:30 */}
          <motion.div
            animate={{ rotate: [48, 54, 48] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transformOrigin: "center center" }}
          >
            {/* The glowing needle */}
            <div
              className="absolute w-1.5 h-14 bg-gradient-to-t from-white via-cyan-200 to-transparent rounded-full shadow-[0_0_12px_#38bdf8]"
              style={{
                top: "16%",
                left: "calc(50% - 3px)",
                transformOrigin: "bottom center",
              }}
            />
            {/* Center pivot dot */}
            <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_#fff] z-10" />
          </motion.div>
        </div>
      </div>

      {/* Bottom overlay for badge contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 pointer-events-none" />
    </div>
  );
}

export default function FourPillars() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const pinSectionRef = useRef<HTMLElement>(null);
  const zoomStageRef = useRef<HTMLDivElement>(null);
  const portalRingRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const section = pinSectionRef.current;
      const zoomStage = zoomStageRef.current;
      const portalRing = portalRingRef.current;
      const header = headerRef.current;
      if (!section || !zoomStage) return;

      const mm = gsap.matchMedia();

      // Desktop & Tablet (screens >= 768px): Smooth SVG Circle Expansion followed by Section Entrance
      mm.add("(min-width: 768px)", () => {
        // Step 1 Initial state: SVG circle is visible and centered
        if (portalRing) {
          gsap.set(portalRing, {
            scale: 0.85,
            autoAlpha: 1,
            force3D: true,
            transformOrigin: "center center",
          });
        }

        // Step 2 Initial state: "Why Brands Work With Us" section waits hidden until circle expands
        gsap.set(zoomStage, {
          scale: 0.92,
          y: 50,
          autoAlpha: 0,
          force3D: true,
          transformOrigin: "center center",
        });

        // Header begins slightly offset
        gsap.set(header, {
          y: -25,
          autoAlpha: 0,
          force3D: true,
        });

        // Cards start collapsed in center
        cardsWrapperRef.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          const collapseX = (2 - idx) * 140;
          gsap.set(cardEl, {
            x: collapseX,
            y: 50,
            rotation: 0,
            scale: 0.6,
            autoAlpha: 0,
            force3D: true,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=220%",
            pin: true,
            pinSpacing: true,
            scrub: 0.2, // Ultra-responsive scrub synced directly to Lenis inertia (0 lag, 0 jerking)
            invalidateOnRefresh: true,
          },
        });

        // PHASE 1: SVG Circle expands smoothly with scroll (0.0 to 0.44)
        // Uses linear scrub ("none") so motion starts instantly without any "hang" or sudden spike
        if (portalRing) {
          tl.to(
            portalRing,
            {
              scale: 9.5, // Perfectly clears viewport without overloading GPU memory
              duration: 0.44,
              ease: "none",
              force3D: true,
            },
            0
          );

          // As circle expands past viewport borders, hide it cleanly from compositor
          tl.to(
            portalRing,
            {
              autoAlpha: 0,
              duration: 0.12,
              ease: "power1.in",
            },
            0.32
          );
        }

        // PHASE 2: THEN "Why Brands Work With Us" section glides smoothly in (0.38 to 0.72)
        tl.to(
          zoomStage,
          {
            scale: 1,
            y: 0,
            autoAlpha: 1,
            duration: 0.34,
            ease: "power1.out",
            force3D: true,
          },
          0.38
        );

        // Header reveals smoothly into place
        tl.to(
          header,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.24,
            ease: "power1.out",
            force3D: true,
          },
          0.44
        );

        // Cards smoothly fan out into their signature staggered positions
        cardsWrapperRef.current.forEach((cardEl, idx) => {
          if (!cardEl) return;
          const targetCard = CARDS[idx];
          tl.to(
            cardEl,
            {
              x: 0,
              y: targetCard.baseY,
              rotation: targetCard.baseRotate,
              scale: 1,
              autoAlpha: 1,
              duration: 0.32,
              ease: "power2.out",
              force3D: true,
            },
            0.46 + idx * 0.035
          );
        });

        // PHASE 3: Settling buffer (0.72 to 1.0)
        // Keeps section completely pinned and interactive before unpinning
        tl.to({}, { duration: 0.28 });

        setTimeout(() => ScrollTrigger.refresh(), 100);
      });

      // Mobile screens (< 768px): Smooth SVG circle expansion followed by cards reveal
      mm.add("(max-width: 767px)", () => {
        if (portalRing) {
          gsap.set(portalRing, {
            scale: 0.85,
            autoAlpha: 1,
            force3D: true,
            transformOrigin: "center center",
          });
        }

        gsap.set(zoomStage, {
          scale: 0.88,
          y: 40,
          autoAlpha: 0,
          force3D: true,
          transformOrigin: "center center",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=160%",
            pin: true,
            pinSpacing: true,
            scrub: 0.2,
            invalidateOnRefresh: true,
          },
        });

        if (portalRing) {
          tl.to(
            portalRing,
            {
              scale: 8,
              duration: 0.44,
              ease: "none",
              force3D: true,
            },
            0
          );
          tl.to(
            portalRing,
            {
              autoAlpha: 0,
              duration: 0.12,
            },
            0.32
          );
        }

        tl.to(
          zoomStage,
          {
            scale: 1,
            y: 0,
            autoAlpha: 1,
            duration: 0.44,
            ease: "power1.out",
            force3D: true,
          },
          0.40
        );

        tl.to({}, { duration: 0.25 });
        setTimeout(() => ScrollTrigger.refresh(), 100);
      });

      return () => mm.revert();
    },
    { scope: pinSectionRef }
  );

  return (
    <section
      ref={pinSectionRef}
      id="winning-edge"
      className="relative w-full h-screen min-h-[640px] select-none bg-white border-y border-line/70 flex flex-col justify-center items-center z-30 isolate"
    >
      <span id="pillars" className="sr-only scroll-mt-28" />

      {/* Architectural Grid Background (Matching User Reference Image) */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 16, 18, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 16, 18, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          backgroundPosition: "center center",
        }}
      />
      {/* Soft radial ambient focus gradient */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_35%,rgba(255,255,255,0.75)_100%)]" 
      />

      {/* Expanding SVG Circle Portal (Ready for your custom SVG) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20 flex items-center justify-center">
        <div
          ref={portalRingRef}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center will-change-transform transform-gpu"
          style={{ transformOrigin: "center center", backfaceVisibility: "hidden" }}
        >
          {/* High-Performance Vector SVG Circle without heavy CPU/GPU filter overhead */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full text-cobalt"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Precision Hairline */}
            <circle
              cx="200"
              cy="200"
              r="192"
              stroke="#0047FF"
              strokeWidth="2"
              strokeOpacity="0.4"
            />

            {/* Main Thick Vector Border Ring (Hollow Center) */}
            <circle
              cx="200"
              cy="200"
              r="170"
              stroke="#0047FF"
              strokeWidth="26"
              fill="none"
            />

            {/* Inner Precision Hairline */}
            <circle
              cx="200"
              cy="200"
              r="148"
              stroke="#0047FF"
              strokeWidth="1.5"
              strokeOpacity="0.35"
            />
          </svg>
        </div>
      </div>

      {/* 3D Zoom Stage: Emerges from center point along Z-Axis and expands to full screen size */}
      <div
        ref={zoomStageRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-2 sm:py-4 flex flex-col justify-center items-center will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Header matching user's reference image */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 px-4 will-change-transform"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink font-bold tracking-tight leading-[1.1]">
            Why Brands <br />
            Work With Us
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed max-w-lg mx-auto">
            We combine creative precision with commercial thinking — so your brand doesn&apos;t just look good, it works hard.
          </p>
        </div>

        {/* Overlapping Horizontal Deck with Uneven Geometry & 3D Fan-Out */}
        <div className="relative w-full flex items-center justify-center py-2 sm:py-3 overflow-visible">
          {/* Desktop & Tablet: Overlapping Cascading Deck */}
          <div className="hidden md:flex items-center justify-center">
            {CARDS.map((card, idx) => {
              const isHovered = hoveredIdx === idx;
              const isAnyHovered = hoveredIdx !== null;

              // Stacking order:
              // Base cascades from left-to-right (2, 4, 6, 8, 10).
              // When hovered, the active card pops to the very front (50).
              const baseZ = (idx + 1) * 2;
              const zIndex = isHovered ? 50 : baseZ;

              // Calculate horizontal offset (spreading effect as in Picture 2):
              // Adjusted dynamically so tablet cards stay within viewport
              let targetX = 0;
              if (isAnyHovered && !isHovered) {
                const spreadDistance = typeof window !== "undefined" && window.innerWidth < 1024 ? 22 : 38;
                targetX = idx < hoveredIdx ? -spreadDistance : spreadDistance;
              }

              // On hover: the card elevates to -28px and straightens to 0deg
              const targetHoverY = isHovered ? -26 - card.baseY : 0;
              const targetHoverRotate = isHovered ? -card.baseRotate : 0;
              const targetScale = isHovered ? 1.05 : isAnyHovered ? 0.98 : 1;
              const targetOpacity = isAnyHovered && !isHovered ? 0.92 : 1;

              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardsWrapperRef.current[idx] = el;
                  }}
                  className={`relative shrink-0 will-change-transform ${
                    idx > 0 ? "-ml-8 md:-ml-12 lg:-ml-14 xl:-ml-16" : ""
                  }`}
                  style={{ zIndex }}
                >
                  <motion.div
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    animate={{
                      x: targetX,
                      y: targetHoverY,
                      rotate: targetHoverRotate,
                      scale: targetScale,
                      opacity: targetOpacity,
                      boxShadow: isHovered
                        ? "0 30px 60px -12px rgba(0, 0, 0, 0.45), 0 14px 24px -8px rgba(0, 0, 0, 0.25)"
                        : "0 12px 28px -8px rgba(0, 0, 0, 0.18)",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1], // Silky luxury quintic cubic-bezier
                    }}
                    style={{
                      transformOrigin: "center center",
                    }}
                    className="relative w-[160px] md:w-[172px] lg:w-[220px] xl:w-[245px] h-[280px] md:h-[295px] lg:h-[345px] xl:h-[365px] rounded-[24px] overflow-hidden cursor-pointer will-change-transform transform-gpu ring-1 ring-black/5"
                  >
                    {card.type === "text" ? (
                      <div
                        className={`w-full h-full ${card.bgColor} p-4 md:p-5 lg:p-6 flex flex-col justify-between text-white relative`}
                      >
                        {/* Top Stat */}
                        <div>
                          <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-white">
                            {card.metric}
                          </div>
                        </div>

                        {/* Bottom Content */}
                        <div className="mt-auto">
                          <h3 className="font-heading text-sm md:text-base lg:text-lg font-bold text-white leading-snug">
                            {card.title}
                          </h3>
                          <div className="w-full h-[1px] bg-white/30 my-2 lg:my-2.5" />
                          <p className="font-sans text-[10px] md:text-[11px] lg:text-xs text-white/90 leading-relaxed font-normal line-clamp-3">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full relative bg-black overflow-hidden">
                        {card.mediaType === "hud-clock" ? (
                          <HudClockGraphic />
                        ) : (
                          <>
                            {/* Ambient video background fallback */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617]" />

                            {/* Continuous Looping Video */}
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              poster={card.poster}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                            >
                              <source src={card.videoSrc} type="video/mp4" />
                            </video>

                            {/* Gradient Overlay for Cinematic Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                          </>
                        )}

                        {/* Bottom floating badge tag */}
                        <div className="absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4 z-10">
                          <span className="inline-block px-2.5 py-1 lg:px-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[8px] md:text-[9px] tracking-wider uppercase font-semibold">
                            {card.badge}
                          </span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Smooth Horizontal Snap Carousel with peek */}
        <div className="md:hidden flex overflow-x-auto gap-4 px-4 pb-4 pt-2 w-full snap-x snap-mandatory no-scrollbar">
          {CARDS.map((card) => (
            <div
              key={`mobile-${card.id}`}
              className="w-[230px] sm:w-[260px] h-[310px] sm:h-[340px] rounded-[22px] overflow-hidden shrink-0 snap-center shadow-lg relative"
            >
              {card.type === "text" ? (
                <div
                  className={`w-full h-full ${card.bgColor} p-5 flex flex-col justify-between text-white`}
                >
                  <div className="font-heading text-4xl font-bold text-white">
                    {card.metric}
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-heading text-base font-bold text-white leading-snug">
                      {card.title}
                    </h3>
                    <div className="w-full h-[1px] bg-white/30 my-2" />
                    <p className="font-sans text-[11px] text-white/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative bg-black">
                  {card.mediaType === "hud-clock" ? (
                    <HudClockGraphic />
                  ) : (
                    <>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={card.poster}
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src={card.videoSrc} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                    </>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase">
                      {card.badge}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

