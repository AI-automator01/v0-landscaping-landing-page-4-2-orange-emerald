"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"
import { ArrowRight, Award, Shield } from "lucide-react"
import { ReviewBadge } from "./review-badge"
import { businessConfig } from "@/lib/config"
import { motion } from "framer-motion"

export function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="relative overflow-hidden bg-[#da6d42]" id="hero">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div ref={ref} className="relative z-10 mx-auto flex max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16 pt-28 pb-10 lg:pt-32 lg:pb-16">

          {/* Left Column */}
          <div className={cn("flex flex-col transition-all duration-700", isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
            <ReviewBadge />
            <p className="mt-4 mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">{businessConfig.tagline}</p>

            {/* UPDATED: Color change applied to 'Our Soil.' */}
            <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
              Your Vision,
              <motion.span
                initial={{ opacity: 0, filter: "blur(12px)", y: 5 }}
                animate={isVisible ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                className="inline-block text-[#4a3728]"
              >
                Our Soil.
              </motion.span>
              <br />
              Bespoke Outdoor Living.
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/80 sm:text-lg">{businessConfig.heroDescription}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button onClick={onOpenModal} className="group flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#da6d42] transition-all duration-200 hover:bg-white/90">
                Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a href="#services" className="rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#da6d42]">Our Services</a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/70">
                <Award className="h-4 w-4 text-white" /><span className="text-xs font-medium uppercase">Award Winning</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2 text-white/70">
                <Shield className="h-4 w-4 text-white" /><span className="text-xs font-medium uppercase">Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={cn(
            "relative flex flex-col items-center justify-center gap-6 transition-all duration-700 delay-200",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <div className="absolute -inset-8 rounded-[48px] bg-white/5 blur-3xl" />

            <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
                <Image src="/images/landscape2.webp" alt="Luxury estate landscaping by Veridian Custom Landscapes in Trinidad and Tobago" fill className="object-cover" priority />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="mt-4 flex items-center justify-between px-3 pb-2">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Modern Luxury Maraval Estate</p>
                  <p className="text-[11px] text-white/60">Port of Spain, Trinidad</p>
                </div>
                <span className="rounded-full bg-white/20 border border-white/30 px-3 py-1 text-[11px] font-bold text-white uppercase">Featured</span>
              </div>
            </div>

            <div className={cn(
              "flex flex-col items-center justify-center text-center",
              "rounded-[24px] border border-white/20 bg-white/10 shadow-3xl backdrop-blur-xl",
              "w-full max-w-lg p-8"
            )}>
              <p className="text-4xl font-black text-white leading-none">
                {businessConfig.projectsCompleted}+
              </p>
              <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                Estates Transformed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
