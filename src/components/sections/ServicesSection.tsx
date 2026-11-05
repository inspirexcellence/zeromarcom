"use client";

import { motion } from "motion/react";
import {
  Globe,
  TrendingUp,
  Search,
  Paintbrush,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom, lightning-fast, high-converting websites and web applications built with modern frameworks and scalable architecture.",
    tag: "Core Service",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Performance-focused marketing strategies, paid media acquisition, conversion rate optimization (CRO), and growth funnels.",
    tag: "Growth",
    color: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-500",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Technical audits, keyword authority strategy, on-page optimization, and high-quality backlink building to dominate search ranks.",
    tag: "Rankings",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: Paintbrush,
    title: "Branding & UI/UX Design",
    description:
      "Distinctive brand identities, logos, style guides, and user-centric wireframes designed to captivate your target audience.",
    tag: "Design",
    color: "from-violet-500/20 to-pink-500/20",
    iconColor: "text-violet-500",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First",
    description:
      "Pixel-perfect interfaces tailored for all viewports, ensuring flawless performance across smartphones, tablets, and desktops.",
    tag: "Performance",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: ShieldCheck,
    title: "Website Maintenance & Support",
    description:
      "Continuous speed optimization, security monitoring, content updates, and 24/7 technical assistance for peace of mind.",
    tag: "Reliability",
    color: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-500",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white mb-4">
            Transformative Solutions for Forward-Thinking Brands
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            From visionary website engineering to hyper-targeted digital marketing, we deliver end-to-end excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-8 hover:shadow-xl hover:shadow-neutral-950/5 dark:hover:shadow-black/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center ${service.iconColor} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/60 dark:border-neutral-800 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
