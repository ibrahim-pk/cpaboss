import Link from "next/link";
import Layout from "./Layout";

// Simple placeholder page so nav links work until each page is designed.
export default function PageStub({ title }) {
  return (
    <Layout title={title}>
      <section className="bg-[#F7FBF2]">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-6 md:py-28">
          <p className="text-accent-dark">Innovation Solution Provider LLC</p>
          <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-lg text-slate-500">This page is coming soon.</p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3 font-bold text-white transition hover:bg-brand-dark"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
