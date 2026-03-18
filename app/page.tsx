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

        {/* 1. HERO: ORANGE */}
        {/* pb-48 is the "runway" for the Services overlap */}
        <section className="relative z-0 bg-[#da6d42] pt-12 pb-48 lg:pt-32 lg:pb-40">
          <HeroSection onOpenModal={openModal} />
        </section>

        {/* 2. SERVICES: GREEN */}
        {/* -mt-[220px] clears the Hero; pb-24 sets the gap for the next section */}
        <section className="relative z-10 bg-[#50C878] -mt-[220px] lg:-mt-32 pt-0 lg:pt-40 pb-24 lg:pb-32">
          <div className="pt-16 lg:pt-0">
            <OverlappingCards />
            <ServicesSection onOpenModal={openModal} />
          </div>
        </section>

        {/* 3. STATS: ORANGE */}
        {/* -mt-24 pulls it up; pb-24 sets the exit gap */}
        <section className="relative z-0 bg-[#da6d42] -mt-24 lg:-mt-20 pt-20 pb-24 lg:py-32">
          <StatsSection />
        </section>

        {/* 4. CASE STUDIES: GREEN */}
        <section className="relative z-10 bg-[#50C878] -mt-24 lg:-mt-20 pt-20 pb-24 lg:py-32">
          <CaseStudySection />
        </section>

        {/* 5. TESTIMONIALS: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] -mt-24 lg:-mt-20 pt-20 pb-24 lg:py-32">
          <TestimonialsSection />
        </section>

        {/* 6. FAQ: GREEN */}
        <section className="relative z-10 bg-[#50C878] -mt-24 lg:-mt-20 pt-20 pb-24 lg:py-32">
          <FaqSection />
        </section>

        {/* 7. CTA: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] -mt-24 lg:-mt-20 pt-20 pb-24 lg:py-32">
          <CtaSection onOpenModal={openModal} />
        </section>

      </main>

      {/* FOOTER: GREEN */}
      <section className="relative z-10 bg-[#50C878] -mt-24 lg:-mt-20 pt-20 pb-12 lg:py-32">
        <Footer />
      </section>

      <BackToTop />
      <CtaModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}