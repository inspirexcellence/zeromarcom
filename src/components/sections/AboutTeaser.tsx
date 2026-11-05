"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "20+", label: "Years Combined Leadership" },
  { value: "150+", label: "Deployments Executed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2", label: "Global Hubs (Kolkata & USA)" },
];

export default function AboutTeaser() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      <div className="rounded-[28px] sm:rounded-[32px] bg-white border border-line p-6 sm:p-10 md:p-14 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ink font-bold tracking-tight leading-tight">
              Where Originality Meets Innovation<span className="text-cobalt">.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-muted mt-4 sm:mt-5 leading-relaxed">
              Led by award-winning Business Coach <strong>Prerona Roy</strong> (20 years transforming leaders and organizations) and Creative Director <strong>Lt Col Abhinandan Roy</strong> (Military Veteran &amp; IIM Kolkata Alumnus), ZEROMARCOM synthesizes disciplined execution with cutting-edge digital craftsmanship.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-mono text-xs font-semibold hover:bg-cobalt transition-colors shadow-sm"
              >
                <span>MEET THE MASTERMINDS &amp; STORY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-6 rounded-2xl bg-canvas border border-line flex flex-col justify-between"
              >
                <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-[11px] sm:text-xs text-ink-muted leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
