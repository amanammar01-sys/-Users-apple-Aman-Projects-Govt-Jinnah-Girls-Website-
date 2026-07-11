import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { newsItems, categoryLabels } from "@/data/news";

export const metadata: Metadata = {
  title: "Notices",
  description: "Official notices, announcements, and campus updates from GJGCW Mozang.",
};

export default function NoticesPage() {
  return (
    <>
      <PageHero
        title="Notices"
        subtitle="Official announcements, campus updates, and important information for students and parents."
        breadcrumb="Announcements"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-4">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="border border-gray-200 bg-white p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {item.year}
                  </span>
                  <span className="text-xs font-medium text-navy-500">
                    {categoryLabels[item.category]}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-navy-900">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-navy-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
