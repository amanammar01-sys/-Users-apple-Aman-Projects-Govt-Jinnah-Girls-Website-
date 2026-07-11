import type { Metadata } from "next";
import {
  Sun,
  Lightbulb,
  Building2,
  Monitor,
  Share2,
  GraduationCap,
  Activity,
  Award,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { categoryLabels } from "@/data/news";
import { getNewsContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Achievements",
  description:
    "Latest campus news, infrastructure upgrades, and academic achievements at GJGCW Mozang.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sun: Sun,
  lightbulb: Lightbulb,
  building: Building2,
  monitor: Monitor,
  share: Share2,
  graduation: GraduationCap,
  activity: Activity,
  award: Award,
};

const categoryBadgeColors: Record<string, string> = {
  infrastructure: "bg-gray-100 text-navy-800",
  academic: "bg-navy-100 text-navy-800",
  digital: "bg-navy-50 text-navy-700",
  campus: "bg-amber-50 text-amber-800",
};

export default async function NewsPage() {
  const newsItems = await getNewsContent();

  return (
    <>
      <PageHero
        title="News & Achievements"
        subtitle="Campus updates and milestones from Jinnah Newsletter — Issue 2025."
        breadcrumb="Campus Updates"
      />

      <section className="section-padding">
        <div className="container-wide">
          {/* Featured banner */}
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-navy-700 to-navy-900 p-8 text-white shadow-md sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-navy-200">
              Newsletter 2025
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              A Year of Transformation
            </h2>
            <p className="mt-3 max-w-2xl text-navy-100">
              From solar energy and LED lighting to new BS programs and a modern jogging
              track — 2025 has been a landmark year for campus development and academic
              growth at GJGCW Mozang.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {newsItems.map((item, index) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <article
                  key={item.id}
                  className="card-premium group p-6 sm:p-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryBadgeColors[item.category]}`}
                        >
                          {categoryLabels[item.category]}
                        </span>
                        <span className="text-xs font-medium text-slate-400">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-navy-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
