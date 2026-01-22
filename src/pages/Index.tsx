import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { WhyMe } from "@/components/sections/WhyMe";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Results />
        <Portfolio />
        <Services />
        <WhyMe />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
