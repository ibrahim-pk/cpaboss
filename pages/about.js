import Link from "next/link";
import Layout from "../components/Layout";
import { PeopleIcon, GearIcon, SearchChartIcon } from "../components/Icons";
import { company } from "../data/site";
import {
  whoWeAre,
  businessProfile,
  mission,
  values,
  services,
  approach,
  whoWeServe,
  whyUs,
  cta,
} from "../data/about";

/* ---------- Shared bits ---------- */
function Eyebrow({ children, color = "blue" }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.25em] ${
        color === "green" ? "text-accent-dark" : "text-brand"
      }`}
    >
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, intro, eyebrowColor }) {
  return (
    <div data-reveal className="max-w-2xl">
      {eyebrow && <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{intro}</p>}
    </div>
  );
}

function Container({ children, className = "" }) {
  return <div className={`mx-auto max-w-6xl px-4 md:px-6 ${className}`}>{children}</div>;
}

/* ---------- 1. Who we are + business profile ---------- */
function WhoWeAre() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <div className="animate-fade-up">
            <Eyebrow>{whoWeAre.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-4 animate-fade-up text-3xl font-bold leading-tight text-ink [animation-delay:120ms] sm:text-4xl lg:text-[2.6rem]">
            {whoWeAre.title}
          </h1>
          <div className="mt-6 animate-fade-up space-y-4 text-[15px] leading-relaxed text-slate-600 [animation-delay:240ms]">
            {whoWeAre.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 flex flex-wrap gap-y-6">
            {whoWeAre.stats.map((s, i) => (
              <div
                key={s.label}
                className={`animate-fade-up pr-8 ${i > 0 ? "border-l border-slate-200 pl-8" : ""}`}
                style={{ animationDelay: `${360 + i * 120}ms` }}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold text-brand sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="relative animate-zoom-in overflow-hidden rounded-3xl bg-[#0897DB] p-7 text-white shadow-card [animation-delay:200ms] sm:p-8">
          <div
            aria-hidden
            className="absolute -right-24 -top-28 h-64 w-80 animate-float-slow rounded-[50%] border-[22px] border-white/15"
          />
          <div className="relative">
            <Eyebrow>
              <span className="text-white/85">{businessProfile.eyebrow}</span>
            </Eyebrow>
            <h2 className="mt-2 text-xl font-bold">{businessProfile.title}</h2>
            <dl className="mt-5">
              {businessProfile.rows.map((row) => (
                <div
                  key={row.label}
                  className="-mx-2 flex flex-col gap-1 rounded-lg border-t border-white/20 px-2 py-3 text-sm transition-colors hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <dt className="shrink-0 text-white/80">{row.label}</dt>
                  <dd className="font-semibold sm:text-right [overflow-wrap:anywhere]">
                    {row.href ? (
                      <a href={row.href} className="hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </Container>
    </section>
  );
}

/* ---------- 2. Mission & Vision ---------- */
function MissionVision() {
  return (
    <section className="bg-[#F6FAF0] py-16 md:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div data-reveal="left" className="group relative mx-auto w-full max-w-[340px]">
          <div
            aria-hidden
            className="absolute -left-4 -top-4 h-[92%] w-full rounded-3xl bg-accent/20 transition duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"
          />
          <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-card transition duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
            {/* The photo already includes the oval shape and blue outline */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mission.image}
              alt="Team members laughing together during a meeting"
              width={452}
              height={547}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <SectionHeading eyebrow={mission.eyebrow} title={mission.title} />
          <div className="mt-8 space-y-7">
            {mission.items.map((item, i) => {
              const green = item.color === "green";
              return (
                <div
                  key={item.title}
                  data-reveal="right"
                  style={{ "--reveal-delay": `${i * 150}ms` }}
                  className={`border-l-[3px] pl-5 ${green ? "border-accent" : "border-brand"}`}
                >
                  <h3 className={`text-lg font-bold ${green ? "text-accent-dark" : "text-brand"}`}>{item.title}</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 3. Values ---------- */
const icons = { people: PeopleIcon, gear: GearIcon, search: SearchChartIcon };

function Values() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={values.eyebrow} title={values.title} intro={values.intro} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.items.map((v, i) => {
            const Icon = icons[v.icon];
            const bg = v.color === "green" ? "bg-accent" : "bg-[#0897DB]";
            return (
              <article
                key={v.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 120}ms` }}
                className={`shine group relative overflow-hidden rounded-2xl ${bg} p-7 text-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
              >
                <div
                  aria-hidden
                  className="absolute -right-20 -top-24 h-56 w-72 rounded-[50%] border-[18px] border-white/15 transition group-hover:border-white/25"
                />
                <Icon className="relative h-14 w-14 transition duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                <h3 className="relative mt-5 text-2xl font-bold">{v.title}</h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-white/95">{v.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ---------- 4. Services ---------- */
function Services() {
  return (
    <section className="bg-[#EDF4FB] py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={services.eyebrow} title={services.title} intro={services.intro} />
        <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {services.items.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 150}ms` }}
              className="group relative border-t border-brand/20 py-7"
            >
              {/* Accent line grows across the top border on hover */}
              <span
                aria-hidden
                className="absolute -top-px left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
              />
              <h3 className="flex items-baseline gap-3 text-lg font-bold text-ink transition-colors group-hover:text-brand">
                <span className="text-xs font-bold text-accent-dark">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- 5. Approach ---------- */
