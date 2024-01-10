"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import DarkLogo from "../../public/dark-Logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "../buttons";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Pricing", href: "/pricing" },
];
export function Navigation() {
  const pathname = usePathname();
  const isPricing = pathname === "/pricing";

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="from-white via-black to-white shadow-2xl shadow-black relative"
      >
        <div className="backdrop-blur-sm bg-black/40 absolute w-full h-full -z-50" />
        <Container className="flex items-center justify-between py-4">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Company Name</span>
            <Image
              className="h-16 md:h-20 w-auto"
              src={DarkLogo}
              alt=""
              width={500}
              height={500}
            />
          </a>
          <div>
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="relative w-fit h-full group py-2 outline-none"
                  >
                    <div className="relative z-20">
                      <span className="px-3 py-2 text-sm rounded-full bg-yellow-400 group-hover:text-yellow-700 text-yellow-800 uppercase font-bold tracking-wide group-hover:bg-yellow-300 border-b-2 border-l-2 border-yellow-200 transition duration-200">
                        Menu
                      </span>
                    </div>
                    <div className="absolute z-10 bg-yellow-700 w-full h-full -translate-x-1 translate-y-1.5 group-hover:rotate-3 rounded-full inset-0 transition duration-200 group-hover:scale-200 border-b border-l border-yellow-200" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="absolute -right-14 flex w-60 flex-col bg-yellow-100 px-0 py-4 lg:hidden"
                  sideOffset={35}
                >
                  {navigation.map((item) => (
                    <DropdownMenuItem key={item.name} className="w-full">
                      <Link
                        href={item.href}
                        key={item.name}
                        className="mx-1 mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-3 px-4 transition-all rounded-lg"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <PrimaryButton
                    size="lg"
                    label="Contact"
                    href="/contact"
                    className="mx-auto mt-4"
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    isPricing ? "text-yellow-100 text-base" : "text-yellow-400",
                    "text-sm tracking-wider font-bold leading-6 uppercase"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <PrimaryButton
            size="lg"
            label="Contact"
            href="/contact"
            className="hidden lg:block"
          />
        </Container>
      </nav>
    </header>
  );
}
