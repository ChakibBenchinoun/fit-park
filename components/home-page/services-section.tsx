import { Container } from "../container";
import { Carousel } from "../carousel";

import about3 from "public/about3.jpg";
import about4 from "public/about4.jpg";
import about2 from "public/about2.jpg";
import classes from "public/classes.jpg";

export const items = [
  {
    title: "Abney Funeral Services",
    image: about2,
    content:
      "Lorem Lor emLor emLor emLor emLor emLore mLore mLore mLore mLore mLorem Lore emLor emLore mLore mLore mLore mLore mLorem Lorem",
  },
  {
    title: "Ardeen Group",
    image: about3,
    content:
      "Lorem Lor emLor emLor emLor emLor emLore mLore mLore mLore mLore mLorem Lore emLor emLore mLore mLore mLore mLore mLorem Lorem",
  },
  {
    title: "Boutique Ennasr",
    image: about4,
    content:
      "Lorem Lor emLor emLor emLor emLor emLore mLore mLore mLore mLore mLorem Lore emLor emLore mLore mLore mLore mLore mLorem Lorem",
  },
  {
    title: "The Idea Road",
    image: classes,
    content:
      "Lorem Lor emLor emLor emLor emLor emLore mLore mLore mLore mLore mLorem Lore emLor emLore mLore mLore mLore mLore mLorem Lorem",
  },
];

export function ServicesSection() {
  return (
    <div className="pb-64 pt-52 flex-col justify-center items-center">
      <Container className="mx-auto max-w-4xl">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center tracking-tight text-yellow-600 drop-shadow-xl">
          We Offer Exclusive Services For Build Health
        </h2>
        <p className="mt-6 text-sm lg:text-base xl:text-lg text-center text-gray-900">
          At EliteGYM, we're more than just a fitness facility; we're a
          community dedicated to helping you achieve your health and fitness
          goals. With state-of-the-art equipment, experienced trainers, and a
          welcoming atmosphere, we're committed to providing you with the tools
          and support you need to succeed on your fitness journey.
        </p>
      </Container>
      <Carousel items={items} />
    </div>
  );
}
