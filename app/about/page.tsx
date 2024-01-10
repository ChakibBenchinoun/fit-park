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
import HeroSection from "@/components/secondary-hero-section";
import DetailsGrid from "@/components/details-grid";

const items = [
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
      <HeroSection image={HeroImage} />
      <DetailsGrid
        className="pt-16 sm:pt-24 lg:pt-32"
        title="Where Fitness Meets Excellence"
        paragraph="At EliteGYM, we believe that every individual has the potential to
        achieve their fitness and wellness goals. Our journey began with a
        passion for health and a commitment to providing a place where
        people could thrive physically and mentally. Since our inception,
        we've dedicated ourselves to empowering our members and fostering a
        vibrant fitness community."
        asset={about3}
      />
      <DetailsGrid
        className="pt-24 sm:pt-32 lg:pt-44"
        title="Our Roots and Evolution"
        paragraph="EliteGYM was founded in [Year] by [Founder Names]. It all started
        with a vision to create a fitness haven that went beyond the
        conventional gym experience. Inspired by our personal fitness
        journeys and a desire to make a positive impact, we set out to build
        a place where people could transform their lives. From our humble
        beginnings to our current state-of-the-art facility, our journey has
        been marked by growth, resilience, and unwavering commitment to our
        members."
        asset={about4}
        reverse
      />

      <TeamSection />

      <div className="bg-black/80 relative overflow-hidden py-10 sm:py-28 mx-10 rounded-3xl">
        <Image
          src={steelBackground}
          alt=""
          className="absolute -z-50 top-0 h-full"
        />
        <Container>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-yellow-600 sm:text-5xl drop-shadow-xl w-fit mx-auto">
            Vision for the Future
          </h2>
          <p className="mt-6 text-sm lg:text-base xl:text-lg text-gray-200 max-w-2xl mx-auto text-center">
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
