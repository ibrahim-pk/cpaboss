// Light-green page header with centered title and the faded "graph" shape bottom-right.
// Used on Products, Leadership and other inner pages.

export function GraphDecoration({ className = "" }) {
  return (
    <svg viewBox="0 0 300 140" fill="none" aria-hidden className={`graph-draw ${className}`}>
      <path d="M30 35 L100 95 L200 25 L290 80" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="35" r="30" fill="currentColor" />
      <circle cx="100" cy="95" r="30" fill="currentColor" />
      <circle cx="200" cy="25" r="27" fill="currentColor" />
      <circle cx="290" cy="80" r="22" fill="currentColor" />
    </svg>
  );
}

export default function PageHeader({ title, highlight, text }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FDF1] py-20 md:py-28">
      {/* Soft floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-8 h-32 w-32 animate-float rounded-2xl bg-white/80 shadow-sm" />
        <div className="absolute left-[18%] -top-6 h-16 w-16 animate-float-slow rounded-xl bg-white/70 [animation-delay:-3s]" />
        <div className="absolute right-[12%] top-10 hidden h-20 w-20 animate-float-slow rounded-full bg-brand/5 md:block [animation-delay:-5s]" />
      </div>
      <GraphDecoration className="absolute -bottom-2 -right-6 w-56 text-accent/20 sm:w-72 md:w-80" />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <h1 className="animate-fade-up text-4xl font-bold text-ink sm:text-5xl">
          {title} {highlight && <span className="text-brand">{highlight}</span>}
        </h1>
        <span className="mx-auto mt-4 block h-1 w-16 animate-fade-in rounded-full bg-accent [animation-delay:250ms]" />
        {text && (
          <p className="mx-auto mt-5 max-w-3xl animate-fade-up text-[15px] leading-relaxed text-slate-600 [animation-delay:200ms] sm:text-base">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
