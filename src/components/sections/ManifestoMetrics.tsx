"use client";

import { useEffect, useRef, useState } from "react";
import { Award, ShieldCheck, Compass, CheckCircle2 } from "lucide-react";

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
      className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-line fine-grid scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Manifesto Ethos */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-5">
            <h2 className="font-serif text-4xl sm:text-5xl text-ink leading-[1.05]">
              Where Originality <br />
              <span className="italic font-normal">Meets Innovation.</span>
            </h2>
            <div className="h-[1px] w-14 bg-cobalt my-6" />
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              We’re not just another marketing agency; we’re a team of creative trailblazers who thrive on crafting everything from scratch. Our approach is rooted in genuine creativity, ensuring every single project is unique and tailored to your brand’s ambition.
            </p>
            <div className="p-5 rounded-2xl bg-white border border-line editorial-shadow mt-6">
              <div className="font-mono text-xs text-cobalt font-semibold mb-2">
                AGENCY PHILOSOPHY:
              </div>
              <p className="font-serif text-lg text-ink italic leading-snug">
                &ldquo;Zero in on your goals, elevate your brand presence, and maximize your impact.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Right Meet the Masterminds and Live Counters */}
        <div className="lg:col-span-7 space-y-12">
          {/* Masterminds Profile Cards */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Prerona Roy */}
              <div className="p-7 rounded-3xl bg-white border border-line editorial-shadow flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-canvas flex items-center justify-center text-cobalt mb-5 border border-line group-hover:bg-cobalt group-hover:text-white transition-colors">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink font-normal">
                    Prerona Roy
                  </h3>
                  <div className="font-mono text-xs text-cobalt font-semibold mb-3">
                    FOUNDER &amp; BUSINESS COACH
                  </div>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed">
                    With 20 years of experience in diverse business fields, Prerona has a knack for transforming businesses and individuals. A passionate public speaker and coach featured in prominent newspapers, magazines, and recipient of prestigious business awards.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 font-mono text-[11px] text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>20+ Yrs Business Leadership</span>
                </div>
              </div>

              {/* Lt Col Abhinandan Roy */}
              <div className="p-7 rounded-3xl bg-white border border-line editorial-shadow flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-canvas flex items-center justify-center text-cobalt mb-5 border border-line group-hover:bg-cobalt group-hover:text-white transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink font-normal">
                    Lt Col Abhinandan Roy
                  </h3>
                  <div className="font-mono text-xs text-cobalt font-semibold mb-3">
                    CREATIVE DIRECTOR &amp; VETERAN
                  </div>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed">
                    The backbone of Zeromarcom’s creative endeavors. A sincere military veteran with exceptional leadership skills and an alumnus of IIM Kolkata. Expert in commercial photography, videography, and graphic design, marrying artistic vision with disciplined execution.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 font-mono text-[11px] text-ink">
                  <Compass className="w-3.5 h-3.5 text-cobalt" />
                  <span>IIM Kolkata • Military Veteran</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Animated Metric Counters */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-2">
              {METRICS.map((metric, idx) => (
                <div
                  key={metric.label}
                  className="p-3.5 sm:p-5 rounded-2xl bg-white border border-line editorial-shadow"
                >
                  <div className="font-mono text-xl sm:text-3xl font-bold text-ink">
                    {counts[idx]}
                    {metric.suffix}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[11px] text-cobalt mt-1 font-semibold">
                    {metric.label}
                  </div>
                  <p className="font-sans text-[10px] sm:text-[11px] text-ink-muted mt-1.5 leading-snug">
                    {metric.sublabel}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
