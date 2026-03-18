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
    <section className="relative min-h-screen overflow-hidden bg-[#da6d42] pt-32 pb-8 lg:pt-48 lg:pb-20" id="hero" >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-32"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column -- Text Content */}
          <div
            className={cn(
              "flex flex-col transition-all duration-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
              {businessConfig.tagline}
            </p>

            <ReviewBadge />

            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Vision,{" "}
              <span className="text-white">Our Soil.</span>
              <br />
              Bespoke Outdoor Living.
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
              {businessConfig.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenModal}
                className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#da6d42] transition-all duration-200 hover:bg-white/90 hover:shadow-xl"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <a
                href="#services"
                className="rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#da6d42]"
              >
                Our Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/70">
                <Award className="h-4 w-4 text-white" />
                <span className="text-xs font-medium">Award Winning</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2 text-white/70">
                <Shield className="h-4 w-4 text-white" />
                <span className="text-xs font-medium">Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Right Column -- Floating Glass Card */}
          <div
            className={cn(
              "relative flex items-center justify-center transition-all duration-700 delay-200",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
          >
            {/* Ambient glow */}
            <div className="absolute -inset-8 rounded-[48px] bg-white/5 blur-3xl" />

            {/* Main Image Card */}
            <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/images/landscape2.webp"
                  alt="Luxury outdoor landscaping"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="mt-4 flex items-center justify-between px-3 pb-2">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Modern luxury, precision greens</p>
                  <p className="text-[11px] text-white/60">Greenwich Estate, CT</p>
                </div>
                <span className="rounded-full bg-white/20 border border-white/30 px-3 py-1 text-[11px] font-bold text-white uppercase">
                  Featured Project
                </span>
              </div>
            </div>

            {/* ADJUSTABLE STAT BOX */}
            <div className={cn(
              "absolute z-20 flex flex-col justify-center",
              "rounded-2xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl",

              // --- POSITION CONTROLS ---
              "-bottom-19", // VERTICAL: Increase number to go up, use negative to go down
              "left-0",     // HORIZONTAL: Change to "left-4", "right-0", etc.

              // --- SIZE CONTROLS ---
              "w-60",       // WIDTH
              "h-18"        // HEIGHT
            )}>
              <div className="px-8 text-center">
                <p className="text-3xl font-black text-white leading-none">
                  {businessConfig.projectsCompleted}+
                </p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Estates Transformed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#50C878] to-transparent opacity-50" />
    </section>
  )
}