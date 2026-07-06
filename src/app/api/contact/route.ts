import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || "dauis.arionejohn@gmail.com";

    // local fallback simulation if environment variables are not set
    if (!host || !user || !pass) {
      console.warn("SMTP environment variables not configured. Simulating mail delivery.");
      console.log("── MOCK EMAIL LOG ──");
      console.log(`From: ${name} <${email}>`);
      console.log(`To: ${contactEmail}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message:\n${message}`);
      console.log("────────────────────");
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, simulated: true });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for port 465
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      to: contactEmail,
      replyTo: email,
      subject: `[Portfolio Contact Form] ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif; padding: 24px; color: #1e2532; max-width: 600px; border: 1px solid #e8edf5; border-radius: 8px; background: #ffffff;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #e8edf5; padding-bottom: 12px; margin-top: 0;">New Message from Portfolio</h2>
          <p style="margin: 6px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 6px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a></p>
          <p style="margin: 6px 0;"><strong>Subject:</strong> ${subject}</p>
          
          <div style="margin-top: 20px; padding: 16px; background-color: #f4f6fa; border-left: 4px solid #f59e0b; border-radius: 4px;">
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #4a5568;">${message}</p>
          </div>
          <p style="font-size: 0.8rem; color: #7a8499; margin-top: 24px; border-top: 1px solid #e8edf5; padding-top: 12px; text-align: center;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SMTP Mail Error Details:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
