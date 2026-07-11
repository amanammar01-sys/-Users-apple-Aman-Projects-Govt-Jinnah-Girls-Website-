import { NextResponse } from "next/server";
import { appendContactMessage } from "@/lib/content";
import type { ContactSubject, SenderType } from "@/data/contact-messages";

const VALID_SUBJECTS = new Set<ContactSubject>([
  "admissions",
  "academics",
  "faculty",
  "events",
  "general",
]);

const VALID_SENDER_TYPES = new Set<SenderType>(["student", "parent", "alumni", "other"]);

export async function POST(request: Request) {
  const body = await request.json();

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const senderType = body.senderType as SenderType;
  const subject = body.subject as ContactSubject;
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!email.includes("@")) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!VALID_SUBJECTS.has(subject)) {
    return NextResponse.json({ error: "Please select a valid subject." }, { status: 400 });
  }

  if (!VALID_SENDER_TYPES.has(senderType)) {
    return NextResponse.json({ error: "Please select who you are." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  await appendContactMessage({
    name,
    email,
    phone,
    senderType,
    subject,
    message,
  });

  return NextResponse.json({ success: true });
}
