"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, GraduationCap, Users, BookOpen, CalendarDays } from "lucide-react";
import { facultyStats } from "@/data/faculty";

const slides = [
  {
    src: "/images/bannertop.jpeg",
    alt: "Govt. Jinnah Graduate College campus — Science Block",
  },
  {
    src: "/images/banner2.jpeg",
    alt: "Govt. Jinnah Graduate College campus — College road and grounds",
  },
];

const stats = [
  { label: "Students", value: facultyStats.students.toLocaleString(), icon: Users, hint: "Enrolled learners" },
  { label: "Programs", value: String(facultyStats.programs), icon: BookOpen, hint: "Degree pathways" },
  { label: "Faculty", value: String(facultyStats.faculty), icon: GraduationCap, hint: "Expert educators" },
  { label: "Events", value: String(facultyStats.events), icon: CalendarDays, hint: "Campus activities" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full max-w-[100vw] overflow-hidden pb-0">
      <div className="relative w-full overflow-hidden bg-navy-950">
        {/* Slider */}
        <div className="relative aspect-[16/10] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                className="object-cover object-center"
                priority={current === 0}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark scrim */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-900/20 lg:w-[62%] lg:to-transparent" />

          {/* Overlay text */}
          <div className="absolute inset-0 z-10 flex items-center justify-start px-4 py-10 sm:px-6 lg:px-0">
            <div className="w-full max-w-xl text-left lg:max-w-[560px] lg:pl-10 lg:pr-6 xl:pl-16">
              <span className="mb-3 inline-flex w-fit items-center rounded-full border border-amber-400/50 bg-navy-900/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-200 backdrop-blur-sm sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs">
                Established in 1990
              </span>

              <h1 className="text-left text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.2]">
                <span className="block">Empowering Women</span>
                <span className="mt-1 block">Through Excellence in Education</span>
              </h1>

              <p className="mt-3 text-left text-sm font-medium leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] sm:mt-4 sm:text-lg md:text-xl">
                Govt. Jinnah Graduate College (W), Mozang Lahore
              </p>

              <div className="mt-6 flex flex-wrap justify-start gap-3 sm:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-xs font-semibold text-navy-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:shadow-xl sm:px-6 sm:py-3 sm:text-sm"
                >
                  Admissions 2026-27
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all hover:bg-white/30 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Explore Campus
                </Link>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-amber-400" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative bg-slate-50 pb-8 pt-2 sm:pb-16 lg:pb-20">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="-mt-6 sm:-mt-12 lg:-mt-16"
          >
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.07, duration: 0.45 }}
                  className="flex flex-col items-center rounded-xl border border-gray-200/90 bg-white px-3 py-5 text-center shadow-card sm:rounded-2xl sm:px-5 sm:py-9"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-royal text-white shadow-md shadow-royal/25 sm:mb-5 sm:h-16 sm:w-16">
                    <stat.icon className="h-5 w-5 sm:h-8 sm:w-8" strokeWidth={1.75} />
                  </div>
                  <p className="text-xl font-bold leading-none text-royal sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[10px] font-bold text-navy-900 sm:mt-3 sm:text-base">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 hidden text-xs text-gray-500 sm:mt-1 sm:block sm:text-sm">
                    {stat.hint}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
