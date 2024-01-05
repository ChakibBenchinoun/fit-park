import Link from "next/link";
import { Container } from "../container";
import classesImage from "public/classes.jpg";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { LinkButton } from "../buttons";

export function ClassesSection() {
  return (
    <Container className="pt-32 sm:pt-44 lg:pt-38 grid grid-cols-2 gap-x-16 place-items-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight text-yellow-600 sm:text-5xl drop-shadow-xl">
          Our Classes
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-900">
          At EliteGYM, we're more than just a fitness facility; we're a
          community dedicated to helping you achieve your health and fitness
          goals. With state-of-the-art equipment, experienced trainers, and a
          welcoming atmosphere, we're committed to providing you with the tools
          and support you need to succeed on your fitness journey.
        </p>
        <LinkButton
          href="/classes"
          label="Find Out More"
          className="mt-5"
          theme="dark"
        />
      </div>
      <div className="relative max-w-2xl group">
        <div className="bg-yellow-400 w-full -rotate-6 h-full -z-10 absolute border-yellow-500 rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-6 group-hover:scale-105 duration-300" />
        <div className="bg-yellow-300 w-full -rotate-3 h-full -z-0 absolute border-yellow-500 rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-3 group-hover:scale-105 duration-300" />
        <div className="rounded-2xl shadow-2xl border-2 rotate-0 transition-all group-hover:scale-105 duration-300 overflow-hidden">
          <Image
            src={classesImage}
            alt=""
            className="object-cover rounded-2xl border-2 border-yellow-500 max-w-xl aspect-square"
          />
        </div>
      </div>
    </Container>
  );
}
