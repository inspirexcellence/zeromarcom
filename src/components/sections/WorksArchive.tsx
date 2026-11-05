"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, X, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  category: "web" | "branding" | "social" | "stall" | "product" | "collateral";
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  metricVal: string;
  metricLabel: string;
  image: string;
  challenge: string;
  solution: string;
  secondaryMetricVal: string;
  secondaryMetricLabel: string;
}

const PROJECTS: Project[] = [
  {
    id: "web-portal",
    category: "web",
    tag: "WEB DESIGN // NEXT.JS & LARAVEL",
    badge: "SUB-SECOND SPEED",
    subtitle: "DIGITAL PLATFORM ENGINEERING",
    title: "High-Performance Corporate Web Portal",
    description:
      "Engineered an enterprise web experience with instant page transitions, custom CMS backend, responsive UI/UX architecture, and seamless inquiry funnels.",
    metricVal: "+340%",
    metricLabel: "Lead Conversions",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Client suffered from sluggish page loads, outdated design systems, and poor mobile engagement, lowering conversion rates.",
    solution:
      "Built a modern full-stack web application with responsive UI, automated SEO optimization, and sub-second load times.",
    secondaryMetricVal: "100",
    secondaryMetricLabel: "Lighthouse Performance",
  },
  {
    id: "brand-architecture",
    category: "branding",
    tag: "BRANDING & IDENTITY",
    badge: "100% ORIGINAL CRAFT",
    subtitle: "BUSINESS IDENTITY SYSTEM",
    title: "Distinctive Visual Brand Architecture",
    description:
      "Complete brand restructuring: stunning logo mark, bespoke typography guidelines, tactile corporate identity, and unified positioning strategy.",
    metricVal: "+190%",
    metricLabel: "Brand Equity",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "The business lacked a unique and authentic image to stand out in an overcrowded market.",
    solution:
      "Crafted an original brand identity from scratch, ensuring distinct visual assets and high-trust market positioning.",
    secondaryMetricVal: "4.8/5",
    secondaryMetricLabel: "Brand Perception Score",
  },
  {
    id: "social-campaign",
    category: "social",
    tag: "SOCIAL MEDIA MARKETING",
    badge: "VIRAL REACH",
    subtitle: "ENGAGEMENT & GROWTH",
    title: "Omnichannel Social Media & Reels",
    description:
      "Data-driven content strategy with short stories, reels, explainer videos, and targeted paid ad campaigns across Instagram, LinkedIn, and Meta.",
    metricVal: "10X",
    metricLabel: "Organic Reach",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Social presence was stagnant with low viewer engagement and declining ad return on investment.",
    solution:
      "Engineered high-retention video reels, customer testimony narratives, and daily supervision ad management.",
    secondaryMetricVal: "8.6x",
    secondaryMetricLabel: "Blended ROAS",
  },
  {
    id: "stall-pavilion",
    category: "stall",
    tag: "STALL & EXHIBITION DESIGN",
    badge: "AWARD WINNING ARCHITECTURE",
    subtitle: "SPATIAL EXPERIENTIAL BRANDING",
    title: "Monumental Exhibition Pavilion & Stall",
    description:
      "3D spatial exhibition architecture, bespoke experiential lighting, modular booth design, and interactive visitor walkthroughs for global expos.",
    metricVal: "4,500+",
    metricLabel: "Booth Visitors",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Client needed to dominate trade show floors and attract maximum high-ticket enterprise buyers against top industry competitors.",
    solution:
      "Created an imposing, open-concept 3D booth with custom light accents, strategic product demonstration stages, and branded photo backdrops.",
    secondaryMetricVal: "100%",
    secondaryMetricLabel: "Trade Show Footfall Goal",
  },
  {
    id: "product-commercial",
    category: "product",
    tag: "PRODUCT SHOOT & COMMERCIAL",
    badge: "STUDIO 8K PRECISION",
    subtitle: "COMMERCIAL ART DIRECTION",
    title: "Luxury Commercial & Product Shoot",
    description:
      "High-definition commercial product photography, cinematic lighting, lifestyle video production, and studio staging led by veteran creative direction.",
    metricVal: "8K UHD",
    metricLabel: "Studio Asset Fidelity",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "E-commerce catalog images looked dull and flat, hindering conversion rates on Amazon, Shopify, and social commerce.",
    solution:
      "Executed full-scale studio shoots with dynamic macro lenses, studio strobe setups, and professional post-production color grading.",
    secondaryMetricVal: "+64%",
    secondaryMetricLabel: "Add-to-Cart Surge",
  },
  {
    id: "marketing-collateral",
    category: "collateral",
    tag: "MARKETING COLLATERAL",
    badge: "TACTILE LUXURY",
    subtitle: "PRINT & PACKAGING DESIGN",
    title: "Editorial Marketing Collaterals & Packaging",
    description:
      "Tactile print bibles, luxury product packaging, bespoke corporate brochures, flyers, and premium business collateral designed for tactile permanence.",
    metricVal: "100%",
    metricLabel: "Print Perfection",
    image:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Inconsistent print materials caused disconnected customer touchpoints and diluted brand trust during in-person sales pitches.",
    solution:
      "Standardized all physical deliverables with bespoke typography, foil-stamped textures, and unified layout systems.",
    secondaryMetricVal: "15,000+",
    secondaryMetricLabel: "Collaterals Distributed",
  },
];

