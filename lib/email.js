// lib/email.js
// Uses Resend's plain REST API via fetch — no "resend" package installed.
// Env vars needed:
//   RESEND_API_KEY   — from resend.com dashboard
//   EMAIL_FROM       — e.g. "Coast Republic <orders@yourdomain.com>"
//   ADMIN_EMAIL      — where new-order alerts go, e.g. you@yourdomain.com
//   NEXT_PUBLIC_SITE_URL — e.g. https://coast-republic.vercel.app

const RESEND_API_URL = "https://api.resend.com/emails";

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount || 0).toFixed(2)}`;

async function sendEmail({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "Coast Republic <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — skipping email send.");
    return { skipped: true };
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("Resend email failed:", res.status, errText);
      return { error: true, status: res.status };
    }

    return res.json();
  } catch (err) {
    console.error("Resend email request threw:", err);
    return { error: true, message: err.message };
  }
}

function renderItemsRows(items, currency) {
  return items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px 0;border-bottom:1px solid #eee;">
            ${item.name}${item.size ? ` · ${item.size}` : ""}${item.color ? ` · ${item.color}` : ""}
            <br/><span style="color:#777;font-size:12px;">Qty ${item.quantity}</span>
          </td>
          <td style="padding:8px 0;border-bottom:1px solid #eee;text-align:right;">
            ${formatMoney(item.price * item.quantity, currency)}
          </td>
        </tr>
      `
    )
    .join("");
}

function baseEmailShell(title, bodyHtml) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#111;">
      <h2 style="margin-bottom:4px;">${title}</h2>
      ${bodyHtml}
      <p style="margin-top:32px;font-size:12px;color:#999;">Coast Republic</p>
    </div>
  `;
}

/**
 * Sends the customer-facing confirmation email.
 * @param {object} order - the created Order record, with `items` included.
 */
export async function sendOrderConfirmationEmail(order) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const confirmationLink = `${siteUrl}/order-confirmation/${order.referenceId}`;

  const html = baseEmailShell(
    `Thanks for your order, ${order.fullName.split(" ")[0]}!`,
    `
      <p>Your order <strong>#${order.referenceId}</strong> has been received.</p>

      <table style="width:100%;border-collapse:collapse;margin:20px 0;">
        ${renderItemsRows(order.items, order.currency)}
      </table>

      <table style="width:100%;font-size:14px;">
        <tr><td>Subtotal</td><td style="text-align:right;">${formatMoney(order.subtotal, order.currency)}</td></tr>
        <tr><td>${order.deliveryMethod === "pickup" ? "Pickup" : "Delivery"}</td><td style="text-align:right;">${formatMoney(order.deliveryFee, order.currency)}</td></tr>
        <tr><td>Tax</td><td style="text-align:right;">${formatMoney(order.tax, order.currency)}</td></tr>
        <tr style="font-weight:bold;"><td style="padding-top:8px;">Total</td><td style="text-align:right;padding-top:8px;">${formatMoney(order.total, order.currency)}</td></tr>
      </table>

      <p style="margin-top:24px;">
        ${
          order.deliveryMethod === "pickup"
            ? `Pickup location: <strong>${order.pickupLocation || "Coast Republic Store"}</strong>. We'll text you when it's ready.`
            : `Delivering to: ${order.address}, ${order.city}, ${order.region}.`
        }
      </p>

      <p>Payment method: ${order.paymentMethod === "momo" ? `Mobile Money (${order.momoNetwork || "—"})` : "Cash on delivery"}</p>

      ${
        confirmationLink
          ? `<p><a href="${confirmationLink}" style="color:#111;">View your order online</a></p>`
          : ""
      }
    `
  );

  return sendEmail({
    to: order.email,
    subject: `Order confirmed — #${order.referenceId}`,
    html,
  });
}

/**
 * Sends the admin/store-owner new-order alert.
 * @param {object} order - the created Order record, with `items` included.
 */
export async function sendAdminOrderNotification(order) {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) {
    console.error("ADMIN_EMAIL is not set — skipping admin notification.");
    return { skipped: true };
  }

  const html = baseEmailShell(
    `New order — #${order.referenceId}`,
    `
      <p><strong>${order.fullName}</strong> · ${order.phone} · ${order.email}</p>

      <table style="width:100%;border-collapse:collapse;margin:20px 0;">
        ${renderItemsRows(order.items, order.currency)}
      </table>

      <p style="font-weight:bold;">Total: ${formatMoney(order.total, order.currency)}</p>

      <p>
        ${
          order.deliveryMethod === "pickup"
            ? "Pickup order"
            : `Deliver to: ${order.address}, ${order.city}, ${order.region}`
        }
        <br/>
        Payment: ${order.paymentMethod === "momo" ? `Mobile Money (${order.momoNetwork || "—"})` : "Cash on delivery"}
      </p>

      ${order.notes ? `<p>Notes: ${order.notes}</p>` : ""}
    `
  );

  return sendEmail({
    to: adminEmail,
    subject: `🛒 New order #${order.referenceId} — ${formatMoney(order.total, order.currency)}`,
    html,
  });
}
