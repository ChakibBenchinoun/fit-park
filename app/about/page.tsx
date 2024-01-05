import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "public/about-page-hero.jpg";
import about3 from "public/about3.jpg";
import about4 from "public/about4.jpg";
import about2 from "public/about2.jpg";
import classes from "public/classes.jpg";
import steelBackground from "public/steel-background.jpg";
import { LuDumbbell } from "react-icons/lu";
import { PiHeartHalfDuotone, PiUsersThree } from "react-icons/pi";
import { TbDropletBolt } from "react-icons/tb";
import { Carousel } from "@/components/carousel";
import TeamSection from "@/components/about-page/team-section";

export const items = [
  {
    title: "Abney Funeral Services",
    image: about2,
  },
  {
    title: "Ardeen Group",
    image: about3,
  },
  {
    title: "Boutique Ennasr",
    image: about4,
  },
  {
    title: "The Idea Road",
    image: classes,
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black/50 relative flex items-end overflow-hidden pt-28 shadow-2xl shadow-yellow-500 h-[50vw]">
        <Image
          src={HeroImage}
          alt=""
          className="absolute -z-50 top-0 w-full h-full"
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
            About
          </span>
        </div>
      </div>

      <Container className="pt-16 sm:pt-24 lg:pt-32 grid grid-cols-2 gap-x-16 place-items-center">
        <div className="relative max-w-2xl group">
        <div className="bg-yellow-400 w-full -rotate-6 h-full -z-10 absolute border-yellow-500 rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-6 group-hover:scale-105 duration-300" />
        <div className="bg-yellow-300 w-full -rotate-3 h-full -z-0 absolute border-yellow-500 rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-3 group-hover:scale-105 duration-300" />
        <div className="rounded-2xl shadow-2xl border-2 rotate-0 transition-all group-hover:scale-105 duration-300 overflow-hidden">
            <Image
              src={about3}
              alt=""
              className="object-cover rounded-2xl border-2 border-yellow-500 aspect-square max-w-xl"
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-yellow-600 sm:text-5xl drop-shadow-xl">
            Where Fitness Meets Excellence{" "}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            At EliteGYM, we believe that every individual has the potential to
            achieve their fitness and wellness goals. Our journey began with a
            passion for health and a commitment to providing a place where
            people could thrive physically and mentally. Since our inception,
            we've dedicated ourselves to empowering our members and fostering a
            vibrant fitness community.
          </p>
        </div>
      </Container>

      <Container className="py-32 sm:py-44 lg:py-60 grid grid-cols-2 gap-x-16 place-items-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-yellow-600 sm:text-5xl drop-shadow-xl">
            Our Roots and Evolution
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            EliteGYM was founded in [Year] by [Founder Names]. It all started
            with a vision to create a fitness haven that went beyond the
            conventional gym experience. Inspired by our personal fitness
            journeys and a desire to make a positive impact, we set out to build
            a place where people could transform their lives. From our humble
            beginnings to our current state-of-the-art facility, our journey has
            been marked by growth, resilience, and unwavering commitment to our
            members.
          </p>
        </div>
        <div className="relative max-w-2xl group">
        <div className="bg-yellow-400 w-full -rotate-6 h-full -z-10 absolute border-yellow-500 rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-6 group-hover:scale-105 duration-300" />
        <div className="bg-yellow-300 w-full -rotate-3 h-full -z-0 absolute border-yellow-500 rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-3 group-hover:scale-105 duration-300" />
        <div className="rounded-2xl shadow-2xl border-2 rotate-0 transition-all group-hover:scale-105 duration-300 overflow-hidden">
            <Image
              src={about4}
              alt=""
              className="object-cover rounded-2xl border-2 border-yellow-500 aspect-square max-w-xl"
            />
          </div>
        </div>
      </Container>

      <div className="bg-black/80 relative overflow-hidden py-28 mx-10 rounded-3xl">
        <Image
          src={steelBackground}
          alt=""
          className="absolute -z-50 top-0 h-full"
        />
        <Container className="flex w-full h-full justify-center items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-yellow-600 sm:text-5xl drop-shadow-xl mx-auto w-fit">
              Our Core Values
            </h2>
            <div className="grid grid-cols-2 mt-14 gap-20">
              <div className="max-w-lg text-center">
                <LuDumbbell className="w-12 h-12 text-yellow-600 mx-auto" />
                <h1 className="text-white uppercase text-xl mt-5 font-bold">
                  Excellence{" "}
                </h1>
                <p className="mt-5 text-gray-200 px-4">
                  We strive for excellence in everything we do, from our
                  facility to our training programs.
                </p>
              </div>
              <div className="max-w-lg text-center">
                <PiUsersThree className="w-12 h-12 text-yellow-600 mx-auto" />
                <h1 className="text-white uppercase text-xl mt-5 font-bold">
                  Community{" "}
                </h1>
                <p className="mt-5 text-gray-200 px-4">
                  We believe in the power of community to motivate, inspire, and
                  support.
                </p>
              </div>
              <div className="max-w-lg text-center">
                <TbDropletBolt className="w-12 h-12 text-yellow-600 mx-auto" />
                <h1 className="text-white uppercase text-xl mt-5 font-bold">
                  Innovation{" "}
                </h1>
                <p className="mt-5 text-gray-200 px-4">
                  We continuously evolve and innovate to deliver cutting-edge
                  fitness experiences.
                </p>
              </div>
              <div className="max-w-lg text-center">
                <PiHeartHalfDuotone className="w-12 h-12 text-yellow-600 mx-auto" />
                <h1 className="text-white uppercase text-xl mt-5 font-bold">
                  Health{" "}
                </h1>
                <p className="mt-5 text-gray-200 px-4">
                  We prioritize the health and well-being of our members and
                  community.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <TeamSection />

      <div className="bg-black/80 relative overflow-hidden py-28 mx-10 rounded-3xl">
        <Image
          src={steelBackground}
          alt=""
          className="absolute -z-50 top-0 h-full"
        />
        <Container>
          <h2 className="text-4xl font-bold tracking-tight text-yellow-600 sm:text-5xl drop-shadow-xl w-fit mx-auto">
            Vision for the Future
          </h2>
          <p className="mt-6 leading-8 text-gray-200 max-w-2xl mx-auto text-center">
            At EliteGYM, we don't just focus on the present; we have our eyes
            set on the future. We want to provide a glimpse into what we aim to
            achieve in the days ahead. We are committed to continuously
            improving our facilities and enriching our services. Additionally,
            we plan to contribute more to our community and resources to help
            more individuals reach their health and fitness goals. In the
            future, we will continue to grow and innovate, with the goal of
            delivering better services to an even larger audience.
          </p>
        </Container>
        <Carousel items={items} />T
      </div>
    </div>
  );
}
