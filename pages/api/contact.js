// Contact form endpoint.
// Right now it validates the message and logs it on the server.
// To receive emails, plug in a mail provider here (e.g. nodemailer with SMTP, Resend, or SendGrid).

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};
  const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const data = { name: clean(name, 120), email: clean(email, 200), message: clean(message, 5000) };

  if (!data.name || !/^\S+@\S+\.\S+$/.test(data.email) || data.message.length < 10) {
    return res.status(400).json({ error: "Please fill in all fields correctly." });
  }

  // TODO: send the email here
  console.log("[contact] New message:", data);

  return res.status(200).json({ ok: true });
}
