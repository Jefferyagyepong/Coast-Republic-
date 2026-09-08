import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";
import { useCart } from "@/context/CartContext";
import { getAllProductSlugs, getProductBySlug } from "@/lib/products";

export async function getStaticPaths() {
  const slugs = await getAllProductSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    // "blocking" means a product added to Neon after the last deploy
    // still renders on first request instead of 404ing until redeploy.
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return { notFound: true };
  return {
    props: { product },
    revalidate: 60,
  };
}

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount).toFixed(2)}`;

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [toast, setToast] = useState(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const ctaRef = useRef(null);

  const outOfStock = product.stock <= 0;
  const images = product.images?.length ? product.images : [];

  // Show the sticky bar once the main add-to-cart buttons scroll out of view.
  useEffect(() => {
    const node = ctaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(timer);
  }, [toast]);

  const runAddToCart = () => {
    if (outOfStock) return;
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: images[0],
        size: selectedSize,
        color: selectedColor,
      },
      quantity
    );
    setToast(`Added ${quantity} × ${product.name} to your cart`);
  };

  const handleBuyNow = () => {
    if (outOfStock) return;
    runAddToCart();
    router.push("/checkout");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: images,
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price,
      availability: outOfStock
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Head>
        <title>{product.name} | Coast Republic</title>
        <meta name="description" content={product.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Header />
      <div className="main-content">
        <div className="custom-container">
          <nav className="product-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <Link href={`/products?category=${encodeURIComponent(product.category)}`}>
              {product.category}
            </Link>
            <span>/</span>
            <span className="product-page__breadcrumb-current">{product.name}</span>
          </nav>

          <div className="container-center product-page">
            <div className="product-page__gallery">
              <div className="product-page__gallery-main">
                {images[activeImage] && (
                  <Image
                    src={images[activeImage]}
                    alt={product.name}
                    width={600}
                    height={600}
                    priority
                  />
                )}
              </div>

              {images.length > 1 && (
                <div className="product-page__gallery-thumbs">
                  {images.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      className={
                        i === activeImage
                          ? "gallery-thumb gallery-thumb--active"
                          : "gallery-thumb"
                      }
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1} of ${product.name}`}
                    >
                      <Image src={src} alt="" width={80} height={80} />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <br />

            <div className="product-page__details">
              <p className="product-page__category">{product.category}</p>
              <h4 className="heading-large">{product.name}</h4>
              <p className="product-page__price">
                {formatMoney(product.price, product.currency)}
              </p>

              {outOfStock ? (
                <p className="product-page__stock product-page__stock--out">
                  Out of stock
                </p>
              ) : product.stock <= 3 ? (
                <p className="product-page__stock product-page__stock--low">
                  Only {product.stock} left in stock
                </p>
              ) : null}

              <p className="product-page__description">{product.description}</p>

              {product.colors?.length > 0 && (
                <div className="product-page__option">
                  <span>Color: {selectedColor}</span><br />
                  <div className="product-page__option-list">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={
                          color === selectedColor
                            ? "option-btn option-btn--active"
                            : "option-btn"
                        }
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <br />

              {product.sizes?.length > 0 && (
                <div className="product-page__option">
                  <span>Size: {selectedSize}</span>
                  <div className="product-page__option-list">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={
                          size === selectedSize
                            ? "option-btn option-btn--active"
                            : "option-btn"
                        }
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <br />

              <div className="product-page__qty">
                <span>Quantity</span><br />
                <div className="qty-control">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={outOfStock}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                    disabled={outOfStock}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              <br />

              <div className="product-page__actions" ref={ctaRef}>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={runAddToCart}
                  disabled={outOfStock}
                >
                  {outOfStock ? "Out of Stock" : "Add to Cart"}
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

              <div className="product-page__trust">
                <div className="trust-item">
                  <span className="trust-item__title">Delivery</span>
                  <span className="trust-item__body">2–5 business days across Ghana</span>
                </div>
                <div className="trust-item">
                  <span className="trust-item__title">Returns</span>
                  <span className="trust-item__body">Exchanges within 7 days of delivery</span>
                </div>
                <div className="trust-item">
                  <span className="trust-item__title">Payment</span>
                  <span className="trust-item__body">Secure checkout, cards & mobile money</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FootBottom />

      {/* Sticky add-to-cart bar */}
      <div
        className={
          showStickyBar
            ? "sticky-cart sticky-cart--visible"
            : "sticky-cart"
        }
        aria-hidden={!showStickyBar}
      >
        <div className="sticky-cart__inner">
          {images[0] && (
            <div className="sticky-cart__thumb">
              <Image src={images[0]} alt="" width={44} height={44} />
            </div>
          )}
          <div className="sticky-cart__info">
            <span className="sticky-cart__name">{product.name}</span>
            <span className="sticky-cart__price">
              {formatMoney(product.price, product.currency)}
            </span>
          </div>
          <button
            type="button"
            className="btn-primary sticky-cart__btn"
            onClick={runAddToCart}
            disabled={outOfStock}
          >
            {outOfStock ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Toast confirmation */}
      <div className={toast ? "toast toast--visible" : "toast"} role="status">
        {toast}
      </div>

      <style jsx global>{`
        .product-page__stock {
          font-size: 13px;
          margin: 4px 0 12px;
        }
        .product-page__stock--out {
          color: #999;
        }
        .product-page__stock--low {
          color: #c0392b;
        }

        .product-page__breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          font-size: 13px;
          color: #777;
          margin: 16px 0;
        }
        .product-page__breadcrumb a {
          color: #777;
          text-decoration: none;
        }
        .product-page__breadcrumb a:hover {
          color: #111;
          text-decoration: underline;
        }
        .product-page__breadcrumb-current {
          color: #111;
        }

        .product-page__gallery-thumbs {
          display: flex;
          gap: 8px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .gallery-thumb {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 2px;
          background: none;
          cursor: pointer;
          line-height: 0;
        }
        .gallery-thumb--active {
          border-color: #111;
        }

        .product-page__trust {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .trust-item__title {
          font-size: 12px;
          font-weight: 600;
          color: #111;
        }
        .trust-item__body {
          font-size: 12px;
          color: #777;
        }

        /* Sticky add-to-cart bar */
        .sticky-cart {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          border-top: 1px solid #e5e5e5;
          box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.06);
          transform: translateY(100%);
          transition: transform 0.25s ease;
          z-index: 40;
        }
        .sticky-cart--visible {
          transform: translateY(0);
        }
        .sticky-cart__inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sticky-cart__thumb {
          flex-shrink: 0;
          border-radius: 4px;
          overflow: hidden;
          line-height: 0;
        }
        .sticky-cart__info {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }
        .sticky-cart__name {
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sticky-cart__price {
          font-size: 12px;
          color: #777;
        }
        .sticky-cart__btn {
          flex-shrink: 0;
          padding: 10px 20px;
        }

        /* Toast */
        .toast {
          position: fixed;
          left: 50%;
          bottom: 90px;
          transform: translate(-50%, 12px);
          background: #111;
          color: #fff;
          font-size: 13px;
          padding: 10px 18px;
          border-radius: 6px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 50;
          white-space: nowrap;
        }
        .toast--visible {
          opacity: 1;
          transform: translate(-50%, 0);
        }

        @media (max-width: 480px) {
          .toast {
            white-space: normal;
            max-width: 90%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default ProductPage;
