"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { isIntroDone, markIntroDone, clearLegacyIntroStorage } from "@/lib/introState";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    sublinks: [
      { name: "Personal Branding", href: "/services#personal-branding" },
      { name: "Business Growth Solutions", href: "/services#business-growth" },
      { name: "Creative Services", href: "/services#creative-services" },
    ],
  },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [navVisible, setNavVisible] = useState<boolean>(() => {
    return isIntroDone();
  });
  const [isScrollHidden, setIsScrollHidden] = useState<boolean>(false);
  const [servicesDropdown, setServicesDropdown] = useState<boolean>(false);

  // On subpages, base visibility is true; on homepage, waits for video full-screen
  // But hides when scrolling DOWN after hero, and reveals when scrolling UP
  const shouldShowNavbar = (!isHome || navVisible) && !isScrollHidden;

  // Scroll Direction Listener: Hide on DOWN scroll after hero ends, Show on UP scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      // After hero page ends (on homepage ~80vh; on inner pages ~160px)
      const heroThreshold = isHome ? window.innerHeight * 0.75 : 160;

      // Never hide if mobile menu is open
      if (mobileMenuOpen) {
        setIsScrollHidden(false);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > heroThreshold) {
        // Scrolling DOWN -> Hide navbar
        if (currentScrollY > lastScrollY + 6) {
          setIsScrollHidden(true);
          setServicesDropdown(false);
        }
        // Scrolling UP -> Reveal navbar immediately
        else if (currentScrollY < lastScrollY - 6) {
          setIsScrollHidden(false);
        }
      } else {
        // Inside Hero or at the very top: always visible
        setIsScrollHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScrollDirection, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, [isHome, mobileMenuOpen]);

  // On Subpages: immediately mark intro done (so navigating back to home skips intro)
  // On Homepage: show navbar immediately if intro already completed, or when video reaches full screen, or on scroll
  useEffect(() => {
    clearLegacyIntroStorage();

    if (!isHome) {
      markIntroDone();
      return;
    }

    if (isIntroDone()) {
      return;
    }

    const handleVideoFullScreen = () => {
      setNavVisible(true);
    };

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavVisible(true);
      }
    };

    window.addEventListener("zeromarcom:video-fullscreen", handleVideoFullScreen);
    window.addEventListener("scroll", handleScroll);

    // Fallback timer to ensure navbar is accessible if page is refreshed or animation skipped
    const fallbackTimer = setTimeout(() => {
      setNavVisible(true);
    }, 12000);

    return () => {
      window.removeEventListener("zeromarcom:video-fullscreen", handleVideoFullScreen);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallbackTimer);
    };
  }, [isHome]);

  return (
    <>
      <motion.header
        initial={{
          opacity: isHome ? (navVisible ? 1 : 0) : 1,
          y: isHome ? (navVisible ? 0 : -28) : 0,
        }}
        animate={
          shouldShowNavbar
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -28 }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-6 left-0 right-0 z-[130] px-4 sm:px-8 max-w-7xl mx-auto transition-all ${
          shouldShowNavbar ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav className="glass-nav rounded-full px-5 py-3 sm:py-3.5 flex items-center justify-between shadow-sm">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center text-white text-xs font-heading font-bold group-hover:bg-cobalt transition-colors">
              Z
            </div>
            <span className="font-heading text-xl tracking-tight text-ink font-bold">
              ZEROMARCOM<span className="text-cobalt">.</span>
            </span>
          </Link>

          {/* Menu Items: Multi-Page App Router Links */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-sm tracking-wide">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return link.sublinks ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={`transition-colors flex items-center gap-1.5 py-1 ${
                      isActive ? "text-cobalt font-bold" : "text-[#141416] font-semibold hover:text-cobalt"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] opacity-70">▼</span>
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 pt-2 w-64 z-[110] pointer-events-auto"
                      >
                        <div className="rounded-2xl bg-white/98 backdrop-blur-xl border border-line p-2 shadow-xl flex flex-col gap-1">
                          {link.sublinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setServicesDropdown(false)}
                              className="px-3.5 py-2.5 rounded-xl text-xs font-mono font-semibold text-ink hover:bg-canvas hover:text-cobalt transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative py-1 ${
                    isActive ? "text-cobalt font-bold" : "text-[#141416] font-semibold hover:text-cobalt"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cobalt"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Control Pod */}
          <div className="flex items-center gap-3">
            {/* Get In Touch CTA */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white font-mono text-xs font-semibold tracking-wide hover:bg-cobalt transition-colors shadow-sm"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-full hover:bg-canvas text-ink transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] bg-porcelain/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-28 pb-8 overflow-y-auto"
          >
            <div>
              {/* Top Drawer Controls */}
              <div className="flex items-center justify-between pb-5 mb-4 border-b border-line/60">
                <span className="font-mono text-xs text-ink-subtle uppercase tracking-wider font-semibold">
                  NAVIGATION DIRECTORY
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-canvas border border-line text-xs font-mono text-ink font-semibold hover:border-ink transition-colors cursor-pointer"
                >
                  <span>CLOSE</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 sm:gap-5 font-heading text-2xl sm:text-3xl text-ink font-bold">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="flex flex-col gap-2">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-cobalt transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.sublinks && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-line/60">
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-mono text-xs font-normal text-ink-muted hover:text-cobalt"
                          >
                            → {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-cobalt flex items-center gap-2 pt-2"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </div>
            </div>

            <div className="border-t border-line pt-6 mt-8 flex flex-col gap-2 font-mono text-[11px] sm:text-xs text-ink-muted">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-ink-subtle font-semibold">KOLKATA HQ:</span>
                <span className="text-ink">2 Dum Dum Park, Kolkata 700055</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-ink-subtle font-semibold">PHONE (INDIA):</span>
                <span className="text-ink font-semibold">022 6962 0665</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-ink-subtle font-semibold">EMAIL:</span>
                <span className="text-ink">contact@zeromarcom.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
