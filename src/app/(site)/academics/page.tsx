import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Academic programs at Govt. Jinnah Graduate College for Women — Intermediate and ADP programs with a 2-year semester system.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academics"
        subtitle="Rigorous programs designed to build strong foundations and prepare students for higher achievement."
        breadcrumb="Programs"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-gray-200 bg-white p-5 sm:p-8">
              <span className="block h-0.5 w-10 bg-amber-500" />
              <h2 className="mt-4 font-display text-xl font-bold text-navy-900 sm:text-2xl">
                Intermediate Programs
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                Intermediate F.A/F.Sc programs with multiple study streams to build
                a strong academic foundation.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-navy-700">
                <li className="border-l-2 border-amber-500 pl-4">Intermediate FA/FSC</li>
                <li className="border-l-2 border-amber-500 pl-4">ICS</li>
                <li className="border-l-2 border-amber-500 pl-4">Icom</li>
                <li className="border-l-2 border-amber-500 pl-4">General Science</li>
              </ul>
            </div>

            <div className="border border-gray-200 bg-white p-5 sm:p-8">
              <span className="block h-0.5 w-10 bg-amber-500" />
              <h2 className="mt-4 font-display text-xl font-bold text-navy-900 sm:text-2xl">
                Degree & Professional Programs
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                BS, B.Ed, and ADP programs designed for advanced academic and
                professional development.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-navy-700">
                {aboutContent.programs.map((p) => (
                  <li key={p} className="border-l-2 border-amber-500 pl-4">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border border-gray-200 bg-gray-50 p-5 text-center sm:p-8">
            <h3 className="font-display text-lg font-bold text-navy-900 sm:text-xl">
              Faculty & Academic Support
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Our 47-member teaching faculty brings expertise across sciences,
              humanities, and professional disciplines.
            </p>
            <Link href="/faculty" className="btn-primary mt-6">
              View Faculty Directory
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
