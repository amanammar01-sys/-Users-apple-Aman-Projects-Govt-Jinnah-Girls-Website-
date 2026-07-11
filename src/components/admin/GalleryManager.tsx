"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Plus, Trash2, Upload } from "lucide-react";
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
import { galleryCategories, type GalleryImage } from "@/data/gallery";

const categories = galleryCategories
  .filter((cat) => cat.id !== "all")
  .map((cat) => cat.id) as GalleryImage["category"][];

const emptyImage = (): GalleryImage => ({
  id: `gallery-${Date.now()}`,
  src: "",
  alt: "",
  category: "campus",
});

export default function GalleryManager() {
  const [items, setItems] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");
  const fileInputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  useEffect(() => {
    fetch("/api/admin/gallery")
      .then((r) => r.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  function updateItem(index: number, field: keyof GalleryImage, value: string) {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }

  async function handleUpload(index: number, file: File) {
    setUploadingIndex(index);
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/gallery/upload", {
      method: "POST",
      body: formData,
    });

    setUploadingIndex(null);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setMessageType("error");
      setMessage(data.error || "Failed to upload image.");
      return;
    }

    const { path } = await res.json();
    setItems((prev) => {
      const updated = [...prev];
      const name = file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
      updated[index] = {
        ...updated[index],
        src: path,
        alt: updated[index].alt || name,
      };
      return updated;
    });
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");
    const cleaned = items.filter((item) => item.src.trim() && item.alt.trim());
    const res = await fetch("/api/admin/gallery", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleaned),
    });
    setSaving(false);
    if (res.ok) {
      setItems(cleaned);
      setMessageType("success");
      setMessage("Gallery saved successfully.");
    } else {
      setMessageType("error");
      setMessage("Failed to save. Please try again.");
    }
  }

  return (
    <AdminShell>
      <AdminPageLayout
        title="Gallery"
        description="Add or remove photos shown on the homepage gallery and the full gallery page."
        onSave={handleSave}
        saving={saving}
        saveDisabled={loading}
        message={message}
        messageType={messageType}
        actions={
          <button
            type="button"
            onClick={() => setItems((prev) => [emptyImage(), ...prev])}
            className={adminSecondaryBtnClass}
          >
            <Plus className="h-4 w-4" />
            Add Image
          </button>
        }
      >
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal border-t-transparent" />
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center">
            <p className="text-sm text-gray-500">No gallery images yet. Click Add Image to upload one.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item.id} className={adminCardClass}>
                <div className="grid gap-5 lg:grid-cols-[180px_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                    {item.src ? (
                      <Image
                        src={item.src}
                        alt={item.alt || "Gallery preview"}
                        fill
                        className="object-cover"
                        sizes="180px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-gray-400">
                        No image yet
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <input
                        ref={(el) => {
                          fileInputRefs.current[index] = el;
                        }}
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleUpload(index, file);
                          e.target.value = "";
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRefs.current[index]?.click()}
                        disabled={uploadingIndex === index}
                        className={adminSecondaryBtnClass}
                      >
                        <Upload className="h-4 w-4" />
                        {uploadingIndex === index ? "Uploading..." : "Upload Image"}
                      </button>
                    </div>

                    <div>
                      <label className={adminLabelClass}>Image Path</label>
                      <input
                        value={item.src}
                        onChange={(e) => updateItem(index, "src", e.target.value)}
                        className={adminInputClass}
                        placeholder="/images/gallery/photo.jpg"
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className={adminLabelClass}>Alt Text / Caption</label>
                        <input
                          value={item.alt}
                          onChange={(e) => updateItem(index, "alt", e.target.value)}
                          className={adminInputClass}
                          placeholder="Describe the photo"
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
