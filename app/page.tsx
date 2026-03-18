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

export default function VeridianLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)

  return (
    <>
      {/* HEADER: GREEN */}
      <section className="relative z-50 bg-[#50C878] py-2 lg:py-6">
        <Header onOpenModal={openModal} />
      </section>

      <main className="bg-[#da6d42] overflow-hidden">

        {/* 1. HERO: ORANGE
            pb-56 on mobile gives enough runway for the OverlappingCards card
            (-mt-40) to sit half-in the orange. pb-44 on lg is tuned for desktop. */}
        <section className="relative z-0 bg-[#da6d42] pb-56 lg:pb-44">
          <HeroSection onOpenModal={openModal} />
        </section>

        {/* 2. SERVICES: GREEN — pt-0 lets OverlappingCards bleed up into orange; pb-10 closes the bottom */}
        <section className="relative z-10 bg-[#50C878] -mt-40 lg:-mt-32 pt-0 pb-10">
          <OverlappingCards />
          <ServicesSection onOpenModal={openModal} />
        </section>

        {/* 3. STATS: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] py-10">
          <StatsSection />
        </section>

        {/* 4. CASE STUDIES: GREEN */}
        <section className="relative z-10 bg-[#50C878] py-10">
          <CaseStudySection />
        </section>

        {/* 5. TESTIMONIALS: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] py-10">
          <TestimonialsSection />
        </section>

        {/* 6. FAQ: GREEN */}
        <section className="relative z-10 bg-[#50C878] py-10">
          <FaqSection />
        </section>

        {/* 7. CTA: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] py-10">
          <CtaSection onOpenModal={openModal} />
        </section>

      </main>

      {/* FOOTER: DARK GREEN — seamless, no border */}
      <div className="bg-[#388E52]">
        <Footer />
      </div>

      <BackToTop />
      <CtaModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
