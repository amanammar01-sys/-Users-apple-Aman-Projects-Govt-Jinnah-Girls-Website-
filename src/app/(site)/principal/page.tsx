import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { principalMessage } from "@/data/principal";

export const metadata: Metadata = {
  title: "Principal's Message",
  description:
    "Welcome message from Dr. Nazia Khurshed, Principal of Govt. Jinnah Graduate College for Women, Mozang Lahore.",
};

export default function PrincipalPage() {
  const paragraphs = principalMessage.welcomeMessage.split("\n\n");

  return (
    <>
      <PageHero
        title="Principal's Message"
        subtitle="A message of commitment, vision, and excellence from our leadership."
        breadcrumb="Leadership"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Photo & Info */}
            <div className="lg:col-span-2">
              <div className="card-premium sticky top-24 overflow-hidden">
                <div className="relative aspect-[3/4] bg-slate-100">
                  <Image
                    src={principalMessage.photo}
                    alt={principalMessage.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    {principalMessage.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-navy-700">
                    {principalMessage.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Govt. Jinnah Graduate College for Women
                  </p>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-navy-900">
                  Welcome Message
                </h3>
                <div className="mt-2 h-1 w-16 rounded-full bg-navy-500" />
              </div>

              <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                {paragraphs.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>

              {/* Inspirational Quote */}
              <div className="relative mt-10 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 p-8 text-white shadow-md">
                <Quote className="absolute right-6 top-6 h-12 w-12 text-white/10" />
                <p className="relative font-display text-xl italic leading-relaxed sm:text-2xl">
                  &ldquo;{principalMessage.quote}&rdquo;
                </p>
              </div>

              {/* Vision */}
              <div className="mt-10">
                <h3 className="font-display text-2xl font-bold text-navy-900">
                  Vision for Students
                </h3>
                <div className="mt-2 h-1 w-16 rounded-full bg-amber-400" />
                <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
                  {principalMessage.vision.split("\n\n").map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link href="/events" className="btn-primary text-base px-8 py-4">
                  Explore College Activities
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
