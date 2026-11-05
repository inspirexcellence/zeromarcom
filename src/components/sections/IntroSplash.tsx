"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { isIntroDone, markIntroDone, clearLegacyIntroStorage } from "@/lib/introState";

export default function IntroSplash() {
  const [phase, setPhase] = useState<"clarifying" | "sharp" | "dispersing" | "done">(() => {
    return isIntroDone() ? "done" : "clarifying";
  });

  useEffect(() => {
    clearLegacyIntroStorage();

    if (isIntroDone()) {
      return;
    }

    // Phase 1: Smooth, slow clarify from optical blur into razor sharpness (0 -> 1600ms)
    const sharpTimer = setTimeout(() => {
      setPhase("sharp");
    }, 1600);

    // Phase 2: Hold sharp, then begin slow, majestic dispersion (3000ms)
    const disperseTimer = setTimeout(() => {
      setPhase("dispersing");
    }, 3000);

    // Phase 3: Completely clear and notify hero to begin rectangular 3D emergence (4400ms)
    const doneTimer = setTimeout(() => {
      setPhase("done");
      markIntroDone();
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("zeromarcom:intro-completed"));
      }
    }, 4400);

    return () => {
      clearTimeout(sharpTimer);
      clearTimeout(disperseTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Lock body scroll and prevent any scrollbar from showing while splash is active
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="intro-splash"
          initial={{ opacity: 1 }}
          animate={{
            opacity: phase === "dispersing" ? 0 : 1,
            filter: phase === "dispersing" ? "blur(16px)" : "blur(0px)",
          }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center select-none pointer-events-none"
        >
          {/* Subtle noise grain for tactile luxury */}
          <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />

          {/* Dead Center Brand Reveal with Clarify & Disperse Mechanics */}
          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{
                filter: "blur(50px)",
                opacity: 0,
                scale: 0.9,
                letterSpacing: "0.25em",
              }}
              animate={
                phase === "clarifying"
                  ? {
                      filter: "blur(0px)",
                      opacity: 1,
                      scale: 1,
                      letterSpacing: "-0.04em",
                      transition: {
                        duration: 1.6,
                        ease: [0.16, 1, 0.3, 1], // Slow, graceful focus resolve
                      },
                    }
                  : phase === "sharp"
                  ? {
                      filter: "blur(0px)",
                      opacity: 1,
                      scale: 1,
                      letterSpacing: "-0.04em",
                    }
                  : {
                      // Dispersing optical effect: slow scatter, expanding blur, fading to white
                      filter: "blur(40px)",
                      opacity: 0,
                      scale: 1.25,
                      letterSpacing: "0.38em",
                      transition: {
                        duration: 1.3,
                        ease: [0.65, 0, 0.35, 1],
                      },
                    }
              }
              className="font-heading text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.88] text-[#101012] font-extrabold tracking-tight"
            >
              ZEROMARCOM<span className="text-[#0047FF]">.</span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
