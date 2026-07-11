"use client";

import { useEffect, useState } from "react";
import { Mail, Trash2, Check, Inbox } from "lucide-react";
import AdminShell from "./AdminShell";
import AdminPageLayout from "./AdminPageLayout";
import { adminDangerBtnClass, adminSecondaryBtnClass } from "./admin-styles";
import {
  senderTypeLabels,
  subjectLabels,
  type ContactMessage,
} from "@/data/contact-messages";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-PK", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function MessagesManager() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  async function loadMessages() {
    const res = await fetch("/api/admin/messages");
    if (res.ok) {
      setMessages(await res.json());
    }
    setLoading(false);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  const unreadCount = messages.filter((m) => !m.read).length;
  const filtered = messages.filter((m) => {
    if (filter === "unread") return !m.read;
    if (filter === "read") return m.read;
    return true;
  });

  async function markRead(id: string, read: boolean) {
    const res = await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read }),
    });

    if (res.ok) {
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read } : m)));
    }
  }

  async function removeMessage(id: string) {
    const res = await fetch(`/api/admin/messages?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      setMessageType("success");
      setMessage("Message deleted.");
    } else {
      setMessageType("error");
      setMessage("Failed to delete message.");
    }
  }

  return (
    <AdminShell>
      <AdminPageLayout
        title="Messages"
        description="Contact form submissions from students, parents, and visitors on the website."
        message={message}
        messageType={messageType}
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-royal-50 px-3 py-1 text-xs font-semibold text-royal">
              <Inbox className="h-3.5 w-3.5" />
              {unreadCount} unread
            </span>
            <span className="text-sm text-gray-500">{messages.length} total</span>
          </div>

          <div className="flex gap-2">
            {(["all", "unread", "read"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={`rounded-xl px-3 py-1.5 text-xs font-semibold capitalize transition ${
                  filter === value
                    ? "bg-royal text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-royal-50 hover:text-royal"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal border-t-transparent" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 px-6 py-14 text-center">
            <Mail className="mx-auto h-10 w-10 text-gray-300" />
            <p className="mt-4 text-sm font-medium text-gray-600">No messages yet</p>
            <p className="mt-1 text-xs text-gray-400">
              Submissions from the contact form will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((item) => (
              <article
                key={item.id}
                className={`rounded-2xl border p-5 shadow-sm transition ${
                  item.read
                    ? "border-gray-100 bg-white"
                    : "border-royal/20 bg-royal-50/30"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-bold text-navy-900">{item.name}</h2>
                      {!item.read && (
                        <span className="rounded-full bg-royal px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          New
                        </span>
                      )}
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        {senderTypeLabels[item.senderType]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{formatDate(item.createdAt)}</p>
                  </div>
                  <div className="flex gap-2">
                    {!item.read && (
                      <button
                        type="button"
                        onClick={() => markRead(item.id, true)}
                        className={adminSecondaryBtnClass}
                      >
                        <Check className="h-4 w-4" />
                        Mark read
                      </button>
                    )}
                    {item.read && (
                      <button
                        type="button"
                        onClick={() => markRead(item.id, false)}
                        className={adminSecondaryBtnClass}
                      >
                        Mark unread
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => removeMessage(item.id)}
                      className={adminDangerBtnClass}
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </div>

                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">Email</dt>
                    <dd>
                      <a href={`mailto:${item.email}`} className="font-medium text-royal hover:underline">
                        {item.email}
                      </a>
                    </dd>
                  </div>
                  {item.phone && (
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">Phone</dt>
                      <dd className="font-medium text-navy-800">{item.phone}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">Subject</dt>
                    <dd className="font-medium text-navy-800">{subjectLabels[item.subject]}</dd>
                  </div>
                </dl>

                <div className="mt-4 rounded-xl bg-white/80 p-4">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">{item.message}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </AdminPageLayout>
    </AdminShell>
  );
}
