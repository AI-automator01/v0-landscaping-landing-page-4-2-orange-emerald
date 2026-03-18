"use client"

import { useState } from "react"
import Image from "next/image"
import { AlertTriangle, Wrench, TrendingUp, ChevronRight, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"

// --- TYPES ---
type Category = "All" | "Hardscaping" | "Garden Design" | "Lighting"

interface CaseStudy {
  id: number
  title: string
  location: string
  category: Category
  problem: string
  solution: string
  result: string
  beforeLabel: string
  afterLabel: string
  beforeImage: string
  afterImage: string
}

// --- DATA ---
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "The Whitfield Estate Revival",
    location: "Greenwich, CT",
    category: "Hardscaping",
    problem: "Sloped backyard with severe drainage issues causing erosion and flooding near the foundation after every storm.",
    solution: "Engineered tiered retaining walls with integrated French drains and a naturalistic dry creek bed to redirect water flow.",
    result: "Increased usable outdoor square footage by 40% and eliminated all drainage complaints. Property value rose by $320K.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImage: "/images/case-study-4-before.jpg",
    afterImage: "/images/case-study-4-after.jpg",
  },
  {
    id: 2,
    title: "The Chen Waterfront Oasis",
    location: "Darien, CT",
    category: "Garden Design",
    problem: "Barren waterfront lot with salt-damaged soil and no privacy screening from neighboring properties.",
    solution: "Salt-tolerant specimen plantings, a custom privacy hedge system, and a Japanese-inspired meditation garden with a reflection pool.",
    result: "Created a fully private, resort-like retreat. Featured in Connecticut Cottages & Gardens magazine. Appraised $500K above purchase price.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImage: "/images/case-study-2-before.jpg",
    afterImage: "/images/case-study-2-after.jpg",
  },
  {
    id: 3,
    title: "Morrison Ridgefield Transformation",
    location: "Ridgefield, CT",
    category: "Lighting",
    problem: "A sprawling estate with no landscape lighting, making the property feel unwelcoming and unsafe after dark.",
    solution: "Full architectural LED lighting system with smart controls: uplighting on specimen trees, path lighting, and moonlighting from canopy oaks.",
    result: "Reduced outdoor incidents by 100%. Property now hosts evening events year-round. Energy cost: only $18/month with LED efficiency.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImage: "/images/case-study-3-before.jpg",
    afterImage: "/images/case-study-3-after.jpg",
  },
]

const categories: Category[] = ["All", "Hardscaping", "Garden Design", "Lighting"]

// --- SUB-COMPONENTS ---

function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel, afterLabel }: {
  beforeImage: string; afterImage: string; beforeLabel: string; afterLabel: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => setSliderPosition(parseFloat(e.target.value))

  return (
    <div className="relative w-full overflow-hidden bg-muted group/slider">
      <div className="relative aspect-video w-full">
        {/* Background Image (Before) */}
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Foreground Image (After) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${100 - sliderPosition}%)` }}
        >
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* --- FIXED SLIDER UI --- */}
        <div
          className="absolute inset-y-0 flex w-[4px] items-center justify-center bg-white z-20"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* The Handle: Forced to be a perfect 40px circle */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-2xl transition-transform duration-200 group-hover/slider:scale-110">

            {/* The Blue Dot: Forced to be a perfect 16px circle with glow */}
            <div className="h-4 w-4 shrink-0 rounded-full bg-[#007AFF] shadow-[0_0_12px_rgba(0,122,255,0.6)]" />

          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 z-30 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{beforeLabel}</span>
        </div>
        <div className="absolute top-3 right-3 z-30 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{afterLabel}</span>
        </div>

        {/* Range Input Control */}
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 z-40 h-full w-full cursor-col-resize appearance-none bg-transparent"
        />
      </div>
    </div>
  )
}
function PhaseIcon({ phase }: { phase: "problem" | "solution" | "result" }) {
  const config = {
    problem: { icon: AlertTriangle, bg: "bg-red-900/10", text: "text-red-800/60" },
    solution: { icon: Wrench, bg: "bg-[#8C6D2D]/20", text: "text-[#8C6D2D]" },
    result: { icon: TrendingUp, bg: "bg-veridian-green/100", text: "text-black" },
  }
  const { icon: Icon, bg, text } = config[phase]
  return (
    <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg border border-black/10", bg)}>
      <Icon className={cn("h-4 w-4", text)} />
    </div>
  )
}

function CaseStudyCard({ study, index, isVisible }: { study: CaseStudy; index: number; isVisible: boolean }) {
  return (
    <div className={cn(
      "group flex flex-col overflow-hidden rounded-[40px] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl",
      "bg-[#E2E8E4] border border-black/[0.03]", // The light grey background from your image
      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
    )} style={{ transitionDelay: `${200 + index * 100}ms` }}>

      <div className="relative w-full overflow-hidden">
        <BeforeAfterSlider
          beforeImage={study.beforeImage}
          afterImage={study.afterImage}
          beforeLabel={study.beforeLabel}
          afterLabel={study.afterLabel}
        />
      </div>

      <div className="flex flex-col gap-3 px-10 pt-10 pb-8 border-b border-veridian-green/5">
        {/* Adjusted Tag: Matches your hardscaping badge color */}
        <span className="inline-flex w-fit items-center rounded-full bg-[#8C6D2D]/10 border border-[#8C6D2D]/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#8C6D2D]">
          {study.category}
        </span>

        {/* Softened Title: Changed from white to 85% opacity for a more natural integration */}
        <h3 className="text-3xl font-bold tracking-tight !text-[#1A3026] leading-[1.1]">
          {study.title}
        </h3>

        {/* Darkened Location: Increased contrast against light grey background */}
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#1A3026]/60">
          {study.location}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-8 px-10 py-10">
        <div className="flex gap-5">
          <PhaseIcon phase="problem" />
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-900/60">The Problem</p>
            {/* Darkened Content Text */}
            <p className="mt-2 text-base leading-relaxed text-[#1A3026] font-medium">
              {study.problem}
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <PhaseIcon phase="solution" />
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8C6D2D]">The Solution</p>
            {/* Darkened Content Text */}
            <p className="mt-2 text-base leading-relaxed text-[#1A3026] font-medium">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Result Box: White background remains for high-contrast "Spartan" callout */}
        <div className="mt-auto bg-white rounded-[32px] p-8 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-black/[0.03]">
          <div className="flex gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-veridian-green/20">
              <TrendingUp className="h-5 w-5 text-veridian-green" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black mb-1">The Result</p>
              <p className="text-lg leading-snug text-veridian-green font-bold italic">“{study.result}”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- MAIN SECTION ---

export function CaseStudySection() {
  const { ref, isVisible } = useFadeIn()
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const filtered = activeCategory === "All" ? caseStudies : caseStudies.filter((s) => s.category === activeCategory)

  return (
    <section id="case-studies" className="bg-transparent py-24 ">
      <div ref={ref} className={cn("mx-auto max-w-7xl px-6 transition-all duration-700", isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-veridian-gold">Case Studies</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">Real Problems. Expert Solutions.</h2>
          <p className="mt-4 text-pretty text-white/60 leading-relaxed font-medium">See how we engineer beautiful, lasting solutions for our clients' toughest landscape problems.</p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Filter className="mr-2 h-4 w-4 text-white/40" />
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={cn(
              "rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 border",
              activeCategory === cat
                ? "bg-white/10 text-white border-white/20 shadow-lg"
                : "bg-transparent text-white/30 border-white/5 hover:border-white/10 hover:text-white"
            )}>
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}