// pages/admin/products/index.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export async function getServerSideProps() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return {
    props: {
      initialProducts: JSON.parse(JSON.stringify(products)),
    },
  };
}

const formatMoney = (amount, currency) => `${currency} ${Number(amount).toFixed(2)}`;

const AdminProductsPage = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");

  const handleToggleActive = async (product) => {
    setBusyId(product.id);
    setError("");
    try {
      const res = await fetch(`/api/admin/products/${product.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !product.isActive }),
      });
      if (!res.ok) throw new Error("Could not update product status.");
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? { ...p, isActive: !p.isActive } : p))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (product) => {
    if (!confirm(`Delete "${product.name}"? This cannot be undone.`)) return;
    setBusyId(product.id);
    setError("");
    try {
      const res = await fetch(`/api/admin/products/${product.id}`, { method: "DELETE" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Could not delete product.");
      setProducts((prev) => prev.filter((p) => p.id !== product.id));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <>
      <Head>
        <title>Products | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="admin-products">
        <div className="admin-products__header">
          <div>
            <Link href="/admin" className="admin-products__back">
              ← Dashboard
            </Link>
            <h1>Products ({products.length})</h1>
          </div>
          <Link href="/admin/products/new" className="admin-products__add-btn">
            + Add Product
          </Link>
        </div>

        {error && <p className="admin-products__error">{error}</p>}

        <div className="admin-products__table-wrap">
          <table className="admin-products__table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className={busyId === product.id ? "is-busy" : ""}>
                  <td>
                    {product.images?.[0] && (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={40}
                        height={40}
                        style={{ objectFit: "cover", borderRadius: 4 }}
                      />
                    )}
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{formatMoney(product.price, product.currency)}</td>
                  <td className={product.stock <= 3 ? "admin-products__low-stock" : ""}>
                    {product.stock}
                  </td>
                  <td>
                    <button
                      type="button"
                      className={product.isActive ? "status-pill status-pill--active" : "status-pill"}
                      onClick={() => handleToggleActive(product)}
                      disabled={busyId === product.id}
                    >
                      {product.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="admin-products__actions">
                    <Link href={`/admin/products/${product.id}/edit`}>Edit</Link>
                    <button
                      type="button"
                      className="admin-products__delete-btn"
                      onClick={() => handleDelete(product)}
                      disabled={busyId === product.id}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx global>{`
        .admin-products {
          padding: 24px;
          font-family: sans-serif;
          max-width: 1000px;
          margin: 0 auto;
        }
        .admin-products__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 20px;
        }
        .admin-products__back {
          font-size: 13px;
          color: #666;
          text-decoration: none;
        }
        .admin-products__add-btn {
          background: #111;
          color: #fff;
          padding: 10px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
        }
        .admin-products__error {
          color: #c0392b;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .admin-products__table-wrap {
          overflow-x: auto;
        }
        .admin-products__table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .admin-products__table th {
          text-align: left;
          padding: 8px;
          border-bottom: 2px solid #eee;
          color: #666;
          font-weight: 600;
        }
        .admin-products__table td {
          padding: 8px;
          border-bottom: 1px solid #f0f0f0;
          vertical-align: middle;
        }
        .admin-products__table tr.is-busy {
          opacity: 0.5;
        }
        .admin-products__low-stock {
          color: #c0392b;
          font-weight: 600;
        }
        .admin-products__actions {
          display: flex;
          gap: 12px;
          white-space: nowrap;
        }
        .admin-products__actions a {
          color: #111;
        }
        .admin-products__delete-btn {
          background: none;
          border: none;
          color: #c0392b;
          cursor: pointer;
          padding: 0;
          font-size: 14px;
        }
        .status-pill {
          border: 1px solid #ddd;
          background: #f5f5f5;
          color: #666;
          border-radius: 999px;
          padding: 4px 10px;
          font-size: 12px;
          cursor: pointer;
        }
        .status-pill--active {
          background: #e6f4ea;
          border-color: #b7e0c3;
          color: #1e7e34;
        }
      `}</style>
    </>
  );
};

export default AdminProductsPage;
