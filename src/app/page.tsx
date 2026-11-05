import IntroSplash from "@/components/sections/IntroSplash";
import HeroShowreel from "@/components/sections/HeroShowreel";
import ClientMarquee from "@/components/sections/ClientMarquee";
import FourPillars from "@/components/sections/FourPillars";
import FeaturedServices from "@/components/sections/FeaturedServices";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import AboutTeaser from "@/components/sections/AboutTeaser";
import HomeCtaBanner from "@/components/sections/HomeCtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain text-ink">
      {/* 1. Typographic Intro Splash Sequence */}
      <IntroSplash />

      {/* 2. Hero: 100vw, 100vh Fullscreen Autoplay Showreel Video */}
      <HeroShowreel />

      {/* 3. Marquee Recognition Ticker */}
      <ClientMarquee />

      {/* 4. Why Brands Work With Us (Signature Interactive Fanned Deck) */}
      <FourPillars />

      {/* 5. Comprehensive Digital Solutions (3 Core Divisions Teaser) */}
      <FeaturedServices />

      {/* 6. Selected Works (Top Project Highlights) */}
      <FeaturedWorks />

      {/* 7. Agency Manifesto & Masterminds Teaser */}
      <AboutTeaser />

      {/* 8. Conversion Call-to-Action Strip */}
      <HomeCtaBanner />
    </div>
  );
}
