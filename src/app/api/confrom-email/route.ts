import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");


  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Token missing" },
      { status: 400 }
    );
  }

  if (token.includes("valid")) {
    return NextResponse.json({ success: true, message: "Email verified" });
  }

  return NextResponse.json(
    { success: false, message: "Invalid or expired token" },
    { status: 400 }
  );
}