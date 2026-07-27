import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  BookOpen,
  Building2,
  ArrowRight,
  Users,
  Award,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { aboutContent } from "@/data/about";
import { collegeInfo } from "@/data/history";
import { principalMessage } from "@/data/principal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Govt. Jinnah Graduate College for Women, Mozang Lahore — our vision, mission, programs, and facilities.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Discover who we are, what we stand for, and how we empower women through education."
        breadcrumb="Our Institution"
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-navy-600">
                Who We Are
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                A Legacy of Excellence Since 1990
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {aboutContent.intro}
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Located on the green surroundings of a hill on Fatima Jinnah Road,
                our campus spans 46 kanals with lush lawns, well-maintained premises,
                and a serene atmosphere that inspires learning. We are proud to be
                recognized among the best government colleges in Lahore.
              </p>
              <Link href="/history" className="btn-primary mt-8">
                Read Full History
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative pb-8 sm:pb-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md sm:rounded-3xl">
                <Image
                  src="/images/page3_img1.jpeg"
                  alt="College campus activity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-3 rounded-xl bg-navy-700 p-4 text-white shadow-md sm:left-0 sm:rounded-2xl sm:p-6">
                <p className="font-display text-2xl font-bold sm:text-3xl">35+</p>
                <p className="text-sm text-navy-200">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-premium p-8">
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-slate-600">{aboutContent.vision}</p>
            </div>
            <div className="card-premium p-8">
              <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-slate-600">{aboutContent.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-navy-900">Our Core Values</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              The principles that guide everything we do at {collegeInfo.shortName}.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((value) => (
              <div key={value.title} className="card-premium p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-navy-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Facilities */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-purple-50 p-3 text-purple-700">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900">
                Academic Programs
              </h3>
              <ul className="mt-6 space-y-3">
                {aboutContent.programs.map((program) => (
                  <li
                    key={program}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-700"
                  >
                    <Award className="h-4 w-4 shrink-0 text-navy-600" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-amber-50 p-3 text-amber-700">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy-900">
                Campus Facilities
              </h3>
              <ul className="mt-6 space-y-3">
                {aboutContent.facilities.map((facility) => (
                  <li
                    key={facility}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-700"
                  >
                    <Building2 className="h-4 w-4 shrink-0 text-navy-600" />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal highlight */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-900 shadow-md">
            <div className="grid lg:grid-cols-5">
              <div className="relative aspect-square lg:aspect-auto lg:col-span-2">
                <Image
                  src={principalMessage.photo}
                  alt={principalMessage.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
                <div className="mb-2 flex items-center gap-2 text-navy-300">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Leadership
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {principalMessage.name}
                </h3>
                <p className="mt-1 text-navy-200">{principalMessage.title}</p>
                <p className="mt-4 line-clamp-4 leading-relaxed text-slate-300">
                  {principalMessage.welcomeMessage.split("\n\n")[0]}
                </p>
                <Link
                  href="/principal"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
                >
                  Read Full Message
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
