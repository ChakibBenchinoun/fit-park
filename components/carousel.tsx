"use client";

import React from "react";
import { AnimatedDiv } from "./animated-div";
import { SpotlightCard } from "./spotlight-card";
import Image, { StaticImageData } from "next/image";

export function Carousel({
  items,
  showTitle = true,
}: {
  items: { title: string; image: StaticImageData; content?: string }[];
  showTitle?: boolean;
}) {
  return (
    <div className="relative mt-12 flex items-center">
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div className="animate-marquee flex w-max [--duration:30s] hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => {
            return (
              <CarouselItem item={item} showTitle={showTitle} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CarouselItem({
  item,
  showTitle,
  index,
}: {
  item: { title: string; image: StaticImageData; content?: string };
  showTitle: boolean;
  index: number;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      key={`${item.title}-${index}`}
      className="h-full px-2.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SpotlightCard
        from="#fde047"
        via="#eab308"
        size={300}
        className="relative mx-auto w-full max-w-3xl rounded-[--radius] bg-white/10 [--radius:theme(borderRadius.2xl)]"
      >
        <div
          className={`w-full h-full bg-black/${
            item.content ? 40 : 10
          } absolute z-10`}
        />
        <div className="relative aspect-video h-full w-80 overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:w-96 md:w-[28rem]">
          {/* image */}
          <Image
            alt=""
            fill
            src={item.image}
            blurDataURL={item.image.blurDataURL}
            placeholder="blur"
            priority
            className="absolute h-full w-full object-cover"
          />
          {/* title & content */}
          {item.content ? (
            showTitle ? (
              <div className="flex flex-col w-full h-full">
                <h3 className="z-10 tracking-wide text-xl font-semibold text-yellow-400 mx-auto mt-5">
                  {item.title}
                </h3>
                <AnimatedDiv
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  animate={{
                    opacity: hovered ? 1 : 0,
                    y: hovered ? 0 : 20,
                  }}
                  className="z-10 max-w-xs mx-auto"
                >
                  <p className="text-yellow-100 mt-5 text-center">
                    {item.content}
                  </p>
                </AnimatedDiv>
              </div>
            ) : (
              <AnimatedDiv
                initial={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 1,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="font-semibold tracking-wide text-xl text-yellow-300 mx-auto max-w-xs mt-5">
                  {item.content}
                </p>
              </AnimatedDiv>
            )
          ) : showTitle ? (
            <AnimatedDiv
              initial={{ y: 0 }}
              transition={{
                duration: 1,
              }}
              whileHover={{ y: -30 }}
              className="absolute inset-0 z-50 flex flex-col justify-end"
            >
              <div className="flex h-1/3 items-center justify-center">
                <h3 className="font-heading tracking-wide text-yellow-500 font-semibold">
                  {item.title}
                </h3>
              </div>
            </AnimatedDiv>
          ) : null}
        </div>
      </SpotlightCard>
    </div>
  );
}
