"use client";

import { useState, useMemo } from "react";
import PageHero from "@/components/PageHero";
import EventCard from "@/components/EventCard";
import { events, categoryLabels, type EventCategory } from "@/data/events";

export default function EventsPage() {
  const [category, setCategory] = useState<EventCategory | "all">("all");

  const categories = useMemo(() => {
    const cats = new Set(events.map((e) => e.category));
    return ["all" as const, ...Array.from(cats)] as const;
  }, []);

  const filtered = useMemo(() => {
    if (category === "all") return events;
    return events.filter((e) => e.category === category);
  }, [category]);

  return (
    <>
      <PageHero
        title="Events & Activities Gallery"
        subtitle="Capturing the vibrant campus life — cultural celebrations, sports, seminars, and national observances."
        breadcrumb="Campus Life"
      />

      <section className="section-padding">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-navy-700 text-white shadow-md"
                    : "bg-white text-slate-600 shadow-card hover:bg-navy-50 hover:text-navy-700"
                }`}
              >
                {cat === "all" ? "All Events" : categoryLabels[cat as EventCategory]}
                {cat !== "all" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({events.filter((e) => e.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm text-slate-500">
            Showing {filtered.length} of {events.length} events
          </p>

          {/* Events Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
