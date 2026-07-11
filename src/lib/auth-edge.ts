const ADMIN_COOKIE = "gjgcw_admin_session";
const MESSAGE = "gjgcw-admin-authenticated";

function getSecret() {
  return process.env.ADMIN_SECRET || "gjgcw-dev-secret-change-in-production";
}

function bufferToHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createEdgeSessionToken() {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(MESSAGE));
  return bufferToHex(signature);
}

export async function verifyEdgeSessionToken(token: string | undefined) {
  if (!token) return false;
  const expected = await createEdgeSessionToken();
  return token === expected;
}

export async function isAdminApiAuthenticated() {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  return verifyEdgeSessionToken(cookieStore.get(ADMIN_COOKIE)?.value);
}

export { ADMIN_COOKIE };
