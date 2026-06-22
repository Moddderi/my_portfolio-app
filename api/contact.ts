import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Разрешаем CORS для запросов с вашего фронтенда
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "kiricenkoo182@gmail.com",
      subject: `New message from portfolio by ${email}`,
      replyTo: email,
      text: `User with email: ${email} left the following message:\n\n${message}`,
    });

    if (data.error) {
      console.error("Resend service error:", data.error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send via email service" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Email successfully sent!" });
  } catch (error) {
    console.error("Internal server error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error while sending" });
  }
}
