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
      <section className="relative z-10 bg-[#50C878] -mt-16 lg:-mt-20 pt-12 lg:pt-20 pb-20 lg:pb-30 -mt-[1px]">        <Header onOpenModal={openModal} />
      </section>


      <main className="bg-[#da6d42]">

        {/* 1. HERO: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] pt-1 lg:pt-1 pb-24 lg:pb-20 -mt-50 lg:-mt-24">
          <HeroSection onOpenModal={openModal} />
        </section>

        {/* 2. SERVICES: GREEN 
            - Reduced padding to tighten the distance around cards
        */}
        <section className="relative z-10 bg-[#50C878] -mt-50 lg:-mt-32 pt-40 lg:pt-40 pb-1 lg:pb-0 -mt-[1px]">
          <OverlappingCards />
          <ServicesSection onOpenModal={openModal} />
        </section>

        {/* 3. STATS: ORANGE */}
        {/* CHANGED: Dropped pb-10 to pb-0 on mobile to remove the orange tail */}
        <section className="relative z-0 bg-[#da6d42] pt-12 pb-0 lg:pt-16 lg:pb-16 -mt-16 lg:-mt-18">
          <StatsSection />
        </section>

        {/* 4. CASE STUDIES: GREEN */}
        {/* CHANGED: Increased -mt-16 to -mt-24 on mobile to pull the green block higher */}
        {/* CHANGED: Added pt-16 on mobile to give the Case Study title a premium margin inside the green */}
        <section className="relative z-10 bg-[#50C878] -mt-24 lg:-mt-20 pt-16 lg:pt-0 pb-24 lg:pb-0">
          <CaseStudySection />
        </section>

        {/* 5. TESTIMONIALS: ORANGE */}
        {/* CHANGED: Reduced pb-24 to pb-6 on mobile to kill the extra orange space */}
        {/* CHANGED: Simplified lg:pt-20 and lg:pb-10 for a balanced desktop look */}
        <section className="relative z-0 bg-[#da6d42] pt-24 pb-10 lg:pt-20 lg:pb-10 -mt-16 lg:-mt-18">
          <TestimonialsSection />
        </section>

        {/* 6. FAQ: GREEN */}
        {/* CHANGED: Increased -mt-16 to -mt-24 on mobile to swallow the orange gap */}
        {/* CHANGED: Increased pt-12 on mobile to give the FAQ header breathing room in the green block */}
        <section className="relative z-10 bg-[#50C878] -mt-24 lg:-mt-20 pt-1 lg:pt-0 pb-1 lg:pb-0">
          <FaqSection />
        </section>

        {/* 7. CTA: ORANGE */}
        {/* CHANGED: Reduced pb-12 to pb-2 on mobile to kill the bottom gap */}
        <section className="relative z-0 bg-[#da6d42] py-12 lg:py-20 pb-10 lg:pb-20">
          <CtaSection onOpenModal={openModal} />
        </section>

      </main>

      {/* FOOTER: GREEN */}
      {/* CHANGED: Increased -mt-16 to -mt-32 on mobile to swallow the remaining orange gap */}
      {/* CHANGED: Removed pb-24 on mobile so the footer doesn't feel too long */}
      <section className="relative z-10 bg-[#50C878] -mt-32 lg:-mt-20 pt-1 lg:pt-0 pb-1 lg:pb-0">
        <Footer />
      </section>


      <BackToTop />
      <CtaModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}