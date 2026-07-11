interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  large?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
  large = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <span
        className={`inline-block rounded-full font-semibold uppercase tracking-widest ${
          large ? "px-5 py-2 text-sm" : "px-4 py-1.5 text-xs"
        } ${
          light ? "bg-white/10 text-amber-300" : "bg-royal-50 text-royal"
        }`}
      >
        {label}
      </span>
      <h2
        className={`mt-4 font-bold tracking-tight ${
          large ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
        } ${light ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl leading-relaxed ${
            large ? "text-lg sm:text-xl" : "text-base"
          } ${align === "center" ? "" : "mx-0"} ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
