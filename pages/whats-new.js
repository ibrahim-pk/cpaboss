import Link from "next/link";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Photo from "../components/Photo";
import { company } from "../data/site";
import { whatsNewIntro, companyUpdate, measure, next, jobs } from "../data/whatsNew";

function CenteredHeading({ title, highlight, intro }) {
  return (
    <div data-reveal className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-ink sm:text-4xl">
        {title} <span className="text-brand">{highlight}</span>
      </h2>
      {intro && <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{intro}</p>}
    </div>
  );
}

/* ---------- Company update card ---------- */
function CompanyUpdate() {
  return (
    <section id="company-updates" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <article
          data-reveal
          className="group grid overflow-hidden rounded-2xl bg-white shadow-card md:grid-cols-[0.85fr_1.15fr]"
        >
          <Photo
            src={companyUpdate.image}
            alt={companyUpdate.imageAlt}
            className="aspect-[4/3] w-full md:aspect-auto md:min-h-[340px]"
            gradient="from-sky-200 via-sky-50 to-lime-100"
          />
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-lg font-bold leading-relaxed text-ink">{companyUpdate.headline}</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">{companyUpdate.text}</p>
            <nav aria-label="On this page" className="mt-6 flex flex-wrap justify-center gap-x-2 text-sm font-semibold text-brand md:justify-start">
              {companyUpdate.links.map((link, i) => (
                <span key={link.href} className="flex items-center gap-2">
                  {i > 0 && <span className="text-slate-300">|</span>}
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </span>
              ))}
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ---------- How we measure ---------- */
function HowWeMeasure() {
  return (
    <section id="how-we-measure" className="scroll-mt-24 bg-[#EDF4FB] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <CenteredHeading title={measure.title} highlight={measure.highlight} intro={measure.intro} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {measure.items.map((item, i) => (
            <article
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` }}
              className={`group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_-12px_rgba(15,40,70,0.15)] transition duration-300 hover:-translate-y-1.5 hover:shadow-card ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Photo
                src={item.image}
                alt={item.imageAlt}
                className="aspect-[37/26] w-full"
                gradient={["from-sky-100 via-white to-sky-200", "from-slate-100 via-white to-lime-100", "from-sky-200 via-sky-50 to-white"][i % 3]}
              />
              <div className="p-6">
                <h3 className="font-bold text-ink transition-colors group-hover:text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- What's next ---------- */
function WhatsNext() {
  return (
    <section id="whats-next" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <CenteredHeading title={next.title} highlight={next.highlight} intro={next.intro} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {next.items.map((item, i) => (
            <article
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` }}
              className={`group rounded-2xl border border-accent/15 bg-[#F6FAF0] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md ${
                i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent-dark transition duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div data-reveal className="mx-auto mt-12 max-w-xl text-center">
          <p className="text-sm leading-relaxed text-slate-600">{next.closing}</p>
          <Link
            href={next.button.href}
            className="shine mt-6 inline-block overflow-hidden rounded-full bg-accent px-9 py-3.5 font-bold text-white shadow-[0_10px_25px_-10px_rgba(132,194,37,0.8)] transition hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            {next.button.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Job opportunities ---------- */
function JobOpportunities() {
  return (
    <section className="bg-[#F8FDF1] py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <CenteredHeading title={jobs.title} highlight={jobs.highlight} intro={jobs.text} />
        <Link
          href={jobs.button.href}
          data-reveal
          style={{ "--reveal-delay": "150ms" }}
          className="shine mt-6 inline-block overflow-hidden rounded-full bg-brand px-8 py-3.5 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30"
        >
          {jobs.button.label}
        </Link>
      </div>
    </section>
  );
}

export default function WhatsNewPage() {
  return (
    <Layout title="What's New" description={`Company updates, how we measure our products, and what's next at ${company.legalName}.`}>
      <PageHeader title={whatsNewIntro.title} highlight={whatsNewIntro.highlight} text={whatsNewIntro.text} />
      <CompanyUpdate />
      <HowWeMeasure />
      <WhatsNext />
      <JobOpportunities />
    </Layout>
  );
}
