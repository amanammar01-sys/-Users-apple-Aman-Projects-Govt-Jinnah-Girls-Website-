"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { FacultyMember } from "@/data/faculty";
import FacultyCard from "./FacultyCard";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

type FilterType = "all" | "teaching" | "non-teaching";

interface FacultySectionProps {
  staff: FacultyMember[];
}

export default function FacultySection({ staff }: FacultySectionProps) {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return staff.filter((member) => {
      const matchesType = typeFilter === "all" || member.type === typeFilter;
      const matchesQuery =
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.designation.toLowerCase().includes(q) ||
        member.department.toLowerCase().includes(q) ||
        (member.qualification?.toLowerCase().includes(q) ?? false);
      return matchesType && matchesQuery;
    });
  }, [query, typeFilter, staff]);

  return (
    <section id="faculty" className="section-padding bg-gray-50">
      <div className="site-container">
        <SectionHeading
          large
          label="Our Team"
          title="Dedicated Educators Behind Every Success"
          description="Meet our experienced faculty and professional staff — committed to guiding students with knowledge, mentorship, and a passion for excellence."
        />

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search by name, department, or qualification..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/10"
            />
          </div>
          <div className="flex gap-2">
            {(["all", "teaching", "non-teaching"] as FilterType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTypeFilter(type)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  typeFilter === type
                    ? "bg-royal text-white"
                    : "bg-white text-navy-600 shadow-sm hover:bg-royal-50"
                }`}
              >
                {type === "all" ? "All" : type === "teaching" ? "Teaching" : "Non-Teaching"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 9).map((member, i) => (
            <FadeIn key={member.name + member.designation} delay={i * 0.04}>
              <FacultyCard member={member} />
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-gray-500">No staff members match your search.</p>
        )}

        {filtered.length > 9 && (
          <p className="mt-8 text-center text-sm text-gray-500">
            Showing 9 of {filtered.length} members.{" "}
            <a href="/faculty" className="font-semibold text-royal hover:underline">
              View all faculty
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
