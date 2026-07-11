import { NextResponse } from "next/server";
import { isAdminApiAuthenticated } from "@/lib/auth-edge";
import { getContactMessages, saveContactMessages } from "@/lib/content";

export async function GET() {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await getContactMessages();
  return NextResponse.json(messages);
}

export async function PATCH(request: Request) {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, read } = (await request.json()) as { id?: string; read?: boolean };

  if (!id || typeof read !== "boolean") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const messages = await getContactMessages();
  const index = messages.findIndex((m) => m.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Message not found" }, { status: 404 });
  }

  messages[index] = { ...messages[index], read };
  await saveContactMessages(messages);

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const id = new URL(request.url).searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Message id required" }, { status: 400 });
  }

  const messages = await getContactMessages();
  const filtered = messages.filter((m) => m.id !== id);

  if (filtered.length === messages.length) {
    return NextResponse.json({ error: "Message not found" }, { status: 404 });
  }

  await saveContactMessages(filtered);
  return NextResponse.json({ success: true });
}
