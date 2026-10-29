import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import { PeopleIcon, GearIcon, SearchChartIcon } from "../components/Icons";
import { company } from "../data/site";
import { productsIntro, products } from "../data/products";

const icons = { people: PeopleIcon, gear: GearIcon, search: SearchChartIcon };

function ArrowRight(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function ProductCard({ product, index }) {
  const Icon = icons[product.icon] || PeopleIcon;
  const bg = product.color === "green" ? "bg-accent" : "bg-[#0897DB]";
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${index * 150}ms` }}
      className={`shine group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl ${bg} p-7 text-white shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8`}
    >
      {/* Soft wave highlights top-right */}
      <div aria-hidden className="absolute -right-24 -top-32 h-72 w-96 animate-float-slow rounded-[50%] border-[22px] border-white/15 transition group-hover:border-white/25" />
      <div aria-hidden className="absolute -right-10 -top-40 h-72 w-72 rounded-[50%] border border-white/25 transition duration-700 group-hover:scale-110" />

      <Icon className="relative h-16 w-16 transition duration-500 group-hover:-rotate-6 group-hover:scale-110" />
      <h2 className="relative mt-5 text-2xl font-bold">{product.name}</h2>
      <p className="relative mt-2 text-xs font-semibold uppercase tracking-wider text-white/90">{product.category}</p>
      <p className="relative mt-4 text-[15px] leading-relaxed text-white/95">{product.text}</p>
      {product.note && (
        <p className="relative mt-4 border-l-2 border-white/40 pl-3 text-xs leading-relaxed text-white/85">{product.note}</p>
      )}

      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-auto inline-flex items-center gap-2 pt-10 font-bold"
      >
        <span className="border-b-2 border-transparent transition group-hover:border-white">Visit {product.name}</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <Layout title="Our Products" description={`Products from ${company.legalName}: IdentitySearch.ai, an AI report generator, and Cpabossfootwear.com, an online shoe store.`}>
      <PageHeader title={productsIntro.title} highlight={productsIntro.highlight} text={productsIntro.text} />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 md:grid-cols-2 md:px-6">
          {products.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
