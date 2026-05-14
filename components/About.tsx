const stats = [
  { n: "1200+", l: "Machines Delivered" },
  { n: "25+", l: "Years Experience" },
  { n: "800+", l: "Happy Clients" },
  { n: "PAN", l: "India Delivery" },
];

export default function About() {
  return (
    <section className="bg-soft py-28 relative overflow-hidden">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[560px]">
            <img src="/images/factory.jpg" alt="Factory floor" className="col-span-4 row-span-4 w-full h-full object-cover" />
            <img src="/images/tilting-khoya.jpg" alt="Tilting khoya machine" className="col-span-2 row-span-3 col-start-5 w-full h-full object-cover bg-white" />
            <img src="/images/cream-separator.jpg" alt="Cream separator" className="col-span-3 row-span-2 row-start-5 w-full h-full object-contain bg-white p-4" />
            <img src="/images/paneer.jpg" alt="Paneer machine" className="col-span-3 row-span-3 col-start-4 row-start-4 w-full h-full object-contain bg-ink p-4" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-machinery text-white px-8 py-6 hidden md:block">
            <div className="font-display text-4xl">Est. 1999</div>
            <div className="text-[10px] uppercase tracking-[0.28em] mt-1">Ichalkaranji · MH</div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-10">
          <span className="eyebrow">About the Company</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-ink">
            Engineering dairy machinery the <span className="italic font-display text-machinery">authentic</span> way.
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Choundeshwary Machinery is a trusted name in the manufacturing of khoa, paneer,
            lassi, ghee and cream separator machines. Our equipment is fabricated in food-grade
            stainless steel, designed for low maintenance, and engineered to meet the throughput
            demands of modern commercial dairies.
          </p>
          <p className="mt-4 text-ink/60 leading-relaxed">
            From single-unit installations to full processing lines, we serve dairies, sweet shops
            and food processors across India with reliable industrial-grade machinery.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-ink/10 pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-ink">{s.n}</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ink/50 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
