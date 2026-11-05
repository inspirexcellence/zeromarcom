import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";

export const metadata: Metadata = {
  title: "Services & Capabilities — Built From Scratch | ZEROMARCOM",
  description:
    "Explore ZEROMARCOM's 3 primary divisions: Personal Branding, Business Growth Solutions, and Creative Engineering Services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-ink font-bold tracking-tight leading-[1.08]">
          Crafted From Scratch<span className="text-cobalt">.</span> <br />
          Built To Lead.
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-muted mt-5 max-w-2xl leading-relaxed">
          Zero cookie-cutter templates. From bespoke executive coaching to high-performance Next.js portals and cinematic content production.
        </p>
      </div>

      {/* Full Capabilities Matrix */}
      <CapabilitiesSection />

      {/* Scope Lab Promotion Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16">
        <div className="p-8 sm:p-12 rounded-[28px] bg-ink text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Need a clear budget blueprint for your next initiative?
            </h3>
            <p className="font-sans text-sm text-white/80 mt-2 leading-relaxed">
              Use our interactive Scope Lab calculator to configure disciplines, timelines, and deliverables for instant transparent estimations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/scope-lab"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink font-mono text-xs font-semibold hover:bg-cobalt hover:text-white transition-colors shadow-md"
            >
              <span>LAUNCH SCOPE LAB</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              CONTACT DIRECTLY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
