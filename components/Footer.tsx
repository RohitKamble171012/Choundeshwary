import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-machinery/10 blur-3xl" />
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 grid place-items-center bg-machinery font-display text-xl">C</div>
            <div>
              <div className="font-bold tracking-wide">CHOUNDESHWARY</div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">Machinery</div>
            </div>
          </div>
          <p className="mt-6 text-white/60 max-w-md leading-relaxed">
            Manufacturers & suppliers of premium dairy and khoa processing machinery.
            Built in stainless steel for commercial dairies across India.
          </p>
          <div className="mt-8 text-sm text-white/70 leading-relaxed">
            Kudche Mala, Near Radhamohan Process,<br />
            Ichalkaranji – 416115, Maharashtra, India
          </div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.28em] text-machinery font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><Link href="/" className="hover:text-machinery">Home</Link></li>
            <li><Link href="/products" className="hover:text-machinery">Machines</Link></li>
            <li><Link href="/about" className="hover:text-machinery">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-machinery">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.28em] text-machinery font-bold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><a href="tel:8208384134" className="hover:text-machinery">+91 82083 84134</a></li>
            <li><a href="tel:8669474287" className="hover:text-machinery">+91 86694 74287</a></li>
            <li><a href="https://wa.me/918208384134" className="hover:text-machinery">WhatsApp Inquiry</a></li>
          </ul>
          <div className="mt-6 flex gap-3">
            {["FB", "IG", "IN", "YT"].map((s) => (
              <a key={s} href="#" className="w-10 h-10 grid place-items-center border border-white/20 text-[10px] tracking-widest hover:bg-machinery hover:border-machinery transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Choundeshwary Machinery. All rights reserved.</div>
          <div>Designed & Developed by <span className="text-white">1o X Sharp Technologies</span></div>
        </div>
      </div>
    </footer>
  );
}
