"use client"

import { Palette, Leaf, Cpu, TreePine, Sun, Droplets, Lightbulb, Fence } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"

const overlappingCards = [
  {
    icon: Palette,
    title: "Bespoke Artistry",
    description: "Learn about our custom design philosophy that transforms outdoor spaces into living art.",
  },
  {
    icon: Leaf,
    title: "Eco-Scaping",
    description: "Sustainable practices for modern estates that respect the natural environment.",
  },
  {
    icon: Cpu,
    title: "Smart Management",
    description: "Automated irrigation and lighting systems for effortless, year-round beauty.",
  },
  {
    icon: Fence, // You already have this imported from lucide-react
    title: "Master Masonry",
    description: "Architectural stonework and custom structures that define the geometry of your estate.",
  },
]

const services = [
  {
    icon: TreePine,
    title: "Estate Garden Design",
    description:
      "Comprehensive landscape architecture for luxury estates. We create cohesive outdoor environments that elevate your property's beauty and value.",
    features: ["Custom master plans", "3D visualization"],
  },
  {
    icon: Droplets,
    title: "Water Features",
    description:
      "Elegant fountains, reflection pools, and naturalistic streams that add tranquility and movement to your outdoor living spaces.",
    features: ["Custom fabrication", "Eco-filtration"],
  },
  {
    icon: Sun,
    title: "Outdoor Living Spaces",
    description:
      "Sophisticated patios, pergolas, and entertainment areas designed to extend your living experience into the natural world.",
    features: ["Natural stone", "Climate control"],
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    description:
      "Architectural and accent lighting systems that showcase your landscape at night while enhancing security and ambiance.",
    features: ["LED systems", "Smart controls"],
  },
  {
    icon: Leaf,
    title: "Premium Plantscaping",
    description:
      "Curated selection of rare specimen trees, ornamental plantings, and seasonal gardens designed to thrive in your unique microclimate.",
    features: ["Specimen sourcing", "Soil analysis"],
  },
  {
    icon: Fence,
    title: "Seasonal Maintenance",
    description:
      "Year-round care programs to keep your landscape in pristine condition through every season, ensuring lasting beauty.",
    features: ["Weekly visits", "Priority service"],
  },
]

export function OverlappingCards() {
  const { ref, isVisible } = useFadeIn()

  return (
    <div className="relative z-30 -mt-24 mx-auto max-w-4xl px-6"> {/* Reduced max-w for a tighter 2x2 look */}
      <div
        ref={ref}
        className={cn(
          "grid overflow-hidden rounded-[40px] border border-white/50 bg-white/10 backdrop-blur-3xl shadow-2xl grid-cols-1 sm:grid-cols-2",
          "transition-all duration-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        )}
      >
        {overlappingCards.map((card, index) => (
          <div
            key={card.title}
            className={cn(
              "flex flex-col items-center gap-3 px-8 py-12 text-center transition-all duration-300",
              "hover:bg-white/30",
              /* BORDER LOGIC FOR 2x2 CROSS */
              // Vertical divider for left column
              index % 2 === 0 && "sm:border-r border-white/50",
              // Horizontal divider for top row
              index < 2 && "border-b border-white/50"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/50 shadow-inner mb-2">
              <card.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-tighter">{card.title}</h3>
            <p className="text-xs leading-relaxed text-white/70">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ServicesSection({ onOpenModal }: { onOpenModal: () => void }) {
  const { ref, isVisible } = useFadeIn()

  return (
    /* Changed py-24 to pt-48 pb-32.
       pt-48 (12rem) provides enough space for the sticky header 
       so your titles don't get covered.
    */
    <section id="services" className="relative bg-transparent pt-24 pb-32">
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-7xl px-6 transition-all duration-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-white/60">
            Our Expertise
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black tracking-tighter text-white sm:text-5xl uppercase">
            Landscape Solutions
          </h2>
          <div className="mt-4 h-1 w-12 bg-white mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-5 rounded-[32px] border border-white/40 bg-white/5 p-10 transition-all duration-500 hover:bg-white/30 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/50">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold tracking-tighter text-white uppercase">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-white/60 font-medium">
                {service.description}
              </p>

              {/* Refined Feature Tags */}
              <div className="mt-auto pt-6 flex flex-col gap-6">
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-white/10 border border-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenModal}
                  className="text-left text-xs font-black uppercase tracking-[0.2em] text-white hover:text-white/60 transition-colors flex items-center gap-2"
                >
                  Learn More <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}