import {
  BUSINESS_NAME, PHONE_SCHEMA, SITE_URL,
  RATING, REVIEW_COUNT, SERVICE_SUBURBS, EMAIL,
} from "./config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    description:
      "High-performance epoxy flooring systems for commercial and industrial environments on the Central Coast, NSW. Warehouses, commercial kitchens, workshops, garages. Owner-operated, 500+ floors installed.",
    url: SITE_URL,
    telephone: PHONE_SCHEMA,
    email: EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tuggerah",
      addressRegion: "NSW",
      postalCode: "2259",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -33.2935,
        longitude: 151.4169,
      },
      geoRadius: "50000",
    },
    areaServed: SERVICE_SUBURBS.map((suburb) => ({
      "@type": "City",
      name: suburb,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RATING,
      reviewCount: REVIEW_COUNT,
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Epoxy Flooring Services",
      itemListElement: [
        "Warehouse Epoxy Flooring",
        "Commercial Kitchen Epoxy Flooring",
        "Workshop & Industrial Floor Coatings",
        "Brewery & Hospitality Flooring",
        "Garage Epoxy Flooring",
        "Interior Epoxy Flooring",
      ].map((name, i) => ({
        "@type": "Offer",
        "@id": `${SITE_URL}/#service-${i}`,
        itemOffered: { "@type": "Service", name },
      })),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [],
  };
}

export type FaqItem = { question: string; answer: string };

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
