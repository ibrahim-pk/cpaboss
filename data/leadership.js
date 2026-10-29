// Leadership page content.
// Leader photos go in /public/images/leaders/ (initials show until the file exists).

export const leadershipIntro = {
  title: "Leadership",
  highlight: "Team",
  text: "A small, experienced team builds and runs IdentitySearch.ai and Cpabossfootwear.com. Strategic oversight sits with our President and Founder, who leads the company's strategy, technology, and operations.",
};

export const leaders = [
  {
    name: "Md Biplab Hossain",
    role: "President and Founder, Cpa Boss Affiliate, USA.",
    photo: "/images/leaders/biplab-hossain.jpg",
    initials: "BH",
    sections: [
      {
        label: "Work",
        text: "Equipped with extensive experience in performance marketing, software development, and digital search platforms, Md Biplab Hossain brings strong strategic leadership and technical insight to Cpa Boss Affiliate. As the Founder and President, he leads the development and growth of the company's two products: IdentitySearch.ai, an AI report generator powered by Google Gemini, and Cpabossfootwear.com, an online shoe store built on Shopify. He oversees end-to-end strategy, marketing, and technology integrations to deliver secure, reliable, and high-performance experiences to customers nationwide.",
      },
      {
        label: "Life",
        text: "Md Biplab Hossain balances his busy leadership responsibilities by making time for continuous learning, exploring new digital technologies, and spending quality time with his family and loved ones.",
      },
    ],
  },
];

export const structure = {
  title: "How we are",
  highlight: "structured",
  paragraphs: [
    "We operate as a lean, agile team built around our two products. Instead of rigid departments, small groups work across product development, marketing, and customer support, so decisions are made quickly and close to the customer.",
    "Our President and Founder sets the company's strategic direction and oversees both IdentitySearch.ai and Cpabossfootwear.com. Day-to-day responsibilities are shared across the team, with regular reviews of product performance, customer feedback, and sales to keep both businesses on track.",
  ],
  images: [
    { src: "/images/structure-1.jpg", alt: "Colleagues discussing work around a laptop" },
    { src: "/images/structure-2.jpg", alt: "Team members working together at computers" },
    { src: "/images/structure-3.jpg", alt: "Smiling team standing together in the office" },
  ],
  closing:
    "Our corporate culture is predicated on psychological safety and radical transparency. Hierarchical barriers are deliberately minimized to foster cross-functional collaboration, where diverse perspectives are not merely tolerated but actively solicited as catalysts for innovation.",
};

export const workValues = {
  title: "The values we",
  highlight: "work against",
  intro: "Five principles that decide how we build our products and treat our customers.",
  items: [
    { title: "Innovation", color: "blue", text: "We use tools like Google Gemini AI to build better products, not just familiar ones." },
    { title: "Integrity", color: "green", text: "We are honest about what our products do, what they cost, and what they do not do." },
    { title: "Customer Focus", color: "blue", text: "Our success is measured by our customers' satisfaction." },
    { title: "Excellence", color: "green", text: "We deliver reliable reports and quality footwear, every order." },
    { title: "Collaboration", color: "blue", text: "We work as one small team across product, marketing, and support." },
  ],
};
