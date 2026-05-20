import Hero from "@/src/components/Hero";
import ProblemSection from "@/src/components/ProblemSection";
import SolutionSection from "@/src/components/SolutionSection";
import Features from "@/src/components/Features";
import FoundingUser from "@/src/components/FoundingUser";
import AboutAllyNest from "@/src/components/AboutAllyNest";
import Team from "@/src/components/Team";
import Roadmap from "@/src/components/Roadmap";
import InvestorSection from "@/src/components/InvestorSection";
import TrustSection from "@/src/components/TrustSection";
import FAQ from "@/src/components/FAQ";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <AboutAllyNest />
      <Team />
      <Roadmap />
      <InvestorSection />
      <TrustSection />
      <FoundingUser />
      <FAQ />
    </main>
  );
}
