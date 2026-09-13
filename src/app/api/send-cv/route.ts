import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CV_FILENAME = "Blaise_CV_ProductDesignerUXUI.pdf";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Blaise Rajaofetra" <${user}>`,
      to: email,
      subject: "Mon CV — Blaise Rajaofetra, Product UX/UI Designer",
      text: "Bonjour,\n\nMerci pour votre intérêt ! Vous trouverez mon CV en pièce jointe.\n\nÀ bientôt,\nBlaise Rajaofetra",
      attachments: [
        {
          filename: CV_FILENAME,
          path: path.join(process.cwd(), "public", CV_FILENAME),
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send CV email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
