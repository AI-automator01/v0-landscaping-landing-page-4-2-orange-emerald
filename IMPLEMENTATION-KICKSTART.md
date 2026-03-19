# Veridian Custom Landscapes - Implementation Kickstart

## Project Overview
**Status**: FULLY COMPLETE AND PRODUCTION READY  
**Framework**: Next.js 16 with React 19.2  
**Styling**: Tailwind CSS v4 with custom design tokens  
**Theme**: High-energy two-tone — Orange (#da6d42) + Emerald Green (#50C878) alternating sections  
**Repository**: AI-automator01/v0-landscaping-landing-page-4-2-orange-emerald

---

## Project Vision
A bold, high-energy responsive landing page for luxury landscaping services featuring alternating orange and emerald green sections, glassmorphism effects, scroll animations, and strategic CTAs distributed across a full-width single-page layout.

---

## Quick Reference: Key Decisions Made

| Aspect | Decision | Rationale |
|--------|----------|-----------|
| **Color Scheme** | Orange (#da6d42) + Emerald (#50C878) + Dark Green (#388E52) footer | Bold, energetic, nature-forward |
| **Section Rhythm** | Strict alternating orange/green with no borders or bleeds | Clean visual cadence, no margin tricks |
| **Architecture** | Modular components, page.tsx as single orchestrator | Maintainability, single responsibility |
| **Layout** | Full-width single page, py-10 uniform section spacing | Consistent rhythm top and bottom of every color band |
| **CTA Strategy** | 4 CTAs: Header, Hero, Services, CTA Section | Multiple conversion touchpoints |
| **State Management** | React useState + prop drilling | Minimal, performant, no external libs needed |
| **Animations** | Glassmorphism cards, scroll fade-in, hover lift | Professional feel, 60fps performance |
| **Responsiveness** | Mobile-first, pt-28 hero offset for fixed header | Clears the ~88px stacked header on mobile |
| **Backend** | Placeholder forms + graceful Airtable fallback | MVP focus, no broken UI without credentials |
| **Configuration** | Centralized in lib/config.ts | Single source of truth for business info |

---

## Tech Stack & Dependencies

### Core Stack
```json
{
  "Next.js": "16.x",
  "React": "19.2.x",
  "TypeScript": "5.7.x",
  "Tailwind CSS": "4.2.x"
}
```

### UI & Component Libraries
- **shadcn/ui**: 50+ accessible UI components
- **Radix UI**: Foundation for shadcn/ui (dialog, accordion, select, etc.)
- **Lucide React**: Icon library
- **Framer Motion**: Smooth animations

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Zod integration with RHF

### Utilities
- **class-variance-authority**: Component variant management
- **clsx** + **tailwind-merge**: Conditional className merging via `cn()`
- **embla-carousel-react**: Responsive carousel
- **next-themes**: Theme management infrastructure
- **sonner**: Toast notifications
- **@vercel/analytics** + **@vercel/speed-insights**: Vercel integrations

---

## Color System (Tailwind CSS v4 with Custom Design Tokens)

The theme uses a bold two-tone approach. Every CSS variable is defined in `app/globals.css` and registered in `@theme inline` for use as Tailwind utilities.

### Base Theme Variables (`:root`)
```css
--background: #da6d42          /* Orange — primary bg, body default */
--foreground: #FFFFFF          /* White — all text */
--card: rgba(255,255,255,0.1)  /* Glass card bg */
--primary: #FFFFFF
--primary-foreground: #da6d42
--border: rgba(255,255,255,0.2)
--radius: 0.625rem
```

### Brand Tokens
```css
--veridian-green: #50C878       /* Emerald — even sections */
--veridian-green-light: #6EF098 /* Lighter emerald accent */
--veridian-dark: #388E52        /* Dark green — footer */
--veridian-gold: #FFFFFF        /* Repurposed as white accent */
--veridian-cream: #FFFFFF
--veridian-sage: rgba(255,255,255,0.1)
```

### Glassmorphism Tokens
```css
--glass-bg: rgba(255,255,255,0.12)
--glass-border: rgba(255,255,255,0.3)
--glass-bg-hover: rgba(255,255,255,0.2)
```

### Tailwind Color Utilities Registered
```css
@theme inline {
  --color-veridian-green: var(--veridian-green);
  --color-veridian-dark: var(--veridian-dark);
}
```
Enables: `bg-veridian-green`, `bg-veridian-dark` as Tailwind utilities.

### CSS Utility Classes
```css
.glass-panel          /* blur(12px), white glass bg, border */
.glass-panel-hover    /* translateY(-2px) on hover */
.fade-in-section      /* opacity:0 + translateY(30px) initial */
.fade-in-section.is-visible  /* opacity:1 + translateY(0) */
```

---

## Page Structure & Section Layout (`app/page.tsx`)

The page orchestrator wraps every section in a colored `<section>` tag. Inner components use `py-0` on their own outermost element — **`page.tsx` is the single source of truth for spacing**.

```
HEADER      bg-[#50C878]  z-50  sticky  py-2 lg:py-6
  │
HERO        bg-[#da6d42]  z-0   pb-56 lg:pb-44   (runway for OverlappingCards)
  │
SERVICES    bg-[#50C878]  z-10  -mt-40 lg:-mt-32  pt-0  pb-10
  │           OverlappingCards bleeds up into orange (-mt-20 lg:-mt-16)
  │           ServicesSection below (pt-8)
  │
STATS       bg-[#da6d42]  z-0   py-10
  │
CASE STUDY  bg-[#50C878]  z-10  py-10
  │
TESTIMONIALS bg-[#da6d42] z-0   py-10
  │
FAQ         bg-[#50C878]  z-10  py-10
  │
CTA         bg-[#da6d42]  z-0   py-10
  │
FOOTER      bg-[#388E52]  (div wrapper, not section — avoids double <footer> tag)
```

### Key Spacing Rules
- All sections: `py-10` (40px top and bottom) — uniform, no exceptions
- Services section: `pt-0 pb-10` — pt-0 lets OverlappingCards bleed up
- Hero: `pb-56 lg:pb-44` — runway for the glass card overlap
- Hero grid: `pt-28 pb-10 lg:pt-32 lg:pb-16` — clears the ~88px fixed header on mobile

### Negative Margin for OverlappingCards
The green Services section uses `-mt-40 lg:-mt-32` to pull up into the orange Hero section. The `OverlappingCards` component itself uses `-mt-20 lg:-mt-16` relative to the green zone's start to straddle the color boundary. The Hero's `pb-56` provides sufficient runway so the orange zone is always tall enough to show behind the card.

---

## Component Hierarchy & Data Flow

```
VeridianLandingPage (app/page.tsx)
  State: isModalOpen, setIsModalOpen
  openModal = () => setIsModalOpen(true)
  │
  ├── <section bg-[#50C878]>
  │     Header (onOpenModal)
  │
  ├── <main bg-[#da6d42]>
  │   ├── <section bg-[#da6d42]>  HeroSection (onOpenModal)
  │   ├── <section bg-[#50C878]>  OverlappingCards + ServicesSection (onOpenModal)
  │   ├── <section bg-[#da6d42]>  StatsSection
  │   ├── <section bg-[#50C878]>  CaseStudySection
  │   ├── <section bg-[#da6d42]>  TestimonialsSection
  │   ├── <section bg-[#50C878]>  FaqSection
  │   └── <section bg-[#da6d42]>  CtaSection (onOpenModal)
  │
  ├── <div bg-[#388E52]>  Footer
  ├── BackToTop
  └── CtaModal (open={isModalOpen} onOpenChange={setIsModalOpen})
```

---

## Centralized Business Configuration (`lib/config.ts`)

```typescript
export const businessConfig = {
  name: "Veridian",
  fullName: "Veridian Custom Landscapes",
  tagline: "Professional Gardening, Landscaping & Maintenance",
  description: "Premium landscape design for discerning homeowners. Transforming outdoor spaces into living masterpieces since 2009.",
  heroDescription: "For over 15 years, Veridian has designed and built extraordinary landscapes for discerning homeowners who expect nothing less than perfection.",
  phone: "+1 212-212-2376",
  phoneDisplay: "+1 212-212-2376",
  email: "Contact@veridian.com",
  address: "Greenwich, Connecticut",
  hours: "Mon – Fri: 9:00 – 17:00",
  founded: 2009,
  projectsCompleted: 142,
  social: { facebook: "#", instagram: "#", twitter: "#", linkedin: "#" },
  services: [
    "Estate Garden Design",
    "Hedge Trimming",
    "Landscape Architecture",
    "Outdoor Lighting",
    "Power Washing",
    "Seasonal Maintenance",
    "Water Features"
  ]
} as const
```

**Components consuming `businessConfig`**:
- `header.tsx` — name, phone, email, hours
- `hero-section.tsx` — tagline, heroDescription, projectsCompleted
- `services-section.tsx` — services array (cards + OverlappingCards)
- `stats-section.tsx` — projectsCompleted, founded
- `footer.tsx` — fullName, description, services, contact, social
- `cta-modal.tsx` — services array for dropdown

---

## File Structure

### Core Application
| File | Description |
|------|-------------|
| `app/layout.tsx` | Root layout — Geist fonts, SEO metadata, Analytics, Speed Insights |
| `app/page.tsx` | Page orchestrator — modal state, section wrappers, color bands |
| `app/globals.css` | Design tokens, glassmorphism utilities, scroll animations, Tailwind v4 config |
| `lib/config.ts` | Single source of truth for all business data |
| `lib/utils.ts` | `cn()` utility for Tailwind class merging |

### Navigation & Layout
| File | Description |
|------|-------------|
| `components/navigation/header.tsx` | Fixed top header — top contact bar, nav pill, mobile menu |
| `components/layout/footer.tsx` | Dark green footer — company info, services, links, social |
| `components/layout/back-to-top.tsx` | Scroll-to-top button, appears after 200px scroll |

### Page Sections
| File | Description |
|------|-------------|
| `components/hero/hero-section.tsx` | Hero — headline, tagline, image, stat card, CTA |
| `components/hero/review-badge.tsx` | Star rating + review count badge |
| `components/services/services-section.tsx` | OverlappingCards + 7 service cards |
| `components/stats/stats-section.tsx` | 4 stats in responsive grid with glass dividers |
| `components/portfolio/case-study-section.tsx` | Before/after sliders, 6 case studies, category filtering |
| `components/testimonials/testimonials-section.tsx` | Review grid — fetches `/api/reviews`, fails silently |
| `components/faq/faq-section.tsx` | Accordion FAQ |
| `components/cta/cta-section.tsx` | Final CTA section |
| `components/cta/cta-modal.tsx` | Contact form modal with service dropdown |

### API Routes
| File | Description |
|------|-------------|
| `app/api/reviews/route.ts` | GET — returns `{records:[]}` if `AIRTABLE_TOKEN`/`AIRTABLE_BASE_ID` not set; 200 always |
| `app/api/leads/route.ts` | POST — placeholder for form submissions |
| `app/api/reviews/count/route.ts` | GET — placeholder for review count |

---

## Inner Component Padding Rules

Every inner section component has its outermost element set to `py-0` (or `pt-0 pb-0`). The `page.tsx` wrapper is the **only** element allowed to add vertical spacing at section boundaries.

| Component | Outermost element padding |
|-----------|--------------------------|
| `ServicesSection` | `pt-8 pb-0` (top gap after OverlappingCards) |
| `StatsSection` | `py-0` |
| `CaseStudySection` | `pt-0 pb-0` |
| `TestimonialsSection` | `py-0` |
| `FaqSection` | `py-0` |
| `CtaSection` | `py-0` |

---

## Hero Section Details

### Fixed Header Offset
The header is `fixed z-50` and consists of:
- Top contact bar: ~40px
- Nav pill: ~48px
- **Total: ~88px**

The hero grid must use `pt-28` (112px) on mobile and `pt-32` (128px) on desktop to push content below the header.

### Floating Stat Card
The "142+" card is positioned `absolute bottom-4 left-4` within the hero image container:
- Size: `w-44 py-3 px-4` (auto height — no fixed `h-*`)
- Number: `text-2xl font-black` — sized to fit without overflow on mobile
- Label: `text-[10px] font-bold uppercase tracking-[0.2em]`

### Content Order (Mobile)
1. `ReviewBadge` (stars + "Trusted by X homeowners")
2. Tagline `<p>` — `mt-4 mb-4 text-sm uppercase tracking-[0.2em]`
3. `<h1>` headline
4. Hero description `<p>`
5. CTA button

---

## Stats Section

4-column grid on desktop, 2-column on mobile.

Mobile divider logic (right border only on left-column items):
```tsx
index === 0 && "border-r border-white/20 md:border-r-0"
index === 2 && "border-r border-white/20 md:border-r-0"
index < stats.length - 1 && "md:border-r md:border-white/30"
```

---

## Testimonials API & Fallback

`app/api/reviews/route.ts` checks for `AIRTABLE_TOKEN` and `AIRTABLE_BASE_ID` before making any fetch:
- If either is missing: returns `{ records: [] }` with status 200
- If Airtable fetch fails: returns `{ records: [] }` with status 200 (never 500)

`testimonials-section.tsx` client fetch:
- If `!res.ok`: sets reviews to `[]`, calls `setLoading(false)`, returns (no throw)
- Catch block: sets reviews to `[]` silently
- `finally`: calls `setLoading(false)`

To enable live reviews, add to project environment variables:
- `AIRTABLE_TOKEN`
- `AIRTABLE_BASE_ID`

---

## Footer Implementation Note

The `<Footer />` component renders a `<div>` (not `<footer>`) internally to avoid invalid nested `<footer><footer>` HTML. The semantic `<footer>` element is provided by `page.tsx`:

```tsx
// page.tsx — provides the semantic footer element
<div className="bg-[#388E52]">
  <Footer />   {/* renders <div> internally */}
</div>
```

---

## Responsive Design

```
Mobile     < 640px   pt-28 hero offset; 1-col layouts; hamburger menu
Tablet    640-1024px  2-col grids; balanced spacing
Desktop   > 1024px   3-4 col layouts; pt-32 hero offset; full nav
```

Grid collapse patterns:
- Stats: 4 → 2 → 1 col
- Services: 3 → 2 → 1 col
- Testimonials: 3 → 2 → 1 col
- FAQ: 1 col always

---

## Environment Variables

| Variable | Required For | Fallback |
|----------|-------------|---------|
| `AIRTABLE_TOKEN` | Live reviews in testimonials | Empty reviews, no error |
| `AIRTABLE_BASE_ID` | Live reviews in testimonials | Empty reviews, no error |

---

## Quick Start for Local Development

```bash
# Clone
git clone https://github.com/AI-automator01/v0-landscaping-landing-page-4-2-orange-emerald.git
cd v0-landscaping-landing-page-4-2-orange-emerald

# Install
npm install

# Run
npm run dev
# → http://localhost:3000
```

```bash
npm run dev      # Dev server with HMR
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint
```

### Update Business Information
Edit `lib/config.ts` — changes automatically cascade to Header, Hero, Stats, Services, Footer, and CtaModal.

### Add a New Service
Update `businessConfig.services` array in `lib/config.ts`. No component edits needed.

### Change Colors
Edit CSS variables in `app/globals.css` `:root` block. Re-register any new tokens in `@theme inline` to use as Tailwind utilities.

### Add a New Section
1. Create `components/[category]/[name].tsx` with `py-0` on the outermost element
2. Import in `app/page.tsx`
3. Add a `<section className="relative z-* bg-[#color] py-10">` wrapper in the alternating color sequence

---

## Future Enhancements

- **Airtable integration**: Configure `AIRTABLE_TOKEN` + `AIRTABLE_BASE_ID` to enable live testimonials
- **Form submission backend**: Wire `app/api/leads/route.ts` to SendGrid or Resend
- **Google Analytics 4**: Conversion tracking for CTA clicks
- **Booking calendar**: Appointment scheduling integration
- **Blog/MDX**: Case study articles
- **Image CDN**: Advanced srcset and WebP optimization
- **CRM sync**: Salesforce/HubSpot lead routing

---

**Status: FULLY COMPLETE AND PRODUCTION READY**
