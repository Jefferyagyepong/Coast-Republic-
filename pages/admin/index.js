// pages/admin/index.js
import { useState } from "react";
import Head from "next/head";
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

      <div style={{ padding: 24, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} disabled={loggingOut}>
            {loggingOut ? "Signing out..." : "Log out"}
          </button>
        </div>
        <p>
          You're authenticated. Product and order management sections will go
          here next.
        </p>
      </div>
    </>
  );
};

export default AdminDashboard;
