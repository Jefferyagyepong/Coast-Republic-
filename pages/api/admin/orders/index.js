// pages/admin/orders/index.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export async function getServerSideProps() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { items: true },
  });

  return {
    props: {
      initialOrders: JSON.parse(JSON.stringify(orders)),
    },
  };
}

const formatMoney = (amount, currency) => `${currency} ${Number(amount).toFixed(2)}`;
const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

const STATUS_OPTIONS = ["PENDING", "CONFIRMED", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];

const STATUS_COLORS = {
  PENDING: "#999",
  CONFIRMED: "#2d7dd2",
  PROCESSING: "#e6a817",
  SHIPPED: "#8e44ad",
  DELIVERED: "#1e7e34",
  CANCELLED: "#c0392b",
};

const AdminOrdersPage = ({ initialOrders }) => {
  const [orders, setOrders] = useState(initialOrders);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");

  const handleStatusChange = async (order, status) => {
    setBusyId(order.id);
    setError("");
    try {
      const res = await fetch(`/api/admin/orders/${order.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Could not update order.");
      setOrders((prev) => prev.map((o) => (o.id === order.id ? { ...o, status } : o)));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <>
      <Head>
        <title>Orders | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="admin-orders">
        <div className="admin-orders__header">
          <Link href="/admin" className="admin-orders__back">
            ← Dashboard
          </Link>
          <h1>Orders ({orders.length})</h1>
        </div>

        {error && <p className="admin-orders__error">{error}</p>}

        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <div className="admin-orders__table-wrap">
            <table className="admin-orders__table">
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className={busyId === order.id ? "is-busy" : ""}>
                    <td className="admin-orders__ref">{order.referenceId.slice(0, 8)}</td>
                    <td>
                      {order.fullName}
                      <br />
                      <span className="admin-orders__muted">{order.phone}</span>
                    </td>
                    <td>{order.items.length}</td>
                    <td>{formatMoney(order.total, order.currency)}</td>
                    <td>
                      <span className={`payment-pill payment-pill--${order.paymentStatus.toLowerCase()}`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td>
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order, e.target.value)}
                        disabled={busyId === order.id}
                        style={{ color: STATUS_COLORS[order.status], fontWeight: 600 }}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="admin-orders__muted">{formatDate(order.createdAt)}</td>
                    <td>
                      <Link href={`/admin/orders/${order.id}`}>View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style jsx global>{`
        .admin-orders {
          padding: 24px;
          font-family: sans-serif;
          max-width: 1100px;
          margin: 0 auto;
        }
        .admin-orders__header {
          margin-bottom: 20px;
        }
        .admin-orders__back {
          font-size: 13px;
          color: #666;
          text-decoration: none;
        }
        .admin-orders__error {
          color: #c0392b;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .admin-orders__table-wrap {
          overflow-x: auto;
        }
        .admin-orders__table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        .admin-orders__table th {
          text-align: left;
          padding: 8px;
          border-bottom: 2px solid #eee;
          color: #666;
          font-weight: 600;
        }
        .admin-orders__table td {
          padding: 8px;
          border-bottom: 1px solid #f0f0f0;
          vertical-align: middle;
        }
        .admin-orders__table tr.is-busy {
          opacity: 0.5;
        }
        .admin-orders__ref {
          font-family: monospace;
        }
        .admin-orders__muted {
          color: #999;
          font-size: 12px;
        }
        .payment-pill {
          border-radius: 999px;
          padding: 3px 8px;
          font-size: 11px;
          background: #f5f5f5;
          color: #666;
        }
        .payment-pill--paid {
          background: #e6f4ea;
          color: #1e7e34;
        }
        .payment-pill--failed {
          background: #fbe6e6;
          color: #c0392b;
        }
        .payment-pill--refunded {
          background: #fdf0e0;
          color: #b9770e;
        }
        .admin-orders select {
          padding: 4px 6px;
          border-radius: 4px;
          border: 1px solid #ddd;
          background: #fff;
        }
      `}</style>
    </>
  );
};

export default AdminOrdersPage;
