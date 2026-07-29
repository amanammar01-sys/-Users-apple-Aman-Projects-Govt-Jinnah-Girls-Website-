import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminApiAuthenticated } from "@/lib/auth-edge";
import { getMagazinesContent, saveMagazinesContent } from "@/lib/content";
import type { Magazine } from "@/data/magazines";

export async function GET() {
  const data = await getMagazinesContent();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = (await request.json()) as Magazine[];
  await saveMagazinesContent(data);
  revalidatePath("/magazine");
  return NextResponse.json({ success: true });
}
