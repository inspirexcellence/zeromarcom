"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Palette,
  CheckCircle2,
  Layers,
  Zap,
} from "lucide-react";

export default function HeroPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // GSAP Timeline animation on mount
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.1,
      })
        .from(
          descriptionRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          statsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-black dark:to-neutral-950"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-violet-500/5 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Animated Badge with Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>New Website Foundation Ready</span>
          </motion.div>

          {/* Headline targeting GSAP reveal */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1] mb-6"
          >
            We Engineer Digital{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Growth &amp; Brands
            </span>
          </h1>

          {/* Subtext targeting GSAP */}
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed mb-10"
          >
            ZEROMARCOM is a premier web development and digital marketing agency.
            Combining high-performance technology, refined aesthetics, and data-backed
            growth strategies.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-base shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#tech-stack"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-900 dark:text-white font-medium text-base transition-colors"
              >
                <span>View Tech Stack</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Tech Foundation Verification Status Card */}
        <div
          ref={statsRef}
          className="mt-16 sm:mt-24 max-w-5xl mx-auto rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xl shadow-black/5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                  Modern Architecture Setup Active
                </h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                Zero Marcom Next.js workspace initialized with modern animations &amp; styling.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900 w-fit">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ready for Stepwise Development</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="font-semibold text-sm">Next.js 16</span>
              </div>
              <p className="text-xs text-neutral-500">App Router, SSR, Turbopack, Image Optimizer</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                <Palette className="w-4 h-4" />
                <span className="font-semibold text-sm">Tailwind CSS 4</span>
              </div>
              <p className="text-xs text-neutral-500">Modern utility-first responsive styling</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                <Layers className="w-4 h-4" />
                <span className="font-semibold text-sm">GSAP &amp; Lenis</span>
              </div>
              <p className="text-xs text-neutral-500">Timeline orchestrations &amp; butter-smooth scroll</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/60 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 mb-1">
                <Code2 className="w-4 h-4" />
                <span className="font-semibold text-sm">Motion</span>
              </div>
              <p className="text-xs text-neutral-500">Declarative React 19 motion physics &amp; gestures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
