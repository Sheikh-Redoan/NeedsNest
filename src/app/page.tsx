import Hero from "@/components/hero";
import CarList from "@/components/home/CarList";
import FaqSection from "@/components/home/FaqSection";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Promices from "@/components/promices";

export default function Home() {
  return (
    <>
      <Hero />
      <Promices />
      <CarList />
      <HowItWorks />
      <Testimonials />
      <FaqSection />
    </>
  );
}
