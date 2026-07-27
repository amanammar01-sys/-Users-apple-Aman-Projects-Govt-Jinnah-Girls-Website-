"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, BookOpen, CalendarDays } from "lucide-react";
import { facultyStats } from "@/data/faculty";

const stats = [
  {
    label: "Students",
    value: facultyStats.students.toLocaleString(),
    icon: Users,
    hint: "Enrolled learners",
  },
  {
    label: "Programs",
    value: String(facultyStats.programs),
    icon: BookOpen,
    hint: "Degree pathways",
  },
  {
    label: "Faculty",
    value: String(facultyStats.faculty),
    icon: GraduationCap,
    hint: "Expert educators",
  },
  {
    label: "Events",
    value: String(facultyStats.events),
    icon: CalendarDays,
    hint: "Campus activities",
  },
];

export default function Hero() {
  return (
    <section className="relative pb-0">
      {/* Full-width banner — full image, no crop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full overflow-hidden bg-navy-950"
      >
        <Image
          src="/images/banner1.png"
          alt="Govt. Jinnah Graduate College for Women campus banner"
          width={1625}
          height={968}
          className="h-auto w-full object-contain"
          priority
          sizes="100vw"
        />
        {/* Dark scrim on the left for readable text */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-900/15 sm:via-navy-900/55 lg:w-[58%] lg:from-navy-950/85 lg:via-navy-900/65 lg:to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent sm:hidden" />

        <div className="absolute inset-0 z-10 flex items-center justify-start">
          <div className="w-full max-w-xl px-5 text-left sm:px-8 lg:max-w-[560px] lg:pl-10 lg:pr-6 xl:pl-16">
            <div className="rounded-2xl bg-navy-950/35 px-5 py-8 text-left backdrop-blur-[2px] sm:px-7 sm:py-10 lg:bg-transparent lg:px-0 lg:py-12 lg:backdrop-blur-none">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mb-4 inline-flex w-fit items-center self-start rounded-full border border-amber-400/50 bg-navy-900/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-200 backdrop-blur-sm"
              >
                Established in 1990
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="text-left text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]"
              >
                <span className="block whitespace-nowrap">Empowering Women</span>
                <span className="mt-1 block sm:whitespace-nowrap">
                  Through Excellence in Education
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mt-4 text-left text-base font-medium leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] sm:text-lg"
              >
                Govt. Jinnah Graduate College for Women
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-7 flex flex-wrap justify-start gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:shadow-xl"
                >
                  Admissions 2026-27
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/20 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  Explore Campus
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats — clean, high-contrast cards on solid background */}
      <div className="relative bg-slate-50 pb-14 pt-2 sm:pb-16 lg:pb-20">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="-mt-12 sm:-mt-14 lg:-mt-16"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.07, duration: 0.45 }}
                  className="flex flex-col items-center rounded-2xl border border-gray-200/90 bg-white px-4 py-7 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:px-5 sm:py-9"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-royal text-white shadow-md shadow-royal/25 sm:mb-5 sm:h-16 sm:w-16">
                    <stat.icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
                  </div>
                  <p className="text-3xl font-bold leading-none text-royal sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-bold text-navy-900 sm:text-base">{stat.label}</p>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">{stat.hint}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
