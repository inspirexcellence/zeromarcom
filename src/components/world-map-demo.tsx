"use client";

import Link from "next/link";
import { ArrowUpRight, Calculator, Mail } from "lucide-react";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapDemo() {
  return (
    <section className="py-20 sm:py-28 dark:bg-black bg-white w-full border-t border-line/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-10 sm:mb-14">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-white text-ink tracking-tight">
          Global{" "}
          <span className="text-cobalt">
            {"Connectivity.".split("").map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base md:text-lg text-ink-muted max-w-2xl mx-auto mt-4 sm:mt-5 leading-relaxed">
          Ready to zero in on your goals and build something unignorable? Connect seamlessly with our Kolkata HQ or USA coordination node from anywhere in the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mt-7 sm:mt-9">
          <Link
            href="/contact"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-ink text-white font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-cobalt transition-all duration-300 shadow-md cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/scope-lab"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-canvas border border-line text-ink font-mono text-xs sm:text-sm font-semibold tracking-wider hover:border-cobalt hover:text-cobalt transition-all duration-300 cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-cobalt" />
            <span>ESTIMATE YOUR SCOPE</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <WorldMap
          lineColor="#0ea5e9"
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 22.5726, lng: 88.3639 }, // Kolkata HQ
            },
            {
              start: { lat: 22.5726, lng: 88.3639 }, // Kolkata HQ
              end: { lat: 40.7128, lng: -74.006 }, // New York (USA Hub)
            },
            {
              start: { lat: 22.5726, lng: 88.3639 }, // Kolkata HQ
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />
      </div>
    </section>
  );
}
