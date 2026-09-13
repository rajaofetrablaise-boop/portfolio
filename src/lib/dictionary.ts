export type Lang = "fr" | "en";

export const dictionaries = {
  fr: {
    nav: { work: "Projets", about: "À propos", contact: "Contact" },
    whatsapp: { tooltip: "Discutons par WhatsApp" },
    hero: {
      kicker: "Product UX/UI Designer",
      location: "Basé à Madagascar, Disponible à l'international",
      bio: "Je transforme des besoins produit complexes en interfaces claires et utilisables.",
      ctaPrimary: "Réserver un appel",
      ctaSecondary: "Voir mes projets",
    },
    home: {
      statsHeading: "Un parcours en chiffres",
      stats: [
        { value: "80+", label: "projets livrés" },
        { value: "6", label: "ans d'expérience" },
        { value: "7+", label: "pays accompagnés" },
      ],
      caseStudiesHeading: "Études de cas",
      viewProject: "VOIR LE PROJET",
      aboutCta: "Obtenir mon CV",
      pricingHeading: "Une tarification claire",
      pricingCta: "Réserver un appel",
      pricingPlans: [
        {
          name: "Full Time",
          pricePrefix: "À partir de",
          price: "900€/mois",
          description: "Comme un membre de l'équipe, à temps plein sur votre produit.",
          features: [
            "7 à 8h par jour",
            "Intégration à votre équipe produit",
            "Design UX/UI",
            "Suivi hebdomadaire",
            "Sans engagement",
          ],
        },
        {
          name: "Site web (Design + Dev)",
          pricePrefix: "À partir de",
          price: "1 200€",
          description: "Pour donner vie à votre présence en ligne, de la conception à la mise en ligne.",
          features: [
            "Design UX/UI sur-mesure",
            "Responsive (desktop + mobile)",
            "Stack : Next.js",
            "Jusqu'à 8 pages",
            "Livraison clé en main",
          ],
        },
        {
          name: "SaaS (Design + Dev)",
          pricePrefix: "À partir de",
          price: "2 000€",
          description: "Pour lancer votre produit SaaS, de la conception à la mise en ligne.",
          features: [
            "Design UX/UI sur-mesure",
            "Stack : Next.js, Supabase",
            "Auth, dashboard, base de données",
            "Intégration API",
            "Livraison clé en main",
          ],
        },
      ],
    },
    about: {
      heading: "À propos",
      intro:
        "Senior Product Designer avec plus de 6 ans d'expérience dans la conception de produits SaaS, web et mobiles. Expert en UX/UI, Design Systems et création d'expériences numériques intuitives.",
      skillsHeading: "Compétences",
      skills: [
        "Recherche utilisateur",
        "Architecture de l'information",
        "Wireframing & prototypage",
        "UI Design",
        "Design system",
        "Tests d'usabilité",
        "IA générative",
      ],
      toolsHeading: "Outils",
    },
    footer: {
      ctaLabel: "Un projet ? Discutons-en",
      copyEmail: "Cliquer pour copier",
      copiedEmail: "Copié !",
      rights: "Tous droits réservés.",
    },
    cvModal: {
      heading: "Recevoir mon CV",
      description: "Laissez votre email, je vous envoie mon CV directement.",
      emailLabel: "Email",
      emailPlaceholder: "vous@email.com",
      submitCta: "Envoyer",
      sending: "Envoi en cours...",
      successTitle: "CV envoyé !",
      successSubtitle: "Vérifiez votre boîte mail.",
      error: "Une erreur est survenue. Réessayez.",
    },
  },
  en: {
    nav: { work: "Work", about: "About", contact: "Contact" },
    whatsapp: { tooltip: "Chat on WhatsApp" },
    hero: {
      kicker: "Product UX/UI Designer",
      location: "Based in Madagascar, Available internationally",
      bio: "I turn complex\nproduct needs into clear,\nusable interfaces.",
      ctaPrimary: "Book a call",
      ctaSecondary: "See my work",
    },
    home: {
      statsHeading: "A track record in numbers",
      stats: [
        { value: "80+", label: "projects delivered" },
        { value: "6", label: "years of experience" },
        { value: "7+", label: "countries served" },
      ],
      caseStudiesHeading: "Case studies",
      viewProject: "VIEW PROJECT",
      aboutCta: "Get my resume",
      pricingHeading: "Clear pricing",
      pricingCta: "Book a call",
      pricingPlans: [
        {
          name: "Full Time",
          pricePrefix: "From",
          price: "$900/month",
          description: "Like a team member, full-time on your product.",
          features: [
            "7 to 8h per day",
            "Integrated into your product team",
            "UX/UI design",
            "Weekly check-ins",
            "No commitment",
          ],
        },
        {
          name: "Website (Design + Dev)",
          pricePrefix: "From",
          price: "$1,200",
          description: "To bring your online presence to life, from design to launch.",
          features: [
            "Custom UX/UI design",
            "Responsive (desktop + mobile)",
            "Stack: Next.js",
            "Up to 8 pages",
            "Turnkey delivery",
          ],
        },
        {
          name: "SaaS (Design + Dev)",
          pricePrefix: "From",
          price: "$2,000",
          description: "Launch your SaaS product, from design to deployment.",
          features: [
            "Custom UX/UI design",
            "Stack: Next.js, Supabase",
            "Auth, dashboard, database",
            "API integration",
            "Turnkey delivery",
          ],
        },
      ],
    },
    about: {
      heading: "About",
      intro:
        "Senior Product Designer with over 6 years of experience designing SaaS, web, and mobile products. Expert in UX/UI, design systems, and building intuitive digital experiences.",
      skillsHeading: "Skills",
      skills: [
        "User research",
        "Information architecture",
        "Wireframing & prototyping",
        "UI design",
        "Design systems",
        "Usability testing",
        "Generative AI",
      ],
      toolsHeading: "Tools",
    },
    footer: {
      ctaLabel: "Got a project? Let's talk",
      copyEmail: "Click to copy",
      copiedEmail: "Copied!",
      rights: "All rights reserved.",
    },
    cvModal: {
      heading: "Get my resume",
      description: "Leave your email and I'll send you my resume directly.",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      submitCta: "Send",
      sending: "Sending...",
      successTitle: "Resume sent!",
      successSubtitle: "Check your inbox.",
      error: "Something went wrong. Please try again.",
    },
  },
} as const;

export const tools = ["Figma", "FigJam", "Maze", "Miro", "Claude Code", "Photoshop", "Jira"];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/blaise-rajaofetra/", icon: "linkedin" as const },
  { label: "Dribbble", href: "https://dribbble.com/BlaiseRajaofetra", icon: "dribbble" as const },
  { label: "Behance", href: "https://www.behance.net/rablaise", icon: "behance" as const },
];
