"use client";

const MAGENTA_ITEMS = [
  "ZEROMARCOM",
  "GO INFINITE",
  "UNIGNORABLE LEADERSHIP",
  "HIGH-VELOCITY CREATIVE",
  "ZERO IN ON YOUR GOALS",
  "MAXIMIZE BRAND IMPACT",
  "WHERE ORIGINALITY MEETS INNOVATION",
];

const LIME_ITEMS = [
  "EFFECTIVE ELEMENT — SIMPLE SOLUTIONS",
  "STRATEGIC BRAND ARCHITECTURE",
  "FULL-STACK WEB DESIGN & ENGINEERING",
  "HIGH-CONVERSION SALES FUNNELS",
  "COMMERCIAL PHOTOGRAPHY & FILM",
  "DATA-DRIVEN PERFORMANCE MARKETING",
  "EXECUTIVE PERSONAL BRANDING",
];

// Double packed items per track so there is mathematically zero end-gap on any viewport
const ALL_MAGENTA = [...MAGENTA_ITEMS, ...MAGENTA_ITEMS];
const ALL_LIME = [...LIME_ITEMS, ...LIME_ITEMS];

export default function ClientMarquee() {
  return (
    <section className="relative w-full h-[125px] sm:h-[155px] md:h-[180px] bg-white overflow-hidden select-none border-y border-[#E6E6ED] flex items-center">
      {/* Subtle architectural micro-grid on clean white canvas */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 16, 18, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 16, 18, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* 
        Exact Strip Setting Matching User Image (media_1793700846992.png):
        - Joined seamlessly together on the left edge (zero gap at left)
        - Magenta strip (top) angles gently UPWARDS towards the right
        - Neon Lime strip (bottom) angles gently DOWNWARDS towards the right
        - White space opens up between them as they flow to the right
      */}
      <div className="relative w-full h-full pointer-events-none">
        {/* Top Strip: Magenta (#D81E5B) - Bottom edge anchored at 50% at screen left, tilts UPWARDS to right */}
        <div
          className="absolute w-[140vw] -left-[10vw] z-10"
          style={{
            bottom: "calc(50% - 1px)",
            transformOrigin: "7.14% 100%",
            transform: "rotate(-2.2deg)",
            willChange: "transform",
          }}
        >
          <div className="bg-[#D81E5B] py-2 sm:py-2.5 md:py-3 flex overflow-hidden shadow-[0_4px_16px_rgba(216,30,91,0.22)]">
            <div className="animate-marquee-left flex shrink-0 items-center whitespace-nowrap">
              {/* Set 1 */}
              <div className="flex shrink-0 items-center gap-6 sm:gap-9 md:gap-11 px-3">
                {ALL_MAGENTA.map((item, i) => (
                  <div key={`mag-1-${i}`} className="flex items-center gap-6 sm:gap-9 md:gap-11">
                    <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base text-white tracking-wider uppercase">
                      {item}
                    </span>
                    <span className="text-white/60 text-[10px] sm:text-xs font-mono">✦</span>
                  </div>
                ))}
              </div>
              {/* Set 2 (Identical for seamless infinite loop) */}
              <div className="flex shrink-0 items-center gap-6 sm:gap-9 md:gap-11 px-3" aria-hidden="true">
                {ALL_MAGENTA.map((item, i) => (
                  <div key={`mag-2-${i}`} className="flex items-center gap-6 sm:gap-9 md:gap-11">
                    <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base text-white tracking-wider uppercase">
                      {item}
                    </span>
                    <span className="text-white/60 text-[10px] sm:text-xs font-mono">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Neon Lime (#A8F600) - Top edge anchored at 50% at screen left, tilts DOWNWARDS to right */}
        <div
          className="absolute w-[140vw] -left-[10vw] z-20"
          style={{
            top: "50%",
            transformOrigin: "7.14% 0%",
            transform: "rotate(2.2deg)",
            willChange: "transform",
          }}
        >
          <div className="bg-[#A8F600] py-2 sm:py-2.5 md:py-3 flex overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
            <div className="animate-marquee-right flex shrink-0 items-center whitespace-nowrap">
              {/* Set 1 */}
              <div className="flex shrink-0 items-center gap-6 sm:gap-9 md:gap-11 px-3">
                {ALL_LIME.map((item, i) => (
                  <div key={`lime-1-${i}`} className="flex items-center gap-6 sm:gap-9 md:gap-11">
                    <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base text-[#08080A] tracking-wider uppercase">
                      {item}
                    </span>
                    <span className="text-[#08080A]/60 text-[10px] sm:text-xs font-mono">✦</span>
                  </div>
                ))}
              </div>
              {/* Set 2 (Identical for seamless infinite loop) */}
              <div className="flex shrink-0 items-center gap-6 sm:gap-9 md:gap-11 px-3" aria-hidden="true">
                {ALL_LIME.map((item, i) => (
                  <div key={`lime-2-${i}`} className="flex items-center gap-6 sm:gap-9 md:gap-11">
                    <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base text-[#08080A] tracking-wider uppercase">
                      {item}
                    </span>
                    <span className="text-[#08080A]/60 text-[10px] sm:text-xs font-mono">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
