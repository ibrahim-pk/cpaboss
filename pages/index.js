import Link from "next/link";
import Layout from "../components/Layout";
import Photo from "../components/Photo";
import {
  TrendMark,
  Squiggle,
  MailIcon,
  PhoneIcon,
  PeopleIcon,
  GearIcon,
  SearchChartIcon,
} from "../components/Icons";
import {
  company,
  images,
  hero,
  intro,
  principles,
  featureCards,
  success,
  contactIntro,
} from "../data/site";

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7FBF2]">
      {/* Decorative soft squares */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-6 h-40 w-40 animate-float rounded-2xl bg-white/80 shadow-sm" />
        <div className="absolute left-32 -top-6 h-24 w-24 animate-float-slow rounded-xl bg-white/70 [animation-delay:-2s]" />
        <div className="absolute left-16 top-48 h-16 w-16 animate-float rounded-lg bg-white/80 [animation-delay:-4s]" />
        <div className="absolute left-4 top-[22rem] hidden h-28 w-28 animate-float-slow rounded-2xl border border-white bg-white/50 md:block [animation-delay:-6s]" />
        <div className="absolute -right-6 bottom-10 hidden h-36 w-36 animate-float-slow rounded-full bg-accent/10 md:block [animation-delay:-3s]" />
        <div className="absolute right-24 bottom-24 hidden h-16 w-16 animate-float rounded-full bg-accent/10 md:block [animation-delay:-1s]" />
        <div className="absolute -right-24 -top-24 hidden h-80 w-80 animate-spin-slow rounded-full border-2 border-dashed border-brand/10 lg:block" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="text-center lg:text-left">
          <p className="animate-fade-up text-base font-light text-accent-dark sm:text-lg">{hero.eyebrow}</p>
          <h1 className="mt-4 animate-fade-up text-3xl font-normal leading-tight text-ink [animation-delay:120ms] sm:text-4xl xl:text-[2.6rem]">
            <span className="sm:whitespace-nowrap">{hero.titleLine1}</span>{" "}
            <span className="sm:block sm:whitespace-nowrap">{hero.titleLine2}</span>{" "}
            <span className="block bg-gradient-to-r from-brand to-[#0897DB] bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>
          <Link
            href={hero.cta.href}
            className="shine mt-8 inline-block animate-fade-up overflow-hidden rounded-full bg-accent px-10 py-4 font-bold text-white shadow-[0_10px_25px_-10px_rgba(132,194,37,0.8)] transition [animation-delay:280ms] hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_16px_30px_-10px_rgba(132,194,37,0.9)]"
          >
            {hero.cta.label}
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-lg animate-zoom-in [animation-delay:200ms]">
          <div className="absolute -inset-3 -z-0 animate-glow-pulse rounded-[2rem] bg-gradient-to-br from-brand/15 to-accent/25 blur-xl" />
          <video
            className="relative aspect-video w-full rounded-3xl bg-sky-100 object-cover shadow-card"
            src={images.heroVideo}
            poster={images.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Cpa Boss Affiliate brand video"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Blue intro band ---------- */
function IntroBand() {
  return (
    <section id="about" className="relative scroll-mt-24">
      {/* Blue background covers the top part only, image overlaps into white */}
      <div className="absolute inset-x-0 top-0 h-[70%] overflow-hidden bg-brand md:h-[72%]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.25) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.15) 25%, transparent 25%)",
            backgroundSize: "120px 120px",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-6 left-1/2 hidden h-24 w-20 opacity-40 md:block"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1.2px, transparent 1.2px)",
            backgroundSize: "10px 10px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-4 pb-12 pt-12 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <p data-reveal="right" className="order-1 text-xl font-light leading-relaxed text-white sm:text-2xl lg:order-2 lg:pt-0">
          {intro}
        </p>
        <div data-reveal="left" className="group order-2 lg:order-1">
          <Photo
            src={images.dashboard}
            alt="Dashboard displayed on a laptop"
            className="aspect-[6/5] w-full shadow-card"
            gradient="from-slate-100 via-white to-indigo-100"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Principles (oval images) ---------- */
function OvalPhoto({ src, alt }) {
  // The photos already include the oval shape and blue outline
  return (
    <div data-reveal="zoom" className="mx-auto w-full max-w-[340px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={940}
        height={1136}
        loading="lazy"
        className="h-auto w-full transition duration-500 ease-out hover:-translate-y-2 hover:rotate-1"
      />
    </div>
  );
}

function Principles() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl space-y-16 px-4 md:space-y-10 md:px-6">
        {principles.map((item, i) => {
          const imageFirst = i % 2 === 1;
          return (
            <div key={i} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div data-reveal={imageFirst ? "right" : "left"} className={imageFirst ? "md:order-2" : ""}>
                <TrendMark className="mb-3 h-5 w-11" />
                <p className="text-lg font-light italic leading-loose text-slate-600 sm:text-xl">{item.text}</p>
              </div>
              <div className={imageFirst ? "md:order-1" : ""}>
                <OvalPhoto src={images[item.image]} alt={item.alt} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Feature cards ---------- */
const cardIcons = { people: PeopleIcon, gear: GearIcon, search: SearchChartIcon };

function FeatureCards() {
  return (
    <section className="relative overflow-hidden bg-[#F3FAEA] py-16 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.8) 25%, transparent 25%), linear-gradient(240deg, rgba(255,255,255,0.6) 25%, transparent 25%)",
          backgroundSize: "260px 260px",
        }}
      />
      <div className="relative mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
        {featureCards.map((card, i) => {
          const Icon = cardIcons[card.icon];
          const bg = card.color === "green" ? "bg-accent" : "bg-[#0897DB]";
          return (
            <article
              key={i}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` }}
              className={`shine group relative overflow-hidden rounded-2xl ${bg} p-7 text-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Soft wave highlight top-right */}
              <div
                aria-hidden
                className="absolute -right-16 -top-24 h-56 w-72 rounded-[50%] border-[18px] border-white/15 transition group-hover:border-white/25"
              />
              <Icon className="relative h-16 w-16 transition duration-500 group-hover:-rotate-6 group-hover:scale-110" />
              <p className="relative mt-6 text-[17px] font-semibold leading-relaxed">{card.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Success ---------- */
function Success() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div data-reveal="left" className="group">
          <Photo
            src={images.success}
            alt="Colleagues celebrating a completed project together in the office"
            className="aspect-[9/10] w-full rounded-sm shadow-card"
            gradient="from-orange-100 via-white to-sky-100"
          />
        </div>
        <div data-reveal="right">
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {success.title}
            <br />
            <span className="text-brand">{success.highlight}</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink">{success.lead}</p>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-500">
            {success.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function ContactItem({ icon: Icon, label, value, href }) {
  return (
    <a href={href} className="group flex items-center gap-5">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-accent/60 text-accent transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_10px_25px_-8px_rgba(132,194,37,0.8)] sm:h-[72px] sm:w-[72px]">
        <Icon className="h-6 w-6" />
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-semibold text-brand">{label}</span>
        <span className="block break-all text-lg text-slate-600 transition group-hover:text-ink sm:text-xl">
          {value}
        </span>
      </span>
    </a>
  );
}

function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=15&output=embed`;
  return (
    <section id="contact" className="scroll-mt-24 bg-white pb-20 pt-8 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div data-reveal="left">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Contact <span className="text-brand">Us</span>
          </h2>
          <Squiggle className="mt-2 h-3 w-24" />
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">{contactIntro}</p>
          <div className="mt-10 space-y-10">
            <ContactItem icon={MailIcon} label="Email:" value={company.email} href={`mailto:${company.email}`} />
            <ContactItem icon={PhoneIcon} label="Phone:" value={company.phone} href={company.phoneHref} />
          </div>
        </div>

        <div data-reveal="zoom" className="overflow-hidden rounded-lg shadow-card">
          <iframe
            title="Company location map"
            src={mapSrc}
            className="block h-[340px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="AI Reports & Online Footwear">
      <Hero />
      <IntroBand />
      <Principles />
      <FeatureCards />
      <Success />
      <Contact />
    </Layout>
  );
}
