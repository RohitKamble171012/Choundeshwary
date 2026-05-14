const items = [
  { t: "Stainless Steel Build", d: "Food-grade SS304/SS316 fabrication for hygiene and longevity." },
  { t: "Commercial Grade Quality", d: "Engineered for continuous duty in working dairies and sweet shops." },
  { t: "Low Maintenance", d: "Simple servicing, easy access components, long replacement cycles." },
  { t: "Efficient Production", d: "Optimised heating and mixing for consistent commercial output." },
  { t: "Pan India Delivery", d: "Doorstep dispatch across all Indian states with safe packaging." },
  { t: "After Sales Support", d: "Installation guidance, spares and on-call technical support." },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-28">
      <div className="container-x">
        <div className="flex flex-col items-start gap-6 mb-14">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="headline text-4xl sm:text-5xl lg:text-6xl font-bold text-ink max-w-3xl">
            Six reasons dairies choose <span className="italic font-display text-machinery">Choundeshwary.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {items.map((it, i) => (
            <div key={it.t} className="bg-white p-10 group hover:bg-ink hover:text-white transition-colors duration-500">
              <div className="divider-num group-hover:text-white">0{i + 1}</div>
              <h3 className="font-display text-2xl mt-4">{it.t}</h3>
              <p className="mt-3 text-sm text-ink/60 group-hover:text-white/60 leading-relaxed">{it.d}</p>
              <div className="mt-8 h-px w-12 bg-machinery group-hover:w-24 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
