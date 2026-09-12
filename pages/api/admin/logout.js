// pages/api/admin/logout.js
import { serializeCookie, SESSION_COOKIE } from "@/lib/session";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  res.setHeader("Set-Cookie", serializeCookie(SESSION_COOKIE, "", { maxAge: 0 }));
  return res.status(200).json({ ok: true });
}
