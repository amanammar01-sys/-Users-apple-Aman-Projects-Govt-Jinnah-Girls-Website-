import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  image?: string;
  date?: string;
  className?: string;
}

export default function PostCard({
  title,
  description,
  href,
  icon: Icon,
  image,
  date,
  className = "",
}: PostCardProps) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 block h-0.5 w-8 bg-amber-500 transition-all duration-300 group-hover:w-12" />

        {date && (
          <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
            {date}
          </span>
        )}

        {Icon ? (
          <div className="mb-3 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-amber-400">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="pt-1.5 font-semibold leading-snug text-navy-900">{title}</h3>
          </div>
        ) : (
          <h3 className="mb-3 font-semibold leading-snug text-navy-900 group-hover:text-navy-700">
            {title}
          </h3>
        )}

        <p className="mt-auto text-sm leading-relaxed text-gray-500">{description}</p>
      </div>
    </Link>
  );
}
