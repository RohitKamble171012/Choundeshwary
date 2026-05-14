import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
      <img
        src="/images/hero-machine.jpg"
        alt="Industrial dairy machinery"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

      <div className="container-x relative pb-24 pt-40 w-full">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8 animate-fade-up">
            <span className="eyebrow text-machinery">Estd. Ichalkaranji · India</span>
            <h1 className="headline mt-6 text-white text-[44px] sm:text-6xl lg:text-[88px] font-bold">
              Leading Manufacturer of <br />
              <span className="italic font-display text-machinery">Dairy & Khoa</span> Machinery
            </h1>
            <p className="mt-8 max-w-xl text-white/70 text-base lg:text-lg leading-relaxed">
              Manufacturers & Suppliers of Khoya, Paneer, Lassi & Dairy Processing Machines —
              engineered in stainless steel for commercial production.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">Explore Machines →</Link>
              <a href="https://wa.me/918208384134" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp Inquiry</a>
            </div>
          </div>

          <div className="hidden lg:block col-span-4 text-right text-white/50 animate-fade-in">
            <div className="space-y-6">
              <div>
                <div className="text-5xl font-display text-white">25+</div>
                <div className="text-[11px] uppercase tracking-[0.28em] mt-1">Years of Craft</div>
              </div>
              <div className="ml-auto w-px h-12 bg-white/20" />
              <div>
                <div className="text-5xl font-display text-white">1200+</div>
                <div className="text-[11px] uppercase tracking-[0.28em] mt-1">Machines Delivered</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/15 pt-6 text-white/50">
          <div className="text-[11px] uppercase tracking-[0.32em]">Khoa · Paneer · Lassi · Ghee · Cream Separator</div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em]">
            Scroll
            <span className="block w-px h-8 bg-white/30 animate-scroll-hint" />
          </div>
        </div>
      </div>
    </section>
  );
}
