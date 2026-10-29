// All site text and contact details live here, so you can edit content without touching components.

export const company = {
  name: "Innovation Solution Provider LLC",
  shortName: "Innovation Solution Provider",
  tagline: "Providing Reliable Information and Promoting the Safety of Consumers Everywhere.",
  email: "info@innovationsolutionprovider.com",
  phone: "+1 (307) 400-1496",
  phoneHref: "tel:+13074001496",
  addressLine1: "30 N Gould St Ste R",
  addressLine2: "Sheridan, WY 82801, USA",
  ein: "35-2863798",
  mapQuery: "30 N Gould St Ste R, Sheridan, WY 82801, USA",
  social: {
    facebook: "https://www.facebook.com/ISPLLCUSA",
    twitter: "#",
    linkedin: "https://www.linkedin.com/company/innovation-solution-provider-llc/",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Leadership", href: "/leadership" },
  { label: "Our Partners", href: "/our-partners" },
  { label: "What's New", href: "/whats-new" },
];

// Put your images in /public/images with these names.
// Until they exist, each image area shows a soft gradient placeholder.
export const images = {
  logo: "/images/logo.png",
  heroVideo: "/videos/hero.mp4",
  heroPoster: "/images/hero-poster.jpg",
  dashboard: "/images/dashboard.jpg",
  team: "/images/team-tablet.jpg",
  laptop: "/images/team-laptop.jpg",
  success: "/images/success-team.jpg",
};

export const hero = {
  eyebrow: "Welcome to Innovation Solution Provider LLC",
  titleLine1: "Providing Reliable Information",
  titleLine2: "and Promoting the Safety of",
  titleHighlight: "Consumers Everywhere.",
  cta: { label: "Learn More", href: "#about" },
};

export const intro =
  "Innovation Solution Provider LLC runs two online businesses: IdentitySearch.ai, an AI report generator powered by Google Gemini, and Cpabossfootwear.com, an online shoe store built on Shopify.";

export const principles = [
  {
    text: "We build products people can actually rely on. Every IdentitySearch.ai report is built from publicly available information and organized by AI to be clear and easy to read — no jargon, no guesswork.",
    image: "team",
    alt: "Four colleagues reviewing performance data on a tablet",
  },
  {
    text: "We keep buying simple. Whether it is a digital report paid by card through our secure checkout, or a new pair of shoes from our Shopify store, checkout should be fast, secure, and familiar.",
    image: "laptop",
    alt: "Two colleagues reviewing a dashboard on a laptop",
  },
];

export const featureCards = [
  {
    icon: "search",
    color: "blue",
    text: "IdentitySearch.ai turns a name, username, email, or phone number into a clear report built from publicly available information. Reports are generated with Google Gemini AI and delivered online as a digital product.",
  },
  {
    icon: "gear",
    color: "green",
    text: "Build, test, optimize, repeat. This mentality is the driving force at Innovation Solution Provider LLC. We keep improving our report generator, our store, and our customer experience through constant, careful testing.",
  },
  {
    icon: "people",
    color: "blue",
    text: "Cpabossfootwear.com is our online shoe store, built on Shopify. Customers can browse the collection, find the right style and size, and check out securely from any device.",
  },
];

export const success = {
  title: "How do we define",
  highlight: "SUCCESS?",
  lead: "Innovation Solution Provider defines success the only way that matters: our customers get what they came for.",
  paragraphs: [
    "For IdentitySearch.ai, that means a clear, useful report delivered quickly, with a secure card checkout customers can trust.",
    "For Cpabossfootwear.com, it means shoes that fit, orders that arrive as promised, and a store that is easy to shop.",
    "We are honest about what our products do and what they do not do, so customers can buy with confidence.",
    "And that is the whole formula. Our success is measured by our customers' satisfaction.",
  ],
};

export const contactIntro =
  "Have a question about a report, an order, or our company? Getting in touch is easy — there are many ways you can reach us, simply click an option below.";

export const contactPage = {
  detailsTitle: "Contact Details",
  formEyebrow: "Stay In",
  formHighlight: "Touch",
  successMessage: "Thank you! Your message has been sent. We'll get back to you soon.",
};
