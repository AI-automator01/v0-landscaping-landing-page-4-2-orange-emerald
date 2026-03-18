"use client"

import { Home, DollarSign, Clock, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"

const stats = [
  {
    icon: Home,
    value: "142+",
    label: "Estates Transformed",
    description: "Premium properties across the Northeast",
  },
  {
    icon: DollarSign,
    value: "$4.2M",
    label: "Avg. Value Added",
    description: "Measurable return on investment",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Years of Expertise",
    description: "Award-winning design since 2009",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Client Rating",
    description: "Based on 200+ verified reviews",
  },
]

export function StatsSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <div id="stats" className="relative py-10 overflow-hidden bg-transparent">
      <div
        ref={ref}
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-6 transition-all duration-1000",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        {/* Glass Container for the Stats Grid */}
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 rounded-[40px] border border-white/50 bg-white/10 backdrop-blur-2xl p-12 shadow-2xl">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center text-center px-4",
                // On mobile 2-col grid: right border on left-column items (0, 2) but not items in last row right col
                index === 0 && "border-r border-white/20 md:border-r-0",
                index === 2 && "border-r border-white/20 md:border-r-0",
                // On desktop 4-col: right border on all but last
                index < stats.length - 1 && "md:border-r md:border-white/30"
              )}
            >
              {/* 1. Pure White Icon Container */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 border border-white/20 shadow-inner">
                <stat.icon className="h-6 w-6 text-white stroke-[2px]" />
              </div>

              {/* 2. High-Contrast White Number */}
              <span className="text-4xl font-black tracking-tighter text-white uppercase">
                {stat.value}
              </span>

              {/* 3. Spartan Labels */}
              <span className="mt-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/90">
                {stat.label}
              </span>

              {/* 4. Softened Subtext */}
              <span className="mt-2 text-[11px] leading-relaxed text-white/60 max-w-[160px] font-medium">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
