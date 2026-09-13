export interface LocalizedText {
  fr: string;
  en: string;
}

export interface Project {
  slug: string;
  title: LocalizedText;
  tagline: LocalizedText;
  role: LocalizedText;
  year: string;
  tags: string[];
  gradient: [string, string];
  cover?: string;
  externalUrl?: string;
}

// TODO: replace these placeholder projects with your real case studies.
export const projects: Project[] = [
  {
    slug: "fintech-mobile-redesign",
    title: {
      fr: "MondialGP | Plateforme de crowdshipping",
      en: "MondialGP | Crowdshipping Platform",
    },
    tagline: {
      fr: "Simplifier le transfert d'argent pour de nouveaux utilisateurs.",
      en: "Simplifying money transfers for first-time users.",
    },
    role: { fr: "Recherche & UI Design", en: "Research & UI design" },
    year: "2024",
    tags: ["Application mobile", "Logistique"],
    gradient: ["#fdba74", "#c2410c"],
    cover: "/CaseCover1.png?v=5",
    externalUrl: "https://www.behance.net/gallery/255425233/UXUI-Case-Study-Crowdshipping-App",
  },
  {
    slug: "saas-dashboard",
    title: {
      fr: "Skillyo | Plateforme de recrutement",
      en: "Skillyo | AI-Powered Recruiting Platform",
    },
    tagline: {
      fr: "Rendre des données complexes lisibles pour des équipes non techniques.",
      en: "Making complex data readable for non-technical teams.",
    },
    role: { fr: "UX/UI Design", en: "UX/UI design" },
    year: "2023",
    tags: ["SaaS", "RH & Recrutement", "IA"],
    gradient: ["#93c5fd", "#1d4ed8"],
    cover: "/CaseCover2.png",
    externalUrl:
      "https://www.behance.net/gallery/252603755/Skillyo-AI-Powered-Recruitment-UXUI-Case-Study",
  },
  {
    slug: "ecommerce-checkout",
    title: {
      fr: "Optimisation du checkout e-commerce",
      en: "E-commerce checkout optimization",
    },
    tagline: {
      fr: "Réduire l'abandon de panier sur mobile.",
      en: "Reducing cart abandonment on mobile.",
    },
    role: { fr: "UX Design & Tests", en: "UX design & testing" },
    year: "2023",
    tags: ["Mobile", "E-commerce", "Conversion"],
    gradient: ["#86efac", "#15803d"],
  },
  {
    slug: "health-booking-app",
    title: {
      fr: "App de prise de rendez-vous santé",
      en: "Healthcare booking app",
    },
    tagline: {
      fr: "Faciliter la prise de rendez-vous pour des patients peu à l'aise avec le digital.",
      en: "Making appointment booking easy for less tech-savvy patients.",
    },
    role: { fr: "Recherche & UX Design", en: "Research & UX design" },
    year: "2022",
    tags: ["Mobile", "Health", "Accessibility"],
    gradient: ["#c4b5fd", "#6d28d9"],
  },
];
