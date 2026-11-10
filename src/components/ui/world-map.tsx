"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

// Module-level singleton cache so DottedMap is never recomputed across renders or route changes
let cachedLightSvgDataUri: string | null = null;
let cachedDarkSvgDataUri: string | null = null;

function getCachedMapDataUri(isDark: boolean): string {
  if (isDark) {
    if (!cachedDarkSvgDataUri) {
      const map = new DottedMap({ height: 100, grid: "diagonal" });
      const svg = map.getSVG({
        radius: 0.22,
        color: "#FFFFFF40",
        shape: "circle",
        backgroundColor: "black",
      });
      cachedDarkSvgDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }
    return cachedDarkSvgDataUri;
  } else {
    if (!cachedLightSvgDataUri) {
      const map = new DottedMap({ height: 100, grid: "diagonal" });
      const svg = map.getSVG({
        radius: 0.22,
        color: "#00000040",
        shape: "circle",
        backgroundColor: "white",
      });
      cachedLightSvgDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }
    return cachedLightSvgDataUri;
  }
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [svgDataUri, setSvgDataUri] = useState<string | null>(() =>
    isDark ? cachedDarkSvgDataUri : cachedLightSvgDataUri
  );

  const activeSvgUri = (isDark ? cachedDarkSvgDataUri : cachedLightSvgDataUri) ?? svgDataUri;

  // Defer heavy DottedMap generation until the map section approaches the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const existing = isDark ? cachedDarkSvgDataUri : cachedLightSvgDataUri;
    if (existing) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          const compute = () => {
            setSvgDataUri(getCachedMapDataUri(isDark));
          };
          if (typeof window !== "undefined" && "requestIdleCallback" in window) {
            (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(compute);
          } else {
            setTimeout(compute, 16);
          }
        }
      },
      { rootMargin: "500px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isDark]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans"
    >
      {activeSvgUri && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={activeSvgUri}
          className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="world map"
          height="495"
          width="1056"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.35 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
