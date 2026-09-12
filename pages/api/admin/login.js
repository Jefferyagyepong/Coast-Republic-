// pages/api/admin/login.js
import { prisma } from "@/lib/prisma";
import { verifyPassword, hashPassword } from "@/lib/auth";
import {
  createSessionToken,
  serializeCookie,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
} from "@/lib/session";

// A dummy hash used to run verifyPassword's full scrypt cost even when no
// admin matches the given email — keeps "wrong email" and "wrong password"
// taking roughly the same amount of time, so response timing can't be used
// to enumerate valid admin emails.
const DUMMY_HASH = hashPassword("not-a-real-password");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const admin = await prisma.admin.findUnique({
    where: { email: email.trim().toLowerCase() },
  });

  const validPassword = verifyPassword(password, admin ? admin.passwordHash : DUMMY_HASH);

  if (!admin || !validPassword) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  const token = await createSessionToken(admin.id);

  res.setHeader(
    "Set-Cookie",
    serializeCookie(SESSION_COOKIE, token, { maxAge: SESSION_MAX_AGE_SECONDS })
  );

  return res.status(200).json({ ok: true });
}
