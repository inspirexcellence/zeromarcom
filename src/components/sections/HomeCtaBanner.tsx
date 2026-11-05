"use client";

import Link from "next/link";
import { ArrowUpRight, Calculator, Mail } from "lucide-react";

export default function HomeCtaBanner() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-ink via-[#18181b] to-black text-white p-7 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
        {/* Subtle radial ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,96,242,0.18)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Ready to zero in on your goals <br className="hidden sm:inline" />
            and build something unignorable?
          </h2>

          <p className="font-sans text-xs sm:text-base text-white/80 mt-4 sm:mt-6 leading-relaxed max-w-xl mx-auto">
            Whether you need comprehensive brand transformation, bespoke web engineering, or executive brand coaching — our team is ready to deliver.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-ink font-mono text-xs font-semibold tracking-wider hover:bg-cobalt hover:text-white transition-colors shadow-lg"
            >
              <Mail className="w-4 h-4" />
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/scope-lab"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold tracking-wider hover:bg-white/20 transition-colors"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>ESTIMATE YOUR SCOPE</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
