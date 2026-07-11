"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import AdminShell from "./AdminShell";
import AdminPageLayout from "./AdminPageLayout";
import {
  adminInputClass,
  adminTextareaClass,
  adminLabelClass,
  adminSelectClass,
  adminSecondaryBtnClass,
  adminDangerBtnClass,
  adminCardClass,
} from "./admin-styles";
import type { CampusActivity } from "@/data/activities";

const categories: CampusActivity["category"][] = [
  "sports",
  "cultural",
  "academic",
  "national",
  "religious",
  "awareness",
];

const emptyActivity = (): CampusActivity => ({
  id: `activity-${Date.now()}`,
  title: "",
  description: "",
  image: "/images/page3_img1.jpeg",
  category: "academic",
});

export default function ActivitiesManager() {
  const [items, setItems] = useState<CampusActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  useEffect(() => {
    fetch("/api/admin/activities")
      .then((r) => r.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  function updateItem(index: number, field: keyof CampusActivity, value: string) {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    const cleaned = items.filter((i) => i.title.trim());
    const res = await fetch("/api/admin/activities", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleaned),
    });
    setSaving(false);
    if (res.ok) {
      setItems(cleaned);
      setMessageType("success");
      setMessage("Campus life cards saved successfully.");
    } else {
      setMessageType("error");
      setMessage("Failed to save. Please try again.");
    }
  }

  return (
    <AdminShell>
      <AdminPageLayout
        title="Campus Life"
        description="Edit activity cards shown in the Campus Life section. Keep image paths unchanged to preserve photos."
        onSave={handleSave}
        saving={saving}
        saveDisabled={loading}
        message={message}
        messageType={messageType}
        actions={
          <button
            type="button"
            onClick={() => setItems((prev) => [emptyActivity(), ...prev])}
            className={adminSecondaryBtnClass}
          >
            <Plus className="h-4 w-4" />
            Add Activity
          </button>
        }
      >
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal border-t-transparent" />
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center">
            <p className="text-sm text-gray-500">No activities yet. Click Add Activity to create one.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={item.id} className={adminCardClass}>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={adminLabelClass}>Title</label>
                    <input
                      value={item.title}
                      onChange={(e) => updateItem(index, "title", e.target.value)}
                      className={adminInputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={adminLabelClass}>Description</label>
                    <textarea
                      value={item.description}
                      onChange={(e) => updateItem(index, "description", e.target.value)}
                      rows={3}
                      className={adminTextareaClass}
                    />
                  </div>
                  <div>
                    <label className={adminLabelClass}>Image Path</label>
                    <input
                      value={item.image}
                      onChange={(e) => updateItem(index, "image", e.target.value)}
                      className={adminInputClass}
                      placeholder="/images/page3_img1.jpeg"
                    />
                  </div>
                  <div>
                    <label className={adminLabelClass}>Category</label>
                    <select
                      value={item.category}
                      onChange={(e) => updateItem(index, "category", e.target.value)}
                      className={adminSelectClass}
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c.charAt(0).toUpperCase() + c.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setItems((prev) => prev.filter((_, i) => i !== index))}
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
