import { NextResponse } from "next/server";

export async function POST(req) {
  const form = await req.formData();
  const file = form.get("image");

  // Placeholder result (no AI yet)
  // Return the same image URL so UI flow works
  const bytes = Buffer.from(await file.arrayBuffer());
  const base64 = `data:${file.type};base64,${bytes.toString("base64")}`;

  return NextResponse.json({
    image: base64
  });
}
