import nodemailer from "nodemailer";

const validateEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
};

const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email and message are required" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const transporter = nodemailer.createTransport({
    host: getEnv("SMTP_HOST"),
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: getEnv("SMTP_USER"),
      pass: getEnv("SMTP_PASS"),
    },
  });

  const to = process.env.EMAIL_TO ?? process.env.SMTP_USER;

  const mailOptions = {
    from: `"Website Contact" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
    to,
    subject: `New message from your website: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, "<br />")}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("send-email failed", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
