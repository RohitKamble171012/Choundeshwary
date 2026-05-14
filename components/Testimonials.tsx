const reviews = [
  {
    q: "We installed two khoya machines last year — running daily without a single breakdown. Build quality is excellent.",
    n: "Rajesh Patil",
    r: "Dairy Owner, Kolhapur",
  },
  {
    q: "The paneer machine doubled our daily output. Hygienic, easy to clean and the after-sales team is responsive.",
    n: "Mahesh Kulkarni",
    r: "Sweet Shop Chain, Pune",
  },
  {
    q: "Honest pricing and on-time delivery. The cream separator has been the most reliable unit in our setup.",
    n: "Sandeep Jadhav",
    r: "Milk Processor, Sangli",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-soft py-28">
      <div className="container-x">
        <span className="eyebrow">Client Voices</span>
        <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-ink max-w-3xl">
          Trusted by dairies across <span className="italic font-display text-machinery">India.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-white p-10 border border-black/5 relative group hover:border-machinery transition-colors">
              <div className="font-display text-6xl text-machinery leading-none">“</div>
              <blockquote className="mt-2 text-ink/80 leading-relaxed">{r.q}</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-black/10">
                <div className="font-bold text-ink">{r.n}</div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-ink/50 mt-1">{r.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
