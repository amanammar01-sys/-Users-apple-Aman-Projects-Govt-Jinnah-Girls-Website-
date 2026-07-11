import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminApiAuthenticated } from "@/lib/auth-edge";
import { getFacultyContent, saveFacultyContent } from "@/lib/content";
import type { FacultyData } from "@/lib/content";

export async function GET() {
  const data = await getFacultyContent();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as FacultyData;
  await saveFacultyContent(data);
  revalidatePath("/");
  revalidatePath("/faculty");
  return NextResponse.json({ success: true });
}
