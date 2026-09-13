// pages/admin/products/[id]/edit.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { prisma } from "@/lib/prisma";

export async function getServerSideProps({ params }) {
  const product = await prisma.product.findUnique({ where: { id: params.id } });
  if (!product) return { notFound: true };

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

const EditProductPage = ({ product }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: product.name,
    slug: product.slug,
    price: String(product.price),
    currency: product.currency,
    category: product.category,
    stock: String(product.stock),
    description: product.description,
    sizes: product.sizes.join(", "),
    colors: product.colors.join(", "),
    images: product.images.join("\n"),
    isActive: product.isActive,
  });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch(`/api/admin/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          slug: form.slug,
          price: Number(form.price),
          currency: form.currency,
          category: form.category,
          stock: Number(form.stock),
          description: form.description,
          sizes: form.sizes.split(",").map((s) => s.trim()).filter(Boolean),
          colors: form.colors.split(",").map((c) => c.trim()).filter(Boolean),
          images: form.images.split("\n").map((i) => i.trim()).filter(Boolean),
          isActive: form.isActive,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Could not update product.");

      router.push("/admin/products");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Head>
        <title>Edit {product.name} | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="admin-form-page">
        <Link href="/admin/products" className="admin-form-page__back">
          ← Products
        </Link>
        <h1>Edit Product</h1>

        <form onSubmit={handleSubmit} className="admin-form">
          <label>
            Name
            <input type="text" name="name" required value={form.name} onChange={handleChange} />
          </label>

          <label>
            Slug (URL)
            <input type="text" name="slug" required value={form.slug} onChange={handleChange} />
          </label>

          <div className="admin-form__row">
            <label>
              Price
              <input
                type="number"
                name="price"
                step="0.01"
                min="0"
                required
                value={form.price}
                onChange={handleChange}
              />
            </label>
            <label>
              Currency
              <input type="text" name="currency" value={form.currency} onChange={handleChange} />
            </label>
            <label>
              Stock
              <input type="number" name="stock" min="0" value={form.stock} onChange={handleChange} />
            </label>
          </div>

          <label>
            Category
            <input type="text" name="category" required value={form.category} onChange={handleChange} />
          </label>

          <label>
            Description
            <textarea
              name="description"
              rows={4}
              required
              value={form.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Sizes (comma-separated)
            <input type="text" name="sizes" value={form.sizes} onChange={handleChange} />
          </label>

          <label>
            Colors (comma-separated)
            <input type="text" name="colors" value={form.colors} onChange={handleChange} />
          </label>

          <label>
            Image URLs (one per line)
            <textarea name="images" rows={3} value={form.images} onChange={handleChange} />
          </label>

          <label className="admin-form__checkbox">
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
            />
            Active (visible on the storefront)
          </label>

          {error && <p className="admin-form__error">{error}</p>}

          <button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>

      <style jsx global>{`
        .admin-form-page {
          padding: 24px;
          font-family: sans-serif;
          max-width: 600px;
          margin: 0 auto;
        }
        .admin-form-page__back {
          font-size: 13px;
          color: #666;
          text-decoration: none;
        }
        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 16px;
        }
        .admin-form label {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 13px;
          color: #333;
        }
        .admin-form input,
        .admin-form textarea {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          font-family: inherit;
        }
        .admin-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
        }
        .admin-form__checkbox {
          flex-direction: row !important;
          align-items: center;
          gap: 8px !important;
        }
        .admin-form button {
          margin-top: 8px;
          padding: 12px;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
        }
        .admin-form button:disabled {
          opacity: 0.6;
        }
        .admin-form__error {
          color: #c0392b;
          font-size: 13px;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default EditProductPage;
