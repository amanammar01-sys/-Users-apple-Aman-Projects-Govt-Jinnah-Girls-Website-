import { Briefcase, BookOpen } from "lucide-react";
import type { FacultyMember } from "@/data/faculty";

interface FacultyCardProps {
  member: FacultyMember;
}

export default function FacultyCard({ member }: FacultyCardProps) {
  const initials = member.name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const isPrincipal = member.designation.toLowerCase().includes("principal");

  return (
    <article
      className={`rounded-2xl border bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover ${
        isPrincipal ? "border-royal/30 ring-1 ring-royal/10" : "border-gray-100"
      }`}
    >
      <div className="mb-4 flex items-start gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
            isPrincipal ? "bg-royal text-white" : "bg-royal-50 text-royal"
          }`}
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold leading-tight text-navy-900">{member.name}</h3>
          <p className="mt-0.5 text-sm font-medium text-royal">{member.designation}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
            member.type === "teaching"
              ? "bg-royal-50 text-royal"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {member.type === "teaching" ? "Teaching" : "Staff"}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Briefcase className="h-3.5 w-3.5 shrink-0 text-gray-400" />
          <span>{member.department}</span>
        </div>
        {member.qualification && (
          <div className="flex items-start gap-2">
            <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
            <span>{member.qualification}</span>
          </div>
        )}
      </div>
    </article>
  );
}
