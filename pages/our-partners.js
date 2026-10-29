import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { company } from "../data/site";
import { partnersIntro, partnersSection, partners, platform } from "../data/partners";

/* Partner logo with a neutral text badge when the image file is missing */
function PartnerLogo({ src, name, initial }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="flex h-16 items-center justify-center">
      {failed ? (
        <span className="flex h-14 min-w-14 items-center justify-center rounded-xl bg-brand-light px-3 text-lg font-bold text-brand">
          {initial}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={`${name} logo`}
          className="max-h-14 w-auto max-w-[120px] object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function PartnerCard({ partner, index }) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 120}ms` }}
      className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-100 bg-white px-6 py-9 text-center shadow-[0_8px_30px_-12px_rgba(15,40,70,0.15)] transition duration-300 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-card"
    >
      {/* Gradient bar that slides in along the top on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-accent transition duration-500 group-hover:scale-x-100"
      />
      <div className="transition duration-500 group-hover:scale-110">
        <PartnerLogo src={partner.logo} name={partner.name} initial={partner.initial} />
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink">{partner.name}</h3>
      <span className="mt-2 rounded-full bg-brand-light px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
        {partner.tag}
      </span>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{partner.text}</p>
    </article>
  );
}

function Partners() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            {partnersSection.title} <span className="text-brand">{partnersSection.highlight}</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{partnersSection.text}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <PartnerCard key={p.name} partner={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSpotlight() {
  return (
    <section className="relative overflow-hidden bg-[#F1F9E6] py-16 md:py-24">
      {/* Faceted geometric background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.85) 25%, transparent 25%), linear-gradient(240deg, rgba(255,255,255,0.6) 25%, transparent 25%), linear-gradient(60deg, rgba(132,194,37,0.08) 25%, transparent 25%)",
          backgroundSize: "300px 300px",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 md:px-6">
        <div aria-hidden className="absolute -left-6 -top-8 h-24 w-24 animate-float rounded-2xl bg-brand/10" />
        <div aria-hidden className="absolute -bottom-8 -right-4 h-28 w-28 animate-float-slow rounded-full bg-accent/20 [animation-delay:-3s]" />
        <div data-reveal="zoom" className="relative rounded-3xl bg-white/95 px-6 py-10 text-center shadow-card backdrop-blur sm:px-12">
          <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
            {platform.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            <span className="text-ink">{platform.nameDark}</span>
            <span className="text-brand">{platform.nameBlue}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600">{platform.text}</p>
          <a
            href={platform.button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shine mt-7 inline-block overflow-hidden rounded-full bg-brand px-8 py-3.5 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30"
          >
            {platform.button.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function OurPartnersPage() {
  return (
    <Layout title="Our Partners" description={`Partners and integrations of ${company.name}: Google Gemini AI, Shopify, NMI, Nexio, Kurv, AWS and Namecheap.`}>
      <PageHeader title={partnersIntro.title} highlight={partnersIntro.highlight} text={partnersIntro.text} />
      <Partners />
      <PlatformSpotlight />
    </Layout>
  );
}
