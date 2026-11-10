"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  // On route change: immediately scroll to top and refresh dimensions
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
      lenisRef.current.lenis.resize();
      ScrollTrigger.refresh();
    }
  }, [pathname]);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.08, // Buttery soft inertia damping (eliminates jerking)
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
        autoRaf: true, // Always true so scroll pad / trackpad is NEVER blocked
        anchors: true,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
