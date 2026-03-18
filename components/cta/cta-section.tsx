"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"

export function CtaSection({ onOpenModal }: { onOpenModal: () => void }) {
  const { ref, isVisible } = useFadeIn()

  return (
    /* FIXED: Stripped internal pt/pb. 
       We let the Page Wrapper handle the spacing to ensure the distance 
       from the previous section (e.g., Stats) is identical to the Hero-to-Services gap.
    */
    <section id="contact" className="relative overflow-hidden bg-transparent py-0">
      <div
        ref={ref}
        className={cn(
          /* FIXED: Removed -mt-16 to keep the vertical rhythm natural. 
             Adjusted the max-w to 5xl for a more cinematic feel on desktop. 
          */
          "relative z-10 mx-auto max-w-5xl px-6 text-center transition-all duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        {/* Spartan Tagline */}
        <p className="text-xs font-black uppercase tracking-[0.4em] text-white/60 mb-6">
          The Final Transformation
        </p>

        {/* High-Contrast Heading */}
        <h2 className="text-balance text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
          Your Dream Landscape
          <br />
          <span className="opacity-30 italic font-medium">Starts Here.</span>
        </h2>

        {/* Refined Subtext - Matches the Spartan border-y logic from your earlier drafts */}
        <p className="mx-auto mt-10 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed uppercase tracking-wide font-bold border-y border-white/10 py-10">
          Schedule your complimentary on-site consultation and discover how we
          transform outdoor spaces into architectural masterpieces.
        </p>

        {/* Spartan Buttons: Updated to match Hero/Service styles */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={onOpenModal}
            /* FIXED: Added rounded-full to match the Hero button style */
            className="group relative flex items-center gap-3 bg-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-[#da6d42] transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Book Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          <a
            href="tel:+12035550142"
            /* FIXED: Added rounded-full and matched padding for symmetry */
            className="flex items-center px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            Call (203) 555-0142
          </a>
        </div>

        {/* Footer Meta */}
        <p className="mt-16 text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
          Complimentary &middot; No Obligation &middot; Trinidad & Tobago
        </p>
      </div>
    </section>
  )
}