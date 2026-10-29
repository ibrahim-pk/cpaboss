import Link from "next/link";
import Logo from "./Logo";
import { company, navLinks } from "../data/site";
import { PinIcon, PhoneIcon, MailIcon, IdIcon } from "./Icons";

function ColumnTitle({ children }) {
  return (
    <h3 className="mb-5 text-lg font-bold text-ink">
      {children}
      <span className="mt-2 block h-px w-6 bg-slate-400" />
    </h3>
  );
}

function ContactRow({ icon: Icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="text-[15px] leading-relaxed text-slate-600">{children}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#FBFEF7]">
      <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div data-reveal className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Home" className="inline-block">
              <Logo className="h-11 w-auto md:h-14" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">{company.tagline}</p>
          </div>

          {/* Quick links */}
          <div data-reveal style={{ "--reveal-delay": "120ms" }}>
            <ColumnTitle>Quick Links</ColumnTitle>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[15px] text-slate-600 transition hover:pl-1 hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-reveal style={{ "--reveal-delay": "240ms" }}>
            <ColumnTitle>Contact Us</ColumnTitle>
            <ul className="space-y-4">
              <ContactRow icon={PinIcon}>
                <span className="font-semibold text-ink">Registered Address: </span>
                {company.addressLine1}, {company.addressLine2}
              </ContactRow>
              <ContactRow icon={PhoneIcon}>
                <a href={company.phoneHref} className="transition hover:text-brand">
                  {company.phone}
                </a>
              </ContactRow>
              <ContactRow icon={MailIcon}>
                <a href={`mailto:${company.email}`} className="break-all transition hover:text-brand">
                  {company.email}
                </a>
              </ContactRow>
              <ContactRow icon={IdIcon}>
                <span className="font-semibold text-ink">Tax ID / EIN: </span>
                {company.ein}
              </ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 py-6 text-center text-sm text-slate-600">
          <p>{company.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
