import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WorksArchive from "@/components/sections/WorksArchive";

export const metadata: Metadata = {
  title: "Selected Works Portfolio — 150+ Deployed Projects | ZEROMARCOM",
  description:
    "Browse ZEROMARCOM's curated archive of web development, brand identity, exhibition design, commercial shoots, and digital marketing.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-ink font-bold tracking-tight leading-[1.08]">
          Proven Execution<span className="text-cobalt">.</span> <br />
          Unignorable Impact.
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-muted mt-5 max-w-2xl leading-relaxed">
          From enterprise digital portals to bespoke brand identities and multi-channel campaigns. Click any project card to inspect the complete deliverable blueprint.
        </p>
      </div>

      {/* Full Works Archive with Filter Matrix & Drawer */}
      <WorksArchive />

      {/* Next Step CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16">
        <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
              Envisioning your brand in our next showcase?
            </h3>
            <p className="font-sans text-sm text-ink-muted mt-2">
              Let&apos;s build an unforgettable web presence, brand system, or commercial campaign together.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/scope-lab"
              className="px-6 py-3 rounded-full bg-canvas border border-line text-ink font-mono text-xs font-semibold hover:border-ink transition-colors"
            >
              ESTIMATE BUDGET
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-mono text-xs font-semibold hover:bg-cobalt transition-colors shadow-sm"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
