import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sun,
  Lightbulb,
  Building2,
  Monitor,
  Share2,
  GraduationCap,
  Activity,
  Award,
} from "lucide-react";
import { programs, admissionsInfo } from "@/data/programs";
import { testimonials } from "@/data/testimonials";
import { collegeInfo, aboutPreview } from "@/data/history";
import {
  getAllStaff,
  getScheduledEventsContent,
  getNewsContent,
  getActivitiesContent,
  getGalleryContent,
} from "@/lib/content";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import GalleryGrid from "@/components/GalleryGrid";
import FacultySection from "@/components/FacultySection";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { ActivityCard, ScheduleEventCard } from "@/components/ScheduleCards";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const newsIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  sun: Sun,
  lightbulb: Lightbulb,
  building: Building2,
  monitor: Monitor,
  share: Share2,
  graduation: GraduationCap,
  activity: Activity,
  award: Award,
};

export default async function HomePage() {
  const [staff, scheduledEvents, newsItems, campusActivities, galleryImages] = await Promise.all([
    getAllStaff(),
    getScheduledEventsContent(),
    getNewsContent(),
    getActivitiesContent(),
    getGalleryContent(),
  ]);

  return (
    <>
      <Hero />

      {/* About Preview */}
      <section id="about" className="section-padding bg-white">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <span className="inline-block rounded-full bg-royal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-royal sm:px-5 sm:py-2 sm:text-sm">
                About Us
              </span>
              <h2 className="mt-3 text-xl font-bold leading-snug tracking-tight text-navy-900 sm:mt-5 sm:text-4xl lg:leading-tight">
                A Legacy of Learning — Shaping Leaders Since 1990
              </h2>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-600 sm:mt-6 sm:text-lg">
                {aboutPreview.intro}
              </p>
              <div className="mt-5 rounded-2xl border border-royal/15 border-l-4 border-l-royal bg-royal-50/40 p-4 sm:mt-8 sm:p-8">
                <h3 className="text-lg font-bold text-navy-900 sm:text-3xl">Our Mission</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-700 sm:mt-4 sm:text-xl sm:leading-relaxed">
                  {aboutPreview.mission}
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-4">
                {aboutPreview.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-3.5 sm:p-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-navy-900 sm:mt-1.5 sm:text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary mt-7 sm:mt-9 sm:px-7 sm:py-3.5 sm:text-base">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="relative pb-8 sm:pb-10">
                <div className="overflow-hidden rounded-2xl shadow-card sm:rounded-3xl">
                  <Image
                    src="/images/page1_img7.jpeg"
                    alt="Govt. Jinnah Graduate College campus"
                    width={600}
                    height={500}
                    className="h-[260px] w-full bg-white object-contain sm:h-[400px] sm:object-cover lg:h-[480px]"
                  />
                </div>
                <div className="absolute bottom-0 left-3 rounded-xl border border-gray-100 bg-white p-4 shadow-card sm:left-4 sm:rounded-2xl sm:p-6">
                  <p className="text-2xl font-bold text-royal sm:text-4xl">35+</p>
                  <p className="mt-1 text-xs font-medium text-gray-500 sm:text-base">Years of Excellence</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="section-padding bg-gray-50">
        <div className="site-container">
          <SectionHeading
            large
            label="Academics"
            title="Academic Programs That Empower Your Future"
            description="From Intermediate to ADP — explore diverse pathways designed to build knowledge, skills, and confidence for every student."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {programs.map((program, i) => (
              <FadeIn key={program.id} delay={i * 0.08}>
                <ProgramCard program={program} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/academics" className="btn-outline">
              View All Programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="section-padding">
        <div className="site-container">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-royal via-royal-600 to-navy-900 p-6 sm:rounded-3xl sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <FadeIn>
                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
                  Admissions
                </span>
                <h2 className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-4xl">
                  {admissionsInfo.session}
                </h2>
                <p className="mt-3 text-[13px] leading-relaxed text-gray-200 sm:mt-4 sm:text-base">
                  Join one of Lahore&apos;s most respected government colleges for women. Applications are now open for the upcoming academic session.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-navy-900 shadow-lg transition-all hover:bg-amber-400"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="space-y-6">
                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                    <h3 className="font-semibold text-white">Eligibility</h3>
                    <ul className="mt-3 space-y-2">
                      {admissionsInfo.eligibility.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                    <h3 className="font-semibold text-white">Required Documents</h3>
                    <ul className="mt-3 space-y-2">
                      {admissionsInfo.documents.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section id="campus-life" className="section-padding bg-gray-50">
        <div className="site-container">
          <SectionHeading
            large
            label="Campus Life"
            title="A Vibrant Campus Beyond the Classroom"
            description="From sports galas and cultural festivals to national celebrations — our students thrive through creativity, teamwork, and a strong sense of community."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {campusActivities.map((activity, i) => (
              <FadeIn key={activity.id} delay={i * 0.06}>
                <ActivityCard
                  title={activity.title}
                  description={activity.description}
                  image={activity.image}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Events Schedule */}
      <section id="events" className="section-padding">
        <div className="site-container">
          <SectionHeading
            label="Events"
            title="Upcoming Events & Timetable"
            description="Stay updated with college events, ceremonies, and academic activities throughout the year."
          />

          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {scheduledEvents.slice(0, 4).map((event, i) => (
              <FadeIn key={event.id} delay={i * 0.06}>
                <ScheduleEventCard event={event} />
              </FadeIn>
            ))}
          </div>

          {/* Mobile: stacked event rows */}
          <FadeIn className="md:hidden">
            <div className="space-y-3">
              {scheduledEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-navy-900">{event.title}</h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        event.status === "upcoming"
                          ? "bg-royal-50 text-royal"
                          : event.status === "ongoing"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                  <dl className="mt-3 grid grid-cols-1 gap-1.5 text-sm text-gray-500">
                    <div>
                      <dt className="inline font-medium text-gray-400">Date: </dt>
                      <dd className="inline">{event.date}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-400">Time: </dt>
                      <dd className="inline">{event.time}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-gray-400">Venue: </dt>
                      <dd className="inline">{event.venue}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Desktop/tablet table */}
          <FadeIn className="hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="px-5 py-4 font-semibold text-navy-900">Event</th>
                      <th className="px-5 py-4 font-semibold text-navy-900">Date</th>
                      <th className="px-5 py-4 font-semibold text-navy-900">Time</th>
                      <th className="px-5 py-4 font-semibold text-navy-900">Venue</th>
                      <th className="px-5 py-4 font-semibold text-navy-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduledEvents.map((event) => (
                      <tr
                        key={event.id}
                        className="border-b border-gray-50 transition-colors hover:bg-royal-50/30"
                      >
                        <td className="px-5 py-4 font-medium text-navy-800">{event.title}</td>
                        <td className="px-5 py-4 text-gray-500">{event.date}</td>
                        <td className="px-5 py-4 text-gray-500">{event.time}</td>
                        <td className="px-5 py-4 text-gray-500">{event.venue}</td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                              event.status === "upcoming"
                                ? "bg-royal-50 text-royal"
                                : event.status === "ongoing"
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* News & Achievements */}
      <section id="news" className="section-padding bg-gray-50">
        <div className="site-container">
          <SectionHeading
            label="News"
            title="News & Achievements"
            description="Recent developments and milestones that showcase our commitment to progress and excellence."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {newsItems.map((item, i) => {
              const Icon = newsIcons[item.icon] ?? Award;
              return (
                <FadeIn key={item.id} delay={i * 0.06}>
                  <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-royal-50 text-royal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-amber-600">{item.year}</span>
                    <h3 className="mt-1 font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                      {item.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <FacultySection staff={staff} />

      {/* Gallery */}
      <section id="gallery" className="section-padding">
        <div className="site-container">
          <SectionHeading
            label="Gallery"
            title="Campus Life in Pictures"
            description="Explore moments from sports, cultural events, academic activities, and campus development."
          />
          <GalleryGrid images={galleryImages} limit={12} />
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="site-container">
          <SectionHeading
            label="Testimonials"
            title="What People Say"
            description="Hear from our students, parents, and alumni about their experience at Jinnah College."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-card sm:p-7">
                  <div className="mb-4 text-4xl font-serif leading-none text-amber-400">&ldquo;</div>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">{t.quote}</p>
                  <footer className="mt-5 border-t border-gray-100 pt-4 sm:mt-6 sm:pt-5">
                    <p className="font-semibold text-navy-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="site-container">
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            description="We'd love to hear from you. Reach out for admissions, inquiries, or general information."
          />
          <div className="grid gap-10 lg:grid-cols-5">
            <FadeIn className="lg:col-span-2" direction="left">
              <div className="space-y-4">
                {[
                  { icon: MapPin, title: "Address", value: collegeInfo.address },
                  { icon: Phone, title: "Phone", value: collegeInfo.phone, href: `tel:${collegeInfo.phone}` },
                  { icon: Mail, title: "Email", value: collegeInfo.email, href: `mailto:${collegeInfo.email}` },
                  { icon: Clock, title: "Office Hours", value: "Mon – Fri, 8:00 AM – 3:00 PM" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-card"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal-50 text-royal">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block font-medium text-navy-900 hover:text-royal">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-medium text-navy-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 shadow-card">
                <iframe
                  title="College location on Google Maps"
                  src="https://maps.google.com/maps?q=Govt+Jinnah+Graduate+College+Mozang+Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-3" direction="right" delay={0.1}>
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card sm:p-8">
                <h3 className="text-base font-bold text-navy-900 sm:text-lg">Send us a Message</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
