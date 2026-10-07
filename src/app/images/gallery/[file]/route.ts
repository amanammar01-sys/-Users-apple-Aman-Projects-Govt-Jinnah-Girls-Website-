import fs from "fs/promises";
import path from "path";

// Next.js only serves files that were in /public when the server started.
// Gallery images uploaded via the admin panel (filesystem storage, e.g. cPanel)
// fall through to this route until the next restart.
const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");

const CONTENT_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const name = path.basename(file);
  const contentType = CONTENT_TYPES[path.extname(name).toLowerCase()];

  if (!contentType || name !== file) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const data = await fs.readFile(path.join(GALLERY_DIR, name));
    return new Response(new Uint8Array(data), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
