import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Target,
  GraduationCap,
  Briefcase,
  MessagesSquare,
  Lightbulb,
  TrendingUp,
  Users,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Career Counselling Centre",
  description:
    "Career Counselling Centre at Govt. Jinnah Graduate College for Women, Mozang Lahore — guiding you today, empowering your tomorrow.",
};

const services = [
  {
    title: "Career Exploration",
    description: "Explore your interests, strengths and career options.",
    icon: Users,
  },
  {
    title: "Personalized Guidance",
    description: "Get expert advice tailored to your goals.",
    icon: Target,
  },
  {
    title: "Academic Planning",
    description: "Plan your academic path for future success.",
    icon: GraduationCap,
  },
  {
    title: "Skill Development",
    description: "Build skills that empower your career journey.",
    icon: Briefcase,
  },
  {
    title: "Interview & CV Support",
    description: "Prepare with confidence. Succeed with impact.",
    icon: MessagesSquare,
  },
];

const pillars = [
  {
    title: "Know Yourself, Choose Wisely.",
    description: "Understand your strengths, interests and values.",
    icon: Compass,
    accent: "Yourself",
  },
  {
    title: "Set Goals, Take Action.",
    description: "Set clear goals and take steps toward success.",
    icon: TrendingUp,
    accent: "Goals",
  },
  {
    title: "Make Smart Decisions.",
    description: "Informed choices create better futures.",
    icon: Lightbulb,
    accent: "Smart",
  },
  {
    title: "Your Future Starts Here.",
    description: "We are here to support you every step of the way.",
    icon: Heart,
    accent: "Future",
  },
];

const roomServices = [
  "Educational Counseling",
  "Career Support",
  "Psychological Counseling",
  "Health & Hygiene Counseling",
  "Socio-Economic Guidance",
  "Anti-Narcotics Awareness & Counseling",
  "Personality Development",
  "Skill Development & Use of Art",
];

export default function CareerCounsellingPage() {
  return (
    <>
      {/* Hero matching poster header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b2d5c] via-[#123a73] to-[#0b2d5c] text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="site-container relative z-10 py-10 sm:py-16 lg:py-20">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <Image
                src="/college-logo.jpeg"
                alt="Govt. Jinnah Graduate College logo"
                width={72}
                height={72}
                className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-white/30 sm:h-[72px] sm:w-[72px]"
                priority
              />
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300 sm:text-xs">
                  Student Support
                </p>
                <h1 className="mt-1.5 text-2xl font-bold tracking-tight sm:mt-2 sm:text-4xl lg:text-5xl">
                  Career Counselling Centre
                </h1>
                <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                  Govt. Jinnah Graduate College for Women, Mozang Lahore
                </p>
              </div>
            </div>

            <div className="max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm lg:p-6">
              <p className="text-lg font-bold leading-snug sm:text-xl">
                Guiding you today.{" "}
                <span className="text-orange-300">Empowering your tomorrow.</span>
              </p>
              <p className="mt-2 text-sm text-white/75">
                Your future. Your choice. Our guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main poster-style content */}
      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
            {/* Left column */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-[#0b2d5c] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <span className="grid grid-cols-4 gap-0.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-sky-300" />
                  ))}
                </span>
                Today
              </div>

              <h2 className="text-2xl font-bold leading-tight text-navy-900 sm:text-4xl">
                Discover Your Path.{" "}
                <span className="text-[#0b2d5c]">Build Your Future.</span>
              </h2>
              <p className="mt-4 text-base text-gray-600 sm:text-lg">
                The right guidance today leads to a brighter tomorrow.
              </p>

              <ul className="mt-8 space-y-5">
                {services.map((service) => (
                  <li key={service.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0b2d5c] text-white">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
                      <p className="mt-0.5 text-sm text-gray-600">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-lg font-bold uppercase tracking-wide text-navy-900">
                Think Big. <span className="text-orange-500">Plan Smart.</span> Achieve More.
              </p>
            </div>

            {/* Right column pillars */}
            <div className="relative lg:border-l lg:border-[#0b2d5c]/20 lg:pl-12">
              <div className="absolute left-0 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b2d5c] lg:block" />

              <div className="grid gap-6 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-3xl border border-gray-100 bg-gradient-to-b from-slate-50 to-white p-6 text-center shadow-sm"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0b2d5c]/20 bg-white text-[#0b2d5c] shadow-sm">
                      <pillar.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-base font-bold leading-snug text-navy-900">
                      {pillar.title.split(" ").map((word, i) => {
                        const highlight = ["Yourself,", "Wisely.", "Goals,", "Action.", "Smart", "Future", "Here."].includes(
                          word
                        );
                        return (
                          <span key={i} className={highlight ? "text-orange-500" : undefined}>
                            {word}{" "}
                          </span>
                        );
                      })}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poster + room photos */}
      <section className="section-padding bg-slate-50">
        <div className="site-container">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              Our Centre
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy-900 sm:text-4xl">
              A Space Built for Guidance & Growth
            </h2>
            <p className="mt-3 text-gray-600">
              Visit our Counseling Room for career support, academic planning, and personal development.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/career-counselling-poster.jpeg"
                  alt="Career Counselling Centre poster"
                  fill
                  className="object-contain bg-white p-3"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/career-counselling-room.jpeg"
                  alt="Career counselling room at the college"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended counselling services from room display */}
      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-4xl">Counselling Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Our Counseling Centre supports students across academics, wellbeing, skills, and career readiness.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roomServices.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#0b2d5c]/10 bg-gradient-to-br from-[#0b2d5c]/[0.04] to-white px-5 py-6 text-center"
              >
                <p className="font-semibold text-navy-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA footer band matching poster */}
      <section className="relative overflow-hidden bg-[#0b2d5c] py-14 text-white">
        <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full border-[16px] border-orange-500/30" />
        <div className="pointer-events-none absolute -left-4 bottom-6 h-24 w-24 rounded-full border-[10px] border-orange-400/40" />

        <div className="site-container relative z-10 text-center">
          <p className="text-2xl font-bold tracking-wide sm:text-3xl">
            Explore. <span className="text-orange-400">Plan.</span> Succeed.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Connect with the Career Counselling Centre and take the next step toward your future.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Contact the College
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Govt. Jinnah Graduate College for Women, Mozang Lahore
          </p>
        </div>
      </section>
    </>
  );
}
