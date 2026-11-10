import IntroSplash from "@/components/sections/IntroSplash";
import HeroShowreel from "@/components/sections/HeroShowreel";
import FourPillars from "@/components/sections/FourPillars";
import FeaturedServices from "@/components/sections/FeaturedServices";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import AboutTeaser from "@/components/sections/AboutTeaser";
import BackgroundCubesGridDemo from "@/components/background-cubes-grid-demo";
import HomeCtaBanner from "@/components/sections/HomeCtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain text-ink">
      {/* 1. Typographic Intro Splash Sequence */}
      <IntroSplash />

      {/* 2. Hero: 100vw, 100vh Fullscreen Autoplay Showreel Video */}
      <HeroShowreel />

      {/* 3. Why Brands Work With Us (Marquee Entrance, Cobalt Arch Portal & Signature Interactive Deck) */}
      <FourPillars />

      {/* 4. Comprehensive Digital Solutions (3 Core Divisions Teaser) */}
      <FeaturedServices />

      {/* 5. Selected Works (Top Project Highlights) */}
      <FeaturedWorks />

      {/* 6. Agency Manifesto & Masterminds Teaser */}
      <AboutTeaser />

      {/* 7. Interactive 3D Isometric Rippling Cubes & Omnichannel Sync Section */}
      <BackgroundCubesGridDemo />

      {/* 8. Conversion Call-to-Action Strip */}
      <HomeCtaBanner />
    </div>
  );
}
