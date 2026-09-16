// pages/admin/index.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const AdminDashboard = () => {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      router.push("/admin/login");
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard | Coast Republic</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div style={{ padding: 24, fontFamily: "sans-serif", maxWidth: 600, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} disabled={loggingOut}>
            {loggingOut ? "Signing out..." : "Log out"}
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
          <Link
            href="/admin/products"
            style={{
              padding: 16,
              border: "1px solid #ddd",
              borderRadius: 8,
              textDecoration: "none",
              color: "#111",
            }}
          >
            📦 Manage Products
          </Link>
          <Link
            href="/admin/orders"
            style={{
              padding: 16,
              border: "1px solid #ddd",
              borderRadius: 8,
              textDecoration: "none",
              color: "#111",
            }}
          >
            🧾 View Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
