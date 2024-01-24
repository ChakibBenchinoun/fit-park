import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "../components/layout/footer";
import { Navigation } from "../components/layout/navigation";
import { cn } from "../lib/utils";
import ScrollToTopButton from "@/components/layout/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIT Park",
  description: "A NEW ART OF FITNESS IN YOUR TOWN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full w-full scroll-smooth antialiased overflow-x-hidden"
    >
      <body className={cn(inter.className, "relative")}>
        <Navigation />
        <ScrollToTopButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
