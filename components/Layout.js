import { useEffect } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { company } from "../data/site";

// Fades in every [data-reveal] element as it scrolls into view (styles in globals.css).
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.is-visible)");
    const finish = (el) => {
      el.classList.add("is-visible");
      const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
      setTimeout(() => el.classList.add("reveal-done"), delay + 900);
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach(finish);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          finish(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Layout({ title, description, children }) {
  const pageTitle = title ? `${title} | ${company.siteTitle}` : company.siteTitle;
  const pageDescription = description || company.description;
  useScrollReveal();
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content={company.siteTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
