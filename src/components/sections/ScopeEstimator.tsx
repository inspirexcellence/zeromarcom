"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { emitToast } from "@/components/ui/ToastNotification";

interface Discipline {
  id: string;
  name: string;
  label: string;
  cost: number;
  weeks: number;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "personal",
    name: "Personal Branding & Coaching",
    label: "Personal Branding & Coaching",
    cost: 3500,
    weeks: 3,
  },
  {
    id: "web",
    name: "Custom Web & E-Commerce (Next.js / Laravel)",
    label: "Custom Web & E-Commerce",
    cost: 6500,
    weeks: 4,
  },
  {
    id: "business",
    name: "Business Growth & Brand Identity",
    label: "Business Branding & Strategy",
    cost: 4500,
    weeks: 3,
  },
  {
    id: "creative",
    name: "Creative Services & Commercial Video",
    label: "Creative Videos & Content",
    cost: 4000,
    weeks: 2,
  },
  {
    id: "marketing",
    name: "Performance Marketing & SEO Growth",
    label: "Digital Ads & Organic SEO",
    cost: 3800,
    weeks: 2,
  },
];

export default function ScopeEstimator() {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "personal",
    "web",
  ]);
  const [velocity, setVelocity] = useState<number>(1.0);
  const [stage, setStage] = useState<number>(2);

  const toggleDiscipline = (id: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleVelocityChange = (speed: number) => {
    setVelocity(speed);
  };

  const handleStageChange = (newStage: number) => {
    setStage(newStage);
  };

  // Calculations
  const activeItems = DISCIPLINES.filter((d) => selectedDisciplines.includes(d.id));
  const rawCost =
    activeItems.length > 0
      ? activeItems.reduce((acc, curr) => acc + curr.cost, 0)
      : 3000;
  const rawWeeks =
    activeItems.length > 0
      ? activeItems.reduce((acc, curr) => acc + curr.weeks, 0)
      : 2;

  const stageMultiplier = stage === 1 ? 0.85 : stage === 2 ? 1.0 : 1.45;
  const lowPrice = Math.round((rawCost * stageMultiplier) / 500) * 500;
  const highPrice = Math.round((lowPrice * 1.25) / 500) * 500;
  const estimatedWeeks = Math.max(
    3,
    Math.round(rawWeeks * (1 / velocity) * (stage === 3 ? 1.2 : 1.0))
  );

  const stackDescription =
    stage === 1
      ? "Partner + Lead Creative Engineer"
      : stage === 2
      ? "Dedicated Agency Pod & Tech Lead"
      : "Full Multi-Disciplinary Strike Force";

  const stageLabel =
    stage === 1
      ? "SEED / BOOTSTRAP"
      : stage === 2
      ? "SERIES A / SCALING"
      : "GLOBAL ENTERPRISE";

  const handleTransferBlueprint = () => {
    const durationText = `~ ${estimatedWeeks} Weeks`;
    const priceText = `$${lowPrice.toLocaleString()} — $${highPrice.toLocaleString()}`;

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("zeromarcom:transfer-blueprint", {
          detail: {
            duration: durationText,
            price: priceText,
            disciplines: activeItems.map((a) => a.name).join(", "),
          },
        })
      );
    }

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
    emitToast("Scope blueprint transferred to inquiry brief");
  };

  return (
    <section id="calculator" className="py-16 sm:py-28 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink font-normal tracking-tight">
          Interactive Scope Lab.
        </h2>
        <p className="font-sans text-sm text-ink-muted mt-3">
          Configure your strategic requirements below to generate an instantaneous ballpark
          investment tier and deployment timeline.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Configurator Form */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-white border border-line editorial-shadow relative overflow-hidden"
        >
          {/* Modules */}
          <div className="mb-8">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink mb-4 font-semibold">
              [ SELECT DISCIPLINES REQUIRED ]
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DISCIPLINES.map((d) => {
                const isActive = selectedDisciplines.includes(d.id);
                return (
                  <motion.button
                    key={d.id}
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleDiscipline(d.id)}
                    className={`p-4 rounded-2xl border text-left font-mono text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "border-cobalt bg-blue-50/50 text-ink shadow-xs"
                        : "border-line hover:border-ink bg-white text-ink-muted"
                    }`}
                  >
                    <span>{d.label}</span>
                    {isActive ? (
                      <span className="text-cobalt font-bold">✓</span>
                    ) : (
                      <span className="text-transparent">✓</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Velocity Sprint Pace with Aceternity Animated Layout Pill */}
          <div className="mb-8">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink mb-3 font-semibold">
              [ VELOCITY PACE ]
            </label>
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { label: "FAST TRACK", val: 1.2 },
                { label: "BALANCED", val: 1.0 },
                { label: "EXPANSIVE", val: 0.85 },
              ].map((v) => {
                const isSelected = velocity === v.val;
                return (
                  <button
                    key={v.label}
                    type="button"
                    onClick={() => handleVelocityChange(v.val)}
                    className={`relative p-3 rounded-xl border text-center font-mono text-[11px] sm:text-xs transition-colors cursor-pointer overflow-hidden ${
                      isSelected
                        ? "border-ink text-white"
                        : "border-line text-ink-muted hover:border-ink"
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="velocity-pace-pill"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        className="absolute inset-0 bg-ink rounded-xl"
                      />
                    )}
                    <span className="relative z-10">{v.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stage Slider */}
          <div>
            <label className="block font-mono text-xs uppercase tracking-wider text-ink mb-2 flex justify-between font-semibold">
              <span>[ COMPANY STAGE ]</span>
              <span className="text-cobalt">{stageLabel}</span>
            </label>
            <input
              type="range"
              min={1}
              max={3}
              value={stage}
              onChange={(e) => handleStageChange(parseInt(e.target.value))}
              className="w-full h-1.5 bg-line rounded-lg appearance-none cursor-pointer accent-cobalt"
            />
            <div className="flex justify-between font-mono text-[9px] sm:text-[10px] text-ink-subtle mt-2">
              <span>SEED / BOOTSTRAP</span>
              <span>SERIES A / SCALING</span>
              <span>GLOBAL ENTERPRISE</span>
            </div>
          </div>
        </motion.div>

        {/* Right Output Card with Aceternity Aurora Glow & Animated Numbers */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 p-6 sm:p-10 rounded-3xl bg-ink text-white shadow-2xl relative overflow-hidden border border-white/10"
        >
          {/* Aceternity Ambient Aurora Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 font-mono text-xs text-white/60 uppercase tracking-widest mb-6 flex items-center justify-between">
            <span>{"//"} REAL-TIME BLUEPRINT</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="relative z-10 space-y-4 font-mono text-xs border-b border-white/10 pb-6 mb-6">
            <div className="flex justify-between items-center text-white/70">
              <span>ESTIMATED TIMELINE:</span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={estimatedWeeks}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="text-white font-medium text-sm"
                >
                  ~ {estimatedWeeks} Weeks
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex justify-between items-center text-white/70 gap-4">
              <span className="shrink-0">DEPLOYMENT STACK:</span>
              <span className="text-white font-medium text-right">{stackDescription}</span>
            </div>
            <div className="flex justify-between items-center text-white/70">
              <span>INVESTMENT TIER:</span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`${lowPrice}-${highPrice}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  className="text-emerald-400 font-bold text-base sm:text-lg"
                >
                  ${lowPrice.toLocaleString()} — ${highPrice.toLocaleString()}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative z-10 mb-6">
            <div className="font-mono text-[10px] uppercase text-white/50 tracking-wider mb-2">
              SELECTED SCOPE MODULES:
            </div>
            <div className="space-y-1.5 font-sans text-xs text-white/80">
              {activeItems.length > 0 ? (
                activeItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-cobalt shrink-0" />
                    <span>{item.name}</span>
                  </motion.div>
                ))
              ) : (
                <div className="text-white/40 italic">Foundational Discovery Module</div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleTransferBlueprint}
            className="relative z-10 w-full py-3.5 rounded-full bg-white text-ink font-mono text-xs font-semibold uppercase tracking-wider hover:bg-cobalt hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>APPLY BLUEPRINT TO INQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
