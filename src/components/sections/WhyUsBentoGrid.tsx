"use client";

import { motion } from "motion/react";
import { Sparkles, ShieldCheck, Zap, Coins, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WhyUsBentoGrid() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <h2 className="font-heading text-3xl sm:text-5xl text-ink font-bold tracking-tight">
          The 4 Pillars of Our Advantage<span className="text-cobalt">.</span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-ink-muted mt-3 max-w-xl">
          We combined veteran discipline with fearless creative engineering to build an agency model that actually delivers on its promises.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Bento 1: Originality From Scratch (Large Card: 7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          whileHover={{ y: -6, scale: 1.005 }}
          className="lg:col-span-7 rounded-[28px] sm:rounded-[32px] bg-white border border-line p-6 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-300/80 transition-all relative overflow-hidden group"
        >
          {/* Subtle blueprint grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 71, 255, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 71, 255, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px",
            }}
          />
          {/* Radial ambient glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 font-mono text-[10px] tracking-wider uppercase font-semibold">
                PILLAR 01 // 100% BESPOKE
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl text-ink font-bold leading-snug mb-3">
              Crafted From Scratch. <br />
              Zero Templates, Ever.
            </h3>

            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl">
              We reject one-size-fits-all themes, cookie-cutter layouts, and generic design systems. Every identity, web architecture, and commercial campaign is authored specifically for your brand’s commercial positioning, ensuring you look like market leaders, not commodities.
            </p>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-line/60 flex flex-wrap gap-2">
            {[
              "Custom Typography Systems",
              "Bespoke Motion Engineering",
              "Proprietary Color Architecture",
              "Hand-Coded Next.js Clean Stack",
            ].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 rounded-lg bg-canvas border border-line text-ink font-mono text-[11px] font-medium flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                <span>{pill}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bento 2: Military Veteran Precision (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.14 }}
          whileHover={{ y: -6, scale: 1.005 }}
          className="lg:col-span-5 rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#101012] via-[#161619] to-[#0c0c0e] text-white p-6 sm:p-10 flex flex-col justify-between shadow-xl hover:shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle tactical ambient sheen */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14)_0%,transparent_65%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-400 border border-emerald-400/30 flex items-center justify-center backdrop-blur-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] tracking-wider uppercase font-semibold">
                PILLAR 02 // VETERAN DISCIPLINE
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl text-white font-bold leading-snug mb-3">
              Military-Grade Reliability &amp; Precision.
            </h3>

            <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed">
              Steered by creative director <strong>Lt Col Abhinandan Roy</strong> (Military Veteran &amp; IIM Kolkata alumnus). Every project deadline is treated with absolute operational integrity. Zero excuses, deterministic delivery.
            </p>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
            <div>
              <div className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
                100%
              </div>
              <div className="font-mono text-[11px] text-emerald-400 font-semibold tracking-wider uppercase mt-1">
                ON-TIME SPRINT RECORD
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 font-mono text-[11px] text-white/80">
              IIM Kolkata Alumnus
            </div>
          </div>
        </motion.div>

        {/* Bento 3: Innovative Growth Strategy (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22 }}
          whileHover={{ y: -6, scale: 1.005 }}
          className="lg:col-span-5 rounded-[28px] sm:rounded-[32px] bg-white border border-line p-6 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-purple-300/80 transition-all relative overflow-hidden group"
        >
          {/* Subtle amber / cobalt glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-200/60 flex items-center justify-center shadow-xs">
                <Zap className="w-6 h-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 font-mono text-[10px] tracking-wider uppercase font-semibold">
                PILLAR 03 // GROWTH LOGIC
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl text-ink font-bold leading-snug mb-3">
              Outside-The-Box Strategy. <br />
              Commercial Impact.
            </h3>

            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
              Led by award-winning Business Coach <strong>Prerona Roy</strong> (20 years transforming leaders and organizations). We don&apos;t just make things look good — we build conversion machines that move your business forward.
            </p>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-line/60 flex items-center justify-between">
            <div>
              <div className="font-heading text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-none">
                20+
              </div>
              <div className="font-mono text-[11px] text-purple-600 font-semibold tracking-wider uppercase mt-1">
                YEARS EXECUTIVE COACHING
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-canvas border border-line font-mono text-[11px] text-ink-muted">
              Published Strategist
            </div>
          </div>
        </motion.div>

        {/* Bento 4: Affordable Excellence & Transparent Value (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          whileHover={{ y: -6, scale: 1.005 }}
          className="lg:col-span-7 rounded-[28px] sm:rounded-[32px] bg-white border border-line p-6 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-300/80 transition-all relative overflow-hidden group"
        >
          {/* Subtle amber radial sheen */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center shadow-xs">
                <Coins className="w-6 h-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 font-mono text-[10px] tracking-wider uppercase font-semibold">
                PILLAR 04 // LEAN VALUE
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl text-ink font-bold leading-snug mb-3">
              Affordable Tier-One Excellence. <br />
              Zero Retainer Traps.
            </h3>

            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl">
              Traditional agencies force you to pay for their massive office rent, multi-tiered middle managers, and junior interns learning on your budget. We operate lean with senior masterminds, providing world-class agency caliber at honest, predictable rates.
            </p>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-line/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {[
                "Fixed Cost Envelopes",
                "Direct Partner Access",
                "Zero Retainer Lock-in",
                "Instant Scope Calculator",
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-lg bg-canvas border border-line text-ink font-mono text-[11px] font-medium flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            <Link
              href="/scope-lab"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-white font-mono text-xs font-semibold hover:bg-cobalt transition-colors"
            >
              <span>EXPLORE SCOPE LAB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
