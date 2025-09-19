interface Card {
  id: number;
  name: string;
  image: string | null;
  review: string | null;
  profession: string | null;
  fallback?: string;
}

export const testimonials: Card[] = [
  {
    id: 1,
    name: "Fatima Zahra",
    image: "/assets/images/pfp.jpeg",
    fallback: "F.Z.",
    review:
      "Les bijoux que j'ai achetés ici sont absolument magnifiques ! La qualité de fabrication est exceptionnelle, et j'ai reçu tellement de compliments. Je recommande vivement !",
    profession: "Cliente Instagram",
  },
  {
    id: 2,
    name: "Khadija",
    image: "/assets/images/pfp.jpeg",
    fallback: "K.",
    review:
      "J'ai eu une expérience fantastique en achetant des bijoux. La sélection est variée et le personnel a été incroyablement utile pour trouver la pièce parfaite pour moi.",
    profession: "Cliente Facebook",
  },
  {
    id: 3,
    name: "Zineb",
    image: "/assets/images/pfp.jpeg",
    fallback: "Z.",
    review:
      "J'adore les designs uniques proposés ici. Chaque pièce est spéciale et unique en son genre. Je suis devenue cliente régulière et j'attends toujours avec impatience les nouveautés.",
    profession: "Cliente Instagram",
  },
  {
    id: 4,
    name: "Aicha",
    image: "/assets/images/pfp.jpeg",
    fallback: "A.",
    review:
      "Qualité et service exceptionnels ! Les bijoux que j'ai achetés ont dépassé mes attentes. Je reviendrai certainement pour en acheter davantage.",
    profession: "Cliente Instagram",
  },
];
