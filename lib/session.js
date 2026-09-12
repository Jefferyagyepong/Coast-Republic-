// lib/session.js
// Uses the Web Crypto API (crypto.subtle) rather than Node's `crypto` module,
// so this file works unmodified in both Node.js API routes AND Edge middleware.
// No external dependency.

export const SESSION_COOKIE = "cr_admin_session";
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

const encoder = new TextEncoder();

function toBase64Url(bytes) {
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(b64url) {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  const str = atob(b64);
  const bytes = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i);
  return bytes;
}

async function getKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET environment variable is not set.");
  }
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createSessionToken(adminId) {
  const expires = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = `${adminId}.${expires}`;
  const key = await getKey();
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const sigB64 = toBase64Url(new Uint8Array(signature));
  return `${payload}.${sigB64}`;
}

/**
 * Returns the adminId if the token is valid and unexpired, otherwise null.
 */
export async function verifySessionToken(token) {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [adminId, expiresStr, sigB64] = parts;
  const expires = Number(expiresStr);
  if (!adminId || !expires || Number.isNaN(expires)) return null;
  if (Date.now() > expires) return null;

  try {
    const payload = `${adminId}.${expiresStr}`;
    const key = await getKey();
    const signatureBytes = fromBase64Url(sigB64);
    const valid = await crypto.subtle.verify("HMAC", key, signatureBytes, encoder.encode(payload));
    return valid ? adminId : null;
  } catch {
    return null;
  }
}

/**
 * Builds a Set-Cookie header value without needing the `cookie` npm package.
 */
export function serializeCookie(name, value, options = {}) {
  const {
    maxAge,
    path = "/",
    httpOnly = true,
    secure = process.env.NODE_ENV === "production",
    sameSite = "Lax",
  } = options;

  let cookie = `${name}=${value}; Path=${path}`;
  if (maxAge !== undefined) cookie += `; Max-Age=${maxAge}`;
  if (httpOnly) cookie += "; HttpOnly";
  if (secure) cookie += "; Secure";
  if (sameSite) cookie += `; SameSite=${sameSite}`;
  return cookie;
}
