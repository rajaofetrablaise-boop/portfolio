export interface Shot {
  gradient: [string, string];
  image?: string;
}

export const shots: Shot[] = [
  { gradient: ["#fdba74", "#c2410c"], image: "/shot1.png" },
  { gradient: ["#93c5fd", "#1d4ed8"], image: "/shot2.png" },
  { gradient: ["#86efac", "#15803d"], image: "/shot3.png" },
  { gradient: ["#c4b5fd", "#6d28d9"], image: "/shot4.png" },
  { gradient: ["#fda4af", "#be123c"], image: "/shot5.png?v=4" },
  { gradient: ["#a5f3fc", "#0e7490"], image: "/shot6.png" },
];
