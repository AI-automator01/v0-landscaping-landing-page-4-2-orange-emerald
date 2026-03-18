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
    <footer className="border-t border-veridian-green/8 bg-veridian-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-veridian-gold" />
              <span className="text-lg font-semibold text-veridian-cream">{businessConfig.name}</span>
            </a>
            <p className="text-sm leading-relaxed text-veridian-cream/60">
              {businessConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-veridian-cream">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Footer quick links">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-veridian-cream/60 transition-colors duration-200 hover:text-veridian-gold"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-veridian-cream">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {businessConfig.services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-veridian-cream/60"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-veridian-cream">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-veridian-cream/60">
                <MapPin className="h-4 w-4 shrink-0 text-veridian-gold" />
                <span>{businessConfig.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-veridian-cream/60">
                <Phone className="h-4 w-4 shrink-0 text-veridian-gold" />
                <span>{businessConfig.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-veridian-cream/60">
                <Mail className="h-4 w-4 shrink-0 text-veridian-gold" />
                <span>{businessConfig.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-veridian-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-veridian-cream/40">
            &copy; {new Date().getFullYear()} {businessConfig.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-veridian-cream/40 transition-colors hover:text-veridian-gold">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-veridian-cream/40 transition-colors hover:text-veridian-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
