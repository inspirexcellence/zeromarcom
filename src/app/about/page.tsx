import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ManifestoMetrics from "@/components/sections/ManifestoMetrics";

export const metadata: Metadata = {
  title: "About Us — The Masterminds & Philosophy | ZEROMARCOM",
  description:
    "Discover ZEROMARCOM's origins, leadership by Prerona Roy & Lt Col Abhinandan Roy, and our mission to elevate ambitious brands.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-ink font-bold tracking-tight leading-[1.08]">
          Where Originality <br />
          Meets Innovation<span className="text-cobalt">.</span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-muted mt-5 max-w-2xl leading-relaxed">
          We redefine the conventional approach to marketing: zero in on your goals, elevate your brand presence, and maximize your impact.
        </p>
      </div>

      {/* Full Manifesto & Masterminds Section */}
      <ManifestoMetrics />

      {/* Next Step CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16">
        <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
              Ready to collaborate with our masterminds?
            </h3>
            <p className="font-sans text-sm text-ink-muted mt-2">
              Explore our core capabilities or schedule a 1-on-1 strategic brand session.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="px-6 py-3 rounded-full bg-canvas border border-line text-ink font-mono text-xs font-semibold hover:border-ink transition-colors"
            >
              EXPLORE SERVICES
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-mono text-xs font-semibold hover:bg-cobalt transition-colors shadow-sm"
            >
              <span>INITIATE BRIEF</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
