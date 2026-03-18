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
        <section className="relative z-0 bg-[#da6d42] -mt-10 " >
          <HeroSection onOpenModal={openModal} />
        </section>

        {/* 2. SERVICES: GREEN 
            - Reduced padding to tighten the distance around cards
        */}
        <section className="relative z-10 bg-[#50C878] mt-24 lg:-mt-32 pt-40 lg:pt-40 pb-16 lg:pb-0 -mt-[1px]">
          <OverlappingCards />
          <ServicesSection onOpenModal={openModal} />
        </section>

        {/* 3. STATS: ORANGE 
            - Tighter vertical padding for a cleaner transition
        */}
        <section className="relative z-0 bg-[#da6d42] py-12 lg:py-12 lg:pt-0 pb-16 lg:pb-20">
          <StatsSection />
        </section>

        {/* 4. CASE STUDIES: GREEN 
            - Pulls up into the Stats section with -mt
        */}
        <section className="relative z-10 bg-[#50C878] -mt-16 lg:-mt-20 py-12 lg:py-20 -mt-[1px]">
          <CaseStudySection />
        </section>

        {/* 5. TESTIMONIALS: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] py-12 lg:py-20">
          <TestimonialsSection />
        </section>

        {/* 6. FAQ: GREEN */}
        <section className="relative z-10 bg-[#50C878] -mt-16 lg:-mt-20 pt-12 lg:pt-20 pb-24 lg:pb-40 -mt-[1px]">
          <FaqSection />
        </section>

        {/* 7. CTA: ORANGE */}
        <section className="relative z-0 bg-[#da6d42] py-12 lg:py-20">
          <CtaSection onOpenModal={openModal} />
        </section>
      </main>

      {/* FOOTER SECTION 
          We pull this up using a negative margin or 0 gap 
          to meet the CTA section perfectly.
      */}
      <section className="relative z-10 bg-[#50C878] -mt-16 lg:-mt-20 py-12 lg:py-20 -mt-[1px]">
        <Footer />
      </section>

      <BackToTop />
      <CtaModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}