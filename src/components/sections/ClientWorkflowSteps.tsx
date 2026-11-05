"use client";

import { Compass, FileCode2, Gauge, Rocket } from "lucide-react";

const STEPS = [
  {
    num: "01",
    phase: "DISCOVERY & AUDIT",
    title: "Deconstruct & Clarify",
    description:
      "A deep-dive strategy session directly with masterminds Prerona Roy & Lt Col Abhinandan Roy. We unpack your commercial objectives, audit competitive gaps, and isolate your unignorable differentiator.",
    deliverables: ["Commercial Positioning Brief", "Competitive Gap Matrix", "Core Value Proposition"],
    icon: Compass,
  },
  {
    num: "02",
    phase: "TECHNICAL BLUEPRINT",
    title: "Architectural Planning",
    description:
      "Every deliverable, timeline milestone, and technology selection is locked into a deterministic scope. You get fixed investment envelopes with zero hidden retainers or surprises.",
    deliverables: ["Full Architecture Wireframes", "Sprint Schedule Commitment", "Deterministic Fixed Scope"],
    icon: FileCode2,
  },
  {
    num: "03",
    phase: "VETERAN SPRINT",
    title: "Disciplined Execution",
    description:
      "Engineered under military-grade sprint management. Continuous progress demos, rapid feedback loops, and senior craftsman execution with no delegation to junior interns.",
    deliverables: ["Weekly Interactive Demos", "Full-Stack Custom Code", "Cinematic Media Assets"],
    icon: Gauge,
  },
  {
    num: "04",
    phase: "MARKET ASCENT",
    title: "Unignorable Launch",
    description:
      "Deployment across high-performance servers, complete SEO indexation, conversion tracking, asset handoff, and immediate commercial pipeline activation.",
    deliverables: ["Sub-Second Live Deployment", "Comprehensive Asset Bible", "Conversion Growth Tracking"],
    icon: Rocket,
  },
];

export default function ClientWorkflowSteps() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="font-heading text-3xl sm:text-5xl text-ink font-bold tracking-tight">
          How We Work With You<span className="text-cobalt">.</span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-ink-muted mt-3">
          A disciplined, four-phase delivery methodology engineered to eliminate friction and guarantee deterministic results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="p-7 sm:p-8 rounded-[28px] bg-white border border-line flex flex-col justify-between shadow-sm relative group hover:border-ink/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-bold text-cobalt">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-canvas border border-line flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="font-mono text-[10px] text-ink-subtle uppercase tracking-wider font-semibold mb-1">
                  {step.phase}
                </div>

                <h3 className="font-heading text-xl font-bold text-ink mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="font-sans text-xs text-ink-muted leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-line/60">
                <div className="font-mono text-[10px] text-ink font-semibold uppercase mb-2">
                  KEY DELIVERABLES:
                </div>
                <div className="flex flex-col gap-1.5">
                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="font-mono text-[11px] text-ink-muted flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cobalt shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
