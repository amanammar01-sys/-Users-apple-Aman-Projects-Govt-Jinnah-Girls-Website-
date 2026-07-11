import { NextResponse } from "next/server";
import { ADMIN_COOKIE, createEdgeSessionToken } from "@/lib/auth-edge";
import { getAdminPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const password = body.password as string;

  if (!password || password !== getAdminPassword()) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = await createEdgeSessionToken();
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
