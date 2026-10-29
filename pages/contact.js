import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { TrendMark, Squiggle, PhoneIcon, MailIcon, PinIcon, FacebookIcon } from "../components/Icons";
import { company, contactPage } from "../data/site";

/* ---------- Left: blue contact details card ---------- */
function DetailRow({ icon: Icon, label, children, href }) {
  return (
    <a href={href} className="group flex items-center gap-4 border-b border-white/25 py-6 first:pt-0">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/90 transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-brand">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-wider text-white/90">{label}</span>
        <span className="block break-words text-lg leading-snug">{children}</span>
      </span>
    </a>
  );
}

function ContactDetails() {
  return (
    <aside className="relative animate-fade-up overflow-hidden bg-gradient-to-br from-brand to-[#0897DB] p-8 text-white shadow-card sm:p-10">
      <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 animate-float-slow rounded-full border-[18px] border-white/10" />
      {/* Cube pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.35) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.2) 25%, transparent 25%)",
          backgroundSize: "90px 90px",
        }}
      />
      <div className="relative">
        <h2 className="text-3xl font-bold">{contactPage.detailsTitle}</h2>
        <Squiggle className="mt-2 h-3 w-28" />

        <div className="mt-10">
          <DetailRow icon={PhoneIcon} label="Phone:" href={company.phoneHref}>
            {company.phone}
          </DetailRow>
          <DetailRow icon={MailIcon} label="Email:" href={`mailto:${company.email}`}>
            {company.email}
          </DetailRow>
          <DetailRow
            icon={PinIcon}
            label="Registered Address:"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`}
          >
            {company.addressLine1}, {company.addressLine2}
          </DetailRow>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={company.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex items-center gap-2 text-xl font-bold transition hover:opacity-80"
          >
            <FacebookIcon className="h-6 w-6" />
            facebook
          </a>
          <a
            href={company.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1 text-xl font-bold transition hover:opacity-80"
          >
            Linked
            <span className="rounded-sm bg-white px-1 text-base leading-tight text-brand">in</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

/* ---------- Right: Stay In Touch form ---------- */
function newCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { a, b };
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-500">
        {label} <span className="text-red-500">*</span>
      </span>
      {children}
      {error && <span className="mt-1 block text-sm text-red-500">{error}</span>}
    </label>
  );
}

const inputClass =
  "mt-1 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-2.5 text-base text-ink outline-none transition placeholder:text-slate-300 focus:border-brand focus:ring-0";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", code: "" });
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Generate on the client only, so server and client HTML match
  useEffect(() => setCaptcha(newCaptcha()), []);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    if (!captcha || Number(form.code) !== captcha.a + captcha.b) next.code = "Incorrect answer, please try again.";
    return next;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      if (next.code) {
        setCaptcha(newCaptcha());
        setForm((f) => ({ ...f, code: "" }));
      }
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "", code: "" });
      setCaptcha(newCaptcha());
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="animate-fade-up [animation-delay:150ms]">
      <TrendMark className="h-4 w-9" />
      <h1 className="mt-2 text-4xl font-bold text-ink">
        {contactPage.formEyebrow} <span className="text-brand">{contactPage.formHighlight}</span>
      </h1>
      <span className="mt-2 block h-0.5 w-24 bg-accent" />

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-7">
        <Field label="Full Name" error={errors.name}>
          <input type="text" autoComplete="name" value={form.name} onChange={update("name")} className={inputClass} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" autoComplete="email" value={form.email} onChange={update("email")} className={inputClass} />
        </Field>
        <Field label="Message" error={errors.message}>
          <textarea rows={5} value={form.message} onChange={update("message")} className={`${inputClass} resize-y`} />
        </Field>

        <Field label="Verification Code" error={errors.code}>
          <div className="mt-2 flex items-center gap-3">
            <span
              aria-live="polite"
              className="select-none rounded-md border border-slate-200 bg-accent-light px-4 py-2.5 font-semibold tracking-wider text-ink"
            >
              {captcha ? `${captcha.a} + ${captcha.b} = ?` : "…"}
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={form.code}
              onChange={update("code")}
              className="w-28 rounded-md border border-slate-300 px-3 py-2.5 text-base outline-none transition focus:border-brand"
              aria-label="Answer"
            />
            <button
              type="button"
              onClick={() => setCaptcha(newCaptcha())}
              className="text-sm text-brand underline-offset-2 hover:underline"
            >
              New code
            </button>
          </div>
        </Field>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="shine overflow-hidden rounded-full bg-accent px-10 py-3.5 font-bold text-white shadow-[0_10px_25px_-10px_rgba(132,194,37,0.8)] transition hover:-translate-y-0.5 hover:bg-accent-dark disabled:translate-y-0 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {status === "sent" && <p className="text-sm font-semibold text-accent-dark">{contactPage.successMessage}</p>}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please email us at{" "}
              <a href={`mailto:${company.email}`} className="underline">
                {company.email}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

/* ---------- Full-width map ---------- */
function MapSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&z=15&output=embed`;
  return (
    <section className="relative">
      <iframe
        title="Company location map"
        src={mapSrc}
        className="block h-[380px] w-full border-0 md:h-[440px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* Green address label */}
      <div className="pointer-events-none absolute bottom-6 left-4 right-4 sm:left-auto sm:right-[8%] sm:top-1/2 sm:bottom-auto sm:w-64 sm:-translate-y-1/2">
        <div className="relative animate-float rounded-md bg-accent px-5 py-4 text-[15px] font-semibold leading-relaxed text-white shadow-card">
          {company.addressLine1}
          <br />
          {company.addressLine2}
          <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-accent" />
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <Layout title="Contact Us" description={`Get in touch with ${company.name}.`}>
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
      <MapSection />
    </Layout>
  );
}
