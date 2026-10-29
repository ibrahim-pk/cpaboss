// What's New page content.
// Images go in /public/images/whats-new/ (a gradient shows until they exist).

export const whatsNewIntro = {
  title: "What's",
  highlight: "New",
  text: "Company updates, how we measure our products, and where we are heading next. We would rather show you the reasoning than publish numbers we cannot substantiate.",
};

export const companyUpdate = {
  image: "/images/whats-new/company-update.jpg",
  imageAlt: "Two colleagues reviewing work on a computer screen",
  headline:
    "Cpa Boss Affiliate was founded in 2026 and is a limited liability company registered in Wyoming, USA. Today we run two online businesses: IdentitySearch.ai, our AI report generator, and Cpabossfootwear.com, our Shopify shoe store.",
  text: "You will see no inflated customer counts or revenue statistics on this page. We are a young, small team, and we would rather let our products speak for themselves.",
  links: [
    { label: "Company Updates", href: "#company-updates" },
    { label: "How We Measure", href: "#how-we-measure" },
    { label: "What's Next", href: "#whats-next" },
  ],
};

export const measure = {
  title: "How we",
  highlight: "measure",
  intro: "Our success is measured by our customers' satisfaction. These are the three things we actually track.",
  items: [
    {
      title: "Reports that answer the question",
      text: "Whether an IdentitySearch.ai report is clear, useful, and delivered quickly after purchase.",
      image: "/images/whats-new/measure-time.jpg",
      imageAlt: "Two colleagues reviewing documents at a laptop",
    },
    {
      title: "Orders that arrive as promised",
      text: "Whether Cpabossfootwear.com orders ship on time, fit right, and arrive in good condition.",
      image: "/images/whats-new/measure-reporting.jpg",
      imageAlt: "Bright open-plan office with people at their desks",
    },
    {
      title: "Checkout that just works",
      text: "Whether customers can pay smoothly by card or through Shopify checkout, without errors or confusion.",
      image: "/images/whats-new/measure-capability.jpg",
      imageAlt: "Three colleagues looking at a laptop together",
    },
  ],
};

export const next = {
  title: "What's",
  highlight: "next",
  intro: "Where we are investing our time over the next few years.",
  items: [
    {
      title: "Smarter AI reports",
      text: "We are continuing to improve how IdentitySearch.ai uses Google Gemini AI, so reports become clearer, faster, and easier to read.",
    },
    {
      title: "A growing footwear collection",
      text: "We plan to add new styles and sizes to Cpabossfootwear.com, guided by what our customers ask for most.",
    },
    {
      title: "A better customer experience",
      text: "We are refining checkout, support, and mobile shopping across both products, so buying from us stays simple and secure.",
    },
  ],
  closing:
    "If you have a question about either product, or feedback on how we can do better, we would like to hear it.",
  button: { label: "Get In Touch", href: "/contact" },
};

export const jobs = {
  title: "Job",
  highlight: "Opportunities",
  text: "There are currently no job openings. We are a small team and we hire slowly, but if you work in e-commerce, software, AI, or customer support, we would still like to hear from you.",
  button: { label: "Introduce Yourself", href: "/contact" },
};
