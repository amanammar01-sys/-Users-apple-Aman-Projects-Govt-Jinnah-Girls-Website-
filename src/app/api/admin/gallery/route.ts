import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminApiAuthenticated } from "@/lib/auth-edge";
import { getGalleryContent, saveGalleryContent } from "@/lib/content";
import type { GalleryImage } from "@/data/gallery";

export async function GET() {
  const data = await getGalleryContent();
  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  if (!(await isAdminApiAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = (await request.json()) as GalleryImage[];
  await saveGalleryContent(data);
  revalidatePath("/");
  revalidatePath("/gallery");
  return NextResponse.json({ success: true });
}
