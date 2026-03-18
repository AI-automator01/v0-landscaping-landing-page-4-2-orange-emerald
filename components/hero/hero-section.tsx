"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"
import { ArrowRight, Award, Shield } from "lucide-react"
import { ReviewBadge } from "./review-badge"
import { businessConfig } from "@/lib/config"

export function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="relative bg-[#da6d42]" id="hero">
      {/* Subtle Spartan Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* FIXED: Standardized vertical padding (py-10 logic) */}
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20 py-16 lg:py-24">

          {/* Left Column: Typography */}
          <div className={cn(
            "flex flex-col transition-all duration-1000 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <ReviewBadge />

            <p className="mt-6 mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-white/70">
              {businessConfig.tagline}
            </p>

            <h1 className="text-balance text-5xl font-black leading-[0.85] tracking-tighter text-white sm:text-6xl lg:text-8xl uppercase">
              Your Vision, <br />
              <span className="opacity-40 italic font-medium">Our Soil.</span>
            </h1>

            <p className="mt-8 max-w-lg text-pretty text-base font-bold uppercase tracking-wide leading-relaxed text-white/80">
              {businessConfig.heroDescription}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <button
                onClick={onOpenModal}
                className="group flex items-center gap-3 rounded-full bg-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-[#da6d42] transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="rounded-full border border-white/30 px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex items-center gap-8">
              <div className="flex items-center gap-3 text-white/60">
                <Award className="h-4 w-4 text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest">Award Winning</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-3 text-white/60">
                <Shield className="h-4 w-4 text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest">Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Featured Project Card */}
          <div className={cn(
            "relative flex items-center justify-center transition-all duration-1000 delay-300 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          )}>
            {/* Ambient Glow */}
            <div className="absolute -inset-12 rounded-[64px] bg-white/5 blur-3xl" />

            {/* Main Image Container */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-[40px] border border-white/20 bg-white/5 p-3 shadow-3xl backdrop-blur-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px]">
                <Image
                  src="/images/landscape2.webp"
                  alt="Landscaping"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Symmetrical Featured Badge */}
                <span className="absolute bottom-8 right-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-5 py-2 text-[10px] font-black text-white uppercase tracking-[0.3em]">
                  Featured
                </span>
              </div>
            </div>

            {/* FIXED: The Symmetrical Stat Box (image_5c6846.png fix) */}
            <div className={cn(
              "absolute z-20 flex flex-col items-center justify-center",
              "rounded-[28px] border border-white/30 bg-white/10 shadow-2xl backdrop-blur-2xl",
              "bottom-8 left-8 w-52 h-32 p-6"
            )}>
              <p className="text-4xl font-black text-white leading-none tracking-tighter">
                {businessConfig.projectsCompleted}+
              </p>
              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/70 text-center leading-tight">
                Estates <br /> Transformed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}