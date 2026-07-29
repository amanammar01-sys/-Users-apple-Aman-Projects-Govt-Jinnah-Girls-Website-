import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { collegeInfo } from "@/data/history";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/career-counselling", label: "Career Counselling" },
  { href: "/faculty", label: "Faculty" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/magazine", label: "Magazine" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="site-container section-padding !py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/college-logo.jpeg"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-royal/30"
              />
              <div>
                <p className="text-sm font-bold text-white">
                  Govt. Jinnah Graduate College
                </p>
                <p className="text-xs text-gray-400">for Women · Mozang Lahore</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A premier government institution empowering women through quality education since 1990.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-colors hover:bg-royal hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>{collegeInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-amber-500" />
                <a href={`tel:${collegeInfo.phone}`} className="hover:text-white">
                  {collegeInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-amber-500" />
                <a href={`mailto:${collegeInfo.email}`} className="hover:text-white">
                  {collegeInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Office Hours
            </h3>
            <p className="text-sm text-gray-400">
              Monday – Friday
              <br />
              8:00 AM – 3:00 PM
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-royal-600"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {collegeInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
