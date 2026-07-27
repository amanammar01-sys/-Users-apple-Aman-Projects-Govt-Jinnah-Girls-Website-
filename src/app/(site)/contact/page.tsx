import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { collegeInfo } from "@/data/history";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Govt. Jinnah Graduate College for Women, Mozang Lahore. Address, phone, email, and contact form.",
};

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    content: collegeInfo.location,
    sub: "Fatima Jinnah Road, Mozang, Lahore, Pakistan",
  },
  {
    icon: Phone,
    title: "Phone",
    content: collegeInfo.phone,
    sub: "College Office",
    href: `tel:${collegeInfo.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    content: collegeInfo.email,
    sub: "Official correspondence",
    href: `mailto:${collegeInfo.email}`,
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday – Friday",
    sub: "8:00 AM – 3:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for admissions, inquiries, or any questions about our college."
        breadcrumb="Get in Touch"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Get In Touch
              </h2>
              <p className="mt-3 text-slate-600">
                Whether you&apos;re a prospective student, parent, or visitor — our
                team is here to assist you.
              </p>

              <div className="mt-8 space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.title} className="card-premium flex gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 break-words">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-all font-semibold text-navy-900 hover:text-navy-700"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="mt-1 font-semibold text-navy-900">{item.content}</p>
                      )}
                      <p className="mt-0.5 text-sm text-slate-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-card">
                <div className="flex items-center gap-2 bg-navy-700 px-4 py-3 text-sm font-medium text-white">
                  <Navigation className="h-4 w-4" />
                  Find Us on Map
                </div>
                <iframe
                  title="College location on Google Maps"
                  src="https://maps.google.com/maps?q=Govt+Jinnah+Graduate+College+for+Women+Mozang+Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="card-premium p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-navy-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out the form below and we&apos;ll respond as soon as possible.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
