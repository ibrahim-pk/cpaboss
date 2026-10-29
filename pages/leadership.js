import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Photo from "../components/Photo";
import { company } from "../data/site";
import { leadershipIntro, leaders, structure, workValues } from "../data/leadership";

/* ---------- Avatar with initials fallback ---------- */
function Avatar({ src, name, initials }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  // The image can fail before React hydrates, so check once on mount too
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-brand to-accent shadow-md ring-4 ring-white sm:h-[88px] sm:w-[88px]">
      {failed ? (
        <span className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">{initials}</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={name}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* ---------- Leader profiles ---------- */
function LeaderProfile({ leader }) {
  return (
    <article data-reveal>
      <div className="flex items-center gap-5">
        <Avatar src={leader.photo} name={leader.name} initials={leader.initials} />
        <div>
          <h2 className="text-2xl font-bold text-brand">{leader.name}</h2>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-accent-dark">{leader.role}</p>
        </div>
      </div>
      <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-slate-600">
        {leader.sections.map((s, i) => (
          <p key={i}>
            {s.label && <span className="font-semibold text-ink underline underline-offset-2">{s.label}:</span>}{" "}
            {s.text}
          </p>
        ))}
      </div>
    </article>
  );
}

function Leaders() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div
        className={`mx-auto grid items-start gap-14 px-4 md:px-6 lg:gap-16 ${
          leaders.length > 1 ? "max-w-6xl lg:grid-cols-2" : "max-w-3xl"
        }`}
      >
        {leaders.map((leader) => (
          <LeaderProfile key={leader.name} leader={leader} />
        ))}
      </div>
    </section>
  );
}

/* ---------- How we are structured ---------- */
function Structure() {
  return (
    <section className="bg-[#F7FBF2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            {structure.title} <span className="text-brand">{structure.highlight}</span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600">
            {structure.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {structure.images.map((img, i) => (
            <div
              key={img.src}
              data-reveal="zoom"
              style={{ "--reveal-delay": `${i * 120}ms` }}
              className="group transition duration-500 hover:-translate-y-1.5"
            >
              <Photo
                src={img.src}
                alt={img.alt}
                className="aspect-[366/345] w-full rounded-xl shadow-card"
                gradient={
                  ["from-sky-100 via-white to-sky-200", "from-lime-100 via-white to-sky-100", "from-sky-100 via-white to-lime-100"][i % 3]
                }
              />
            </div>
          ))}
        </div>

        <p data-reveal className="mx-auto mt-10 max-w-3xl text-center text-[15px] leading-relaxed text-slate-600">
          {structure.closing}
        </p>
      </div>
    </section>
  );
}

/* ---------- Values ---------- */
function WorkValues() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div data-reveal className="text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            {workValues.title} <span className="text-brand">{workValues.highlight}</span>
          </h2>
          <p className="mt-3 text-sm text-slate-600">{workValues.intro}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workValues.items.map((v, i) => {
            const bg = v.color === "green" ? "bg-accent" : "bg-[#0897DB]";
            return (
              <article
                key={v.title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 120}ms` }}
                className={`shine group relative overflow-hidden rounded-2xl ${bg} px-6 py-7 text-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
              >
                <div
                  aria-hidden
                  className="absolute -bottom-20 -right-16 h-44 w-60 rounded-[50%] border-[16px] border-white/15 transition group-hover:border-white/25"
                />
                <div aria-hidden className="absolute -right-6 -top-24 h-48 w-40 rounded-[50%] border border-white/25" />
                <h3 className="relative text-xl font-bold">{v.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/95">{v.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function LeadershipPage() {
  return (
    <Layout title="Leadership" description={`Meet the leadership team of ${company.name}.`}>
      <PageHeader title={leadershipIntro.title} highlight={leadershipIntro.highlight} text={leadershipIntro.text} />
      <Leaders />
      <Structure />
      <WorkValues />
    </Layout>
  );
}
