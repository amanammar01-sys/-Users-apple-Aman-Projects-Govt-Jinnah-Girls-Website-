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
    <section className="relative w-full max-w-[100vw] overflow-hidden pb-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full bg-navy-900"
      >
        {/* Phone / tablet banner */}
        <div className="relative aspect-[16/10] w-full sm:aspect-[2/1] lg:hidden">
          <Image
            src="/images/banner1.png"
            alt="Govt. Jinnah Graduate College for Women campus banner"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Desktop banner — full image, no crop */}
        <div className="relative hidden w-full lg:block">
          <Image
            src="/images/banner1.png"
            alt="Govt. Jinnah Graduate College for Women campus banner"
            width={1625}
            height={968}
            className="h-auto w-full object-contain"
            priority
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-navy-950/85 via-navy-900/65 to-transparent" />
        </div>

        {/* Copy: stacked under image on mobile; overlay on desktop */}
        <div className="relative z-10 bg-navy-900 px-4 py-7 sm:px-6 sm:py-9 lg:absolute lg:inset-0 lg:flex lg:items-center lg:bg-transparent lg:px-0 lg:py-0">
          <div className="w-full max-w-xl lg:max-w-[560px] lg:pl-10 lg:pr-6 xl:pl-16">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-3 inline-flex w-fit items-center rounded-full border border-amber-400/50 bg-navy-800/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200 sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs"
            >
              Established in 1990
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-[1.65rem] font-bold leading-[1.2] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]"
            >
              <span className="block">Empowering Women</span>
              <span className="mt-1 block">Through Excellence in Education</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-3 text-sm font-medium leading-relaxed text-white/90 sm:mt-4 sm:text-base md:text-lg"
            >
              Govt. Jinnah Graduate College for Women
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-5 flex w-full flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-navy-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 sm:w-auto sm:px-6"
              >
                Admissions 2026-27
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25 sm:w-auto sm:px-6"
              >
                Explore Campus
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="relative bg-slate-50 pb-8 pt-4 sm:pb-16 sm:pt-2 lg:pb-20">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="lg:-mt-16"
          >
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.07, duration: 0.45 }}
                  className="flex flex-col items-center rounded-xl border border-gray-200/90 bg-white px-2.5 py-4 text-center shadow-card sm:rounded-2xl sm:px-5 sm:py-9"
                >
                  <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-royal text-white shadow-md shadow-royal/25 sm:mb-5 sm:h-16 sm:w-16">
                    <stat.icon className="h-5 w-5 sm:h-8 sm:w-8" strokeWidth={1.75} />
                  </div>
                  <p className="text-xl font-bold leading-none text-royal sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-bold text-navy-900 sm:mt-3 sm:text-base">
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
