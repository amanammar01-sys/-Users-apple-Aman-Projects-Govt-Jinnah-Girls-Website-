import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, ExternalLink, CheckCircle2, Calendar, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import { getMagazinesContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "College Magazine",
  description:
    "Explore Sukhanzar — the annual college magazine of Govt. Jinnah Graduate College (W), Mozang Lahore, showcasing student creativity and academic achievements.",
};

export default async function MagazinePage() {
  const magazines = await getMagazinesContent();

  return (
    <>
      <PageHero
        title="College Magazine"
        subtitle="Sukhanzar — a celebration of creativity, literature, and academic excellence by our students and faculty."
        breadcrumb="Publications"
      />

      {/* About the Magazine */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-600">
                Annual Publication
              </span>
              <h2 className="mt-4 text-2xl font-bold text-navy-900 sm:text-3xl">
                About Sukhanzar
                <span className="ml-3 font-urdu text-xl text-amber-600">سُخَن زَار</span>
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                <strong>Sukhanzar</strong> (سُخَن زَار) is the prestigious annual magazine of Govt. Jinnah Graduate College (W), Mozang Lahore. The name means <em>&ldquo;Garden of Words&rdquo;</em> — a fitting tribute to the literary and creative spirit of our students.
              </p>
              <p className="mt-3 leading-relaxed text-gray-600">
                Each edition is a collective effort of students, teachers, and the editorial board — featuring poetry, short stories, essays, campus news, event coverage, and artistic expressions. It serves as a cherished record of college life and a platform for emerging talent.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { label: "Founded", value: "1990" },
                  { label: "Language", value: "Urdu & English" },
                  { label: "Frequency", value: "Annual" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                    <p className="text-lg font-bold text-navy-900">{stat.value}</p>
                    <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-100 to-amber-50 opacity-60" />
                <Image
                  src="/images/magzine.png"
                  alt="Sukhanzar College Magazine"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Editions */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-royal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-royal">
              <BookOpen className="h-3.5 w-3.5" />
              Our Editions
            </div>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Explore Our Publications</h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-500">
              Browse through our annual college magazines and archives.
            </p>
          </div>

          {magazines.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-gray-300" />
              <p className="mt-4 text-gray-500">No magazines published yet.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {magazines.map((mag) => (
                <div
                  key={mag.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-amber-50">
                    {mag.cover ? (
                      <Image
                        src={mag.cover}
                        alt={mag.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <BookOpen className="h-16 w-16 text-amber-200" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-bold text-navy-900 backdrop-blur-sm">
                        <Calendar className="h-3 w-3" />
                        {mag.year}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-navy-900">{mag.title}</h3>
                        {mag.titleUrdu && (
                          <p className="mt-0.5 text-base text-amber-600">{mag.titleUrdu}</p>
                        )}
                      </div>
                      <Star className="h-5 w-5 shrink-0 text-amber-400" />
                    </div>

                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-500">
                      {mag.description}
                    </p>

                    {mag.highlights && mag.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {mag.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-5">
                      {mag.fileUrl ? (
                        <a
                          href={mag.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
                        >
                          <BookOpen className="h-4 w-4" />
                          View Magazine
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <div className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-400">
                          <BookOpen className="h-4 w-4" />
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contribute Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Contribute to Sukhanzar</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Are you a student or faculty member with poetry, stories, artwork, or essays to share?
            We welcome contributions for the next edition of Sukhanzar.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-sm font-bold text-navy-900 transition hover:bg-amber-400"
          >
            Submit Your Work
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
