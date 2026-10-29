import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { TrendMark, Squiggle, PhoneIcon, MailIcon, PinIcon, CloseIcon } from "../components/Icons";
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
      {error && (
        <span role="alert" className="mt-1 block animate-fade-in text-sm text-red-500">
          {error}
        </span>
      )}
    </label>
  );
}

const inputClass =
  "mt-1 w-full border-0 border-b bg-transparent px-0 py-2.5 text-base text-ink outline-none transition placeholder:text-slate-300 focus:ring-0";
const fieldBorder = (error) => (error ? "border-red-400 focus:border-red-500" : "border-slate-300 focus:border-brand");

// Demo mode: the message is not sent anywhere; the form waits briefly, then shows the success modal.
// To send real messages, replace this with a POST to /api/contact.
function sendDemoMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1200));
}

/* ---------- Success modal ---------- */
function SuccessModal({ open, name, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-ink/60 [animation-duration:250ms] p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md animate-zoom-in rounded-2xl [animation-duration:450ms] bg-white px-8 pb-8 pt-10 text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-ink"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <span className="relative mx-auto flex h-20 w-20 items-center justify-center">
          <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-accent/30 [animation-iteration-count:2]" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_30px_-10px_rgba(132,194,37,0.9)]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
              <path d="M5 12.5l4.5 4.5L19 7.5" className="check-draw" />
            </svg>
          </span>
        </span>

        <h2 id="success-title" className="mt-6 text-2xl font-bold text-ink">
          Message Sent!
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600">
          {name ? `Thank you, ${name}! ` : "Thank you! "}
          {contactPage.successMessage.replace(/^Thank you!\s*/, "")}
        </p>

        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="shine mt-7 overflow-hidden rounded-full bg-brand px-10 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90"
        >
          OK
        </button>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", code: "" });
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [sentName, setSentName] = useState("");

  // Generate on the client only, so server and client HTML match
  useEffect(() => setCaptcha(newCaptcha()), []);

  const update = (key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    // Clear a field's error as soon as the user starts fixing it
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate() {
    const next = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    const code = form.code.trim();

    if (!name) next.name = "Full name is required.";
    else if (name.length < 2) next.name = "Please enter your full name.";

    if (!email) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Please enter a valid email address.";

    if (!message) next.message = "Message is required.";
    else if (message.length < 10) next.message = "Message should be at least 10 characters.";

    if (!code) next.code = "Please answer the verification question.";
    else if (!captcha || Number(code) !== captcha.a + captcha.b) next.code = "Incorrect answer, please try again.";

    return next;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      if (next.code && form.code.trim()) {
        setCaptcha(newCaptcha());
        setForm((f) => ({ ...f, code: "" }));
      }
      return;
    }
    setStatus("sending");
    await sendDemoMessage();
    setSentName(form.name.trim().split(/\s+/)[0]);
    setStatus("sent");
    setForm({ name: "", email: "", message: "", code: "" });
    setCaptcha(newCaptcha());
  }

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <div className="animate-fade-up [animation-delay:150ms]">
      <TrendMark className="h-4 w-9" />
      <h1 className="mt-2 text-4xl font-bold text-ink">
        {contactPage.formEyebrow} <span className="text-brand">{contactPage.formHighlight}</span>
      </h1>
      <span className="mt-2 block h-0.5 w-24 bg-accent" />

      <form onSubmit={onSubmit} noValidate className="mt-8 space-y-7">
        <Field label="Full Name" error={errors.name}>
          <input
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            className={`${inputClass} ${fieldBorder(errors.name)}`}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            className={`${inputClass} ${fieldBorder(errors.email)}`}
          />
        </Field>
        <Field label="Message" error={errors.message}>
          <textarea
            rows={5}
            value={form.message}
            onChange={update("message")}
            aria-invalid={!!errors.message}
            className={`${inputClass} ${fieldBorder(errors.message)} resize-y`}
          />
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
              aria-invalid={!!errors.code}
              className={`w-28 rounded-md border px-3 py-2.5 text-base outline-none transition ${fieldBorder(errors.code)}`}
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
            className="shine inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-10 py-3.5 font-bold text-white shadow-[0_10px_25px_-10px_rgba(132,194,37,0.8)] transition hover:-translate-y-0.5 hover:bg-accent-dark disabled:translate-y-0 disabled:opacity-60"
          >
            {status === "sending" && (
              <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            )}
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
          {hasErrors && (
            <p role="alert" className="animate-fade-in text-sm font-semibold text-red-500">
              Please fill in all required fields correctly.
            </p>
          )}
        </div>
      </form>

      <SuccessModal open={status === "sent"} name={sentName} onClose={() => setStatus("idle")} />
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
    <Layout title="Contact Us" description={`Contact ${company.legalName} about IdentitySearch.ai reports or Cpabossfootwear.com orders. Email ${company.email}.`}>
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
