import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminApiAuthenticated } from "@/lib/auth-edge";
import { getActivitiesContent, saveActivitiesContent } from "@/lib/content";
import type { CampusActivity } from "@/data/activities";

export async function GET() {
  const data = await getActivitiesContent();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as CampusActivity[];
  await saveActivitiesContent(data);
  revalidatePath("/");
  return NextResponse.json({ success: true });
}
