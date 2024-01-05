import { Container } from "@/components/container";
import { AboutSection } from "@/components/home-page/about-section";
import { ClassesSection } from "@/components/home-page/classes-section";
import { HeroSection } from "@/components/home-page/hero-section";
import { ServicesSection } from "@/components/home-page/services-section";
import Image from "next/image";
import Link from "next/link";
import aboutTwoImage from "public/about2.jpg";
import aboutImage from "public/about.jpg";
import {
  LuArrowRight,
  LuClock3,
  LuDumbbell,
  LuGem,
  LuHeadphones,
  LuHeart,
  LuHeartPulse,
} from "react-icons/lu";
import { GrLike } from "react-icons/gr";
import { LinkButton } from "@/components/buttons";

const stats = [
  { id: 1, name: "Working Hours", value: "8,000+", icon: LuClock3 },
  { id: 2, name: "Happy Clients", value: "2064", icon: LuHeart },
  { id: 3, name: "Success Stories", value: "537", icon: GrLike },
  { id: 4, name: "Perfect Bodies", value: "+90%", icon: LuGem },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <div className="w-full h-full grid grid-cols-3 pt-32 sm:pt-44 lg:pt-64 px-10">
        <div className="pr-6 relative flex justify-center text-center rounded-2xl items-center w-full h-full bg-black pt-5 border-y-2 border-yellow-500">
          <span className="text-xl text-yellow-400/50 absolute left-5 top-5">
            01.
          </span>
          <div>
            <LuHeartPulse className="w-12 h-12 text-yellow-600 mx-auto" />
            <h1 className="text-white uppercase text-xl mt-3 font-bold">
              Health
            </h1>
            <p className="mt-3 text-gray-300 text-sm px-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              minima nesciunt! Tempora cum aperiam reprehenderit! Sint
              aspernatur magni eos commodi voluptates a. Nulla quibusdam
              doloribus sequi fugiat, impedit reprehenderit consequuntur.
            </p>
          </div>
        </div>
        <div className="relative w-full h-full scale-110 rounded-2xl overflow-hidden border-2 border-yellow-500">
          <Image src={aboutTwoImage} alt="" className="" />
          <div className="absolute w-full flex justify-center items-center text-center h-full bg-black/50 top-0">
            <span className="text-xl text-yellow-400/50 absolute left-5 top-5">
              02.
            </span>
            <div>
              <LuDumbbell className="w-12 h-12 text-yellow-600 mx-auto -rotate-45" />
              <h1 className="text-white uppercase text-xl mt-3 font-bold">
                Workout
              </h1>
              <p className="mt-3 text-gray-300 text-sm px-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                minima nesciunt! Tempora cum aperiam reprehenderit! Sint
                aspernatur magni eos commodi voluptates a. Nulla quibusdam
                doloribus sequi fugiat, impedit reprehenderit consequuntur.
              </p>
            </div>
          </div>
        </div>
        <div className="pl-6 relative -z-10 flex justify-center rounded-2xl text-center items-center w-full h-full bg-black pt-5 border-y-2 border-yellow-500">
          <span className="text-xl text-yellow-400/50 absolute left-10 top-5">
            03.
          </span>
          <div>
            <LuHeadphones className="w-12 h-12 text-yellow-600 mx-auto" />
            <h1 className="text-white uppercase text-xl mt-3 font-bold">
              Fun, Family & Adventure
            </h1>
            <p className="mt-3 text-gray-300 text-sm px-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              minima nesciunt! Tempora cum aperiam reprehenderit! Sint
              aspernatur magni eos commodi voluptates a. Nulla quibusdam
              doloribus sequi fugiat, impedit reprehenderit consequuntur.
            </p>
          </div>
        </div>
      </div>
      <ServicesSection />
      <Container className="bg-black -z-50 pb-36">
        <div className="grid grid-cols-2 gap-x-16 place-items-center">
          <div className="relative max-w-2xl group -mt-20">
            <div className="rounded-2xl rotate-0 transition-all group-hover:rotate-6 group-hover:scale-105 duration-300 overflow-hidden">
              <Image
                src={aboutImage}
                alt=""
                className="object-cover rounded-2xl border-2 border-yellow-600 max-w-md"
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-yellow-600 sm:text-5xl drop-shadow-xl">
              About Us
            </h2>
            <p className="mt-6 leading-8 text-gray-300">
              At EliteGYM, we're more than just a fitness facility; we're a
              community dedicated to helping you achieve your health and fitness
              goals. With state-of-the-art equipment, experienced trainers, and
              a welcoming atmosphere, we're committed to providing you with the
              tools and support you need to succeed on your fitness journey.
            </p>
            <LinkButton
              href="/about"
              label="Find Out More"
              className="mt-5"
              theme="dark"
            />
          </div>
        </div>
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-24 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6 text-center"
            >
              <stat.icon className="text-3xl text-orange-500 mx-auto" />
              <dd className="text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
              <dt className="text-sm leading-6">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </main>
  );
}