export default function WorksArchive() {
  const [filter, setFilter] = useState<
    "all" | "web" | "branding" | "social" | "stall" | "product" | "collateral"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  const handleFilterClick = (
    newFilter: "all" | "web" | "branding" | "social" | "stall" | "product" | "collateral"
  ) => {
    setFilter(newFilter);
  };

  const handleOpenDrawer = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDrawer = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto border-t border-line scroll-mt-24"
    >
      {/* Anchor alias for existing #works links */}
      <span id="works" className="sr-only" />

      {/* Header and Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
            Selected Works. <span className="italic font-normal">Measurable Impact.</span>
          </h2>
          <p className="font-sans text-sm text-ink-muted mt-2 max-w-lg">
            Explore our featured portfolio across web development, branding, social marketing, stall design, and commercial media.
          </p>
        </div>

        {/* Clean Filter Pills matching zeromarcom.com */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {[
            { label: "All Works", val: "all" as const },
            { label: "Web Design", val: "web" as const },
            { label: "Branding", val: "branding" as const },
            { label: "Social Media", val: "social" as const },
            { label: "Stall Design", val: "stall" as const },
            { label: "Product Shoot", val: "product" as const },
            { label: "Collateral", val: "collateral" as const },
          ].map((item) => (
            <button
              key={item.val}
              type="button"
              onClick={() => handleFilterClick(item.val)}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                filter === item.val
                  ? "bg-ink text-white"
                  : "bg-canvas text-ink-muted hover:text-ink hover:bg-line/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-white rounded-3xl p-6 sm:p-8 border border-line editorial-shadow transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-canvas border border-line mb-6">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md font-mono text-[10px] text-ink font-medium">
                  {project.tag}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md font-mono text-[10px] text-cobalt font-medium">
                  {project.badge}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleOpenDrawer(project)}
                className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-ink text-white font-mono text-xs font-semibold tracking-wide opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 shadow-xl hover:bg-cobalt cursor-pointer"
              >
                <span>QUICK VIEW</span>
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-xs text-cobalt uppercase mb-1 font-semibold">
                  {project.subtitle}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal group-hover:text-cobalt transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-ink-muted mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="text-right shrink-0">
                <div className="font-mono text-xl font-bold text-ink">{project.metricVal}</div>
                <div className="font-mono text-[10px] text-ink-muted uppercase">
                  {project.metricLabel}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Quick View Drawer Modal */}
      {selectedProject && (
        <div
          onClick={handleCloseDrawer}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 flex justify-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl h-full bg-white p-8 sm:p-12 overflow-y-auto transform transition-transform duration-500 ease-out flex flex-col justify-between border-l border-line shadow-2xl animate-in slide-in-from-right"
          >
            <div>
              <div className="flex items-center justify-between border-b border-line pb-6 mb-8">
                <span className="font-mono text-xs text-cobalt uppercase font-semibold">
                  {selectedProject.tag}
                </span>
                <button
                  type="button"
                  onClick={handleCloseDrawer}
                  aria-label="Close Case Study"
                  className="w-8 h-8 rounded-full border border-line flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal mb-4">
                {selectedProject.title}
              </h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="space-y-6 border-t border-line pt-6 font-sans text-xs sm:text-sm">
                <div>
                  <h4 className="font-mono text-xs text-ink uppercase mb-2 font-semibold">
                    The Strategic Challenge
                  </h4>
                  <p className="text-ink-muted leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-ink uppercase mb-2 font-semibold">
                    The Zero Execution
                  </h4>
                  <p className="text-ink-muted leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 my-8 p-6 rounded-2xl bg-canvas border border-line">
                <div>
                  <div className="font-mono text-2xl font-bold text-ink">
                    {selectedProject.metricVal}
                  </div>
                  <div className="font-mono text-[10px] text-ink-muted uppercase">
                    {selectedProject.metricLabel}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl font-bold text-cobalt">
                    {selectedProject.secondaryMetricVal}
                  </div>
                  <div className="font-mono text-[10px] text-ink-muted uppercase">
                    {selectedProject.secondaryMetricLabel}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-line flex items-center justify-between font-mono text-xs">
              <button
                type="button"
                onClick={handleCloseDrawer}
                className="text-ink-muted hover:text-ink cursor-pointer"
              >
                CLOSE BRIEF
              </button>
              <a
                href="#contact"
                onClick={handleCloseDrawer}
                className="px-5 py-2.5 rounded-full bg-ink text-white hover:bg-cobalt transition-colors flex items-center gap-1.5"
              >
                <span>INQUIRE SIMILAR SCOPE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
