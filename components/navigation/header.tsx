"use client"

import { useState, useEffect } from "react"
import { Menu, X, Leaf, Mail, Phone } from "lucide-react"
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
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* 1. TOP BAR: Disappears on scroll to focus on 'Spartan' minimalism */}
      <div
        className={cn(
          "border-b border-white/5 bg-black/5 backdrop-blur-sm transition-all duration-500",
          isScrolled ? "max-h-0 overflow-hidden opacity-0 border-b-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a href={`mailto:${businessConfig.email}`} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">{businessConfig.email}</span>
            </a>
            <a href={`tel:${businessConfig.phone}`} className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">{businessConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION: The 'Glass' Floating Pill */}
      <div className={cn("px-4 transition-all duration-500", isScrolled ? "py-2" : "py-4")}>
        <div
          className={cn(
            "mx-auto max-w-6xl rounded-full px-8 py-3 transition-all duration-500 border",
            isScrolled
              ? "bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-white/20 py-2.5"
              : "bg-white/5 backdrop-blur-md border-white/10"
          )}
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <a href="#" className="flex items-center gap-2 group">
              <Leaf className="h-5 w-5 text-white transition-transform duration-500 group-hover:rotate-12" />
              <span className="text-lg font-black tracking-tighter text-white uppercase italic">
                Veridian
              </span>
            </a>

            {/* NAV LINKS */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.25em] text-white/70 hover:text-white transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden md:block">
              <button
                onClick={onOpenModal}
                className="rounded-full bg-white px-6 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#da6d42] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                Request Access
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU: Vertical Glass Overlay */}
      <div className={cn("overflow-hidden transition-all duration-500 md:hidden px-4", isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <nav className="flex flex-col gap-2 rounded-3xl bg-black/20 backdrop-blur-3xl p-6 border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all">
              {link.label}
            </a>
          ))}
          <button onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }} className="mt-4 rounded-full bg-white py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#da6d42]">
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  )
}