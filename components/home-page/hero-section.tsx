import { Container } from "@/components/container";
import Image from "next/image";
import heroImage from "public/hero-image.png";
import yellowBackground from "public/yellow-background.jpg";
import steelBackground from "public/steel-background.jpg";
import { LinkButton, PrimaryButton } from "../buttons";

export function HeroSection() {
  return (
    <div className="bg-black/50 relative overflow-hidden pt-28 shadow-2xl shadow-yellow-500">
      <Image
        src={steelBackground}
        alt=""
        className="absolute -z-50 top-0 h-full object-cover"
      />
      <Container className="py-16 sm:py-24 lg:py-28 flex-col md:grid grid-cols-2 z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl flex justify-center items-center w-full h-full">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-yellow-300 lg:text-4xl xl:text-5xl uppercase">
              a new art of fitness in your town
            </h1>
            <p className="mt-6 text-sm lg:text-base xl:text-lg font-semibold tracking-wide text-yellow-200">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6 mx-auto md:ml-0 w-fit">
              <PrimaryButton size="lg" label="Get started" href="/pricing" />
              <LinkButton href="/about" label="Learn more" theme="light" />
            </div>
          </div>
        </div>
        <div className="relative w-full h-full flex justify-center md:justify-end xl:justify-center group mt-16 md:mt-0">
          <div className="bg-yellow-400 w-3/4 -rotate-6 h-full -z-0 absolute rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-6 group-hover:scale-105 duration-300" />
          <div className="bg-yellow-300 w-3/4 -rotate-3 h-full -z-0 absolute rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-3 group-hover:scale-105 duration-300" />
          <div className="relative rounded-2xl w-3/4 shadow-2xl border-2 transition-all group-hover:scale-105 duration-300 overflow-hidden">
            <Image
              src={yellowBackground}
              alt=""
              className="absolute w-full h-full"
            />
            <Image
              src={heroImage}
              alt=""
              className="translate-y-7 translate-x-6 transition-all group-hover:scale-105 duration-300"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
