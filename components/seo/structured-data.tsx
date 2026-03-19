import { businessConfig } from "@/lib/config"

const BASE_URL = "https://www.veridian.com"

export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": BASE_URL,
    name: businessConfig.fullName,
    alternateName: businessConfig.name,
    description: businessConfig.description,
    url: BASE_URL,
    logo: `${BASE_URL}/images/landscape2.webp`,
    image: `${BASE_URL}/images/landscape2.webp`,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    foundingDate: String(businessConfig.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port of Spain",
      addressRegion: "Port of Spain",
      addressCountry: "TT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.6596,
      longitude: -61.5086,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: businessConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscaping Services",
      itemListElement: businessConfig.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: {
            "@type": "LandscapingBusiness",
            name: businessConfig.fullName,
          },
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12",
    },
    sameAs: [
      businessConfig.social.facebook,
      businessConfig.social.instagram,
      businessConfig.social.linkedin,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
