export interface Faqs {
  id: number;
  question: string;
  answer: string;
}

export const faqs = [
  {
    section: "Général",
    items: [
      {
        question: "Quels matériaux sont utilisés pour les montres ?",
        answer:
          "Nos montres pour femmes sont fabriquées en acier inoxydable de qualité avec un verre résistant aux rayures.",
      },
      {
        question: "Les montres sont-elles résistantes à l’eau ?",
        answer:
          "Oui, tous les modèles sont résistants à l’eau jusqu’à 30 mètres.",
      },
      {
        question: "Les montres sont-elles garanties ?",
        answer:
          "Chaque montre est couverte par une garantie d’un an contre les défauts de fabrication.",
      },
      {
        question: "Puis-je retourner ou échanger ma commande ?",
        answer:
          "Les retours et échanges sont acceptés sous 14 jours si l’article n’a pas été utilisé et est dans son emballage d’origine.",
      },
    ],
  },
  {
    section: "Support",
    items: [
      {
        question: "Comment passer une commande ?",
        answer:
          "Choisissez votre montre préférée, remplissez le formulaire rapide et votre demande sera envoyée par WhatsApp.",
      },
      {
        question: "Quels sont les modes de paiement disponibles ?",
        answer:
          "Paiement à la livraison ou paiement en ligne sécurisé selon votre localisation.",
      },
      {
        question: "Combien de temps prend la livraison ?",
        answer:
          "Les commandes sont livrées en 2 à 5 jours ouvrables selon la région.",
      },
      {
        question: "Comment puis-je contacter le support client ?",
        answer:
          "Contactez-nous à tout moment via WhatsApp, email ou Instagram DM.",
      },
    ],
  },
  {
    section: "Livraison & Retours",
    items: [
      {
        question: "Livrez-vous partout au Maroc ?",
        answer: "Oui, nous assurons une livraison nationale.",
      },
      {
        question: "Combien coûte la livraison ?",
        answer:
          "Gratuite pour les commandes supérieures à 200 MAD ; des frais standards s’appliquent pour les petites commandes.",
      },
      {
        question: "Que faire si ma montre arrive endommagée ?",
        answer:
          "Contactez le support dans les 48h pour obtenir un remplacement sans frais.",
      },
      {
        question: "Puis-je suivre ma commande ?",
        answer:
          "Oui, vous pouvez suivre votre commande directement via WhatsApp.",
      },
    ],
  },
];
