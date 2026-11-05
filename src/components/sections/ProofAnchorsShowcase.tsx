"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight, Award, Clock, Users, Zap, ThumbsUp } from "lucide-react";
import Link from "next/link";

const PROOFS = [
  {
    id: "experience",
    metric: "10+",
    suffix: " YRS",
    label: "COMBINED EXPERTISE",
    title: "Years of Combined Team Experience",
    description:
      "Our designers, developers, and marketers bring over a decade of verified industry expertise to every deployment.",
    bgGradient: "from-[#1E60F2] to-[#0A45C7]",
    icon: Users,
    colSpan: "lg:col-span-4",
  },
  {
    id: "delivery",
    metric: "100%",
    suffix: "",
    label: "PUNCTUAL EXECUTION",
    title: "On-Time Project Delivery",
    description:
      "Every project ships strictly on schedule with quality that meets our highest standards and exceeds expectations.",
    bgGradient: "from-[#15803D] to-[#0E602D]",
    icon: Clock,
    colSpan: "lg:col-span-4",
  },
  {
    id: "satisfaction",
    metric: "98%",
    suffix: "",
    label: "CLIENT ENDORSEMENT",
    title: "Client Satisfaction",
    description:
      "Our partners trust us for consistent craftsmanship, operational transparency, and creative work that genuinely moves their business forward.",
    bgGradient: "from-[#7C3AED] to-[#5B21B6]",
    icon: ThumbsUp,
    colSpan: "lg:col-span-4",
  },
  {
    id: "collaborative",
    badge: "COLLABORATIVE CRAFT",
    title: "Cross-Disciplinary Studio Chemistry",
    description:
      "Designers, developers, and business strategists working synchronously. No middle-man telephone game — just high-speed collaborative execution.",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-colleagues-holding-a-meeting-in-an-office-42993-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    icon: Award,
    colSpan: "lg:col-span-6",
  },
  {
    id: "velocity",
    badge: "HIGH-VELOCITY DIGITAL",
    title: "High-Performance Modern Web Engineering",
    description:
      "Next.js Turbopack, Tailwind CSS, GPU motion, and low-latency infrastructure. Engineered for sub-second load times and deterministic conversion.",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    icon: Zap,
    colSpan: "lg:col-span-6",
  },
];

export default function ProofAnchorsShowcase() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
        <div>
          <h2 className="font-heading text-3xl sm:text-5xl text-ink font-bold tracking-tight">
            Verified Performance Proof<span className="text-cobalt">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink-muted mt-2 max-w-lg">
            Tangible benchmarks backed by over 150+ successfully deployed brand, web, and commercial projects.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-ink hover:text-cobalt transition-colors group"
        >
          <span>EXPLORE 150+ CASE STUDIES</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Metric Cards (3 Columns across row 1) */}
        {PROOFS.slice(0, 3).map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={`${item.colSpan} rounded-[28px] bg-gradient-to-br ${item.bgGradient} text-white p-7 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden`}
            >
              {/* Subtle radial sheen */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 font-mono text-[10px] tracking-wider uppercase font-semibold">
                    {item.label}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center border border-white/25">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-none mb-3">
                  {item.metric}
                  <span className="text-2xl sm:text-3xl font-medium opacity-80">
                    {item.suffix}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold leading-snug mb-2 text-white">
                  {item.title}
                </h3>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-white/25">
                <p className="font-sans text-xs text-white/90 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* Media & Tech Cards (2 Columns across row 2) */}
        {PROOFS.slice(3).map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={`${item.colSpan} rounded-[28px] bg-black text-white overflow-hidden shadow-xl relative min-h-[300px] flex flex-col justify-end p-7 sm:p-8 group`}
            >
              {/* Background Media */}
              {item.videoSrc ? (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={item.poster}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  >
                    <source src={item.videoSrc} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
                </>
              ) : (
                <>
                  <Image
                    src={item.image!}
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25)_0%,transparent_70%)] pointer-events-none" />
                </>
              )}

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-semibold">
                  {item.badge}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <h3 className="font-heading text-xl sm:text-2xl font-bold leading-snug mb-2 text-white">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
