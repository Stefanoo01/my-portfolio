import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SubmitButton } from "@/components/submit-button"
import { revalidatePath } from "next/cache"
import nodemailer from "nodemailer"

async function submitContact(formData: FormData) {
  "use server"
  const name = String(formData.get("name") || "")
  const email = String(formData.get("email") || "")
  const message = String(formData.get("message") || "")

  // Basic validation (server-side)
  if (!name || !email || !message) {
    // In a real app, you'd return proper form state or throw a handled error.
    console.log("Contact form validation failed")
    return
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Boolean(process.env.SMTP_SECURE === "true"),
    auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    } : undefined,
  })

  const toAddress = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New message from ${escapeHtml(name)}</title>
  <style>
    /* Base */
    body { margin:0; padding:0; background:#0b0b0c; color:#e6e6e6; font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif; }
    a { color:#60a5fa; text-decoration:none; }
    .wrapper { width:100%; padding:32px 16px; background:linear-gradient(180deg, rgba(12,12,13,1) 0%, rgba(14,14,15,1) 100%); }
    .container { max-width:640px; margin:0 auto; background:#111214; border:1px solid #1f2124; border-radius:12px; overflow:hidden; box-shadow:0 10px 24px rgba(0,0,0,0.35); }
    .header { padding:20px 24px; border-bottom:1px solid #1f2124; background:#0f1012; }
    .title { margin:0; font-size:18px; font-weight:600; letter-spacing:0.2px; color:#e6e6e6; }
    .subtitle { margin:4px 0 0; color:#a1a1aa; font-size:13px; }
    .content { padding:24px; }
    .section { margin-bottom:16px; }
    .label { display:block; font-size:12px; color:#9ca3af; margin-bottom:6px; text-transform:uppercase; letter-spacing:0.08em; }
    .pill { display:inline-block; padding:8px 12px; border-radius:8px; background:#0b0c0f; border:1px solid #1f2124; color:#e6e6e6; font-size:14px; }
    .message { white-space:pre-wrap; line-height:1.6; padding:16px; border-radius:10px; background:#0b0c0f; border:1px solid #1f2124; color:#d4d4d8; }
    .footer { padding:16px 24px; border-top:1px solid #1f2124; color:#8b8b91; font-size:12px; background:#0f1012; }
    .muted { color:#8b8b91; }
  </style>
<!--[if mso]>
  <style type="text/css">
    .message { font-family: Arial, sans-serif !important; }
  </style>
<![endif]-->
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1 class="title">New portfolio message</h1>
        <p class="subtitle">You received a new message from your site contact form.</p>
      </div>
      <div class="content">
        <div class="section">
          <span class="label">From</span>
          <span class="pill">${escapeHtml(name)}</span>
        </div>
        <div class="section">
          <span class="label">Email</span>
          <span class="pill">${escapeHtml(email)}</span>
        </div>
        <div class="section">
          <span class="label">Message</span>
          <div class="message">${escapeHtml(message)}</div>
        </div>
      </div>
      <div class="footer">
        <span class="muted">This email was sent from the contact form on your portfolio.</span>
      </div>
    </div>
  </div>
</body>
</html>`

  await transport.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || `Portfolio <no-reply@${process.env.SMTP_HOST || "local"}>`,
    to: toAddress,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html,
  })

  // Optionally revalidate a path if you're showing recent messages, etc.
  revalidatePath("/")
}

export function ContactForm() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-b">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-8">
          <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted-foreground mt-2">
            Have a project or opportunity in mind? I’d be happy to connect and explore it.
          </p>
        </div>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>I typically respond within 1–2 business days.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={submitContact} className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Looking to collaborate or hire? Share the details here..." rows={5} required />
              </div>
              <div>
                <SubmitButton>Send message</SubmitButton>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
