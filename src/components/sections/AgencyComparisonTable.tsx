"use client";

import { motion } from "motion/react";
import { Check, X, Shield, Sparkles } from "lucide-react";

interface ComparisonRow {
  dimension: string;
  traditional: string;
  zeromarcom: string;
  highlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: "Craftsmanship & Code",
    traditional: "Off-the-shelf WordPress themes, recycled templates, and generic stock imagery.",
    zeromarcom: "100% bespoke from scratch. Custom typography, kinetic motion, and clean Next.js architecture.",
    highlight: true,
  },
  {
    dimension: "Team Allocation",
    traditional: "Pitched by agency executives, then delegated to junior interns learning on your budget.",
    zeromarcom: "Directly led and architected by seasoned masterminds (Prerona Roy & Lt Col Abhinandan Roy).",
    highlight: true,
  },
  {
    dimension: "Timeline Discipline",
    traditional: "Repeated project delays, scope creep, and unpredictable launch schedules.",
    zeromarcom: "Military-grade operational discipline with a verified 100% on-time sprint record.",
    highlight: true,
  },
  {
    dimension: "Pricing & Retainers",
    traditional: "Bloated retainers paying for agency overhead, plus surprise invoice markups.",
    zeromarcom: "Deterministic modular scopes, transparent cost envelopes, and zero retainer lock-in.",
    highlight: false,
  },
  {
    dimension: "Measurable Impact",
    traditional: "Fluffy vanity metrics (likes, impressions) with zero revenue accountability.",
    zeromarcom: "Commercial conversion velocity, high-trust brand equity, and real business growth.",
    highlight: false,
  },
];

export default function AgencyComparisonTable() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="font-heading text-3xl sm:text-5xl text-ink font-bold tracking-tight">
          The Honest Truth<span className="text-cobalt">.</span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-ink-muted mt-3">
          Why founders, established enterprises, and ambitious leaders choose ZEROMARCOM over conventional marketing firms.
        </p>
      </div>

      <div className="rounded-[32px] bg-white border border-line shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 bg-canvas/80 border-b border-line p-6 sm:p-8 font-mono text-xs uppercase tracking-wider font-semibold">
          <div className="md:col-span-4 text-ink-muted">DIMENSION</div>
          <div className="hidden md:block md:col-span-4 text-ink-subtle">
            TYPICAL LEGACY AGENCY
          </div>
          <div className="hidden md:block md:col-span-4 text-cobalt flex items-center gap-1.5 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cobalt" />
            <span>ZEROMARCOM STANDARD</span>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="divide-y divide-line/70">
          {COMPARISON_DATA.map((row, idx) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-6 items-center transition-colors hover:bg-blue-50/25 ${
                idx % 2 === 0 ? "bg-white" : "bg-[#fafafc]"
              }`}
            >
              {/* Dimension Title */}
              <div className="md:col-span-4">
                <div className="font-heading text-base sm:text-lg font-bold text-ink">
                  {row.dimension}
                </div>
              </div>

              {/* Traditional Agency Column */}
              <div className="md:col-span-4 p-4 rounded-2xl bg-canvas md:bg-transparent border border-line/60 md:border-0">
                <div className="md:hidden font-mono text-[10px] text-ink-subtle uppercase mb-1 font-semibold flex items-center gap-1">
                  <X className="w-3.5 h-3.5 text-red-500" />
                  <span>Typical Legacy Agency:</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="hidden md:flex w-5 h-5 rounded-full bg-red-100 text-red-600 items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {row.traditional}
                  </p>
                </div>
              </div>

              {/* ZEROMARCOM Standard Column */}
              <div className="md:col-span-4 p-4 rounded-2xl bg-blue-50/70 md:bg-blue-50/40 border border-blue-200/60 md:border-blue-100">
                <div className="md:hidden font-mono text-[10px] text-cobalt uppercase mb-1 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-cobalt" />
                  <span>ZEROMARCOM Standard:</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-cobalt text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ink font-medium leading-relaxed">
                    {row.zeromarcom}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Guarantee Bar */}
        <div className="p-6 sm:p-8 bg-ink text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading text-sm sm:text-base font-bold text-white">
                The Zero-Template &amp; On-Time Pledge
              </div>
              <div className="font-mono text-xs text-white/70">
                If your build is delayed by us or utilizes generic templates, we credit your invoice.
              </div>
            </div>
          </div>
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 font-mono text-xs text-white font-semibold tracking-wider uppercase">
            100% ACCOUNTABILITY
          </div>
        </div>
      </div>
    </section>
  );
}
