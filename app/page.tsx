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
      {/* HEADER: GREEN - Standardized Header Spacing */}
      <section className="relative z-50 bg-[#50C878] pt-6 pb-6 lg:pt-8 lg:pb-8">
        <Header onOpenModal={openModal} />
      </section>

      <main className="bg-[#da6d42]">
        {/* 1. HERO: ORANGE - Balanced top margin to meet header */}
        <section className="relative z-0 bg-[#da6d42] pt-12 lg:pt-20 pb-24 lg:pb-32">
          <HeroSection onOpenModal={openModal} />
        </section>

        {/* 2. SERVICES: GREEN - Balanced heavy padding to allow cards room */}
        <section className="relative z-10 bg-[#50C878] -mt-20 pt-32 lg:pt-40 pb-24 lg:pb-32">
          <OverlappingCards />
          <ServicesSection onOpenModal={openModal} />
        </section>

        {/* 3. STATS: ORANGE - Balanced scroll weight */}
        <section className="relative z-0 bg-[#da6d42] -mt-20 py-24 lg:py-32">
          <StatsSection />
        </section>

        {/* 4. CASE STUDIES: GREEN */}
        <section className="relative z-10 bg-[#50C878] -mt-20 py-24 lg:py-32">
          <CaseStudySection />
        </section>

        {/* 5. TESTIMONIALS: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] -mt-20 py-24 lg:py-32">
          <TestimonialsSection />
        </section>

        {/* 6. FAQ: GREEN */}
        <section className="relative z-10 bg-[#50C878] -mt-20 py-24 lg:py-32">
          <FaqSection />
        </section>

        {/* 7. CTA: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] -mt-20 py-24 lg:py-32">
          <CtaSection onOpenModal={openModal} />
        </section>
      </main>

      {/* FOOTER: GREEN - Balanced so the page doesn't end abruptly */}
      <section className="relative z-10 bg-[#50C878] -mt-20 py-24 lg:py-32">
        <Footer />
      </section>

      <BackToTop />
      <CtaModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}