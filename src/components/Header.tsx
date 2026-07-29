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
  { href: "/magazine", label: "Magazine" },
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
      className={`sticky top-0 z-50 w-full max-w-[100vw] bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-royal/5" : "border-b border-gray-100"
      }`}
    >
      <div className="flex h-14 w-full items-center gap-2 px-4 sm:h-16 sm:gap-3 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
        >
          <Image
            src="/college-logo.jpeg"
            alt="Govt. Jinnah Graduate College logo"
            width={40}
            height={40}
            className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-royal/10 sm:h-10 sm:w-10"
            priority
          />
          <div className="min-w-0">
            <p className="text-left text-[10px] font-bold leading-tight text-navy-900 sm:text-xs md:text-sm">
              <span className="block xl:hidden">Govt. Jinnah Graduate College (W), Mozang Lahore</span>
              <span className="hidden xl:block xl:max-w-[340px] xl:truncate xl:text-[12px] 2xl:max-w-none 2xl:whitespace-nowrap 2xl:text-[13px]">
                Govt. Jinnah Graduate College (W), Mozang Lahore
              </span>
            </p>
          </div>
        </Link>

        <div className="ml-auto hidden flex-1 items-center justify-end gap-1 xl:flex">
          <nav className="flex items-center justify-end gap-0.5">
            {navLinks.map((link, index) => (
              <Link
                key={`${link.label}-${index}`}
                href={link.href}
                className={`rounded-lg px-2 py-2 text-[13px] font-medium transition-colors hover:bg-royal-50 hover:text-royal 2xl:px-2.5 2xl:text-sm ${
                  isActive(link.href) ? "text-royal" : "text-navy-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-royal px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-royal-600 hover:shadow-md"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-navy-700 hover:bg-gray-50 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="max-h-[min(100dvh-3.5rem,100vh-3.5rem)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-3 xl:hidden">
          <div className="mb-2 border-b border-gray-100 pb-3">
            <p className="text-left text-xs font-bold leading-tight text-navy-900">
              Govt. Jinnah Graduate College (W), Mozang Lahore
            </p>
          </div>
          {navLinks.map((link, i) => (
            <Link
              key={`mobile-${link.label}-${i}`}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-royal-50 active:bg-royal-50 ${
                isActive(link.href) ? "bg-royal-50 text-royal" : "text-navy-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 mb-2 block rounded-full bg-royal py-3 text-center text-sm font-semibold text-white"
          >
            Apply Now
          </Link>
        </nav>
      )}
    </header>
  );
}
