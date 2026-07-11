import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminApiAuthenticated } from "@/lib/auth-edge";
import { getScheduledEventsContent, saveScheduledEventsContent } from "@/lib/content";
import type { ScheduledEvent } from "@/data/events";

export async function GET() {
  const data = await getScheduledEventsContent();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as ScheduledEvent[];
  await saveScheduledEventsContent(data);
  revalidatePath("/");
  revalidatePath("/events");
  return NextResponse.json({ success: true });
}
