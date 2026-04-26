
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Partners from "./components/Partners";
import AccredianEdge from "./components/AccredianEdge";
 import CatFramework from "./components/CatFramework";
 import ResultSection from "./components/ResultSection";
 import FAQSection from "./components/FAQSection";
 import Testimonials from "./components/Testimonials";
 import Footer from "./components/Footer";
import { Cat } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <AccredianEdge />
      <CatFramework />
      <ResultSection />
      <FAQSection/>
      <Testimonials/>
      <Footer/>
    </>
  );
}