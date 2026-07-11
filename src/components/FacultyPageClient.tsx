"use client";

import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import PageHero from "@/components/PageHero";
import FacultyCard from "@/components/FacultyCard";
import type { FacultyMember } from "@/data/faculty";

type StaffType = "all" | "teaching" | "non-teaching";

interface FacultyPageClientProps {
  staff: FacultyMember[];
}

export default function FacultyPageClient({ staff }: FacultyPageClientProps) {
  const [search, setSearch] = useState("");
  const [staffType, setStaffType] = useState<StaffType>("all");
  const [department, setDepartment] = useState("all");
  const [designationFilter, setDesignationFilter] = useState("all");

  const departments = useMemo(() => {
    const deps = new Set(staff.map((s) => s.department));
    return ["all", ...Array.from(deps).sort()];
  }, [staff]);

  const designations = useMemo(() => {
    const des = new Set(staff.map((s) => s.designation));
    return ["all", ...Array.from(des).sort()];
  }, [staff]);

  const filtered = useMemo(() => {
    return staff.filter((member) => {
      const matchesSearch =
        search === "" ||
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.department.toLowerCase().includes(search.toLowerCase()) ||
        member.designation.toLowerCase().includes(search.toLowerCase());

      const matchesType = staffType === "all" || member.type === staffType;
      const matchesDept = department === "all" || member.department === department;
      const matchesDesig =
        designationFilter === "all" || member.designation === designationFilter;

      return matchesSearch && matchesType && matchesDept && matchesDesig;
    });
  }, [staff, search, staffType, department, designationFilter]);

  const teachingCount = filtered.filter((m) => m.type === "teaching").length;
  const nonTeachingCount = filtered.filter((m) => m.type === "non-teaching").length;

  return (
    <>
      <PageHero
        title="Faculty & Staff Directory"
        subtitle={`Meet the dedicated team behind our institution's excellence — ${staff.filter((m) => m.type === "teaching").length} teaching and ${staff.filter((m) => m.type === "non-teaching").length} non-teaching staff members.`}
        breadcrumb="Our People"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="card-premium mb-8 p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-100"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <select
                  value={staffType}
                  onChange={(e) => setStaffType(e.target.value as StaffType)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-100"
                >
                  <option value="all">All Staff</option>
                  <option value="teaching">Teaching Staff</option>
                  <option value="non-teaching">Non-Teaching Staff</option>
                </select>
              </div>

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-100"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>
                    {d === "all" ? "All Departments" : d}
                  </option>
                ))}
              </select>

              <select
                value={designationFilter}
                onChange={(e) => setDesignationFilter(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-navy-400 focus:bg-white focus:ring-2 focus:ring-navy-100"
              >
                {designations.map((d) => (
                  <option key={d} value={d}>
                    {d === "all" ? "All Designations" : d}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span>
                Showing <strong className="text-navy-900">{filtered.length}</strong> members
              </span>
              <span className="text-slate-300">|</span>
              <span>{teachingCount} Teaching</span>
              <span className="text-slate-300">|</span>
              <span>{nonTeachingCount} Non-Teaching</span>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((member) => (
                <FacultyCard key={`${member.name}-${member.designation}`} member={member} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-slate-500">No staff members found matching your criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setStaffType("all");
                  setDepartment("all");
                  setDesignationFilter("all");
                }}
                className="mt-4 text-sm font-medium text-navy-700 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
