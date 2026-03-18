
"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"

export function CtaSection({ onOpenModal }: { onOpenModal: () => void }) {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="contact" className="relative overflow-hidden bg-transparent py-24">
      <div
        ref={ref}
        className={cn(
          "relative z-10 mx-auto max-w-3xl px-6 text-center transition-all duration-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-veridian-gold">
          Ready to Begin?
        </p>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-veridian-green sm:text-4xl lg:text-5xl">
          Your Dream Landscape
          <br />
          <span className="text-veridian-gold">Starts With a Conversation</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-muted-foreground leading-relaxed">
          Schedule your complimentary on-site consultation and discover how Veridian can
          transform your outdoor space into something extraordinary.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={onOpenModal}
            className="group flex items-center gap-2 rounded-full bg-veridian-green px-10 py-4 text-sm font-semibold text-veridian-cream transition-all duration-200 hover:bg-veridian-green-light hover:shadow-xl hover:shadow-veridian-green/15"
          >
            Schedule a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <a
            href="tel:+12035550142"
            className="rounded-full border-2 border-veridian-green/20 px-8 py-4 text-sm font-medium text-veridian-green transition-all duration-200 hover:border-veridian-green hover:bg-veridian-green hover:text-veridian-cream"
          >
            Call (203) 555-0142
          </a>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Complimentary consultation &middot; No obligation &middot; Serving Fairfield & Westchester Counties
        </p>
      </div>
    </section>
  )
}