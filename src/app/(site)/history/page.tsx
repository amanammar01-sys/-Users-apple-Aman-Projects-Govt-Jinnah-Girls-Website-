import type { Metadata } from "next";
import {
  Calendar,
  Users,
  TrendingUp,
  BookOpen,
  Building2,
  Star,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { historySections } from "@/data/history";

export const metadata: Metadata = {
  title: "College History",
  description:
    "The rich history of Govt. Jinnah Graduate College for Women, Mozang Lahore — established 1990.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  users: Users,
  trending: TrendingUp,
  book: BookOpen,
  building: Building2,
  star: Star,
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="Our History"
        subtitle="Three decades of excellence in women's higher education on the green hills of Mozang, Lahore."
        breadcrumb="About the College"
      />

      <section className="section-padding">
        <div className="container-wide">
          {/* Timeline intro */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-slate-600">
              From a bold initiative by the Punjab Government in 1990 to a premier
              institution serving over 1,800 students today — discover the journey of
              Govt. Jinnah Graduate College for Women.
            </p>
          </div>

          <div className="space-y-12">
            {historySections.map((section, index) => {
              const Icon = iconMap[section.icon] || BookOpen;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={section.id}
                  className={`card-premium overflow-hidden ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-navy-50 to-white p-6 lg:w-72 lg:shrink-0 lg:flex-col lg:items-start lg:justify-center lg:border-b-0 lg:border-r">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-700 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="font-display text-xl font-bold text-navy-900">
                        {section.title}
                      </h2>
                    </div>

                    <div className="flex-1 p-6 lg:p-8">
                      <p className="leading-relaxed text-slate-600">{section.content}</p>

                      {"principals" in section && section.principals && (
                        <div className="mt-6">
                          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Principals Through the Years
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {section.principals.map((p) => (
                              <span
                                key={p}
                                className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {"stats" in section && section.stats && (
                        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                          {section.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-xl bg-navy-50 p-4 text-center"
                            >
                              <p className="text-2xl font-bold text-navy-700">
                                {stat.value}
                              </p>
                              <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {"milestones" in section && section.milestones && (
                        <div className="mt-6 space-y-3">
                          {section.milestones.map((m) => (
                            <div
                              key={m.year}
                              className="flex items-center gap-4 rounded-lg bg-slate-50 p-3"
                            >
                              <span className="shrink-0 rounded-lg bg-navy-700 px-3 py-1 text-sm font-bold text-white">
                                {m.year}
                              </span>
                              <span className="text-sm text-slate-700">{m.event}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {"mission" in section && section.mission && (
                        <blockquote className="mt-6 border-l-4 border-navy-500 bg-navy-50/50 py-3 pl-4 pr-4 italic text-slate-700">
                          &ldquo;{section.mission}&rdquo;
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
