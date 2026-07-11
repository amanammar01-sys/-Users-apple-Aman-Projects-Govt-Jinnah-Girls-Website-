"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, ArrowRight } from "lucide-react";
import AdminBrand from "./AdminBrand";

export default function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Incorrect password. Please try again.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="relative flex min-h-screen">
      <div className="hidden w-[45%] bg-navy-900 lg:flex lg:flex-col lg:justify-between lg:p-12">
        <AdminBrand subtitle="Content Management" href={null} theme="light" />
        <div>
          <h1 className="text-3xl font-bold leading-tight text-white">
            Manage your college website with confidence
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            Update faculty, events, news, and campus life content from one secure dashboard.
          </p>
        </div>
        <p className="text-sm text-white/40">Govt. Jinnah Graduate College for Women, Mozang Lahore</p>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-royal-50 via-white to-amber-50/30 px-5 py-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-royal/5" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-200/20" />
        </div>

        <div className="relative w-full max-w-md">
          <div className="mb-8 flex justify-center lg:hidden">
            <AdminBrand subtitle="Admin Login" href={null} />
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-card">
            <div className="bg-gradient-to-r from-royal to-royal-600 px-8 py-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Welcome back</h2>
                  <p className="text-sm text-white/80">Sign in to the admin panel</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-8">
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-navy-800">
                  Admin Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm outline-none transition focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/10"
                  placeholder="Enter your password"
                />
              </div>

              {error && (
                <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-royal py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-royal-600 disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
            <Image
              src="/college-logo.jpeg"
              alt=""
              width={32}
              height={32}
              className="rounded-full opacity-60"
            />
            <p className="text-center text-xs text-gray-400">
              Established 1990 · Empowering Women Through Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
