import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";

export const metadata = { title: "About — Choundeshwary Machinery" };

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-ink text-white relative overflow-hidden">
        <img src="/images/factory.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        <div className="container-x relative">
          <span className="eyebrow text-machinery">Our Story</span>
          <h1 className="headline mt-5 text-5xl lg:text-7xl font-bold max-w-4xl">
            Two decades of <span className="italic font-display text-machinery">dairy machinery</span> craftsmanship.
          </h1>
        </div>
      </section>
      <About />
      <WhyUs />
      <Showcase />
      <CTA />
    </>
  );
}
