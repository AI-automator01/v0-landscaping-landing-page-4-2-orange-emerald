"use client"

import React, { useState } from "react"
import { Header } from "@/components/navigation/header"
import { HeroSection } from "@/components/hero/hero-section"
import { OverlappingCards, ServicesSection } from "@/components/services/services-section"
import { StatsSection } from "@/components/stats/stats-section"
import TestimonialsSection from "@/components/testimonials/testimonials-section"
import { CaseStudySection } from "@/components/portfolio/case-study-section"
import { FaqSection } from "@/components/faq/faq-section"
import { CtaSection } from "@/components/cta/cta-section"
import { CtaModal } from "@/components/cta/cta-modal"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"

// This is now the ONLY default export. 
// Having another one above it was causing only the reviews to show.
export default function VeridianLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)

  return (
    <>
      <Header onOpenModal={openModal} />
      <main className="[&>section:nth-child(odd)]:bg-[var(--section-bg-odd)] [&>section:nth-child(even)]:bg-[var(--section-bg-even)]">
        {/* SECTION 1: ORANGE (Hero Only) */}
        <section>
          <HeroSection onOpenModal={openModal} />
        </section>

        {/* SECTION 2: GREEN (Cards + Services) */}
        <section className="relative">
          <OverlappingCards />
          <ServicesSection onOpenModal={openModal} />
        </section>

        {/* SECTION 3: ORANGE (Stats) */}
        <section>
          <StatsSection />
        </section>
        <section>
          <CaseStudySection />
        </section>
        <section>
          <TestimonialsSection />
        </section>
        <section>
          <FaqSection />
        </section>
        <section>
          <CtaSection onOpenModal={openModal} />
        </section>
      </main>
      <Footer />
      <BackToTop />
      <CtaModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
