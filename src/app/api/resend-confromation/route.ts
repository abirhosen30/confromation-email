import { NextRequest, NextResponse } from "next/server";

// এটাও একটা MOCK/DEMO route — আসল backend এ এখানে ইমেইল পাঠানোর
// আসল লজিক (Resend/Nodemailer/SendGrid ইত্যাদি) বসাতে হবে।

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = body?.email;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Resend confirmation requested for:", email);

  return NextResponse.json({ success: true, message: "Confromation email resent" });
}