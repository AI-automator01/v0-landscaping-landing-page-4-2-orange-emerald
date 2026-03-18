"use client"

import React from 'react'
import { Phone, Mail, MapPin, Trees, ArrowUpRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // 1. CHANGED: Reduced pt-24 to pt-8 and added -mt-4 to pull it up
    <footer className="relative bg-transparent pt-8 pb-12 px-6 border-t border-white/10 -mt-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 group cursor-default">
              <Trees className="h-6 w-6 text-white transition-transform duration-500 group-hover:rotate-12" />
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                Veridian
              </span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 leading-relaxed max-w-xs">
              Premium landscape design for discerning homeowners. Transforming outdoor spaces into living masterpieces since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Services', 'Portfolio', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="group flex items-center justify-between text-xs font-black uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300">
                    {item}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">
              Expertise
            </h4>
            <ul className="space-y-4">
              {[
                'Estate Garden Design',
                'Landscape Architecture',
                'Water Features',
                'Outdoor Lighting'
              ].map((service) => (
                <li key={service} className="text-xs font-black uppercase tracking-widest text-white/50 cursor-default hover:text-white transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-8">
              Studio
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin className="h-4 w-4 text-white/30" />
                <span className="text-xs font-black uppercase tracking-widest text-white/70">
                  Greenwich, Connecticut
                </span>
              </div>
              <a href="tel:+12122122376" className="flex items-center gap-4 group">
                <Phone className="h-4 w-4 text-white/30 group-hover:text-white transition-colors" />
                <span className="text-xs font-black uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                  +1 212-212-2376
                </span>
              </a>
              <a href="mailto:contact@veridian.com" className="flex items-center gap-4 group">
                <Mail className="h-4 w-4 text-white/30 group-hover:text-white transition-colors" />
                <span className="text-xs font-black uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                  Contact@veridian.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
            © {currentYear} Veridian Estate Group &middot; All Rights Reserved
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] font-black uppercase tracking-[0.5em] text-white/10 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[9px] font-black uppercase tracking-[0.5em] text-white/10 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}