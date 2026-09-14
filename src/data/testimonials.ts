import type { LocalizedText } from "./projects";

export interface Testimonial {
  quote: LocalizedText;
  name: string;
  role: LocalizedText;
  gradient: [string, string];
  image?: string;
}

// TODO: replace these placeholder testimonials with real client quotes and photos.
export const testimonials: Testimonial[] = [
  {
    quote: {
      fr: "Blaise est un designer UI/UX exceptionnel !\nIl fait preuve d'un professionnalisme irréprochable et d'une créativité remarquable. Nous sommes entièrement satisfaits de ses services et le recommandons à 100 %.",
      en: "Blaise is an exceptional UI/UX designer! He shows impeccable professionalism and remarkable creativity. We are fully satisfied with his services and recommend him 100%.",
    },
    name: "XKS Group",
    role: { fr: "", en: "" },
    gradient: ["#6bb0ca", "#087ca7"],
    image: "/testimonial.png",
  },
  {
    quote: {
      fr: "Blaise sait tout faire et d'une manière remarquable. Encore merci pour cette mission un peu différente mais réussie parfaitement.",
      en: "Blaise can do it all, and in a remarkable way. Thanks again for this somewhat unusual mission, perfectly accomplished.",
    },
    name: "Pharmacile",
    role: { fr: "CEO", en: "CEO" },
    gradient: ["#93c5fd", "#1d4ed8"],
  },
  {
    quote: {
      fr: "Un projet compris 5/5, Une livraison au dessus de l'attendu. Au plaisir de d'échanger plus pour d'autres projets.",
      en: "A project understood 5/5, a delivery beyond expectations. Looking forward to working together again on other projects.",
    },
    name: "CherifZaila",
    role: { fr: "", en: "" },
    gradient: ["#c4b5fd", "#6d28d9"],
  },
];