function Approach() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={approach.eyebrow} title={approach.title} intro={approach.intro} />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {approach.steps.map((step, i) => {
            const green = i % 2 === 1;
            return (
              <li key={step.title} data-reveal style={{ "--reveal-delay": `${i * 150}ms` }} className="group relative">
                <div className="flex items-center">
                  <span
                    className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 bg-white text-xs font-bold transition duration-300 group-hover:scale-110 ${
                      green
                        ? "border-accent text-accent-dark group-hover:bg-accent group-hover:text-white"
                        : "border-brand text-brand group-hover:bg-brand group-hover:text-white"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="ml-3 h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

/* ---------- 6. Who we serve + why us ---------- */
function ServeAndWhy() {
  return (
    <section className="bg-[#F6FAF0] py-16 md:py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-0">
        <div className="lg:pr-14">
          <SectionHeading eyebrow={whoWeServe.eyebrow} title={whoWeServe.title} />
          <ul className="mt-8 space-y-4">
            {whoWeServe.items.map((item, i) => (
              <li
                key={item}
                data-reveal="left"
                style={{ "--reveal-delay": `${i * 100}ms` }}
                className="flex gap-4 text-[15px] leading-relaxed text-slate-600"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:border-l lg:border-slate-200 lg:pl-14">
          <SectionHeading eyebrow={whyUs.eyebrow} eyebrowColor="green" title={whyUs.title} />
          <dl className="mt-8 space-y-6">
            {whyUs.items.map((item, i) => (
              <div key={item.title} data-reveal="right" style={{ "--reveal-delay": `${i * 100}ms` }}>
                <dt className="font-bold text-ink">{item.title}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-slate-600">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 8. CTA ---------- */
function CTA() {
  return (
    <section className="bg-[#EDF4FB] py-16 md:py-20">
      <Container>
        <div
          data-reveal="zoom"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-[#0897DB] px-7 py-10 text-white shadow-card sm:px-12 md:py-14"
        >
          <div
            aria-hidden
            className="absolute -right-24 -top-32 h-72 w-96 animate-float-slow rounded-[50%] border-[24px] border-white/10"
          />
          <div aria-hidden className="absolute -bottom-16 -left-10 h-40 w-40 animate-float rounded-full bg-white/5" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1.6fr_1fr]">
            <div>
              <Eyebrow>
                <span className="text-white/85">{cta.eyebrow}</span>
              </Eyebrow>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{cta.title}</h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/90">{cta.text}</p>
            </div>
            <div className="md:justify-self-end">
              <Link
                href={cta.button.href}
                className="shine inline-block overflow-hidden rounded-full bg-accent px-8 py-3.5 font-bold text-white shadow-[0_10px_25px_-10px_rgba(132,194,37,0.9)] transition hover:-translate-y-0.5 hover:bg-accent-dark"
              >
                {cta.button.label}
              </Link>
              <div className="mt-5 space-y-1 text-sm font-semibold">
                <a href={`mailto:${company.email}`} className="block break-all hover:underline">
                  {company.email}
                </a>
                <a href={company.phoneHref} className="block hover:underline">
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <Layout
      title="About Us"
      description={`Learn about ${company.legalName}, the company that owns and operates IdentitySearch.ai and Cpabossfootwear.com.`}
    >
      <WhoWeAre />
      <MissionVision />
      <Values />
      <Services />
      <Approach />
      <ServeAndWhy />
      <CTA />
    </Layout>
  );
}
