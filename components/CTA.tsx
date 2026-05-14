export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 opacity-30">
        <img src="/images/factory.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-machinery/40" />
      <div className="container-x relative py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <span className="eyebrow text-machinery">Get In Touch</span>
          <h2 className="headline mt-5 text-5xl lg:text-7xl font-bold">
            Need Reliable <br />
            <span className="italic font-display text-machinery">Dairy Machinery?</span>
          </h2>
          <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
            Talk to our team for capacity, pricing and delivery. We ship and install across India.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-3">
          <a href="tel:8208384134" className="btn-primary justify-center">📞 Call Now · 8208384134</a>
          <a href="https://wa.me/918208384134" className="btn-ghost justify-center">WhatsApp Us</a>
          <div className="text-xs text-white/50 text-center mt-2">Available 9 AM – 8 PM · All India</div>
        </div>
      </div>
    </section>
  );
}
