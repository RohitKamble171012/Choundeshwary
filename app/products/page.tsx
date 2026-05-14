import { products } from "@/lib/products";
import CTA from "@/components/CTA";

export const metadata = { title: "Machines — Choundeshwary Machinery" };

export default function ProductsPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-soft">
        <div className="container-x">
          <span className="eyebrow">Our Catalogue</span>
          <h1 className="headline mt-5 text-5xl lg:text-7xl font-bold text-ink max-w-4xl">
            Dairy & khoa machinery, <span className="italic font-display text-machinery">made in India.</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x space-y-24">
          {products.map((p, i) => (
            <article
              key={p.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-6 bg-soft aspect-[5/4] flex items-center justify-center p-10 border border-black/5">
                <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="lg:col-span-6 lg:px-10">
                <div className="divider-num">0{i + 1} · {p.tag}</div>
                <h2 className="headline mt-3 text-4xl lg:text-5xl font-bold text-ink">{p.name}</h2>
                <p className="mt-5 text-ink/70 leading-relaxed">{p.description}</p>
                <ul className="mt-8 space-y-2 text-sm text-ink/70">
                  <li>• Food-grade stainless steel construction</li>
                  <li>• Commercial-duty motor & heating</li>
                  <li>• Easy clean-in-place design</li>
                  <li>• Pan-India delivery & installation</li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://wa.me/918208384134" className="btn-dark">Request Quote</a>
                  <a href="tel:8208384134" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink border border-ink/20 hover:bg-ink hover:text-white transition-colors">
                    Call Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
