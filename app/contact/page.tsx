export const metadata = { title: "Contact — Choundeshwary Machinery" };

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-soft">
        <div className="container-x">
          <span className="eyebrow">Reach Us</span>
          <h1 className="headline mt-5 text-5xl lg:text-7xl font-bold text-ink max-w-3xl">
            Let's talk <span className="italic font-display text-machinery">machinery.</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-machinery font-bold">Phone</div>
              <a href="tel:8208384134" className="block mt-3 font-display text-3xl text-ink hover:text-machinery">+91 82083 84134</a>
              <a href="tel:8669474287" className="block mt-1 font-display text-3xl text-ink hover:text-machinery">+91 86694 74287</a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-machinery font-bold">Address</div>
              <p className="mt-3 text-ink/70 leading-relaxed text-lg">
                Kudche Mala, Near Radhamohan Process,<br />
                Ichalkaranji – 416115,<br />
                Maharashtra, India
              </p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-machinery font-bold">Hours</div>
              <p className="mt-3 text-ink/70">Mon – Sat · 9:00 AM – 8:00 PM</p>
            </div>

            <div className="flex gap-3 pt-4">
              <a href="https://wa.me/918208384134" className="btn-primary">WhatsApp Us</a>
              <a href="tel:8208384134" className="btn-dark">Call Now</a>
            </div>
          </div>

          <form className="bg-soft p-10 border border-black/5 space-y-5">
            <div className="text-[11px] uppercase tracking-[0.28em] text-machinery font-bold">Inquiry Form</div>
            <input className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-machinery" placeholder="Your Name" />
            <input className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-machinery" placeholder="Phone Number" />
            <input className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-machinery" placeholder="Email" />
            <select className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-machinery">
              <option>Khoya Machine</option>
              <option>Paneer Machine</option>
              <option>Cream Separator</option>
              <option>Lassi Machine</option>
              <option>Ghee Machine</option>
              <option>Tilting Khoya Machine</option>
            </select>
            <textarea rows={4} className="w-full bg-white border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-machinery" placeholder="Tell us about your requirement..." />
            <button type="button" className="btn-primary w-full justify-center">Send Inquiry →</button>
          </form>
        </div>
      </section>
    </>
  );
}
