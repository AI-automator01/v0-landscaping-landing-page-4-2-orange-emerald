"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"

export function CtaSection({ onOpenModal }: { onOpenModal: () => void }) {
  const { ref, isVisible } = useFadeIn()

  return (
    // CHANGED: Reduced padding-top from py-32 to pt-12 to pull the whole block up
    <section id="contact" className="relative overflow-hidden bg-transparent pt-12 pb-32">
      <div
        ref={ref}
        className={cn(
          // CHANGED: Added -mt-16 to shift the content specifically higher within the section
          // CHANGED: Adjusted translate-y-12 to translate-y-8 for a tighter fade-in animation
          "relative z-10 mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ease-out -mt-16",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        {/* Spartan Tagline */}
        <p className="text-xs font-black uppercase tracking-[0.4em] text-white/60 mb-8">
          The Final Transformation
        </p>

        {/* High-Contrast Heading */}
        <h2 className="text-balance text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
          Your Dream Landscape
          <br />
          <span className="opacity-40 italic font-medium">Starts Here.</span>
        </h2>

        {/* Refined Subtext */}
        <p className="mx-auto mt-10 max-w-2xl text-lg text-white/70 leading-relaxed uppercase tracking-wide font-bold border-y border-white/10 py-8">
          Schedule your complimentary on-site consultation and discover how we
          transform outdoor spaces into architectural masterpieces.
        </p>

        {/* Spartan Buttons: Sharp Edges + Glass */}
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <button
            onClick={onOpenModal}
            className="group relative flex items-center gap-3 bg-white px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-[#da6d42] transition-all duration-500 hover:bg-white/90 shadow-2xl overflow-hidden"
          >
            {/* Hover Line Effect */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#da6d42] transition-all duration-500 group-hover:w-full" />
            Book Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          <a
            href="tel:+12035550142"
            className="flex items-center px-10 py-6 text-xs font-black uppercase tracking-[0.3em] text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-500"
          >
            Call (203) 555-0142
          </a>
        </div>

        {/* Footer Meta */}
        <p className="mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
          Complimentary &middot; No Obligation &middot; Trinidad & Tobago
        </p>
      </div>
    </section>
  )
}