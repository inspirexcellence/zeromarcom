import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calculator, CheckCircle2 } from "lucide-react";
import WhyUsBentoGrid from "@/components/sections/WhyUsBentoGrid";
import AgencyComparisonTable from "@/components/sections/AgencyComparisonTable";
import ProofAnchorsShowcase from "@/components/sections/ProofAnchorsShowcase";
import ClientWorkflowSteps from "@/components/sections/ClientWorkflowSteps";

export const metadata: Metadata = {
  title: "Why Brands Work With Us — Our Winning Edge | ZEROMARCOM",
  description:
    "Discover why industry pioneers and ambitious brands choose ZEROMARCOM: 100% bespoke craftsmanship, military-veteran reliability, and deterministic business ROI.",
};

const TRUST_PILLS = [
  "0% TEMPLATES",
  "100% SCRATCH-CRAFTED",
  "100% ON-TIME SPRINT RECORD",
  "20+ YRS MASTERMIND LEADERSHIP",
];

export default function WhyUsPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        {/* Trust Badges Strip */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TRUST_PILLS.map((pill) => (
            <span
              key={pill}
              className="px-3.5 py-1.5 rounded-full bg-canvas border border-line text-ink font-mono text-[10px] sm:text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-xs"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cobalt shrink-0" />
              <span>{pill}</span>
            </span>
          ))}
        </div>

        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-ink font-bold tracking-tight leading-[1.08]">
          Our Winning Edge<span className="text-cobalt">.</span> <br />
          Authentic &amp; Unstoppable.
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-muted mt-5 max-w-2xl leading-relaxed">
          Where military veteran operational discipline meets fearless creative engineering. We author custom brands, web systems, and commercial campaigns that turn ambitious businesses into market leaders.
        </p>
      </div>

      {/* 1. Core 4 Value Pillars Bento Grid */}
      <WhyUsBentoGrid />

      {/* 2. The Honest Truth: ZEROMARCOM vs Typical Legacy Agencies */}
      <AgencyComparisonTable />

      {/* 3. Verified Performance Proof & Metrics */}
      <ProofAnchorsShowcase />

      {/* 4. The 4-Step Disciplined Delivery Methodology */}
      <ClientWorkflowSteps />

      {/* 5. Next Step Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 sm:mt-16">
        <div className="p-8 sm:p-14 rounded-[32px] bg-gradient-to-br from-ink via-[#161619] to-black text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle radial ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,71,255,0.18)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-semibold">
              TRANSMISSION READY
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white mt-3 leading-tight">
              Ready to experience our winning edge on your brand?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/80 mt-3 leading-relaxed">
              Explore your investment tier with our interactive Scope Lab or initiate a direct inquiry brief with our executive desk.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href="/scope-lab"
              className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>ESTIMATE SCOPE</span>
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink font-mono text-xs font-semibold hover:bg-cobalt hover:text-white transition-colors shadow-lg"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
