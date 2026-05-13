import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const payload = {
      your_name: body.your_name ?? "",
      email_address: body.email_address ?? "",
      message: body.message ?? "",
    };

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return NextResponse.json({ success: false, error: "Missing script URL" }, { status: 500 });
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const text = await res.text(); // Apps Script sometimes returns plain text or HTML redirect
    return NextResponse.json({ success: true, upstream: text });
  } catch (err: any) {
    console.error("API Proxy Error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
