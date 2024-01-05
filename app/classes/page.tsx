import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "public/classes-hero.jpg";
import { LuBattery, LuCalendar, LuClock } from "react-icons/lu";
import Weightlifting from "public/Weightlifting.jpg";
import cardio from "public/cardio.jpg";
import hIIT from "public/HIIT.webp";
import crossFit from "public/cross-fit.jpg";
import pilates from "public/pilates.jpg";

const classes = [
  {
    name: "Weightlifting Class",
    details: {
      paragraph:
        "Join our Weightlifting Class at EliteGYM to build strength and sculpt your physique under the guidance of expert trainers. Our classes cater to all skill levels, from beginners to seasoned lifters, focusing on proper techniques with free weights and machines.",
      benefits:
        " Muscle development, increased metabolism, improved body composition.",
      date: "Mon, Wed, Sat",
      deficulty: "Medium",
      time: "30 min",
    },
    image: Weightlifting,
  },
  {
    name: "Cardio Class",
    details: {
      paragraph:
        "Elevate your cardiovascular fitness and calorie burn with our Cardio Class. Our experienced instructors lead dynamic workouts, including running, cycling, and stair climbing, suitable for all fitness levels.",
      benefits: "Cardiovascular health, fat burning, increased energy.",
      date: "Mon, Wed, Sat",
      deficulty: "Medium",
      time: "30 min",
    },
    image: cardio,
  },
  {
    name: "HIIT Class",
    details: {
      paragraph:
        "Get quick and powerful results with our HIIT Class at EliteGYM. High-intensity intervals combined with brief rest periods maximize endurance, calorie expenditure, and overall strength. These efficient workouts are designed to fit your busy schedule.",
      benefits: "Rapid results, improved cardio endurance, time efficiency.",
      date: "Mon, Wed, Sat",
      deficulty: "Medium",
      time: "30 min",
    },
    image: hIIT,
  },
  {
    name: "CrossFit Class",
    details: {
      paragraph:
        "Experience versatile fitness in our CrossFit Class, incorporating functional exercises, weightlifting, and cardio. Whether you're new to CrossFit or a seasoned athlete, our classes offer a challenging yet supportive environment. Join our community and unlock new levels of strength, agility, and camaraderie.",
      benefits: "Functional strength, versatile fitness, camaraderie.",
      date: "Mon, Wed, Sat",
      deficulty: "Medium",
      time: "30 min",
    },
    image: crossFit,
  },
  {
    name: "Pilates Class",
    details: {
      paragraph:
        "Discover the core-strengthening benefits of our Pilates Class at EliteGYM. Led by certified instructors, our classes focus on precise movements and controlled breathing to improve posture, flexibility, and overall body tone. Pilates is suitable for all fitness levels and provides a low-impact, full-body workout that enhances core stability and coordination.",
      benefits: "Core strength, flexibility, posture, mind-body connection.",
      date: "Mon, Wed, Sat",
      deficulty: "Medium",
      time: "30 min",
    },
    image: pilates,
  },
];

export default function Classes() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black/50 relative flex items-end overflow-hidden pt-28 shadow-2xl shadow-yellow-500 h-[50vw]">
        <Image
          src={HeroImage}
          alt=""
          className="absolute -z-50 top-0 w-full h-full object-cover object-top"
        />
        <div className="mb-20 ml-14">
          <Link
            href="/"
            className="hover:text-yellow-400 transition mr-1 text-4xl text-white"
          >
            Home
          </Link>{" "}
          <span className="text-4xl text-white">||</span>{" "}
          <span className="border-b-4 border-yellow-400 font-bold pb-1 ml-1 text-4xl text-white">
            Classes
          </span>
        </div>
      </div>

      <Container className="pt-16 sm:pt-24 lg:pt-32 pb-16">
        {classes.map((classe, index) => (
          <div
            key={`${classe}-${index}`}
            className={cn(
              "grid grid-cols-2 gap-x-8",
              index !== 0 ? "pt-4 sm:pt-8 lg:pt-16" : ""
            )}
          >
            <div
              className={cn(
                Number.isInteger(index / 2)
                  ? "order-1"
                  : "order-2 flex justify-end"
              )}
            >
              <Image
                src={classe.image}
                alt={classe.name}
                className="object-cover rounded-2xl border-2 border-yellow-500 aspect-square max-w-2xl"
              />
            </div>
            <div
              className={cn(
                Number.isInteger(index / 2) ? "order-2 justify-end" : "order-1",
                "items-center flex w-full h-full"
              )}
            >
              <div className="max-w-2xl">
                <span className="text-lg p-5 rounded-full text-yellow-900 border border-yellow-500">
                  {index + 1}
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-yellow-600 sm:text-5xl drop-shadow-xl">
                  {classe.name}
                </h2>
                <p className="mt-8 text-lg leading-8 text-gray-900">
                  {classe.details.paragraph}
                </p>
                <p className="mt-3 font-semibold text-lg leading-8 text-gray-900">
                  Benefits: {classe.details.benefits}
                </p>
                <div className="mt-8 flex">
                  <div className="group">
                    <span className="text-yellow-600 flex items-center group-hover:text-yellow-500 transition-all">
                      <LuCalendar className="mr-1" />
                      {classe.details.date}
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-yellow-600 flex items-center ml-4 group-hover:text-yellow-500 transition-all">
                      <LuBattery className="mr-1" />
                      {classe.details.deficulty}
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-yellow-600 flex items-center group-hover:text-yellow-500 ml-4 transition-all">
                      <LuClock className="mr-1" />
                      {classe.details.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
