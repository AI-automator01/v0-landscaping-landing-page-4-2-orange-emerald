"use client"

import { cn } from "@/lib/utils"
import { useFadeIn } from "@/hooks/use-fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the design consultation process work?",
    answer:
      "Our process begins with a complimentary on-site consultation where we assess your property, discuss your vision, and understand your lifestyle needs. From there, our design team creates a comprehensive master plan with 3D renderings, material palettes, and a phased installation timeline. We refine the design collaboratively until it perfectly captures your vision.",
  },
  {
    question: "What is the typical investment range for a landscape project?",
    answer:
      "Our projects typically range from $75,000 for focused garden renovations to $500,000+ for comprehensive estate transformations. Every property is unique, so we provide detailed, transparent proposals after our initial consultation. We also offer phased installation options to accommodate various budgets and timelines.",
  },
  {
    question: "How long does a typical landscape installation take?",
    answer:
      "Timelines vary based on project scope. A focused garden renovation may take 4-6 weeks, while a full estate transformation can span 3-6 months. We work efficiently while never compromising on quality, and we provide detailed schedules with milestones so you’re always informed of progress.",
  },
  {
    question: "Do you offer maintenance services after installation?",
    answer:
      "Absolutely. We offer comprehensive year-round maintenance programs that include weekly visits, seasonal plantings, pruning, fertilization, and irrigation management. Our maintenance clients receive priority scheduling and their landscapes are always in peak condition regardless of season.",
  },
  {
    question: "What sets Veridian apart from other landscaping companies?",
    answer:
      "Three things distinguish us: First, our design-first approach where every project begins with a comprehensive architectural vision. Second, our direct sourcing relationships with premium nurseries across the country for exceptional plant specimens. Third, our lifetime warranty on hardscape installations and a 2-year plant replacement guarantee.",
  },
  {
    question: "Do you work with existing landscape architects?",
    answer:
      "Yes, we frequently collaborate with architects, interior designers, and landscape architects to ensure seamless integration between indoor and outdoor spaces. Our team is experienced in translating architectural drawings into living landscapes and can adapt to established design languages.",
  },
  {
    question: "What geographic areas do you serve?",
    answer:
      "We primarily serve Fairfield County, Connecticut and Westchester County, New York, including Greenwich, Darien, New Canaan, Westport, Ridgefield, Stamford, and surrounding communities. For exceptional projects, we selectively take on commissions throughout the Northeast.",
  },
]

export function FaqSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section id="faq" className="bg-transparent py-0">
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-3xl px-6 transition-all duration-700",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-veridian-gold">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Expert Guidance
          </h2>
          <p className="mt-4 text-pretty text-white/60 leading-relaxed font-medium">
            Common inquiries regarding estate transformations and our architectural process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="group bg-[#E2E8E4] overflow-hidden rounded-[1.5rem] border-0 px-8 transition-all duration-300 hover:shadow-xl"
              >
                <AccordionTrigger className="py-6 text-left text-base font-bold text-veridian-green hover:no-underline hover:text-[#8C6D2D] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-veridian-green/70 font-medium border-t border-veridian-green/5 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
