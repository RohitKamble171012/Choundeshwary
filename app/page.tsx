import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Showcase from "@/components/Showcase";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <About />
      <WhyUs />
      <Showcase />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
}
