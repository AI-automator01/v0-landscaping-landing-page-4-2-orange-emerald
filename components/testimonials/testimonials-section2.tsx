"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"

const testimonials = [
  {
    name: "Margaret & David Whitfield",
    title: "Greenwich Estate",
    quote:
      "Veridian turned our overgrown three-acre property into an absolute paradise. From the Japanese-inspired meditation garden to the grand entrance all\u00E9e, every detail is breathtaking. Our home value increased by $800K.",
    rating: 5,
    initials: "MW",
  },
  {
    name: "Dr. Thomas Chen",
    title: "Darien Waterfront",
    quote:
      "The attention to detail is extraordinary. Our waterfront landscape integrates seamlessly with the Long Island Sound views. Guests constantly ask who designed it. Best investment we\u2019ve made in our property.",
    rating: 5,
    initials: "TC",
  },
  {
    name: "The Harrington Family",
    title: "New Canaan Estate",
    quote:
      "Working with Veridian was a transformative experience. They understood our vision for a family-friendly estate that still feels elegant and refined. The outdoor kitchen and garden pavilion changed how we live.",
    rating: 5,
    initials: "HF",
  },
  {
    name: "Elizabeth Crane",
    title: "Westport Colonial",
    quote:
      "I\u2019ve hired landscapers before, but Veridian operates on an entirely different level. The seasonal color program means our property looks stunning twelve months of the year. Truly exceptional service.",
    rating: 5,
    initials: "EC",
  },
  {
    name: "Richard & Anne Morrison",
    title: "Ridgefield Estate",
    quote:
      "From the initial consultation to the final walkthrough, professionalism at every step. The stone terracing and water feature they designed are museum-quality. We couldn\u2019t be happier.",
    rating: 5,
    initials: "RM",
  },
  {
    name: "The Patel Residence",
    title: "Stamford Hilltop",
    quote:
      "Veridian created an outdoor entertainment space that rivals any five-star resort. The landscape lighting alone transforms our property into something magical every evening. Worth every penny.",
    rating: 5,
    initials: "PR",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-veridian-gold text-veridian-gold" : "text-veridian-sage"
          )}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="testimonials" className="bg-background py-24">
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-7xl px-6 transition-all duration-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-veridian-gold">
            Client Testimonials
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-veridian-green sm:text-4xl">
            Trusted by Distinguished Homeowners
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Our clients are our greatest advocates. Hear from homeowners who trusted us
            to transform their properties.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                "glass-panel glass-panel-hover flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 border-t border-veridian-green/8 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-veridian-green/10 text-sm font-semibold text-veridian-green">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-veridian-green">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
