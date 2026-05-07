export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "How much does epoxy flooring cost on the Central Coast?",
    answer:
      "Pricing depends on the size, condition of the existing floor, and system type. Residential garages typically start from $90–$100 per m². Commercial jobs are priced on site inspection. We provide free, fixed-price quotes - the price we quote is the price you pay, no variations on the day.",
  },
  {
    question: "How long does epoxy flooring last?",
    answer:
      "A properly installed commercial-grade epoxy system lasts 10–20 years with standard maintenance. The key is surface preparation and using the right product for the environment. Cheap coatings applied without proper prep typically fail in 2–3 years.",
  },
  {
    question: "Can you install epoxy in a working warehouse or business?",
    answer:
      "Yes. We plan around your operations and can stage the work in sections to minimise disruption. We've worked in live commercial kitchens, active warehouses, and busy workshops. Just let us know your constraints at the quote stage.",
  },
  {
    question: "Is epoxy flooring slippery?",
    answer:
      "Standard high-gloss epoxy can be slippery when wet. We add anti-slip aggregate to all commercial and wet-area work as standard practice. Slip resistance ratings are available on request for commercial applications.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A residential double garage takes 1–2 days. Commercial jobs vary - we'll confirm timeframes in your quote. You can typically walk on the surface within 24 hours and return to full commercial use within 72 hours.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes. Warranty terms are confirmed at quote stage and depend on the system installed and the environment. We use commercial-grade materials and follow manufacturer installation specs on every job.",
  },
];

export const commercialFaqs: Faq[] = [
  {
    question: "What commercial environments do you work in?",
    answer:
      "We work in warehouses, commercial kitchens, workshops, industrial manufacturing spaces, breweries, hospitality venues, and showrooms across the Central Coast. Any high-traffic commercial environment.",
  },
  {
    question: "Can you work around our business hours?",
    answer:
      "Yes. We regularly stage work to avoid disrupting operations. We can work nights, weekends, or in sections - whatever minimises downtime for your business.",
  },
  {
    question: "What's the difference between commercial and residential epoxy?",
    answer:
      "Commercial systems use heavier build coats, chemical-resistant topcoats, and anti-slip aggregates as standard. Residential systems prioritise aesthetics. We specify the right system for the job - we don't apply a garage system to a warehouse.",
  },
  {
    question: "Do your commercial coatings meet food safety standards?",
    answer:
      "Yes. Our commercial kitchen systems use food-safe, seamless coatings with anti-slip and chemical-resistant topcoats. We can provide product data sheets on request.",
  },
  ...homeFaqs.slice(0, 2),
];

export const garageFaqs: Faq[] = [
  {
    question: "What's the best epoxy system for a residential garage?",
    answer:
      "For most residential garages we recommend a full-broadcast flake system - it looks great, hides imperfections, is anti-slip, and holds up to vehicle traffic and oil spills. Solid colour systems are available for a cleaner look.",
  },
  {
    question: "Will epoxy flooring handle hot tyre pickup?",
    answer:
      "Not all epoxy systems do - cheaper products soften under hot tyres and pick up marks. We use polyaspartic topcoats that resist hot tyre transfer and UV yellowing. Worth asking any contractor what topcoat they're using.",
  },
  ...homeFaqs,
];
