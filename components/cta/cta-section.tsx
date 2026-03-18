"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { businessConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"

export function CtaSection({ onOpenModal }: { onOpenModal: () => void }) {
  const { ref, isVisible } = useFadeIn()

  return (
    <section className="relative bg-[#da6d42] py-24 lg:py-32 overflow-hidden" id="contact">
      {/* Subtle Spartan Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.1]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Side: The Pitch */}
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              Ready to <br />
              <span className="opacity-40 italic font-medium text-white">Transform?</span>
            </h2>
            <p className="mt-8 max-w-md text-lg font-bold uppercase tracking-wider text-white/80 leading-relaxed">
              Elevate your estate with Connecticut’s premier landscape architects.
              Limited slots available for the 2026 season.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button
                onClick={onOpenModal}
                className="group flex items-center gap-3 rounded-full bg-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-[#da6d42] transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </button>

              <a
                href={`tel:${businessConfig.phone}`}
                className="rounded-full border border-white/30 px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                {businessConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Side: Dynamic Services Grid (Pulls from config.ts) */}
          <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            {businessConfig.services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  {service}
                </span>
              </div>
            ))}

            {/* The "More" Card */}
            <div className="flex items-center gap-4 rounded-2xl border border-dashed border-white/20 bg-transparent p-5">
              <span className="text-[10px]