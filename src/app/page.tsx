import Image from "next/image";
import HeroSection from "@/app/hazina/page";
import FeatureSection from "./section/page";
import AdvisorShowcase from "./advisors/page";
import FAQSection from "./finance/page";
export default function Home() {
  return (
    <div>
      
      < HeroSection/> 
      <FeatureSection/>
      <FAQSection/>
    </div>
  );
}
