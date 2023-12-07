import Image from "next/image";

import logo from "../../public/dark-Logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Container } from "../container";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/" },
  { name: "Classes", href: "/" },
  { name: "Pricing", href: "/" },
];
export function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="border-b border-yellow-500">
        <Container className="flex items-center justify-between py-3">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Company Name</span>
            <Image
              className="h-20 w-auto"
              src={logo}
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
                  className="text-sm tracking-wider font-bold leading-6 text-yellow-400 uppercase"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <a
            href="/"
            className="rounded-full bg-gray-500 px-5 py-3 text-yellow-400 uppercase font-bold shadow-sm hover:bg-gray-600 border border-yellow-500 hover:scale-105 transition"
          >
            Contact
          </a>
        </Container>
      </nav>
    </header>
  );
}
