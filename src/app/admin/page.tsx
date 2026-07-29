import AdminShell from "@/components/admin/AdminShell";
import Link from "next/link";
import { Users, Calendar, Newspaper, Sparkles, Images, Mail, ArrowUpRight, Shield, BookOpen } from "lucide-react";

const cards = [
  {
    href: "/admin/faculty",
    title: "Faculty & Staff",
    description: "Add, edit, or remove teaching and non-teaching staff profiles.",
    icon: Users,
    accent: "from-blue-500/10 to-royal/5",
    iconBg: "bg-royal-50 text-royal",
  },
  {
    href: "/admin/events",
    title: "Upcoming Events",
    description: "Manage event timetable, dates, venues, and live status.",
    icon: Calendar,
    accent: "from-violet-500/10 to-purple-50",
    iconBg: "bg-violet-50 text-violet-600",
  },
  {
    href: "/admin/news",
    title: "News & Achievements",
    description: "Publish college news and highlight student achievements.",
    icon: Newspaper,
    accent: "from-amber-500/10 to-amber-50",
    iconBg: "bg-amber-50 text-amber-700",
  },
  {
    href: "/admin/activities",
    title: "Campus Life",
    description: "Edit activity cards shown in the Campus Life section.",
    icon: Sparkles,
    accent: "from-emerald-500/10 to-emerald-50",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    href: "/admin/gallery",
    title: "Gallery",
    description: "Upload, add, or remove photos in the campus gallery.",
    icon: Images,
    accent: "from-sky-500/10 to-sky-50",
    iconBg: "bg-sky-50 text-sky-600",
  },
  {
    href: "/admin/magazine",
    title: "College Magazine",
    description: "Add, edit, or remove college magazine editions and their details.",
    icon: BookOpen,
    accent: "from-amber-500/10 to-yellow-50",
    iconBg: "bg-amber-50 text-amber-700",
  },
  {
    href: "/admin/messages",
    title: "Messages",
    description: "Read contact form submissions from students and parents.",
    icon: Mail,
    accent: "from-rose-500/10 to-rose-50",
    iconBg: "bg-rose-50 text-rose-600",
  },
];

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <div className="space-y-6">
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-navy-900 via-navy-800 to-royal shadow-card">
          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-12 right-1/4 h-32 w-32 rounded-full bg-amber-400/10" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                <Shield className="h-3.5 w-3.5" />
                Secure Admin Panel
              </div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Content Dashboard</h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Welcome back. Choose a section below to update website content. All changes are saved
                directly and reflected on the live site.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-royal/20 hover:shadow-card"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 transition group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconBg} transition group-hover:scale-105`}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-300 transition group-hover:text-royal" />
                </div>
                <h2 className="text-lg font-bold text-navy-900">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm sm:px-8">
          <h3 className="text-sm font-semibold text-navy-900">Quick guide</h3>
          <ul className="mt-3 grid gap-2 text-sm text-gray-500 sm:grid-cols-3">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal-50 text-xs font-bold text-royal">
                1
              </span>
              Select a content section from the cards or sidebar
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal-50 text-xs font-bold text-royal">
                2
              </span>
              Add or edit entries using the forms provided
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal-50 text-xs font-bold text-royal">
                3
              </span>
              Click Save Changes — updates go live immediately
            </li>
          </ul>
        </div>
      </div>
    </AdminShell>
  );
}
