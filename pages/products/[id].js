import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@/components/Head/Navbar";      // ✅ consistent with rest of project
import FootBottom from "@/components/Footer/FootBottom";
import { useCart } from "@/context/CartContext";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";

// ── Data fetching ──────────────────────────────────────────────────────────

export async function getStaticPaths() {
  const slugs = await getAllProductSlugs();

  return {
    paths: slugs
      .filter((slug) => typeof slug === "string" && slug.length > 0) // ✅ guard undefined
      .map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) return { notFound: true };

  return {
    props: {
      product: {
        ...product,
        // ✅ serialize Dates — Next.js can't pass Date objects as props
        createdAt: product.createdAt?.toISOString() ?? null,
        updatedAt: product.updatedAt?.toISOString() ?? null,
      },
    },
    revalidate: 60,
  };
}

// ── Helpers ────────────────────────────────────────────────────────────────

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount || 0).toFixed(2)}`;

// ── Component ──────────────────────────────────────────────────────────────

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { addToCart, cartCount } = useCart();

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? null);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? null);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  // ── Fallback while statically generating (fallback: "blocking" hides this,
  //    but keeping it is defensive in case fallback is changed to true later)
  if (router.isFallback) {
    return (
      <>
        <Header />
        <div className="main-content">
          <div className="custom-container">
            <p style={{ padding: "4rem", textAlign: "center" }}>Loading…</p>
          </div>
        </div>
      </>
    );
  }

  const outOfStock = typeof product.stock === "number" && product.stock <= 0;
  const lowStock =
    typeof product.stock === "number" &&
    product.stock > 0 &&
    product.stock <= 3;

  const handleAddToCart = () => {
    if (outOfStock) return;
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] ?? null,
        size: selectedSize,
        color: selectedColor,
      },
      quantity
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (outOfStock) return;
    handleAddToCart();
    router.push("/cart"); // ✅ go to cart first, not checkout — lets user review
  };

  const incrementQty = () =>
    setQuantity((q) => Math.min(product.stock ?? 99, q + 1));

  const decrementQty = () =>
    setQuantity((q) => Math.max(1, q - 1));

  return (
    <>
      <Head>
        <title>{product.name} | Coast Republic</title>
        <meta
          name="description"
          content={
            product.description?.slice(0, 155) ?? `Shop ${product.name} at Coast Republic.`
          }
        />
        <meta property="og:title" content={`${product.name} | Coast Republic`} />
        <meta property="og:description" content={product.description} />
        {product.images?.[0] && (
          <meta property="og:image" content={product.images[0]} />
        )}
      </Head>

      <Header />

      <main className="main-content">
        <div className="custom-container">
          <div className="container-center product-page">

            {/* Gallery */}
            <div className="product-page__gallery">
              {product.images?.length > 0 ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={600}
                  height={600}
                  priority
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              ) : (
                <div className="product-page__no-image">No image available</div>
              )}

              {/* Thumbnail strip — visible when there are multiple images */}
              {product.images?.length > 1 && (
                <div className="product-page__thumbnails">
                  {product.images.map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`${product.name} view ${i + 1}`}
                      width={72}
                      height={72}
                      style={{ objectFit: "cover", borderRadius: "4px", cursor: "pointer" }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="product-page__details">
              <p className="product-page__category">{product.category}</p>
              <h1 className="heading-large">{product.name}</h1>   {/* ✅ h1 not h4 */}

              <p className="product-page__price">
                {formatMoney(product.price, product.currency)}
              </p>

              {/* Stock badge */}
              {outOfStock && (
                <p className="product-page__stock product-page__stock--out" role="status">
                  Out of stock
                </p>
              )}
              {lowStock && (
                <p className="product-page__stock product-page__stock--low" role="status">
                  Only {product.stock} left in stock
                </p>
              )}

              <p className="product-page__description">{product.description}</p>

              {/* Color selector */}
              {product.colors?.length > 0 && (
                <div className="product-page__option">
                  <span className="product-page__option-label">
                    Color: <strong>{selectedColor}</strong>
                  </span>
                  <div className="product-page__option-list">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`option-btn${color === selectedColor ? " option-btn--active" : ""}`}
                        onClick={() => setSelectedColor(color)}
                        aria-pressed={color === selectedColor}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size selector */}
              {product.sizes?.length > 0 && (
                <div className="product-page__option">
                  <span className="product-page__option-label">
                    Size: <strong>{selectedSize}</strong>
                  </span>
                  <div className="product-page__option-list">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`option-btn${size === selectedSize ? " option-btn--active" : ""}`}
                        onClick={() => setSelectedSize(size)}
                        aria-pressed={size === selectedSize}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="product-page__option">
                <span className="product-page__option-label">Quantity</span>
                <div className="qty-control">
                  <button
                    type="button"
                    onClick={decrementQty}
                    disabled={outOfStock || quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span aria-live="polite">{quantity}</span>
                  <button
                    type="button"
                    onClick={incrementQty}
                    disabled={outOfStock || quantity >= (product.stock ?? 99)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="product-page__actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleAddToCart}
                  disabled={outOfStock}
                  aria-label={`Add ${product.name} to cart`}
                >
                  {outOfStock ? "Out of Stock" : justAdded ? "Added ✓" : "Add to Cart"}
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleBuyNow}
                  disabled={outOfStock}
                >
                  Buy Now
                </button>
              </div>

              {/* Trust signals */}
              <p className="product-page__trust">
                🔒 Secure checkout · Free returns within 30 days
              </p>
            </div>
          </div>
        </div>
      </main>

      <FootBottom />
    </>
  );
};

export default ProductPage;