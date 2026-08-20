import { NextResponse } from "next/server";

/**
 * Issues the human-readable enquiry reference shown on the success screen.
 *
 * Delivery itself is handled by EmailJS from the browser, but the reference is
 * generated here so it cannot be forged or duplicated by page state, and so the
 * year comes from the server clock rather than the visitor's device.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no I/O/0/1 — read aloud over the phone

export async function POST() {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  const suffix = Array.from(bytes, (byte) => ALPHABET[byte % ALPHABET.length]).join("");

  return NextResponse.json(
    { reference: `AI-${new Date().getUTCFullYear()}-${suffix}` },
    { status: 201 },
  );
}
