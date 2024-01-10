"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./container";

export default function HeroSection({
  image,
}: {
  image: StaticImageData | string;
}) {
  const pathname = usePathname();
  return (
    <div className="bg-black/50 relative flex items-center md:items-end overflow-hidden py-48 md:py-0 md:pt-28 shadow-2xl shadow-yellow-500 h-[50vw]">
      <Image
        src={image}
        alt=""
        width={500}
        height={500}
        className="absolute z-10 top-0 w-full h-full object-cover object-top"
      />
      <Container className="md:mb-20 md:ml-0 z-20">
        <Link
          href="/"
          className="hover:text-yellow-400 transition mr-1 text-3xl lg:text-4xl text-white"
        >
          Home
        </Link>{" "}
        <span className="text-3xl lg:text-4xl text-white">||</span>{" "}
        <span className="border-b-4 border-yellow-400 font-bold pb-1 ml-1 text-3xl lg:text-4xl text-white capitalize">
          {pathname.replace("/", "")}
        </span>
      </Container>
    </div>
  );
}
