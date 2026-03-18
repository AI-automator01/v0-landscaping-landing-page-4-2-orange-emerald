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
        {/* pb-48 is the "runway" for the OverlappingCards to pull into */}
        <section className="relative z-0 bg-[#da6d42] pb-48 lg:pb-40">
          <HeroSection onOpenModal={openModal} />
        </section>

        {/* 2. SERVICES: GREEN */}
        {/* -mt-[220px] on mobile / -mt-32 on desktop lets OverlappingCards overlap the orange */}
        <section className="relative z-10 bg-[#50C878] -mt-[220px] lg:-mt-32 pt-0 pb-12">
          <div className="pt-16 lg:pt-0">
            <OverlappingCards />
            <ServicesSection onOpenModal={openModal} />
          </div>
        </section>

        {/* 3. STATS: ORANGE — seamless, no borders */}
        <section className="relative z-0 bg-[#da6d42] py-12">
          <StatsSection />
        </section>

        {/* 4. CASE STUDIES: GREEN */}
        <section className="relative z-10 bg-[#50C878] py-12">
          <CaseStudySection />
        </section>

        {/* 5. TESTIMONIALS: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] py-12">
          <TestimonialsSection />
        </section>

        {/* 6. FAQ: GREEN */}
        <section className="relative z-10 bg-[#50C878] py-12">
          <FaqSection />
        </section>

        {/* 7. CTA: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] py-10">
          <CtaSection onOpenModal={openModal} />
        </section>

      </main>

      {/* FOOTER: DARK GREEN — no border, seamless transition */}
      <footer className="bg-[#388E52]">
        <Footer />
      </footer>

      <BackToTop />
      <CtaModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
