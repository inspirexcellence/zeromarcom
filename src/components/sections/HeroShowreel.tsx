"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Transition } from "motion/react";
import { ChevronDown } from "lucide-react";
import { isIntroDone, markIntroDone, clearLegacyIntroStorage } from "@/lib/introState";

type ShowreelStage = "dormant" | "dot" | "card" | "expanding" | "fullscreen";

export default function HeroShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stage, setStage] = useState<ShowreelStage>(() => {
    return isIntroDone() ? "fullscreen" : "dormant";
  });
  const [isSkipped] = useState(() => isIntroDone());
  const [scrollPromptVisible, setScrollPromptVisible] = useState(() => isIntroDone());
  const [viewport, setViewport] = useState({ width: 1920, height: 1080 });
  const sequenceStartedRef = useRef(false);

  // Track window dimensions
  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  // Guarantee hero.mp4 starts playing immediately from the moment component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay handled
      });
    }
  }, []);

  // Multi-step emergence orchestration:
  // 1. dormant: completely invisible while IntroSplash is active
  // 2. dot: appears as a tiny subtle dot at dead center
  // 3. card: smoothly blossoms into a floating 3D rectangular shape (video playing continuously)
  // 4. expanding: smoothly and subtly unfolds diagonally across 3D space to fill the viewport
  // 5. fullscreen: locks into full screen, dispatches "zeromarcom:video-fullscreen" -> Navbar fades in
  useEffect(() => {
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;
    let t4: NodeJS.Timeout;
    let t5: NodeJS.Timeout;

    clearLegacyIntroStorage();

    if (isIntroDone()) {
      sequenceStartedRef.current = true;
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("zeromarcom:video-fullscreen")
        );
      }
      return;
    }

    const runSequence = () => {
      if (sequenceStartedRef.current) return;
      sequenceStartedRef.current = true;

      // Step 1: Reveal tiny dot at center
      setStage("dot");

      // Step 2: Dot smoothly blooms into the 3D rectangular shape (after 350ms)
      t2 = setTimeout(() => {
        setStage("card");

        // Step 3: Hold 3D floating rectangle for viewer contemplation (600ms hold)
        t3 = setTimeout(() => {
          setStage("expanding");

          // Step 4: After diagonal expansion (2.8s), lock into full screen
          t4 = setTimeout(() => {
            setStage("fullscreen");
            markIntroDone();
            // Dispatch event to reveal the Navbar with a smooth, jerk-free fade-in
            if (typeof window !== "undefined") {
              setTimeout(() => {
                window.dispatchEvent(
                  new CustomEvent("zeromarcom:video-fullscreen")
                );
              }, 80);
            }
            t5 = setTimeout(() => setScrollPromptVisible(true), 400);
          }, 2850);
        }, 600);
      }, 350);
    };

    const handleIntroCompleted = () => {
      runSequence();
    };

    // Fallback timer if intro was skipped or reloaded directly
    const fallbackTimer = setTimeout(() => {
      runSequence();
    }, 4800);

    window.addEventListener("zeromarcom:intro-completed", handleIntroCompleted);
    return () => {
      window.removeEventListener("zeromarcom:intro-completed", handleIntroCompleted);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Hide scroll prompt on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrollPromptVisible(false);
      } else if (stage === "fullscreen") {
        setScrollPromptVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stage]);

  const cardWidth = Math.min(480, Math.round(viewport.width * 0.86));
  const cardHeight = Math.round(cardWidth * (9 / 16));

  // Target animation attributes per stage
  const getAnimateTarget = () => {
    const fullW = Math.max(
      viewport.width,
      typeof window !== "undefined" ? window.innerWidth : 1920
    );
    const fullH = Math.max(
      viewport.height,
      typeof window !== "undefined"
        ? Math.max(window.innerHeight, document.documentElement?.clientHeight || 0)
        : 1080
    );

    switch (stage) {
      case "dormant":
        return {
          width: 8,
          height: 5,
          scale: 0,
          opacity: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          borderRadius: 4,
          boxShadow: "0 0 0 0 transparent",
        };
      case "dot":
        return {
          width: 10,
          height: 6,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          borderRadius: 3,
          boxShadow: "0 0 20px 4px rgba(0, 71, 255, 0.5)",
        };
      case "card":
        return {
          width: cardWidth,
          height: cardHeight,
          scale: 1,
          opacity: 1,
          rotateX: 14,
          rotateY: -18,
          rotateZ: 4,
          borderRadius: 18,
          boxShadow:
            "-28px 42px 90px -15px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 0, 0, 0.08)",
        };
      case "expanding":
      case "fullscreen":
        return {
          width: fullW,
          height: fullH,
          scale: 1,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          borderRadius: 0,
          boxShadow: "0 0 0 0 transparent",
        };
    }
  };

  const getTransition = (): Transition => {
    if (isSkipped) {
      return { duration: 0 };
    }
    switch (stage) {
      case "dot":
        return { duration: 0.35, ease: "easeOut" };
      case "card":
        return { duration: 1.2, ease: [0.16, 1, 0.3, 1] };
      case "expanding":
        return { duration: 2.8, ease: [0.16, 1, 0.3, 1] }; // Slow, diagonal, majestic
      case "fullscreen":
        return { duration: 0 };
      default:
        return { duration: 0.3 };
    }
  };

  return (
    <section
      id="hero-stage"
      className="relative w-full h-screen h-[100dvh] min-h-[100dvh] max-h-[100dvh] overflow-hidden select-none bg-black flex items-center justify-center"
      style={{ perspective: "1500px" }}
    >
      {/* Ambient background glow on clean canvas */}
      <div className="absolute inset-0 bg-black" />

      {/* 
        3D Floating Rectangular Video Container
        - Invisible while IntroSplash is active.
        - After intro dispersion, starts from a tiny dot at center.
        - Blossoms smoothly into a 3D tilted rectangular shape (video continuously playing).
        - Expands diagonally and subtly across 3D space to full screen (100vw x 100vh).
        - On reaching full screen, locks seamlessly with zero jerk or scale snapping.
      */}
      <motion.div
        initial={{
          width: 8,
          height: 5,
          scale: 0,
          opacity: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          borderRadius: 4,
          boxShadow: "0 0 0 0 transparent",
        }}
        animate={getAnimateTarget()}
        transition={getTransition()}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        className={`overflow-hidden flex items-center justify-center z-20 bg-black flex-shrink-0 relative ${
          stage === "dormant" ? "pointer-events-none opacity-0" : ""
        }`}
      >
        {/* 
          Continuous Looping hero2.mp4
          Plays inside the rectangle from inception and continues seamlessly 
          without interruption throughout the diagonal expansion to full screen.
        */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source
            src="/video/hero2.mp4"
            type="video/mp4"
          />
        </video>

        {/* Luxury Vignette Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        {/* 3D Glass Edge Refraction Accent on Rectangle */}
        {stage === "card" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-30 pointer-events-none rounded-[20px] border border-white/25 shadow-inner"
          />
        )}
      </motion.div>

      {/* Floating Minimal Scroll Pill at Bottom (revealed once video covers full screen) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: scrollPromptVisible ? 1 : 0,
          y: scrollPromptVisible ? 0 : 20,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 ${
          scrollPromptVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <a
          href="#pillars"
          aria-label="Scroll to Pillars"
          className="group flex flex-col items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] tracking-widest transition-all cursor-pointer shadow-lg"
        >
          <span className="group-hover:tracking-wider transition-all">
            EXPLORE ARCHIVE
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
