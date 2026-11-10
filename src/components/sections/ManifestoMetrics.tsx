"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Compass, CheckCircle2, Sparkles } from "lucide-react";

interface CounterItem {
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const METRICS: CounterItem[] = [
  {
    target: 20,
    suffix: "+",
    label: "YEARS LEADERSHIP",
    sublabel: "Decades of cross-industry mastery",
  },
  {
    target: 150,
    suffix: "+",
    label: "DEPLOYED PROJECTS",
    sublabel: "Websites, campaigns & brand assets",
  },
  {
    target: 98,
    suffix: "%",
    label: "CLIENT SATISFACTION",
    sublabel: "High-trust long-term partnerships",
  },
  {
    target: 2,
    suffix: " NODES",
    label: "GLOBAL PRESENCE",
    sublabel: "Kolkata (India) & New York (USA)",
  },
];

export default function ManifestoMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (animated || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setAnimated(true);

        const duration = 1500;
        const steps = 30;
        const intervalTime = duration / steps;
        let stepCount = 0;

        const timer = setInterval(() => {
          stepCount++;
          const progress = Math.min(stepCount / steps, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);

          setCounts(
            METRICS.map((m) => Math.round(m.target * easeOut))
          );

          if (stepCount >= steps) {
            clearInterval(timer);
          }
        }, intervalTime);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-line fine-grid scroll-mt-24 relative overflow-hidden"
    >
      {/* Subtle Aceternity-style Ambient Spotlight Orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-blue-500/6 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500/6 blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start relative z-10">
        {/* Left Manifesto Ethos */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="lg:sticky lg:top-28 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-cobalt font-mono text-[10px] tracking-widest uppercase font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>THE ZERO MANIFESTO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink leading-[1.08]">
              Where Originality <br />
              <span className="italic font-normal text-cobalt">Meets Innovation.</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-cobalt my-5"
            />
            <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
              We’re not just another marketing agency; we’re a team of creative trailblazers who thrive on crafting everything from scratch. Our approach is rooted in genuine creativity, ensuring every single project is unique and tailored to your brand’s ambition.
            </p>
            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-line editorial-shadow mt-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="font-mono text-xs text-cobalt font-semibold mb-2">
                AGENCY PHILOSOPHY:
              </div>
              <p className="font-serif text-lg sm:text-xl text-ink italic leading-snug">
                &ldquo;Zero in on your goals, elevate your brand presence, and maximize your impact.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Meet the Masterminds and Live Counters */}
        <div className="lg:col-span-7 space-y-10 sm:space-y-12">
          {/* Masterminds Profile Cards with Aceternity 3D Hover Lift & Glare */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Prerona Roy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-line editorial-shadow flex flex-col justify-between group relative overflow-hidden transition-shadow hover:shadow-xl hover:border-blue-300/80"
            >
              {/* Aceternity Spotlight Hover Gradient */}
              <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-cobalt mb-5 border border-blue-200/60 group-hover:bg-cobalt group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                  Prerona Roy
                </h3>
                <div className="font-mono text-xs text-cobalt font-semibold mb-3 mt-1">
                  FOUNDER &amp; BUSINESS COACH
                </div>
                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                  With 20 years of experience in diverse business fields, Prerona has a knack for transforming businesses and individuals. A passionate public speaker and coach featured in prominent newspapers, magazines, and recipient of prestigious business awards.
                </p>
              </div>
              <div className="relative z-10 mt-6 pt-4 border-t border-line/60 flex items-center gap-2 font-mono text-[11px] text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>20+ Yrs Business Leadership</span>
              </div>
            </motion.div>

            {/* Lt Col Abhinandan Roy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.22 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: 2 }}
              style={{ transformStyle: "preserve-3d" }}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-line editorial-shadow flex flex-col justify-between group relative overflow-hidden transition-shadow hover:shadow-xl hover:border-blue-300/80"
            >
              {/* Aceternity Spotlight Hover Gradient */}
              <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-cobalt mb-5 border border-blue-200/60 group-hover:bg-cobalt group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                  Lt Col Abhinandan Roy
                </h3>
                <div className="font-mono text-xs text-cobalt font-semibold mb-3 mt-1">
                  CREATIVE DIRECTOR &amp; VETERAN
                </div>
                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                  The backbone of Zeromarcom’s creative endeavors. A sincere military veteran with exceptional leadership skills and an alumnus of IIM Kolkata. Expert in commercial photography, videography, and graphic design, marrying artistic vision with disciplined execution.
                </p>
              </div>
              <div className="relative z-10 mt-6 pt-4 border-t border-line/60 flex items-center gap-2 font-mono text-[11px] text-ink font-medium">
                <Compass className="w-4 h-4 text-cobalt shrink-0" />
                <span>IIM Kolkata • Military Veteran</span>
              </div>
            </motion.div>
          </div>

          {/* Live Animated Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 pt-2">
            {METRICS.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-line editorial-shadow hover:border-cobalt/40 transition-colors"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold text-ink">
                  {counts[idx]}
                  {metric.suffix}
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] text-cobalt mt-1 font-semibold">
                  {metric.label}
                </div>
                <p className="font-sans text-[10px] sm:text-[11px] text-ink-muted mt-1.5 leading-snug">
                  {metric.sublabel}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
