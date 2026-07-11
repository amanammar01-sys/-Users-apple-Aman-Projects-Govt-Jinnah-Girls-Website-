import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Intermediate",
    description: "FA/F.Sc programs with strong academic foundation.",
    href: "/academics",
  },
  {
    title: "Undergraduate",
    description: "BS programs including English and Computer Science.",
    href: "/academics",
  },
  {
    title: "Campus Life",
    description: "Sports, seminars, exhibitions, and cultural activities.",
    href: "/events",
  },
  {
    title: "Admissions",
    description: "Explore programs, timetable, notices, and upcoming events.",
    href: "/contact",
  },
];

export default function HeroBanner() {
  return (
    <section className="grid min-h-[85vh] grid-cols-1 bg-navy-900 lg:grid-cols-2">
      {/* Left panel — text on solid navy (like reference left column) */}
      <div className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:col-start-1 lg:row-start-1 lg:px-14 lg:py-16 xl:px-20">
        <div className="max-w-xl animate-fade-in">
          <span className="mb-4 block h-0.5 w-12 bg-amber-500" aria-hidden="true" />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400 sm:text-sm">
            Welcome to Govt. Jinnah Graduate College
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Empowering Women
            <br />
            Through Education
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-300 sm:text-base">
            A premier government institution for women&apos;s higher education in
            Mozang, Lahore — shaping scholars and leaders since 1990.
          </p>
        </div>
      </div>

      {/* Right panel — campus photo, full bleed (like reference photo column) */}
      <div className="relative min-h-[42vh] lg:col-start-2 lg:row-start-1 lg:min-h-full">
        <Image
          src="/images/page3_img1.jpeg"
          alt="Govt. Jinnah Graduate College campus"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/20 to-transparent lg:from-navy-900/60 lg:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent lg:hidden" />
      </div>

      {/* Bottom feature bar — full width, spans both columns */}
      <div className="col-span-full border-t border-white/10 bg-navy-950 lg:col-span-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              href={feature.href}
              className={[
                "group px-6 py-7 transition-colors hover:bg-white/5 sm:px-8 sm:py-8",
                index > 0 && "border-t border-white/10 sm:border-t-0",
                index >= 2 && "sm:border-t sm:border-white/10 lg:border-t-0",
                index % 2 === 1 && "sm:border-l sm:border-white/10",
                index > 0 && "lg:border-l lg:border-white/10",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className="mb-4 block h-px w-8 bg-amber-500 transition-all duration-300 group-hover:w-12"
                aria-hidden="true"
              />
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                {feature.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
