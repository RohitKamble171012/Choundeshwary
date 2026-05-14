import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductGrid() {
  return (
    <section id="machines" className="bg-white py-28">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="eyebrow">Featured Machinery</span>
            <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-ink max-w-2xl">
              Built for the Indian <span className="italic font-display text-machinery">dairy floor.</span>
            </h2>
          </div>
          <p className="max-w-md text-ink/60 leading-relaxed">
            Every unit is fabricated in food-grade stainless steel, tested for commercial
            throughput, and shipped pan-India with installation support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <article key={p.slug} className="card-machine group">
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-bold text-ink/60">
                <span className="divider-num">0{i + 1}</span>
                <span>{p.tag}</span>
              </div>
              <div className="img-wrap">
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="p-7 bg-white border-t border-black/5">
                <h3 className="font-display text-2xl text-ink leading-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed line-clamp-3">{p.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <Link href={`/products`} className="text-[11px] uppercase tracking-[0.28em] font-bold text-machinery hover:text-ink transition-colors">
                    View Details →
                  </Link>
                  <a href="https://wa.me/918208384134" className="text-[11px] uppercase tracking-[0.28em] font-bold text-ink/40 hover:text-machinery">Inquire</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
