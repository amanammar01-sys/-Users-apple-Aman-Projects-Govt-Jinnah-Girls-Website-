"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import AdminShell from "./AdminShell";
import AdminPageLayout from "./AdminPageLayout";
import {
  adminInputClass,
  adminLabelClass,
  adminSecondaryBtnClass,
  adminDangerBtnClass,
  adminCardClass,
} from "./admin-styles";
import type { FacultyMember } from "@/data/faculty";
import type { FacultyData } from "@/lib/content";

const emptyMember = (type: "teaching" | "non-teaching"): FacultyMember => ({
  name: "",
  designation: "",
  department: "",
  qualification: "",
  contact: "",
  type,
});

export default function FacultyManager() {
  const [data, setData] = useState<FacultyData>({ teaching: [], nonTeaching: [] });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  useEffect(() => {
    fetch("/api/admin/faculty")
      .then((r) => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  function updateMember(
    list: "teaching" | "nonTeaching",
    index: number,
    field: keyof FacultyMember,
    value: string
  ) {
    setData((prev) => {
      const updated = [...prev[list]];
      updated[index] = { ...updated[index], [field]: value || null };
      return { ...prev, [list]: updated };
    });
  }

  function addMember(list: "teaching" | "nonTeaching") {
    setData((prev) => ({
      ...prev,
      [list]: [emptyMember(list === "teaching" ? "teaching" : "non-teaching"), ...prev[list]],
    }));
  }

  function removeMember(list: "teaching" | "nonTeaching", index: number) {
    setData((prev) => ({
      ...prev,
      [list]: prev[list].filter((_, i) => i !== index),
    }));
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    const cleaned: FacultyData = {
      teaching: data.teaching.filter((m) => m.name.trim()),
      nonTeaching: data.nonTeaching.filter((m) => m.name.trim()),
    };
    const res = await fetch("/api/admin/faculty", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleaned),
    });
    setSaving(false);
    if (res.ok) {
      setData(cleaned);
      setMessageType("success");
      setMessage("Faculty & staff saved successfully.");
    } else {
      setMessageType("error");
      setMessage("Failed to save. Please try again.");
    }
  }

  function renderList(title: string, list: "teaching" | "nonTeaching") {
    return (
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <h2 className="text-lg font-bold text-navy-900">{title}</h2>
            <p className="text-xs text-gray-400">{data[list].length} entries</p>
          </div>
          <button type="button" onClick={() => addMember(list)} className={adminSecondaryBtnClass}>
            <Plus className="h-4 w-4" />
            Add Member
          </button>
        </div>

        {data[list].length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center">
            <p className="text-sm text-gray-500">No {title.toLowerCase()} yet. Click Add Member to get started.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {data[list].map((member, index) => (
              <div key={`${list}-${index}`} className={adminCardClass}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ["name", "Name"],
                      ["designation", "Designation"],
                      ["department", "Department"],
                      ["qualification", "Qualification"],
                      ["contact", "Contact"],
                    ] as const
                  ).map(([field, label]) => (
                    <div key={field} className={field === "name" ? "sm:col-span-2" : ""}>
                      <label className={adminLabelClass}>{label}</label>
                      <input
                        value={member[field] ?? ""}
                        onChange={(e) => updateMember(list, index, field, e.target.value)}
                        className={adminInputClass}
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => removeMember(list, index)}
                  className={`mt-4 ${adminDangerBtnClass}`}
                >
                  <Trash2 className="h-4 w-4" />
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <AdminShell>
      <AdminPageLayout
        title="Faculty & Staff"
        description="Manage teaching and non-teaching staff profiles shown on the website."
        onSave={handleSave}
        saving={saving}
        saveDisabled={loading}
        message={message}
        messageType={messageType}
      >
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal border-t-transparent" />
          </div>
        ) : (
          <div className="space-y-10">
            {renderList("Teaching Staff", "teaching")}
            {renderList("Non-Teaching Staff", "nonTeaching")}
          </div>
        )}
      </AdminPageLayout>
    </AdminShell>
  );
}
