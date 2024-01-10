import { Container } from "@/components/container";
import classesImage from "public/classes.jpg";
import { HeroSection } from "@/components/home-page/hero-section";
import { ServicesSection } from "@/components/home-page/services-section";
import Image from "next/image";
import aboutTwoImage from "public/about2.jpg";
import aboutImage from "public/about.jpg";
import {
  LuClock3,
  LuDumbbell,
  LuGem,
  LuHeadphones,
  LuHeart,
  LuHeartPulse,
} from "react-icons/lu";
import { GrLike } from "react-icons/gr";
import { LinkButton } from "@/components/buttons";
import DetailsGrid from "@/components/details-grid";

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
      <DetailsGrid
        className="pt-16 sm:pt-24 lg:pt-32"
        title="We're Committed to Your Fitness Success"
        paragraph="At EliteGYM, we're more than just a fitness facility; we're a
        community dedicated to helping you achieve your health and fitness
        goals. With state-of-the-art equipment, experienced trainers, and a
        welcoming atmosphere, we're committed to providing you with the tools
        and support you need to succeed on your fitness journey."
        asset="/succes.mp4"
        link="/about"
      />
      <DetailsGrid
        className="pt-16 sm:pt-24 lg:pt-32"
        title="Our Classes"
        paragraph="At EliteGYM, we're more than just a fitness facility; we're a
        community dedicated to helping you achieve your health and fitness
        goals. With state-of-the-art equipment, experienced trainers, and a
        welcoming atmosphere, we're committed to providing you with the tools
        and support you need to succeed on your fitness journey."
        asset={classesImage}
        link="/classes"
        reverse
      />
      <div className="w-full h-full flex-col lg:grid grid-cols-3 pt-28 sm:pt-44 lg:pt-64 px-10">
        <div className="lg:pr-6 relative flex justify-center text-center rounded-2xl items-center w-full h-full bg-black py-10 lg:pt-5 lg:pb-0 border-y-2 border-yellow-500">
          <span className="text-xl text-yellow-400/50 absolute left-5 top-5">
            01.
          </span>
          <div className="max-w-2xl">
            <LuHeartPulse className="w-12 h-12 text-yellow-600 mx-auto" />
            <h1 className="text-white uppercase lg:text-lg xl:text-xl mt-3 font-bold">
              Health
            </h1>
            <p className="mt-3 text-gray-300 text-sm xl:text-base px-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              minima nesciunt! Tempora cum aperiam reprehenderit! Sint
              aspernatur magni eos commodi voluptates a. Nulla quibusdam
              doloribus sequi fugiat, impedit reprehenderit consequuntur.
            </p>
          </div>
        </div>
        <div className="relative w-full h-full lg:scale-110 rounded-2xl overflow-hidden border-2 border-yellow-500 mt-10 lg:mt-0">
          <Image
            src={aboutTwoImage}
            alt=""
            className="aspect-video lg:aspect-auto object-cover"
          />
          <div className="absolute w-full flex justify-center items-center text-center h-full bg-black/50 top-0">
            <span className="text-xl text-yellow-400/50 absolute left-5 top-5">
              02.
            </span>
            <div className="max-w-2xl">
              <LuDumbbell className="w-12 h-12 text-yellow-600 mx-auto -rotate-45" />
              <h1 className="text-white uppercase lg:text-lg xl:text-xl mt-3 font-bold">
                Workout
              </h1>
              <p className="mt-3 text-gray-300 text-sm xl:text-base px-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
                minima nesciunt! Tempora cum aperiam reprehenderit! Sint
                aspernatur magni eos commodi voluptates a. Nulla quibusdam
                doloribus sequi fugiat, impedit reprehenderit consequuntur.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pl-6 relative -z-10 flex justify-center rounded-2xl text-center items-center w-full h-full bg-black py-10 lg:pt-5 lg:pb-0 border-y-2 border-yellow-500  mt-10 lg:mt-0">
          <span className="text-xl text-yellow-400/50 absolute left-5 lg:left-10 top-5">
            03.
          </span>
          <div className="max-w-2xl">
            <LuHeadphones className="w-12 h-12 text-yellow-600 mx-auto" />
            <h1 className="text-white uppercase lg:text-lg xl:text-xl mt-3 font-bold">
              Fun, Family & Adventure
            </h1>
            <p className="mt-3 text-gray-300 text-sm xl:text-base px-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
              minima nesciunt! Tempora cum aperiam reprehenderit! Sint
              aspernatur magni eos commodi voluptates a. Nulla quibusdam
              doloribus sequi fugiat, impedit reprehenderit consequuntur.
            </p>
          </div>
        </div>
      </div>
      <ServicesSection />
      <Container className="bg-black -z-50 pb-20 md:pb-36">
        <div className="md:grid grid-cols-2 gap-x-16 place-items-center">
          <div className="hidden md:block relative max-w-2xl group -mt-20">
            <div className="rounded-2xl rotate-0 transition-all group-hover:rotate-6 group-hover:scale-105 duration-300 overflow-hidden">
              <Image
                src={aboutImage}
                alt=""
                className="object-cover rounded-2xl border-2 border-yellow-600 max-w-sm lg:max-w-md"
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl pt-10 md:pt-0 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-yellow-600 drop-shadow-xl">
              About Us
            </h2>
            <p className="mt-6 text-sm lg:text-base xl:text-lg text-gray-300">
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
        <dl className="mt-10 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-24 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 md:pl-6 text-center"
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
