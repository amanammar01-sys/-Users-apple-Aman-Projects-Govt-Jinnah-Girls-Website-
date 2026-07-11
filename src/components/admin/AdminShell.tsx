"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Newspaper,
  Sparkles,
  Images,
  Mail,
  LogOut,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import AdminBrand from "./AdminBrand";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, description: "Overview" },
  { href: "/admin/faculty", label: "Faculty & Staff", icon: Users, description: "People" },
  { href: "/admin/events", label: "Upcoming Events", icon: Calendar, description: "Schedule" },
  { href: "/admin/news", label: "News", icon: Newspaper, description: "Updates" },
  { href: "/admin/activities", label: "Campus Life", icon: Sparkles, description: "Activities" },
  { href: "/admin/gallery", label: "Gallery", icon: Images, description: "Photos" },
  { href: "/admin/messages", label: "Messages", icon: Mail, description: "Inbox" },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9]">
      <div className="h-1 bg-gradient-to-r from-royal via-royal-600 to-amber-500" />

      <header className="sticky top-0 z-30 border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <AdminBrand />
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-navy-700 shadow-sm transition hover:border-royal/30 hover:bg-royal-50 hover:text-royal"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">View Site</span>
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-navy-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-navy-800"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 lg:grid lg:grid-cols-[260px_1fr] lg:gap-8 lg:px-8 lg:py-10">
        <aside className="mb-6 lg:mb-0">
          <div className="lg:sticky lg:top-[100px]">
            <p className="mb-3 hidden px-1 text-xs font-semibold uppercase tracking-wider text-gray-400 lg:block">
              Content
            </p>
            <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {links.map((link) => {
                const active =
                  link.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group flex min-w-[140px] shrink-0 items-center gap-3 rounded-2xl border px-3.5 py-3 transition-all lg:min-w-0 ${
                      active
                        ? "border-royal/20 bg-royal text-white shadow-md shadow-royal/20"
                        : "border-transparent bg-white text-navy-700 shadow-sm hover:border-royal/15 hover:bg-royal-50 hover:text-royal lg:border-gray-100"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                        active
                          ? "bg-white/20"
                          : "bg-royal-50 text-royal group-hover:bg-white"
                      }`}
                    >
                      <link.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-tight">{link.label}</span>
                      <span
                        className={`hidden text-xs lg:block ${
                          active ? "text-white/75" : "text-gray-400"
                        }`}
                      >
                        {link.description}
                      </span>
                    </span>
                    {active && <ChevronRight className="hidden h-4 w-4 shrink-0 opacity-70 lg:block" />}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 hidden rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-4 lg:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Tip</p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
                Save your changes after editing. Updates appear on the live website right away.
              </p>
            </div>
          </div>
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
