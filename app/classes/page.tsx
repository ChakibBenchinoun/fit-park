import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroImage from "public/classes-hero.jpg";
import { LuBattery, LuCalendar, LuClock } from "react-icons/lu";
import weightlifting from "public/weightlifting.jpg";
import cardio from "public/cardio.jpg";
import hIIT from "public/HIIT.webp";
import crossFit from "public/cross-fit.jpg";
import pilates from "public/pilates.jpg";
import HeroSection from "@/components/secondary-hero-section";

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
    image: weightlifting,
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
      <HeroSection image={HeroImage} />
      <Container className="pt-16 sm:pt-24 lg:pt-32 pb-16">
        {classes.map((classe, index) => (
          <div
            key={`${classe}-${index}`}
            className={cn(
              "md:grid grid-cols-2 gap-x-8",
              index !== 0 ? "pt-16" : null
            )}
          >
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
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-yellow-600 drop-shadow-xl">
                  {classe.name}
                </h2>
                <p className="mt-8 text-sm lg:text-base xl:text-lg text-gray-900">
                  {classe.details.paragraph}
                </p>
                <p className="mt-3 font-semibold text-sm lg:text-base xl:text-lg text-gray-900">
                  Benefits: {classe.details.benefits}
                </p>
                <div className="mt-8 flex">
                  <div className="group">
                    <span className="text-yellow-600 flex text-sm lg:text-base items-center group-hover:text-yellow-500 transition-all">
                      <LuCalendar className="mr-1" />
                      {classe.details.date}
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-yellow-600 flex text-sm lg:text-base items-center ml-4 group-hover:text-yellow-500 transition-all">
                      <LuBattery className="mr-1" />
                      {classe.details.deficulty}
                    </span>
                  </div>
                  <div className="group">
                    <span className="text-yellow-600 flex text-sm lg:text-base items-center group-hover:text-yellow-500 ml-4 transition-all">
                      <LuClock className="mr-1" />
                      {classe.details.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cn(
                Number.isInteger(index / 2)
                  ? "order-1"
                  : "order-2 flex justify-end",
                "max-w-2xl mt-8 md:mt-0"
              )}
            >
              <Image
                src={classe.image}
                alt={classe.name}
                className="object-cover rounded-2xl border-2 border-yellow-500 aspect-video md:aspect-square"
              />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
