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
import Link from "next/link";
import { PrimaryButton } from "../buttons";

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
        <Container className="flex items-center justify-between py-3">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Company Name</span>
            <Image
              className="h-20 w-auto"
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
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  >
                    Menu
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-4 lg:hidden">
                  {navigation.map((item) => (
                    <DropdownMenuItem key={item.name}>
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        {item.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
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
          <PrimaryButton size="lg" label="Contact" href="/contact" />
        </Container>
      </nav>
    </header>
  );
}
