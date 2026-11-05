import type { Metadata } from "next";
import ScopeEstimator from "@/components/sections/ScopeEstimator";

export const metadata: Metadata = {
  title: "Scope Lab — Interactive Investment Estimator | ZEROMARCOM",
  description:
    "Configure project disciplines, deliverables, and timelines with transparent real-time cost estimation in the ZEROMARCOM Scope Lab.",
};

export default function ScopeLabPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-ink font-bold tracking-tight leading-[1.08]">
          Scope Lab<span className="text-cobalt">.</span> <br />
          Deterministic Pricing.
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-muted mt-5 max-w-2xl leading-relaxed">
          Configure service modules, delivery urgency, and asset requirements below. Your blueprint dynamically calculates verified cost envelopes with instant transmission to our executive desk.
        </p>
      </div>

      {/* Full Scope Estimator */}
      <ScopeEstimator />

      {/* How it Works Notes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-[24px] bg-white border border-line">
            <div className="font-mono text-xs text-cobalt font-semibold mb-2">01 / TRANSPARENCY</div>
            <h4 className="font-heading text-lg font-bold text-ink mb-2">No Hidden Surcharges</h4>
            <p className="font-sans text-xs text-ink-muted leading-relaxed">
              Every estimate reflects real resource allocation across design engineering, strategy, and full-stack deployment.
            </p>
          </div>

          <div className="p-8 rounded-[24px] bg-white border border-line">
            <div className="font-mono text-xs text-cobalt font-semibold mb-2">02 / FLEXIBILITY</div>
            <h4 className="font-heading text-lg font-bold text-ink mb-2">Modular Scoping</h4>
            <p className="font-sans text-xs text-ink-muted leading-relaxed">
              Choose standalone disciplines (like Personal Branding coaching) or end-to-end 360° creative transformation.
            </p>
          </div>

          <div className="p-8 rounded-[24px] bg-white border border-line">
            <div className="font-mono text-xs text-cobalt font-semibold mb-2">03 / TRANSMISSION</div>
            <h4 className="font-heading text-lg font-bold text-ink mb-2">1-Click Brief Transfer</h4>
            <p className="font-sans text-xs text-ink-muted leading-relaxed">
              Locking your scope automatically transfers the configuration into our contact terminal for expedited review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
