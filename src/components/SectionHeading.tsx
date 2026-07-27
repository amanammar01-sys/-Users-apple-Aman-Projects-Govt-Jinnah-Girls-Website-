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
    <div className={`mb-8 sm:mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <span
        className={`inline-block rounded-full font-semibold uppercase tracking-widest ${
          large ? "px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm" : "px-3 py-1 text-[10px] sm:px-4 sm:py-1.5 sm:text-xs"
        } ${
          light ? "bg-white/10 text-amber-300" : "bg-royal-50 text-royal"
        }`}
      >
        {label}
      </span>
      <h2
        className={`mt-3 font-bold tracking-tight sm:mt-4 ${
          large ? "text-2xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl lg:text-4xl"
        } ${light ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-3 max-w-2xl leading-relaxed sm:mt-4 ${
            large ? "text-base sm:text-lg lg:text-xl" : "text-sm sm:text-base"
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
