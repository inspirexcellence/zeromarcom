import type { Metadata } from "next";
import ContactTerminal from "@/components/sections/ContactTerminal";

export const metadata: Metadata = {
  title: "Contact Us — Kolkata HQ & USA Node | ZEROMARCOM",
  description:
    "Initiate transmission with ZEROMARCOM. Reach our Kolkata headquarters at 2 Dum Dum Park or direct phone lines for project inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-ink font-bold tracking-tight leading-[1.08]">
          Initiate Transmission<span className="text-cobalt">.</span> <br />
          Let&apos;s Build Together.
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-muted mt-5 max-w-2xl leading-relaxed">
          Connect directly with our leadership team in Kolkata or our USA coordination node. We respond to all verified project transmissions within 24 business hours.
        </p>
      </div>

      {/* Full Contact Terminal */}
      <ContactTerminal />
    </div>
  );
}
