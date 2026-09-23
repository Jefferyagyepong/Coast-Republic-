// lib/paystack.js
// Talks to Paystack's REST API directly via fetch — no SDK installed.
const PAYSTACK_BASE = "https://api.paystack.co";

function getSecretKey() {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) throw new Error("PAYSTACK_SECRET_KEY is not set.");
  return key;
}

/**
 * Starts a transaction. Amount must be in the smallest currency unit
 * (pesewas for GHS — i.e. multiply the cedi amount by 100).
 */
export async function paystackInitialize({ email, amount, reference, callback_url, metadata }) {
  const res = await fetch(`${PAYSTACK_BASE}/transaction/initialize`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, amount, reference, callback_url, currency: "GHS", metadata }),
  });

  const data = await res.json();
  if (!res.ok || !data.status) {
    throw new Error(data.message || "Could not initialize payment.");
  }
  return data.data; // { authorization_url, access_code, reference }
}

/**
 * Independently re-checks a transaction's real status directly with
 * Paystack. Always call this before trusting any webhook payload.
 */
export async function paystackVerify(reference) {
  const res = await fetch(`${PAYSTACK_BASE}/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${getSecretKey()}` },
  });
  const data = await res.json();
  if (!res.ok || !data.status) {
    throw new Error(data.message || "Could not verify payment.");
  }
  return data.data; // { status: 'success' | 'failed' | ..., amount, reference, ... }
}
