import { cookies } from "next/headers";
import crypto from "crypto";

export const ADMIN_COOKIE = "gjgcw_admin_session";

function getSecret() {
  return process.env.ADMIN_SECRET || "gjgcw-dev-secret-change-in-production";
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "123456";
}

export function createSessionToken() {
  return crypto.createHmac("sha256", getSecret()).update("gjgcw-admin-authenticated").digest("hex");
}

export function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  const expected = createSessionToken();
  try {
    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return verifySessionToken(token);
}
