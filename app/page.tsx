import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Wearables from "@/components/Wearables";
import Innovation from "@/components/Innovation";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Services/>
      <Wearables/>
      <Innovation/>
      <Stats/>
      <Contact/>
    </div>
  );
}
