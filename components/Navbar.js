import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { MenuIcon, CloseIcon } from "./Icons";
import { navLinks } from "../data/site";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // Reading progress bar along the bottom of the header
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.scale = `${max > 0 ? window.scrollY / max : 0} 1`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? router.pathname === "/" : router.pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "border-transparent shadow-md" : "border-slate-100"
      }`}
    >
      <div
        ref={progressRef}
        aria-hidden
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-brand to-accent"
        style={{ scale: "0 1" }}
      />
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:h-24 md:px-6">
        <Link href="/" aria-label="Home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative py-2 text-[15px] transition-colors hover:text-brand ${
                  isActive(link.href) ? "font-semibold text-ink" : "text-slate-600"
                } after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-accent after:transition-all ${
                  isActive(link.href) ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-brand px-7 py-3 text-[15px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 sm:inline-block"
          >
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink transition hover:bg-slate-100 lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[calc(100vh-5rem)]" : "max-h-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-base transition hover:bg-accent-light ${
                  isActive(link.href) ? "bg-accent-light font-semibold text-brand" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/contact"
              className="block rounded-full bg-brand px-6 py-3 text-center font-bold text-white transition hover:bg-brand-dark"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
