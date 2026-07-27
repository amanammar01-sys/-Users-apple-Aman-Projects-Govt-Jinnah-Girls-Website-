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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-royal/5" : "border-b border-gray-100"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between gap-3 px-4 sm:h-[72px] sm:gap-4 sm:px-6 lg:px-10">
        <Link href="/" className="mr-auto flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image
            src="/college-logo.jpeg"
            alt="Govt. Jinnah Graduate College logo"
            width={42}
            height={42}
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-royal/10 sm:h-[42px] sm:w-[42px]"
            priority
          />
          <div className="min-w-0">
            <p className="text-xs font-bold leading-snug text-navy-900 sm:text-sm md:text-base">
              <span className="sm:hidden">GJGCW Mozang</span>
              <span className="hidden sm:inline">Govt. Jinnah Graduate College for Women</span>
            </p>
          </div>
        </Link>

        <div className="hidden shrink-0 items-center gap-1 xl:flex">
          <nav className="flex shrink-0 items-center gap-0.5">
            {navLinks.map((link, index) => (
              <Link
                key={`${link.label}-${index}`}
                href={link.href}
                className={`shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium transition-colors hover:bg-royal-50 hover:text-royal 2xl:px-2.5 2xl:text-sm ${
                  isActive(link.href) ? "text-royal" : "text-navy-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-royal px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-royal-600 hover:shadow-md 2xl:ml-3 2xl:px-5 2xl:py-2.5"
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
        <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-4 xl:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={`mobile-${link.label}-${i}`}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-royal-50 ${
                isActive(link.href) ? "bg-royal-50 text-royal" : "text-navy-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-full bg-royal py-3 text-center text-sm font-semibold text-white"
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
}
