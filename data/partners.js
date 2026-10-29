// Our Partners page content.
// Partner logos go in /public/images/partners/ — until a file exists, the card shows a neutral initial badge.

export const partnersIntro = {
  title: "Our",
  highlight: "Partnerships",
  text: "Cpa Boss Affiliate relies on trusted technology, commerce, payment, and artificial intelligence partners — including Google Gemini AI, Shopify, NMI, Nexio, Kurv, AWS, and Namecheap — to run IdentitySearch.ai and Cpabossfootwear.com reliably and securely.",
};

export const partnersSection = {
  title: "Our",
  highlight: "Partners",
  text: "The platforms behind our two products: AI that generates our reports, the store that sells our shoes, the payment providers our customers trust, and the infrastructure that keeps everything online.",
};

export const partners = [
  {
    name: "Google Gemini AI",
    tag: "Artificial Intelligence",
    logo: "/images/partners/gemini.png",
    initial: "G",
    text: "Gemini AI powers the report generator behind IdentitySearch.ai, organizing publicly available information into clear, easy-to-read reports.",
  },
  {
    name: "Shopify",
    tag: "E-Commerce Platform",
    logo: "/images/partners/shopify.png",
    initial: "S",
    text: "Cpabossfootwear.com is built on Shopify, which runs our storefront, product catalog, and secure checkout for shoe customers.",
  },
  {
    name: "NMI",
    tag: "Payment Gateway",
    logo: "/images/partners/nmi.png",
    initial: "NMI",
    text: "Card payments for IdentitySearch.ai reports run through the NMI payment gateway, which securely connects our checkout to our payment processors.",
  },
  {
    name: "Nexio",
    tag: "Payment Processing",
    logo: "/images/partners/nexio.png",
    initial: "N",
    text: "Nexio processes card payments for IdentitySearch.ai, helping customers check out quickly and securely.",
  },
  {
    name: "Kurv",
    tag: "Payment Processing",
    logo: "/images/partners/kurv.png",
    initial: "K",
    text: "Kurv provides payment processing for IdentitySearch.ai, giving our customers a reliable, secure way to pay for their reports.",
  },
  {
    name: "Amazon Web Services",
    tag: "Cloud Infrastructure",
    logo: "/images/partners/aws.png",
    initial: "AWS",
    text: "AWS provides the cloud infrastructure — storage, databases, and monitoring — that keeps our digital products reliable, secure, and ready to grow.",
  },
  {
    name: "Namecheap",
    tag: "Domains & Security",
    logo: "/images/partners/namecheap.png",
    initial: "N",
    text: "Domains, DNS, and TLS certificates are managed through Namecheap, keeping our websites reachable, trusted, and secure for every visitor.",
  },
];

export const platform = {
  eyebrow: "Our Platform",
  nameDark: "IdentitySearch",
  nameBlue: ".ai",
  text: "IdentitySearch.ai is our AI report generator. Enter a name, username, email, or phone number and get a clear report built from publicly available information, generated with Google Gemini AI and paid for with a secure card checkout.",
  button: { label: "Visit IdentitySearch.ai", href: "https://identitysearch.ai/" },
};
