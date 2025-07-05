import { Car } from "@/types";
import { CarCard } from "./CardCard";

const cars: Car[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    location: "United States",
    description:
      "Reliable, fuel-efficient mid-size sedan240-hp two-motor hybrid",
    priceRange: "$28,500–$32,600",
    imageUrl: "/car.jpg",
  },
  {
    id: 2,
    name: "Honda Grace (City)",
    location: "United States",
    description:
      "Compact, tech-friendly sedanReliable, fuel-efficient mid-size",
    priceRange: "$17,900–$20,400",
    imageUrl: "/car.jpg",
    isActive: true,
  },
  {
    id: 3,
    name: "Suzuki WagonR",
    location: "United States",
    description: "240-hp two-motor hybrid system with added towing capability",
    priceRange: "$39,990–$44,990",
    imageUrl: "/car.jpg",
  },
  ...Array(5).fill({
    id: 4,
    name: "Honda CR–V 2024",
    location: "United States",
    description: "240-hp two-motor hybrid system with added towing capability",
    priceRange: "$39,990–$44,990",
    imageUrl: "/car.jpg",
  }),
];

export default function CarList() {
  return (
    <section className="py-16 container-div">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-[40px] font-semibold">What do you need today?</h1>
        <p className="text-2xl font-normal">
          Post a need and get matched with nearby auto sales providers.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
        {cars.map((car, idx) => (
          <CarCard key={idx} car={{ ...car, id: idx }} />
        ))}
      </div>
    </section>
  );
}
