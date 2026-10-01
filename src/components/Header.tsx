"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Ice Rink", href: "/ice-rink" },
  { name: "Custom Software", href: "/custom-software" },
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-display text-sm font-medium text-grey-300 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-green-600"
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
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-grey-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 pt-3">
              <Link
                href="/contact"
                className="block w-full rounded-full bg-green-500 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-600"
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
