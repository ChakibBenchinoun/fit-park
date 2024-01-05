"use client";

import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { LuCheck } from "react-icons/lu";
import Image from "next/image";
import YellowBackground from "public/yellow-background.jpg";
import React from "react";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";

const frequencies = [
  { value: "annually", label: "Annually", priceSuffix: "/year" },
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
];
const tiers = [
  {
    name: "Basic Membership",
    id: "tier-basic",
    href: "#",
    price: { monthly: "$15", annually: "$144" },
    description:
      "Access to our state-of-the-art gym facilities, including cardio equipment, free weights, and basic fitness classes.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Ultimate Membership",
    id: "tier-ultimate",
    href: "#",
    price: { monthly: "$30", annually: "$288" },
    description:
      "Elevate your fitness journey with our comprehensive package, including all gym facilities, unlimited access to group fitness classes, personal training sessions, and exclusive access to online fitness coaching.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Premium Membership",
    id: "tier-premium",
    href: "#",
    price: { monthly: "$60", annually: "$576" },
    description:
      "Enjoy all the benefits of our Basic Fitness Membership plus access to premium services, such as group fitness classes, nutrition counseling, and recovery center amenities.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  const [frequency, setFrequency] = React.useState(frequencies[0]);

  return (
    <div className="relative">
      <Image
        src={YellowBackground}
        alt=""
        className="absolute -z-50 top-0 h-full object-cover"
      />
      <Container className="py-32 sm:py-44 lg:py-64">
        <div className="bg-yellow-900/70 border-yellow-900 border-4 shadow-2xl shadow-white rounded-2xl py-20 max-w-5xl mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold leading-7 text-yellow-50">
              Pricing
            </h2>
            <p className="mt-5 text-4xl font-bold tracking-tight text-yellow-200 sm:text-5xl">
              Pricing plans for teams of&nbsp;all&nbsp;sizes
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-yellow-50">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mt-28 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="relative w-fit h-full group"
          >
            <div className="relative z-20 flex">
              {frequencies.map((option, i) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    cn(
                      {
                        "rounded-l-full border-l-2": i === 0,
                        "rounded-r-full": i === 1,
                      },
                      checked
                        ? "text-yellow-800 bg-yellow-400"
                        : "text-yellow-400",
                      " hover:text-yellow-700 uppercase font-bold tracking-wide hover:bg-yellow-300 border-b-2 border-yellow-200 transition duration-200 px-4 py-3"
                    )
                  }
                >
                  {option.label}
                </RadioGroup.Option>
              ))}
            </div>
            <div className="absolute z-10 bg-yellow-700 w-full h-full scale-y-125 scale-105 group-hover:rotate-3 rounded-full inset-0 transition duration-200" />
          </RadioGroup>
        </div>
        <div className="isolate mt-16 grid grid-cols-1 gap-y-10 gap-x-10 lg:gap-x-14 mx-14 sm:mt-20 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                tier.mostPopular
                  ? "scale-110 border-4 border-red-900 bg-yellow-500"
                  : "border-2 border-red-800 bg-yellow-100/90",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={cn(
                    tier.mostPopular ? "text-yellow-50" : "text-yellow-800",
                    "text-2xl font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-yellow-600 px-3 py-2 text-sm font-semibold leading-5 text-yellow-50">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p
                className={cn(
                  "mt-4 leading-6 text-lg",
                  tier.mostPopular ? "text-yellow-100" : "text-yellow-700"
                )}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={cn(
                    "text-4xl font-bold tracking-tight",
                    tier.mostPopular ? "text-white" : "text-yellow-800"
                  )}
                >
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {frequency.priceSuffix}
                </span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={cn(
                  tier.mostPopular
                    ? "bg-yellow-800 text-yellow-300"
                    : "bg-yellow-400 text-yellow-900",
                  "mt-6 block py-2 px-3 rounded-xl text-center tracking-wider font-semibold"
                )}
              >
                Buy plan
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <LuCheck
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
