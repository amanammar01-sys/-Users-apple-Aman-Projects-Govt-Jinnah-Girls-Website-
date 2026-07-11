import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminApiAuthenticated } from "@/lib/auth-edge";
import { getNewsContent, saveNewsContent } from "@/lib/content";
import type { NewsItem } from "@/data/news";

export async function GET() {
  const data = await getNewsContent();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as NewsItem[];
  await saveNewsContent(data);
  revalidatePath("/");
  revalidatePath("/news");
  return NextResponse.json({ success: true });
}
