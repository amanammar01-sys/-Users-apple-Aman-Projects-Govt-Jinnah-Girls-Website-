import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="bg-white pt-8 sm:pt-10">
      <div className="site-container">
        <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[380px] lg:h-[430px]">
          {/* Campus background — not the logo */}
          <Image
            src="/images/page3_img1.jpeg"
            alt="Students at Govt. Jinnah Graduate College campus"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1100px) 100vw, 1100px"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-navy-900/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/40 to-transparent" />

          {/* Text content — left aligned */}
          <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-10 lg:px-12">
            <h1 className="max-w-lg text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Govt. Jinnah
              <br />
              Graduate College
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-200 sm:text-base">
              Empowering women through education, confidence, and opportunity.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-royal px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-royal-600"
              >
                Admissions 2026-27
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border border-white/70 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Explore Campus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
