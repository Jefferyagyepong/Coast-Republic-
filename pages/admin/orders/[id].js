// pages/admin/orders/[id].js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export async function getServerSideProps({ params }) {
  const order = await prisma.order.findUnique({
    where: { id: params.id },
    include: { items: true },
  });

  if (!order) return { notFound: true };

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)),
    },
  };
}

const formatMoney = (amount, currency) => `${currency} ${Number(amount).toFixed(2)}`;
const formatDateTime = (iso) => new Date(iso).toLocaleString();

const STATUS_OPTIONS = ["PENDING", "CONFIRMED", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];
const PAYMENT_STATUS_OPTIONS = ["PENDING", "PAID", "FAILED", "REFUNDED"];

const AdminOrderDetailPage = ({ order: initialOrder }) => {
  const [order, setOrder] = useState(initialOrder);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const updateField = async (field, value) => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/orders/${order.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Could not update order.");
      setOrder((prev) => ({ ...prev, [field]: value }));
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Head>
        <title>Order {order.referenceId} | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="admin-order">
        <Link href="/admin/orders" className="admin-order__back">
          ← Orders
        </Link>
        <h1>Order {order.referenceId}</h1>
        <p className="admin-order__muted">Placed {formatDateTime(order.createdAt)}</p>

        {error && <p className="admin-order__error">{error}</p>}

        <div className="admin-order__layout">
          <section>
            <h2>Items</h2>
            <ul className="admin-order__items">
              {order.items.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.name}
                    {(item.size || item.color) && (
                      <span className="admin-order__muted">
                        {" "}
                        ({[item.color, item.size].filter(Boolean).join(" · ")})
                      </span>
                    )}
                    {" "}× {item.quantity}
                  </span>
                  <span>{formatMoney(item.price * item.quantity, order.currency)}</span>
                </li>
              ))}
            </ul>

            <dl className="admin-order__totals">
              <div><dt>Subtotal</dt><dd>{formatMoney(order.subtotal, order.currency)}</dd></div>
              <div><dt>{order.deliveryMethod === "pickup" ? "Pickup" : "Delivery"}</dt><dd>{formatMoney(order.deliveryFee, order.currency)}</dd></div>
              <div><dt>Tax</dt><dd>{formatMoney(order.tax, order.currency)}</dd></div>
              <div className="admin-order__totals-final"><dt>Total</dt><dd>{formatMoney(order.total, order.currency)}</dd></div>
            </dl>
          </section>

          <aside>
            <h2>Customer</h2>
            <p>{order.fullName}<br />{order.phone}<br />{order.email}</p>

            <h2>Delivery</h2>
            <p>
              {order.deliveryMethod === "pickup" ? (
                <>Pickup — {order.pickupLocation || "Coast Republic Store"}</>
              ) : (
                <>{order.address}, {order.city}, {order.region}</>
              )}
            </p>
            {order.notes && (
              <>
                <h2>Notes</h2>
                <p>{order.notes}</p>
              </>
            )}

            <h2>Payment</h2>
            <p>
              {order.paymentMethod === "momo"
                ? `Mobile Money (${order.momoNetwork || "—"})`
                : "Cash on delivery"}
            </p>

            <label className="admin-order__field">
              Payment Status
              <select
                value={order.paymentStatus}
                onChange={(e) => updateField("paymentStatus", e.target.value)}
                disabled={saving}
              >
                {PAYMENT_STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>

            <label className="admin-order__field">
              Order Status
              <select
                value={order.status}
                onChange={(e) => updateField("status", e.target.value)}
                disabled={saving}
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
          </aside>
        </div>
      </div>

      <style jsx global>{`
        .admin-order {
          padding: 24px;
          font-family: sans-serif;
          max-width: 900px;
          margin: 0 auto;
        }
        .admin-order__back {
          font-size: 13px;
          color: #666;
          text-decoration: none;
        }
        .admin-order__muted {
          color: #999;
          font-size: 13px;
        }
        .admin-order__error {
          color: #c0392b;
          font-size: 13px;
        }
        .admin-order__layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 32px;
          margin-top: 20px;
        }
        @media (max-width: 640px) {
          .admin-order__layout {
            grid-template-columns: 1fr;
          }
        }
        .admin-order__items {
          list-style: none;
          padding: 0;
          margin: 12px 0;
        }
        .admin-order__items li {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: 14px;
        }
        .admin-order__totals div {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 6px;
        }
        .admin-order__totals-final {
          font-weight: bold;
          border-top: 1px solid #ddd;
          padding-top: 6px;
        }
        .admin-order h2 {
          font-size: 14px;
          margin: 16px 0 6px;
        }
        .admin-order__field {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 13px;
          margin-top: 12px;
        }
        .admin-order__field select {
          padding: 8px;
          border-radius: 6px;
          border: 1px solid #ddd;
        }
      `}</style>
    </>
  );
};

export default AdminOrderDetailPage;
