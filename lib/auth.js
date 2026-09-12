// lib/auth.js
// Password hashing using Node's built-in crypto module — no external
// dependency (bcrypt/argon2 etc). Node-only: do not import this from
// middleware.js, since middleware runs on the Edge runtime.
import crypto from "crypto";

const KEY_LENGTH = 64;

export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const derivedKey = crypto.scryptSync(password, salt, KEY_LENGTH);
  return `${salt}:${derivedKey.toString("hex")}`;
}

export function verifyPassword(password, stored) {
  if (!stored || !stored.includes(":")) return false;
  const [salt, hashHex] = stored.split(":");
  const derivedKey = crypto.scryptSync(password, salt, KEY_LENGTH);
  const storedBuffer = Buffer.from(hashHex, "hex");
  if (storedBuffer.length !== derivedKey.length) return false;
  return crypto.timingSafeEqual(storedBuffer, derivedKey);
}
