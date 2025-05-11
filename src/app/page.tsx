import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Cta />
      <Testimonial />
      <Footer />
    </main>
  );
}
