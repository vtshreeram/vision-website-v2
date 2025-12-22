// ** import core packages
import { NextRequest, NextResponse } from "next/server";

// ** import third party packages
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { turnstileToken } = await req.json();

    // Verify the Turnstile token with Cloudflare
    const turnstileResponse = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      `secret=${process.env.NEXT_PUBLIC_CLOUDFLARE_SECRET_KEY}&response=${turnstileToken}`,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    if (turnstileResponse.data.success) {
      return NextResponse.json({ success: true, message: "Appointment booked successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Captcha verification failed" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error verifying Turnstile token:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
