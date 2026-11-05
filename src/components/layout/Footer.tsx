"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-porcelain border-t border-line mt-auto select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        {/* Top Footer Navigation & Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center text-white text-xs font-heading font-bold group-hover:bg-cobalt transition-colors">
                Z
              </div>
              <span className="font-heading text-xl tracking-tight text-ink font-bold">
                ZEROMARCOM<span className="text-cobalt">.</span>
              </span>
            </Link>
            <p className="font-sans text-xs text-ink-muted leading-relaxed">
              Strategic creative engineering, high-impact branding, and digital transformation for ambitious brands.
            </p>
            <div className="font-mono text-[11px] text-ink-subtle">
              KOLKATA • MUMBAI • NEW YORK
            </div>
          </div>

          {/* Quick Pages */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-ink font-semibold tracking-wider uppercase mb-2">
              Navigation
            </div>
            <ul className="space-y-2 text-ink-muted">
              <li>
                <Link href="/" className="hover:text-cobalt transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cobalt transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cobalt transition-colors">
                  Services &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cobalt transition-colors">
                  Works Portfolio
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-cobalt transition-colors">
                  Why Brands Work With Us
                </Link>
              </li>
              <li>
                <Link href="/scope-lab" className="hover:text-cobalt transition-colors">
                  Scope Lab Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cobalt transition-colors">
                  Contact Terminal
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Divisions */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-ink font-semibold tracking-wider uppercase mb-2">
              Solutions
            </div>
            <ul className="space-y-2 text-ink-muted">
              <li>
                <Link href="/services#personal-branding" className="hover:text-cobalt transition-colors">
                  Personal Brand Coaching
                </Link>
              </li>
              <li>
                <Link href="/services#business-growth" className="hover:text-cobalt transition-colors">
                  Business Growth &amp; Branding
                </Link>
              </li>
              <li>
                <Link href="/services#creative-services" className="hover:text-cobalt transition-colors">
                  Web Development (Next.js &amp; Laravel)
                </Link>
              </li>
              <li>
                <Link href="/services#creative-services" className="hover:text-cobalt transition-colors">
                  High-Impact Content &amp; Video
                </Link>
              </li>
              <li>
                <Link href="/services#creative-services" className="hover:text-cobalt transition-colors">
                  Performance Marketing &amp; SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Coordinates */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-ink font-semibold tracking-wider uppercase mb-2">
              Coordinates
            </div>
            <div className="space-y-2 text-ink-muted leading-relaxed">
              <div>
                <span className="text-ink font-medium">Kolkata HQ:</span>
                <br />
                3rd Floor (3A), Star Lilly, 2 Dum Dum Park, Kolkata 700055, WB, India
              </div>
              <div>
                <span className="text-ink font-medium">India Phone:</span>
                <br />
                <a href="tel:02269620665" className="hover:text-cobalt">
                  022 6962 0665
                </a>{" "}
                /{" "}
                <a href="tel:+919432497871" className="hover:text-cobalt">
                  +91 9432497871
                </a>
              </div>
              <div>
                <span className="text-ink font-medium">USA Phone:</span>
                <br />
                <a href="tel:+15168744841" className="hover:text-cobalt">
                  +1 5168744841
                </a>
              </div>
              <div>
                <span className="text-ink font-medium">Direct Email:</span>
                <br />
                <a href="mailto:contact@zeromarcom.com" className="hover:text-cobalt">
                  contact@zeromarcom.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Monumental Watermark */}
        <div className="border-t border-line pt-12 pb-6 overflow-hidden select-none">
          <div className="font-serif text-[11.5vw] leading-none text-ink/10 tracking-tight text-center font-normal uppercase pointer-events-none">
            ZEROMARCOM
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
          <div>© 2026 ZEROMARCOM. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-ink transition-colors">
              INQUIRE
            </Link>
            <Link href="/scope-lab" className="hover:text-ink transition-colors">
              SCOPE LAB
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-ink flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
