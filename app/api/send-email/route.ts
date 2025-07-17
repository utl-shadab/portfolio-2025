import { NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  const data = await request.json()

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"${data.name}" <${data.email}>`,
    to: "shadab28696@gmail.com",
    subject: `New Message from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <hr style="border: 1px solid #eee;" />
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Services:</strong> ${data.services.join(", ")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line; background: #fff; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
          ${data.message}
        </p>
        <hr style="border: 1px solid #eee;" />
        <p style="color: #888; font-size: 0.9em;">This message was sent via your contact form.</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("Email error:", error)
    return new Response(JSON.stringify({ success: false }), { status: 500 })
  }
}