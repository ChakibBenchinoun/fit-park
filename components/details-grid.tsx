import { cn } from "@/lib/utils";
import { LinkButton } from "./buttons";
import { Container } from "./container";
import Image, { StaticImageData } from "next/image";

export default function DetailsGrid({
  className,
  title,
  paragraph,
  asset,
  link,
  reverse,
}: {
  className?: string;
  title: string;
  paragraph: string;
  asset: string | StaticImageData;
  link?: string;
  reverse?: boolean;
}) {
  return (
    <Container
      className={cn(
        className,
        "flex-col md:grid grid-cols-2 gap-x-16 place-items-center"
      )}
    >
      <div
        className={cn(
          reverse ? "order-first" : "order-last",
          "mx-auto max-w-2xl text-center md:text-left"
        )}
      >
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-yellow-600 drop-shadow-xl">
          {title}
        </h2>
        <p className="mt-6 text-sm lg:text-base xl:text-lg text-gray-900">
          {paragraph}
        </p>
        {link ? (
          <LinkButton
            href={link}
            label="Find Out More"
            className="mt-5"
            theme="dark"
          />
        ) : null}
      </div>
      <div
        className={cn(
          reverse ? "order-last" : "order-first",
          "relative max-w-md lg:max-w-lg xl:max-w-xl group mx-auto mt-10 md:mt-0"
        )}
      >
        <div className="bg-yellow-400 w-full -rotate-6 h-full -z-10 absolute border-yellow-500 rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-6 group-hover:scale-105 duration-300" />
        <div className="bg-yellow-300 w-full -rotate-3 h-full -z-0 absolute border-yellow-500 rounded-2xl shadow-2xl border-2 transition-all group-hover:rotate-3 group-hover:scale-105 duration-300" />
        <div className="rounded-2xl shadow-2xl border-2 rotate-0 transition-all group-hover:scale-105 duration-300 overflow-hidden">
          {typeof asset === "string" ? (
            <video
              autoPlay
              loop
              muted
              className="aspect-square object-cover object-center rounded-2xl border-2 border-yellow-500"
            >
              <source src={asset} />
            </video>
          ) : (
            <Image
              src={asset}
              alt=""
              className="object-cover object-center rounded-2xl border-2 border-yellow-500 aspect-square"
            />
          )}
        </div>
      </div>
    </Container>
  );
}
