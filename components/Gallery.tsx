const tiles = [
  { src: "/images/factory.jpg", span: "md:col-span-2 md:row-span-2", fit: "object-cover" },
  { src: "/images/khoya-gas.jpg", span: "", fit: "object-contain bg-soft p-4" },
  { src: "/images/paneer.jpg", span: "", fit: "object-contain bg-soft p-4" },
  { src: "/images/cream-separator.jpg", span: "", fit: "object-contain bg-soft p-4" },
  { src: "/images/lassi.jpg", span: "", fit: "object-contain bg-soft p-4" },
  { src: "/images/ghee.jpg", span: "md:col-span-2", fit: "object-contain bg-soft p-4" },
  { src: "/images/tilting-khoya.jpg", span: "", fit: "object-contain bg-soft p-4" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-28">
      <div className="container-x">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="eyebrow">Inside the Workshop</span>
            <h2 className="headline mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-ink">
              From the <span className="italic font-display text-machinery">factory floor.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          {tiles.map((t, i) => (
            <div key={i} className={`relative overflow-hidden group ${t.span}`}>
              <img src={t.src} alt="" className={`w-full h-full ${t.fit} transition-transform duration-700 group-hover:scale-105`} />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
