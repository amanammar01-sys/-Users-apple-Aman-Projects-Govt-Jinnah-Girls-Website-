"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Admissions" },
  { href: "/academics", label: "Academics" },
  { href: "/career-counselling", label: "Career Counselling" },
  { href: "/faculty", label: "Faculty" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-royal/5" : "border-b border-gray-100"
      }`}
    >
      <div className="flex h-[72px] w-full items-center justify-between gap-4 px-5 sm:px-6 lg:px-10">
        <Link href="/" className="mr-auto flex shrink-0 items-center gap-3">
          <Image
            src="/college-logo.jpeg"
            alt="Govt. Jinnah Graduate College logo"
            width={42}
            height={42}
            className="h-[42px] w-[42px] shrink-0 rounded-full object-cover ring-2 ring-royal/10"
            priority
          />
          <div className="min-w-0">
            <p className="whitespace-nowrap text-sm font-bold leading-tight text-navy-900 sm:text-base">
              Govt. Jinnah Graduate College for Women
            </p>
          </div>
        </Link>

        <div className="hidden shrink-0 items-center gap-1 xl:flex">
          <nav className="flex shrink-0 items-center gap-0.5">
            {navLinks.map((link, index) => (
              <Link
                key={`${link.label}-${index}`}
                href={link.href}
                className={`shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors hover:bg-royal-50 hover:text-royal ${
                  isActive(link.href) ? "text-royal" : "text-navy-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="ml-3 rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-royal-600 hover:shadow-md"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-navy-700 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-5 py-4 xl:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={`mobile-${link.label}-${i}`}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-royal-50 ${
                isActive(link.href) ? "text-royal" : "text-navy-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-full bg-royal py-2.5 text-center text-sm font-semibold text-white"
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
}
