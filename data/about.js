// All About page text. Edit here without touching the layout.
import { company } from "./site";

export const whoWeAre = {
  eyebrow: "Who we are",
  title: "Two online businesses, built to be simple, secure, and trustworthy.",
  paragraphs: [
    `${company.name} is a Wyoming-registered limited liability company that builds and runs online products for consumers.`,
    "Headquartered in Wyoming, USA and founded in 2024, we operate two businesses: IdentitySearch.ai, an AI report generator sold as a digital product, and Cpabossfootwear.com, an online shoe store built on Shopify.",
  ],
  stats: [
    { value: "2024", label: "Founded" },
    { value: "2", label: "Products" },
    { value: "Wyoming", label: "Headquarters" },
  ],
};

export const businessProfile = {
  eyebrow: "Business profile",
  title: "The essentials, at a glance",
  rows: [
    { label: "Legal name", value: company.legalName },
    { label: "Entity type", value: "Limited Liability Company" },
    { label: "Founded", value: "2024" },
    { label: "Headquarters", value: "Wyoming, USA" },
    { label: "Registered address", value: `${company.addressLine1}, ${company.addressLine2}` },
    { label: "Products", value: "IdentitySearch.ai, Cpabossfootwear.com" },
    { label: "Team size", value: "2–10" },
    { label: "Tax ID / EIN", value: company.ein },
    { label: "Website", value: "cpabossaffiliate.com", href: "https://cpabossaffiliate.com" },
    { label: "Email", value: company.email, href: `mailto:${company.email}` },
    { label: "Phone", value: company.phone, href: company.phoneHref },
  ],
};

export const mission = {
  eyebrow: "Our purpose",
  title: "Mission & Vision",
  image: "/images/about-mission.jpg",
  items: [
    {
      title: "Our Mission",
      color: "blue",
      text: "To build online products that are clear, fast, and trustworthy — from AI-generated reports to quality footwear — so customers get exactly what they came for.",
    },
    {
      title: "Our Vision",
      color: "green",
      text: "To be a trusted name in online consumer products, known for honest information, secure checkout, and real customer care.",
    },
  ],
};

export const values = {
  eyebrow: "What we believe",
  title: "Our values",
  intro: `The six principles at ${company.name} that shape how we build our products and treat our customers.`,
  items: [
    {
      title: "Innovation",
      icon: "people",
      color: "blue",
      text: "We use modern tools like Google Gemini AI to build better products. New technology earns its place only when it makes the result clearer, faster, or more useful for the customer.",
    },
    {
      title: "Integrity",
      icon: "gear",
      color: "green",
      text: "We are honest about what our products do and what they do not do. IdentitySearch.ai reports are built from publicly available information, and we say so plainly.",
    },
    {
      title: "Customer Focus",
      icon: "search",
      color: "blue",
      text: "Our success is measured by our customers' satisfaction — a report that answers their question, or a pair of shoes that fits and arrives on time.",
    },
    {
      title: "Excellence",
      icon: "people",
      color: "green",
      text: "We keep testing and improving our report generator and our store, so every order is a little better than the last.",
    },
    {
      title: "Security",
      icon: "gear",
      color: "blue",
      text: "Payments run through trusted providers — the NMI gateway with Nexio and Kurv processing for IdentitySearch.ai, and Shopify's secure checkout for Cpabossfootwear.com.",
    },
    {
      title: "Simplicity",
      icon: "search",
      color: "green",
      text: "Buying from us should be easy. Clear pages, clear prices, and a checkout customers already know and trust.",
    },
  ],
};

export const services = {
  eyebrow: "What we do",
  title: "Our two businesses",
  intro: `${company.name} builds and runs two online products, each with its own customers and its own platform.`,
  items: [
    {
      title: "IdentitySearch.ai — AI Report Generator",
      text: "A digital product that turns a name, username, email, or phone number into a clear report built from publicly available information. Reports are generated with Google Gemini AI and paid for by card through a secure checkout powered by NMI, Nexio, and Kurv.",
    },
    {
      title: "Cpabossfootwear.com — Online Shoe Store",
      text: "An online footwear store built on Shopify. Customers browse the collection, choose their style and size, and check out securely from any device.",
    },
  ],
};

export const approach = {
  eyebrow: "How we work",
  title: "Our approach",
  intro: "Four steps we repeat to keep both products improving — from the first idea to every update after launch.",
  steps: [
    {
      title: "Research",
      text: "We study what customers need — the questions they want answered, and the styles they want to wear.",
    },
    {
      title: "Build",
      text: "We build on proven platforms: Google Gemini AI for reports, Shopify for our store, and NMI, Nexio, and Kurv for card payments.",
    },
    {
      title: "Launch",
      text: "We release in small steps, testing pages, checkout, and reports so customers get a smooth experience.",
    },
    {
      title: "Improve",
      text: "We listen to customer feedback, measure results, and keep refining both products over time.",
    },
  ],
};

export const whoWeServe = {
  eyebrow: "Who we serve",
  title: "Built for everyday customers",
  items: [
    "People who want a clear, AI-organized report built from publicly available information",
    "Shoppers looking for quality footwear with a simple, secure online checkout",
    "Customers across the USA who expect fast, reliable online service",
  ],
};

export const whyUs = {
  eyebrow: "Why customers choose us",
  title: "What makes the difference",
  items: [
    {
      title: "AI-powered reports",
      text: "IdentitySearch.ai uses Google Gemini AI to turn public information into reports that are clear and easy to read.",
    },
    {
      title: "Trusted checkout",
      text: "Card payments run through the NMI gateway with Nexio and Kurv processing, and Shopify's secure checkout powers our store.",
    },
    {
      title: "Simple experience",
      text: "Clean pages and a short path from search or browse to purchase, on any device.",
    },
    {
      title: "Honest information",
      text: "We are clear about what our products do, what they cost, and what they are not meant for.",
    },
    {
      title: "Real support",
      text: "Questions about a report or an order go to a real team that answers.",
    },
  ],
};

export const cta = {
  eyebrow: "Let's talk",
  title: "Questions about our products?",
  text: "Whether it is about an IdentitySearch.ai report or a Cpabossfootwear.com order, get in touch and our team will get back to you.",
  button: { label: "Get in Touch", href: "/contact" },
};
