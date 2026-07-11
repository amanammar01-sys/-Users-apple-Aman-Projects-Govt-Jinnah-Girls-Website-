import { Eye, Target, Compass } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { aboutContent } from "@/data/about";

const cards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Our Vision",
    description: aboutContent.vision,
    icon: Eye,
  },
  {
    title: "Our Mission",
    description: aboutContent.mission,
    icon: Target,
  },
  {
    title: "Our Approach",
    description:
      "We combine rigorous academics with character building, extracurricular activities, and a supportive campus environment — helping every student grow with confidence, discipline, and purpose.",
    icon: Compass,
  },
];

export default function VisionMissionCards() {
  return (
    <section className="relative z-20 -mt-24 bg-transparent pb-20 sm:-mt-28 sm:pb-24">
      <div className="site-container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              {/* Blue circular icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-royal text-white shadow-md">
                <card.icon className="h-7 w-7" strokeWidth={1.75} />
              </div>

              <h2 className="text-center text-lg font-bold text-navy-900">
                {card.title}
              </h2>

              {/* Blue underline */}
              <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-royal" />

              <p className="mt-5 text-center text-sm leading-relaxed text-gray-500">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
