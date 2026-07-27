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
          large ? "px-3 py-1 text-[10px] sm:px-5 sm:py-2 sm:text-sm" : "px-2.5 py-0.5 text-[9px] sm:px-4 sm:py-1.5 sm:text-xs"
        } ${
          light ? "bg-white/10 text-amber-300" : "bg-royal-50 text-royal"
        }`}
      >
        {label}
      </span>
      <h2
        className={`mt-2.5 font-bold tracking-tight sm:mt-4 ${
          large ? "text-xl sm:text-4xl lg:text-5xl" : "text-lg sm:text-3xl lg:text-4xl"
        } ${light ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:mt-4 sm:text-base ${
            large ? "sm:text-lg lg:text-xl" : ""
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
