"use client"

import { useState, useEffect } from "react"
import { Menu, X, Leaf, Mail, Phone, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"
import { businessConfig } from "@/lib/config"

const navLinks = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Header({ onOpenModal }: { onOpenModal: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Switched to White/70 for contrast on Orange */}
      <div
        className={cn(
          "border-b border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
          isScrolled ? "max-h-0 overflow-hidden opacity-0 border-b-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${businessConfig.email}`}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">{businessConfig.email}</span>
            </a>
            <a
              href={`tel:${businessConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">{businessConfig.phoneDisplay}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white transition-colors hover:text-white"
              >
                <social.icon className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="px-4 py-3">
        <div
          className={cn(
            "mx-auto max-w-6xl rounded-full px-8 py-3 transition-all duration-300 border border-white/20",
            /* Solid White Glass background on scroll to prevent text bleed */
            isScrolled
              ? "bg-white/10 backdrop-blur-2xl shadow-2xl py-2"
              : "bg-white/5 backdrop-blur-md"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo - White/Bold for Spartan look */}
            <a href="#" className="flex items-center gap-2 group">
              <Leaf className="h-6 w-6 text-white transition-all duration-300 group-hover:rotate-12" />
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                Veridian
              </span>
            </a>

            {/* Desktop Navigation - Forced White for visibility */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Spartan CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={onOpenModal}
                className="rounded-full bg-white px-7 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#da6d42] transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Glass with White Text */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="mx-4 flex flex-col gap-1 rounded-3xl bg-white/10 backdrop-blur-2xl p-4 shadow-2xl border border-white/20">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false)
              onOpenModal()
            }}
            className="mt-2 rounded-full bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#da6d42]"
          >
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  )
}