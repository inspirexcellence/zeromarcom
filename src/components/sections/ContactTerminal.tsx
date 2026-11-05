"use client";

import { useEffect, useState } from "react";
import { Mail, Copy, Send } from "lucide-react";
import { emitToast } from "@/components/ui/ToastNotification";

export default function ContactTerminal() {
  const [copyLabel, setCopyLabel] = useState<string>("COPY");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "25-50",
    message: "",
  });

  // Listen for blueprint transfers from Scope Lab
  useEffect(() => {
    const handleBlueprint = (e: Event) => {
      const customEvent = e as CustomEvent<{
        duration: string;
        price: string;
        disciplines: string;
      }>;
      const { duration, price, disciplines } = customEvent.detail;
      setFormData((prev) => ({
        ...prev,
        message: `[Configured Scope Blueprint]:\n• Estimated Timeline: ${duration}\n• Target Capital: ${price}\n• Modules: ${disciplines}\n\nLooking forward to scheduling an executive discovery session.`,
      }));
    };

    window.addEventListener("zeromarcom:transfer-blueprint", handleBlueprint);
    return () =>
      window.removeEventListener("zeromarcom:transfer-blueprint", handleBlueprint);
  }, []);

  const handleCopyEmail = () => {
    const email = "contact@zeromarcom.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopyLabel("COPIED");
      emitToast("Direct email copied to clipboard");
      setTimeout(() => {
        setCopyLabel("COPY");
      }, 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emitToast(`Brief received from ${formData.name}. Executive review initiated.`);
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "25-50",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-24 select-none">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Left: Agency Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-5xl sm:text-6xl text-ink font-normal leading-[0.96]">
                Let&apos;s architect something <br />
                <span className="italic font-normal">legendary.</span>
              </h2>
              <p className="font-sans text-sm text-ink-muted mt-6 leading-relaxed max-w-md">
                We review prospective partnerships on a rolling weekly basis. Reach out directly or
                complete the brief terminal below to schedule an executive session.
              </p>

            {/* Direct Email & Phone Widget */}
            <div className="mt-8 space-y-3 max-w-md">
              <div className="p-4 rounded-2xl bg-canvas border border-line flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cobalt shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-ink font-medium">
                    contact@zeromarcom.com
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white border border-line hover:bg-ink hover:text-white font-mono text-xs transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{copyLabel}</span>
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Phone Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-canvas border border-line">
                  <div className="font-mono text-[10px] text-cobalt uppercase font-semibold">
                    PHONE (INDIA)
                  </div>
                  <a
                    href="tel:02269620665"
                    className="font-mono text-xs font-semibold text-ink hover:text-cobalt block mt-1"
                  >
                    022 6962 0665
                  </a>
                  <div className="font-mono text-[10px] text-ink-muted mt-0.5">
                    +91 9432497871
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-canvas border border-line">
                  <div className="font-mono text-[10px] text-cobalt uppercase font-semibold">
                    PHONE (USA)
                  </div>
                  <a
                    href="tel:+15168744841"
                    className="font-mono text-xs font-semibold text-ink hover:text-cobalt block mt-1"
                  >
                    +1 5168744841
                  </a>
                  <div className="font-mono text-[10px] text-ink-muted mt-0.5">
                    Global Inquiries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exact Location & Working Hours */}
            <div className="mt-8 font-mono text-xs text-ink-muted space-y-2 p-5 rounded-2xl bg-canvas border border-line max-w-md">
              <div className="text-ink font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>OFFICE LOCATION // INDIA</span>
              </div>
              <div className="text-ink font-medium leading-relaxed">
                3rd Floor (3A), Star Lilly, 2 Dum Dum Park, Kolkata 700055, West Bengal, India
              </div>
              <div className="pt-2 border-t border-line/60 flex justify-between text-[11px]">
                <span>HOURS:</span>
                <span className="text-ink font-medium">Mon – Sat: 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-canvas border border-line">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="client-name"
                    className="block font-mono text-xs uppercase text-ink mb-2 font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Suman Roy"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-line text-ink text-base sm:text-sm placeholder:text-ink-subtle focus:outline-none focus:border-cobalt transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="client-email"
                    className="block font-mono text-xs uppercase text-ink mb-2 font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="client-email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="partner@zeromarcom.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-line text-ink text-base sm:text-sm placeholder:text-ink-subtle focus:outline-none focus:border-cobalt transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="client-company"
                    className="block font-mono text-xs uppercase text-ink mb-2 font-medium"
                  >
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    id="client-company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Company or Brand Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-line text-ink text-base sm:text-sm placeholder:text-ink-subtle focus:outline-none focus:border-cobalt transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="client-budget"
                    className="block font-mono text-xs uppercase text-ink mb-2 font-medium"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="client-budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-line text-ink text-base sm:text-sm focus:outline-none focus:border-cobalt transition-colors"
                  >
                    <option value="personal">Personal Branding &amp; Coaching</option>
                    <option value="web">Web Design &amp; Development</option>
                    <option value="business">Business Growth Solutions</option>
                    <option value="creative">Creative Services &amp; Video</option>
                    <option value="social">Social Media &amp; Performance Ads</option>
                    <option value="all">Comprehensive 360° Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="client-message"
                  className="block font-mono text-xs uppercase text-ink mb-2 font-medium"
                >
                  Project Brief / Objectives
                </label>
                <textarea
                  id="client-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe the venture goals, technical requirements, or timelines..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-line text-ink text-base sm:text-sm placeholder:text-ink-subtle focus:outline-none focus:border-cobalt transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-ink text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-cobalt transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>TRANSMIT BRIEF</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
