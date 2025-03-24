import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection/>
    </div>
  );
}
