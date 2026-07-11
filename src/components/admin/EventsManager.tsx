"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import AdminShell from "./AdminShell";
import AdminPageLayout from "./AdminPageLayout";
import {
  adminInputClass,
  adminLabelClass,
  adminSelectClass,
  adminSecondaryBtnClass,
  adminDangerBtnClass,
  adminCardClass,
} from "./admin-styles";
import type { ScheduledEvent, EventCategory, EventStatus } from "@/data/events";
import { categoryLabels, statusLabels } from "@/data/events";

const categories = Object.keys(categoryLabels) as EventCategory[];
const statuses = Object.keys(statusLabels) as EventStatus[];

const emptyEvent = (): ScheduledEvent => ({
  id: `se-${Date.now()}`,
  title: "",
  date: "",
  time: "",
  venue: "",
  status: "upcoming",
  category: "ceremony",
});

export default function EventsManager() {
  const [events, setEvents] = useState<ScheduledEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  useEffect(() => {
    fetch("/api/admin/events")
      .then((r) => r.json())
      .then(setEvents)
      .finally(() => setLoading(false));
  }, []);

  function updateEvent(index: number, field: keyof ScheduledEvent, value: string) {
    setEvents((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    const cleaned = events.filter((e) => e.title.trim());
    const res = await fetch("/api/admin/events", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleaned),
    });
    setSaving(false);
    if (res.ok) {
      setEvents(cleaned);
      setMessageType("success");
      setMessage("Events saved successfully.");
    } else {
      setMessageType("error");
      setMessage("Failed to save. Please try again.");
    }
  }

  return (
    <AdminShell>
      <AdminPageLayout
        title="Upcoming Events"
        description="Manage the events timetable displayed on the homepage."
        onSave={handleSave}
        saving={saving}
        saveDisabled={loading}
        message={message}
        messageType={messageType}
        actions={
          <button
            type="button"
            onClick={() => setEvents((prev) => [emptyEvent(), ...prev])}
            className={adminSecondaryBtnClass}
          >
            <Plus className="h-4 w-4" />
            Add Event
          </button>
        }
      >
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal border-t-transparent" />
          </div>
        ) : events.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center">
            <p className="text-sm text-gray-500">No events yet. Click Add Event to create one.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {events.map((event, index) => (
              <div key={event.id} className={adminCardClass}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={adminLabelClass}>Title</label>
                    <input
                      value={event.title}
                      onChange={(e) => updateEvent(index, "title", e.target.value)}
                      className={adminInputClass}
                    />
                  </div>
                  <div>
                    <label className={adminLabelClass}>Date</label>
                    <input
                      value={event.date}
                      onChange={(e) => updateEvent(index, "date", e.target.value)}
                      className={adminInputClass}
                      placeholder="e.g. March 15, 2026"
                    />
                  </div>
                  <div>
                    <label className={adminLabelClass}>Time</label>
                    <input
                      value={event.time}
                      onChange={(e) => updateEvent(index, "time", e.target.value)}
                      className={adminInputClass}
                      placeholder="e.g. 10:00 AM"
                    />
                  </div>
                  <div>
                    <label className={adminLabelClass}>Venue</label>
                    <input
                      value={event.venue}
                      onChange={(e) => updateEvent(index, "venue", e.target.value)}
                      className={adminInputClass}
                    />
                  </div>
                  <div>
                    <label className={adminLabelClass}>Status</label>
                    <select
                      value={event.status}
                      onChange={(e) => updateEvent(index, "status", e.target.value)}
                      className={adminSelectClass}
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {statusLabels[s]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={adminLabelClass}>Category</label>
                    <select
                      value={event.category}
                      onChange={(e) => updateEvent(index, "category", e.target.value)}
                      className={adminSelectClass}
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {categoryLabels[c]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setEvents((prev) => prev.filter((_, i) => i !== index))}
                  className={`mt-4 ${adminDangerBtnClass}`}
                >
                  <Trash2 className="h-4 w-4" />
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </AdminPageLayout>
    </AdminShell>
  );
}
