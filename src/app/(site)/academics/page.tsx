import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Clock, CheckCircle2, Users, Award } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Academic programs at Govt. Jinnah Graduate College (W), Mozang Lahore — Intermediate, BS, B.Ed and ADP programs.",
};

const intermediatePrograms = [
  {
    name: "Intermediate FA / FSC",
    desc: "Foundation program in Arts & Science streams for students pursuing higher education.",
  },
  {
    name: "ICS",
    desc: "Intermediate in Computer Science — combining mathematics, physics and computing.",
  },
  {
    name: "I.Com",
    desc: "Intermediate in Commerce — covering accounting, economics and business studies.",
  },
  {
    name: "General Science",
    desc: "Broad-based science stream covering biology, chemistry and physics fundamentals.",
  },
];

const degreePrograms = [
  {
    name: "BS English",
    duration: "4 Years",
    detail: "Comprehensive English language, literature and linguistics program.",
  },
  {
    name: "BS Computer Science",
    duration: "4 Years",
    detail: "Modern computing, programming, data structures and software engineering.",
  },
  {
    name: "BS Applied Psychology",
    duration: "4 Years",
    detail: "Human behaviour, counselling, research methods and applied psychology.",
  },
  {
    name: "B.Ed",
    duration: "2.5 Years (Semester System)",
    detail: "Professional teacher education preparing graduates for the classroom.",
  },
  {
    name: "ADP — All Science & Arts Subjects",
    duration: "2 Years (Semester System)",
    detail: "Associate Degree Program covering a wide range of science and arts disciplines.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="Discover our diverse academic programs — from Intermediate to BS, B.Ed and ADP — designed to empower every student."
        breadcrumb="Programs"
      />

      {/* Intermediate Programs */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">Level 1</p>
              <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">Intermediate Programs</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {intermediatePrograms.map((prog) => (
              <div key={prog.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-500" />
                  <h3 className="font-semibold text-navy-900">{prog.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Degree Programs */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal/10 text-royal">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-royal">Level 2</p>
              <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">BS, B.Ed & ADP Programs</h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {degreePrograms.map((prog) => (
              <div key={prog.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">
                  <Clock className="h-3 w-3" />
                  {prog.duration}
                </div>
                <h3 className="mt-3 text-base font-bold text-navy-900 sm:text-lg">{prog.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{prog.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Eligibility */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Award className="h-6 w-6 text-amber-600" />
                <h3 className="text-lg font-bold text-navy-900">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-3 text-sm text-navy-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  Matric / SSC for Intermediate programs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  Intermediate (FA/FSc) for BS and ADP programs
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  Intermediate (FA/FSc) for B.Ed program
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  Open to all female students meeting Punjab Higher Education criteria
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-bold text-navy-900">Why Choose Us</h3>
              </div>
              <ul className="space-y-3 text-sm text-navy-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  47 experienced teaching faculty members
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  Modern computer lab, science labs and library
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  Regular and second-shift options available
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  46-kanal campus in Mozang, Lahore
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Apply?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Join Govt. Jinnah Graduate College (W), Mozang Lahore — one of the most respected women&apos;s colleges in the city.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-navy-900 transition-all hover:bg-amber-400">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/faculty" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10">
              View Faculty
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
