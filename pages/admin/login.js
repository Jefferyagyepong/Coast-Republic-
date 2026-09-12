// pages/admin/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";
import Head from "next/head";

const AdminLoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || "Login failed.");
      }

      const from = router.query.from;
      router.push(typeof from === "string" ? from : "/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login | Coast Republic</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <h6 className="brand-tag">Built for the Culture </h6>

      <div className="admin-login">
        <form onSubmit={handleSubmit} className="admin-login__form" noValidate>
          <h6>Coast Republic Admin</h6>

          <label>
            Email
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error && (
            <p role="alert" className="admin-login__error">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
      <FootBottom />

      <style jsx global>{`
        .admin-login {
      
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          padding: 16px;
        }
        .admin-login__form {
          background: #fff;
          padding: 32px;
          border-radius: 10px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 340px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .admin-login__form h1 {
          font-size: 18px;
          margin-bottom: 4px;
        }
        .admin-login__form label {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 13px;
          color: #333;
        }
        .admin-login__form input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }
        .admin-login__form button {
          margin-top: 6px;
          padding: 11px;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
        }
        .admin-login__form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .admin-login__error {
          color: #c0392b;
          font-size: 13px;
          margin: 0;
        }
        .brand-tag{
        color:#000;
        }
      `}</style>
    </>
  );
};

export default AdminLoginPage;
