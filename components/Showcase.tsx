export default function Showcase() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">
        <div className="relative bg-white flex items-center justify-center p-12 lg:p-20">
          <img src="/images/tilting-khoya.jpg" alt="Tilting khoya machine" className="max-h-[520px] w-auto object-contain" />
          <div className="absolute top-8 left-8 text-[10px] uppercase tracking-[0.32em] text-ink/40">/ Featured Showcase</div>
        </div>

        <div className="relative flex flex-col justify-center p-12 lg:p-20 noise">
          <span className="eyebrow">Featured Machine</span>
          <h2 className="headline mt-6 text-5xl lg:text-7xl font-bold">
            Built For <br />
            <span className="italic font-display text-machinery">Industrial</span> Performance.
          </h2>
          <p className="mt-6 text-white/60 max-w-md leading-relaxed">
            Our tilting khoya machine combines uniform heating with effortless discharge —
            engineered for high-volume commercial khoa production with minimal labour.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["Capacity", "30–200 L"],
              ["Body", "SS 304"],
              ["Heating", "Gas / Steam"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-2xl text-white">{v}</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/40 mt-1">{k}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://wa.me/918208384134" className="btn-primary">Request Quote</a>
            <a href="/products" className="btn-ghost">All Machines</a>
          </div>
        </div>
      </div>
    </section>
  );
}
