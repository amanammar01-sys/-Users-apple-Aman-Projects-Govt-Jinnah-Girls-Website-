import Image from "next/image";
import Link from "next/link";

interface AdminBrandProps {
  subtitle?: string;
  href?: string | null;
  theme?: "default" | "light";
}

export default function AdminBrand({
  subtitle = "Content Management",
  href = "/admin",
  theme = "default",
}: AdminBrandProps) {
  const isLight = theme === "light";

  const content = (
    <div className="flex items-center gap-3">
      <Image
        src="/college-logo.jpeg"
        alt="Govt. Jinnah Graduate College logo"
        width={42}
        height={42}
        className={`h-[42px] w-[42px] shrink-0 rounded-full object-cover ring-2 ${
          isLight ? "ring-white/20" : "ring-royal/10"
        }`}
      />
      <div className="min-w-0">
        <p
          className={`truncate text-sm font-bold leading-tight sm:text-base ${
            isLight ? "text-white" : "text-navy-900"
          }`}
        >
          <span className="sm:hidden">GJGCW Admin</span>
          <span className="hidden sm:inline">Govt. Jinnah Graduate College for Women</span>
        </p>
        {subtitle && (
          <p className={`text-xs sm:text-sm ${isLight ? "text-white/60" : "text-gray-500"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="shrink-0 transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}
