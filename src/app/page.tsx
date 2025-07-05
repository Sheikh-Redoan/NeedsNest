import Hero from "@/components/hero";
import CarList from "@/components/home/CarList";
import HowItWorks from "@/components/home/HowItWorks";
import Promices from "@/components/promices";

export default function Home() {
  return (
    <>
      <Hero />
      <Promices />
      <CarList />
      <HowItWorks />
    </>
  );
}
