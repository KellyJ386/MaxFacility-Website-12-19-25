"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Our Services",
    href: "/services",
    children: [
      { name: "RinkReports Software", href: "/ice-rink#rinkreports" },
      { name: "Ice Maintenance", href: "/services#ice-maintenance" },
      { name: "Facility Consulting", href: "/services#consulting" },
    ],
  },
  { name: "Ice Rink", href: "/ice-rink" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className="mx-auto max-w-7xl rounded-full bg-navy/95 px-4 shadow-float backdrop-blur sm:px-6"
        aria-label="Top"
      >
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Max Facility home">
            <Image
              src="/images/max-facility-logo.png"
              alt="Max Facility"
              width={1612}
              height={756}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="group relative">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 font-display text-sm font-medium text-grey-300 transition-colors hover:text-white group-focus-within:text-white"
                  >
                    {item.name}
                    <ChevronDown
                      className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden="true"
                    />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-2xl bg-navy/95 p-2 shadow-float backdrop-blur">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 font-display text-sm font-medium text-grey-300 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-display text-sm font-medium text-grey-300 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-2.5 font-display text-sm font-semibold text-navy-900 transition-colors hover:bg-green-400"
            >
              Book a Demo
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-grey-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
          <div className="space-y-1 pb-4 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-grey-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block py-2 pl-8 pr-3 text-sm font-medium text-grey-400 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-3 pt-3">
              <Link
                href="/request-demo"
                className="block w-full rounded-full bg-green-500 px-5 py-2.5 text-center text-sm font-semibold text-navy-900 hover:bg-green-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
