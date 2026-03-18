import { Leaf, MapPin, Phone, Mail } from "lucide-react"
import { businessConfig } from "@/lib/config"

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#stats" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <div className="bg-veridian-dark">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-white" />
              <span className="text-lg font-black uppercase tracking-tighter text-white">
                {businessConfig.name}
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/60 font-medium">
              {businessConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer quick links">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {businessConfig.services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-white/50"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 shrink-0 text-white/80" />
                <span>{businessConfig.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="h-4 w-4 shrink-0 text-white/80" />
                <span>{businessConfig.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="h-4 w-4 shrink-0 text-white/80" />
                <span>{businessConfig.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
            &copy; {new Date().getFullYear()} {businessConfig.fullName} &middot; All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/30 transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
