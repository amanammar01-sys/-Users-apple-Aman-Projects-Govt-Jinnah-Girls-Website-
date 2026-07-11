import fs from "fs/promises";
import path from "path";
import { head, put } from "@vercel/blob";

const CONTENT_DIR = path.join(process.cwd(), "data", "content");
const BLOB_PREFIX = "content";

function isBlobStorageEnabled() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function blobPath(filename: string) {
  return `${BLOB_PREFIX}/${filename}`;
}

export function getContentPath(filename: string) {
  return path.join(CONTENT_DIR, filename);
}

async function readBlobFile<T>(filename: string, fallback: T): Promise<T> {
  try {
    const meta = await head(blobPath(filename));
    const response = await fetch(meta.url);
    if (!response.ok) throw new Error("Blob read failed");
    return (await response.json()) as T;
  } catch {
    await writeBlobFile(filename, fallback);
    return fallback;
  }
}

async function writeBlobFile<T>(filename: string, data: T) {
  await put(blobPath(filename), JSON.stringify(data, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function readContentFile<T>(filename: string, fallback: T): Promise<T> {
  if (isBlobStorageEnabled()) {
    return readBlobFile(filename, fallback);
  }

  const filePath = getContentPath(filename);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    await writeContentFile(filename, fallback);
    return fallback;
  }
}

export async function writeContentFile<T>(filename: string, data: T) {
  if (isBlobStorageEnabled()) {
    await writeBlobFile(filename, data);
    return;
  }

  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.writeFile(getContentPath(filename), JSON.stringify(data, null, 2), "utf-8");
}

export async function uploadGalleryImage(file: File, filename: string) {
  if (isBlobStorageEnabled()) {
    const blob = await put(`gallery/${filename}`, file, {
      access: "public",
      addRandomSuffix: false,
    });
    return blob.url;
  }

  const uploadDir = path.join(process.cwd(), "public", "images", "gallery");
  await fs.mkdir(uploadDir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(uploadDir, filename), buffer);
  return `/images/gallery/${filename}`;
}
