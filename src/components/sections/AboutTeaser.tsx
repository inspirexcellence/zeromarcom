"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const GLOBE_MARKERS: GlobeMarker[] = [
  {
    lat: 22.5726,
    lng: 88.3639,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "Kolkata Hub (India)",
  },
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "USA Hub (New York)",
  },
  {
    lat: 37.7749,
    lng: -122.4194,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "San Francisco, CA",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "London, UK",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Dubai, UAE",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "Singapore",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Tokyo, Japan",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Sydney, Australia",
  },
];

const GLOBE_CONFIG = {
  atmosphereColor: "#4da6ff",
  atmosphereIntensity: 20,
  bumpScale: 5,
  autoRotateSpeed: 0.3,
  enableZoom: false,
  enablePan: false,
};

export default function AboutTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({
    leadership: 0,
    deployments: 0,
    satisfaction: 0,
    hubs: 0,
  });

  useGSAP(
    () => {
      const obj = {
        leadership: 0,
        deployments: 0,
        satisfaction: 0,
        hubs: 0,
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            leadership: 20,
            deployments: 150,
            satisfaction: 98,
            hubs: 2,
            duration: 2.2,
            ease: "power2.out",
            onUpdate: () => {
              setCounts({
                leadership: Math.floor(obj.leadership),
                deployments: Math.floor(obj.deployments),
                satisfaction: Math.floor(obj.satisfaction),
                hubs: Math.floor(obj.hubs),
              });
            },
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 w-full max-w-[1440px] xl:max-w-[1520px] mx-auto select-none"
    >
      <div className="relative min-h-[620px] sm:min-h-[660px] lg:min-h-[680px] rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] bg-white border border-line/80 p-6 pb-48 sm:p-10 sm:pb-52 md:p-14 lg:p-16 shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col justify-between">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

        {/* Left Narrative & CTA */}
        <div className="relative z-20 max-w-2xl lg:max-w-[56%]">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] text-ink font-bold tracking-tight leading-[1.14]">
            Where Originality Meets Innovation<span className="text-cobalt">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-ink-muted mt-5 sm:mt-6 leading-[1.75]">
            Led by award-winning Business Coach <strong>Prerona Roy</strong> (20 years transforming leaders and organizations) and Creative Director <strong>Lt Col Abhinandan Roy</strong> (Military Veteran &amp; IIM Kolkata Alumnus), ZEROMARCOM synthesizes disciplined execution with cutting-edge digital craftsmanship.
          </p>
          <div className="mt-7 sm:mt-9">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-ink text-white font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-cobalt transition-all duration-300 hover:scale-[1.02] shadow-md cursor-pointer"
            >
              <span>MEET THE MASTERMINDS &amp; STORY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Metrics in a Clean Horizontal Line with Smooth Counting Animation (Zero Overlap) */}
        <div className="relative z-20 pt-8 sm:pt-10 mt-8 sm:mt-12 border-t border-line/70 w-full max-w-2xl lg:max-w-[56%]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
            <div>
              <div className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink mb-1.5 tracking-tight font-mono">
                {counts.leadership}+
              </div>
              <div className="font-sans text-xs sm:text-sm text-ink-muted leading-snug">
                Years Combined Leadership
              </div>
            </div>

            <div>
              <div className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink mb-1.5 tracking-tight font-mono">
                {counts.deployments}+
              </div>
              <div className="font-sans text-xs sm:text-sm text-ink-muted leading-snug">
                Deployments Executed
              </div>
            </div>

            <div>
              <div className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink mb-1.5 tracking-tight font-mono">
                {counts.satisfaction}%
              </div>
              <div className="font-sans text-xs sm:text-sm text-ink-muted leading-snug">
                Client Satisfaction
              </div>
            </div>

            <div>
              <div className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink mb-1.5 tracking-tight font-mono">
                {counts.hubs}
              </div>
              <div className="font-sans text-xs sm:text-sm text-ink-muted leading-snug">
                Global Hubs (Kolkata &amp; USA)
              </div>
            </div>
          </div>
        </div>

        {/* 3D Interactive Rotating Globe - Exact Demo Sizing & Positioning in Bottom-Right Corner */}
        <div className="absolute -right-72 -bottom-[25rem] sm:-right-64 sm:-bottom-96 md:-bottom-80 md:-right-72 lg:-right-64 lg:-bottom-72 size-160 md:size-180 lg:size-200 z-10 pointer-events-auto">
          <Globe3D
            className="h-full w-full"
            markers={GLOBE_MARKERS}
            config={GLOBE_CONFIG}
          />
        </div>
      </div>
    </section>
  );
}
