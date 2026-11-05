"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const FEATURED_PROJECTS = [
  {
    id: "proj-1",
    title: "Apex Architectural Portal",
    client: "Studio Arch Vanguard",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Tailwind CSS", "CMS"],
  },
  {
    id: "proj-2",
    title: "Krypton Luxury Identity",
    client: "Krypton Timepieces",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    tags: ["Visual Identity", "Typography", "Packaging"],
  },
  {
    id: "proj-3",
    title: "Aura Cinematic Launch",
    client: "Aura Robotics",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    tags: ["4K Video Production", "Meta Ads", "Reels"],
  },
];

function ParallaxProjectCard({
  project,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1.02, 1.08, 1.02]);

  return (
    <Link
      ref={cardRef}
      key={project.id}
      href="/portfolio"
      className="group flex flex-col rounded-[26px] overflow-hidden bg-white border border-line hover:border-ink/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm"
    >
      <div className="relative w-full aspect-[16/11] overflow-hidden bg-canvas">
        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          className="absolute inset-[-10%] w-[120%] h-[120%] will-change-transform transform-gpu"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] tracking-wider uppercase border border-white/20">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          <div className="font-mono text-[11px] text-ink-subtle uppercase mb-1">
            {project.client}
          </div>
          <h3 className="font-heading text-xl font-bold text-ink group-hover:text-cobalt transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-line/60">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-canvas text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedWorks() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto select-none">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <h2 className="font-heading text-3xl sm:text-5xl text-ink font-bold tracking-tight">
            Selected Works<span className="text-cobalt">.</span>
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-ink hover:text-cobalt transition-colors group"
        >
          <span>VIEW COMPLETE ARCHIVE (150+ PROJECTS)</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <ParallaxProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
