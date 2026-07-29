"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, Trash2, BookOpen } from "lucide-react";
import AdminShell from "./AdminShell";
import AdminPageLayout from "./AdminPageLayout";
import {
  adminInputClass,
  adminTextareaClass,
  adminLabelClass,
  adminSecondaryBtnClass,
  adminDangerBtnClass,
  adminCardClass,
} from "./admin-styles";
import type { Magazine } from "@/data/magazines";

function emptyMagazine(): Magazine {
  return {
    id: `magazine-${Date.now()}`,
    title: "",
    titleUrdu: "",
    year: "",
    cover: "",
    description: "",
    fileUrl: "",
    highlights: [""],
  };
}

export default function MagazineManager() {
  const [items, setItems] = useState<Magazine[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  useEffect(() => {
    fetch("/api/admin/magazine")
      .then((r) => r.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  function updateItem(index: number, field: keyof Magazine, value: string | string[]) {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }

  function updateHighlight(magIndex: number, hIndex: number, value: string) {
    setItems((prev) => {
      const updated = [...prev];
      const highlights = [...(updated[magIndex].highlights ?? [])];
      highlights[hIndex] = value;
      updated[magIndex] = { ...updated[magIndex], highlights };
      return updated;
    });
  }

  function addHighlight(magIndex: number) {
    setItems((prev) => {
      const updated = [...prev];
      const highlights = [...(updated[magIndex].highlights ?? []), ""];
      updated[magIndex] = { ...updated[magIndex], highlights };
      return updated;
    });
  }

  function removeHighlight(magIndex: number, hIndex: number) {
    setItems((prev) => {
      const updated = [...prev];
      const highlights = (updated[magIndex].highlights ?? []).filter((_, i) => i !== hIndex);
      updated[magIndex] = { ...updated[magIndex], highlights };
      return updated;
    });
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    const cleaned = items.map((m) => ({
      ...m,
      highlights: (m.highlights ?? []).filter((h) => h.trim()),
    }));
    const res = await fetch("/api/admin/magazine", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleaned),
    });
    setSaving(false);
    if (res.ok) {
      setItems(cleaned);
      setMessageType("success");
      setMessage("Magazine saved successfully.");
    } else {
      setMessageType("error");
      setMessage("Failed to save. Please try again.");
    }
  }

  return (
    <AdminShell>
      <AdminPageLayout
        title="College Magazine"
        description="Add, edit, or remove magazine editions shown on the College Magazine page."
        onSave={handleSave}
        saving={saving}
        saveDisabled={loading}
        message={message}
        messageType={messageType}
        actions={
          <button
            type="button"
            onClick={() => setItems((prev) => [emptyMagazine(), ...prev])}
            className={adminSecondaryBtnClass}
          >
            <Plus className="h-4 w-4" />
            Add Edition
          </button>
        }
      >
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal border-t-transparent" />
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-gray-300" />
            <p className="mt-3 text-sm text-gray-500">No magazine editions yet. Click Add Edition to create one.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {items.map((mag, index) => (
              <div key={mag.id} className={adminCardClass}>
                <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
                  {/* Cover preview */}
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-amber-50">
                    {mag.cover ? (
                      <Image src={mag.cover} alt={mag.title || "Cover"} fill className="object-cover" sizes="200px" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-gray-400">
                        <BookOpen className="h-10 w-10 text-amber-200" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className={adminLabelClass}>Title (English)</label>
                        <input
                          value={mag.title}
                          onChange={(e) => updateItem(index, "title", e.target.value)}
                          className={adminInputClass}
                          placeholder="e.g. SUKHANZAR"
                        />
                      </div>
                      <div>
                        <label className={adminLabelClass}>Title (Urdu) — optional</label>
                        <input
                          value={mag.titleUrdu ?? ""}
                          onChange={(e) => updateItem(index, "titleUrdu", e.target.value)}
                          className={adminInputClass}
                          placeholder="e.g. سُخَن زَار"
                          dir="rtl"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className={adminLabelClass}>Year / Edition</label>
                        <input
                          value={mag.year}
                          onChange={(e) => updateItem(index, "year", e.target.value)}
                          className={adminInputClass}
                          placeholder="e.g. 2020 – 2022"
                        />
                      </div>
                      <div>
                        <label className={adminLabelClass}>Cover Image Path</label>
                        <input
                          value={mag.cover}
                          onChange={(e) => updateItem(index, "cover", e.target.value)}
                          className={adminInputClass}
                          placeholder="/images/magzine.png"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={adminLabelClass}>View / Download URL (optional)</label>
                      <input
                        value={mag.fileUrl ?? ""}
                        onChange={(e) => updateItem(index, "fileUrl", e.target.value)}
                        className={adminInputClass}
                        placeholder="https://drive.google.com/... or leave blank"
                      />
                    </div>

                    <div>
                      <label className={adminLabelClass}>Description</label>
                      <textarea
                        value={mag.description}
                        onChange={(e) => updateItem(index, "description", e.target.value)}
                        rows={3}
                        className={adminTextareaClass}
                        placeholder="Brief description of this edition..."
                      />
                    </div>

                    {/* Highlights */}
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <label className={adminLabelClass}>Highlights</label>
                        <button
                          type="button"
                          onClick={() => addHighlight(index)}
                          className="text-xs font-medium text-royal hover:underline"
                        >
                          + Add
                        </button>
                      </div>
                      <div className="space-y-2">
                        {(mag.highlights ?? []).map((h, hIndex) => (
                          <div key={hIndex} className="flex items-center gap-2">
                            <input
                              value={h}
                              onChange={(e) => updateHighlight(index, hIndex, e.target.value)}
                              className={adminInputClass}
                              placeholder="e.g. Student poetry and short stories"
                            />
                            <button
                              type="button"
                              onClick={() => removeHighlight(index, hIndex)}
                              className="text-red-400 hover:text-red-600"
                              aria-label="Remove highlight"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setItems((prev) => prev.filter((_, i) => i !== index))}
                  className={`mt-4 ${adminDangerBtnClass}`}
                >
                  <Trash2 className="h-4 w-4" />
                  Remove Edition
                </button>
              </div>
            ))}
          </div>
        )}
      </AdminPageLayout>
    </AdminShell>
  );
}
