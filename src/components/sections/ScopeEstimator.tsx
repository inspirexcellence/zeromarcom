"use client";

import { useState } from "react";
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
    <section id="calculator" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-line">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
          Interactive Scope Lab.
        </h2>
        <p className="font-sans text-sm text-ink-muted mt-3">
          Configure your strategic requirements below to generate an instantaneous ballpark
          investment tier and deployment timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Configurator Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-line editorial-shadow">
          {/* Modules */}
          <div className="mb-8">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink mb-4 font-semibold">
              [ SELECT DISCIPLINES REQUIRED ]
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DISCIPLINES.map((d) => {
                const isActive = selectedDisciplines.includes(d.id);
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => toggleDiscipline(d.id)}
                    className={`p-4 rounded-2xl border text-left font-mono text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "border-ink bg-canvas text-ink"
                        : "border-line hover:border-ink bg-white text-ink-muted"
                    }`}
                  >
                    <span>{d.label}</span>
                    {isActive ? (
                      <span className="text-cobalt font-bold">✓</span>
                    ) : (
                      <span className="text-transparent">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Velocity Sprint Pace */}
          <div className="mb-8">
            <label className="block font-mono text-xs uppercase tracking-wider text-ink mb-3 font-semibold">
              [ VELOCITY PACE ]
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "FAST TRACK", val: 1.2 },
                { label: "BALANCED", val: 1.0 },
                { label: "EXPANSIVE", val: 0.85 },
              ].map((v) => (
                <button
                  key={v.label}
                  type="button"
                  onClick={() => handleVelocityChange(v.val)}
                  className={`p-3 rounded-xl border text-center font-mono text-xs transition-all cursor-pointer ${
                    velocity === v.val
                      ? "border-ink bg-ink text-white"
                      : "border-line text-ink-muted hover:border-ink"
                  }`}
                >
                  {v.label}
                </button>
              ))}
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
            <div className="flex justify-between font-mono text-[10px] text-ink-subtle mt-2">
              <span>SEED / BOOTSTRAP</span>
              <span>SERIES A / SCALING</span>
              <span>GLOBAL ENTERPRISE</span>
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-ink text-white shadow-2xl relative overflow-hidden">
          <div className="font-mono text-xs text-white/60 uppercase tracking-widest mb-6 flex items-center justify-between">
            <span>{"//"} REAL-TIME BLUEPRINT</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-4 font-mono text-xs border-b border-white/10 pb-6 mb-6">
            <div className="flex justify-between items-center text-white/70">
              <span>ESTIMATED TIMELINE:</span>
              <span className="text-white font-medium text-sm">~ {estimatedWeeks} Weeks</span>
            </div>
            <div className="flex justify-between items-center text-white/70">
              <span>DEPLOYMENT STACK:</span>
              <span className="text-white font-medium">{stackDescription}</span>
            </div>
            <div className="flex justify-between items-center text-white/70">
              <span>INVESTMENT TIER:</span>
              <span className="text-white font-bold text-base sm:text-lg">
                ${lowPrice.toLocaleString()} — ${highPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="font-mono text-[10px] uppercase text-white/50 tracking-wider mb-2">
              SELECTED SCOPE MODULES:
            </div>
            <div className="space-y-1.5 font-sans text-xs text-white/80">
              {activeItems.length > 0 ? (
                activeItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cobalt shrink-0" />
                    <span>{item.name}</span>
                  </div>
                ))
              ) : (
                <div className="text-white/40 italic">Foundational Discovery Module</div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleTransferBlueprint}
            className="w-full py-3.5 rounded-full bg-white text-ink font-mono text-xs font-semibold uppercase tracking-wider hover:bg-cobalt hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>APPLY BLUEPRINT TO INQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
