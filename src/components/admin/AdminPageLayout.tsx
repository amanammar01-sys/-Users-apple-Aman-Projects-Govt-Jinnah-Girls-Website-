"use client";

import { Save } from "lucide-react";

interface AdminPageLayoutProps {
  title: string;
  description: string;
  onSave?: () => void;
  saving?: boolean;
  saveDisabled?: boolean;
  message?: string;
  messageType?: "success" | "error";
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export default function AdminPageLayout({
  title,
  description,
  onSave,
  saving = false,
  saveDisabled = false,
  message,
  messageType = "success",
  actions,
  children,
}: AdminPageLayoutProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card">
      <div className="border-b border-gray-100 bg-gradient-to-r from-royal-50 via-white to-amber-50/40 px-6 py-6 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">{title}</h1>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-gray-500">{description}</p>
          </div>
          {(actions || onSave) && (
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              {actions}
              {onSave && (
                <button
                  type="button"
                  onClick={onSave}
                  disabled={saving || saveDisabled}
                  className="inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-royal-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Save className="h-4 w-4" />
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              )}
            </div>
          )}
        </div>

        {message && (
          <div
            className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
              messageType === "error"
                ? "border border-red-100 bg-red-50 text-red-700"
                : "border border-emerald-100 bg-emerald-50 text-emerald-800"
            }`}
          >
            {message}
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">{children}</div>
    </div>
  );
}
