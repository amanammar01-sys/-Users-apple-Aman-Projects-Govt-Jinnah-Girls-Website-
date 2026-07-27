import {
  BookOpen,
  PenLine,
  Monitor,
  Palette,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import type { Program } from "@/data/programs";

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  pen: PenLine,
  monitor: Monitor,
  palette: Palette,
  flask: FlaskConical,
};

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const Icon = iconMap[program.icon] ?? BookOpen;

  return (
    <article className="group flex h-full min-h-0 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-royal/20 hover:shadow-card-hover sm:min-h-[380px] sm:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal transition-colors group-hover:bg-royal group-hover:text-white sm:mb-5 sm:h-14 sm:w-14">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>

      <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 sm:text-sm">
        {program.level}
      </span>
      <h3 className="mt-1 text-base font-bold text-navy-900 sm:text-xl">{program.title}</h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600 sm:mt-4 sm:text-base">
        {program.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {program.highlights.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-navy-600 sm:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-5 border-t border-gray-100 pt-5 text-sm font-medium text-gray-500">
        Duration: {program.duration}
      </p>
    </article>
  );
}
