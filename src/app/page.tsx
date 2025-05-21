import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { TaxRegimes } from "@/components/TaxRegimes";
import { Services } from "@/components/Services";
import { Cta } from "@/components/Cta";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
// import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <TaxRegimes />
      <Cta />
      <About />
      {/* <Testimonial /> */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
