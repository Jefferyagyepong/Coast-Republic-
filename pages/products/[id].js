import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";
import { useCart } from "@/context/CartContext";
import { getAllProductIds, getProductById, getAllProducts } from "@/lib/products";

const RECENTLY_VIEWED_KEY = "cr_recently_viewed";
const WISHLIST_KEY = "cr_wishlist";
const MAX_RECENTLY_VIEWED = 8;

export async function getStaticPaths() {
  const ids = await getAllProductIds();

  return {
    paths: ids.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductById(params.id);

  if (!product) {
    return { notFound: true };
  }

  // Get related products from the same category
  const allProducts = await getAllProducts();
  const relatedProducts = allProducts
    .filter((p) => p.id !== params.id && p.category === product.category)
    .slice(0, 8);

  return {
    props: {
      product,
      relatedProducts,
    },
    revalidate: 60,
  };
}

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount).toFixed(2)}`;

const StarRating = ({ rating = 0, reviewCount = 0 }) => {
  if (!rating) return null;
  const rounded = Math.round(rating * 2) / 2;

  return (
    <div className="product-page__rating" aria-label={`Rated ${rating} out of 5`}>
      <span className="product-page__stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={n <= rounded ? "star star--filled" : "star"}>
            ★
          </span>
        ))}
      </span>
      <span className="product-page__rating-text">
        {rating.toFixed(1)} {reviewCount ? `(${reviewCount} reviews)` : ""}
      </span>
    </div>
  );
};

const ProductCard = ({ product }) => (
  <Link href={`/products/${product.id}`} className="product-card">
    {product.images?.[0] && (
      <Image
        src={product.images[0]}
        alt={product.name}
        width={280}
        height={280}
      />
    )}
    <p className="product-card__name">{product.name}</p>
    <p className="product-card__price">
      {formatMoney(product.price, product.currency)}
    </p>
  </Link>
);

const ProductPage = ({ product, relatedProducts = [] }) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const images = product.images?.length ? product.images : [];
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [shareCopied, setShareCopied] = useState(false);

  const inStock = product.stock === undefined || product.stock > 0;
  const lowStock =
    typeof product.stock === "number" && product.stock > 0 && product.stock <= 5;

  // Reset gallery/selection when navigating between products
  useEffect(() => {
    setActiveImage(0);
    setSelectedSize(product.sizes?.[0] || null);
    setSelectedColor(product.colors?.[0] || null);
    setQuantity(1);
  }, [product.id, product.sizes, product.colors]);

  // Wishlist: read + sync from localStorage
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
      setIsWishlisted(stored.includes(product.id));
    } catch {
      // ignore malformed storage
    }
  }, [product.id]);

  const toggleWishlist = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
      const next = stored.includes(product.id)
        ? stored.filter((id) => id !== product.id)
        : [...stored, product.id];
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
      setIsWishlisted(next.includes(product.id));
    } catch {
      // storage unavailable; fail silently
    }
  };

  // Recently viewed
  useEffect(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem(RECENTLY_VIEWED_KEY) || "[]"
      );
      const withoutCurrent = stored.filter((id) => id !== product.id);
      const next = [product.id, ...withoutCurrent].slice(
        0,
        MAX_RECENTLY_VIEWED
      );
      localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(next));

      const known = [product, ...relatedProducts];
      const resolved = next
        .filter((id) => id !== product.id)
        .map((id) => known.find((p) => p.id === id))
        .filter(Boolean);
      setRecentlyViewed(resolved);
    } catch {
      // ignore malformed/unavailable storage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id]);

  const handleAddToCart = () => {
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
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: product.name,
      text: product.description,
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2000);
      }
    } catch {
      // user cancelled share sheet or clipboard denied
    }
  };

  const maxQuantity = typeof product.stock === "number" ? product.stock : 99;

  const breadcrumb = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/products" },
      ...(product.category
        ? [
            {
              label: product.category,
              href: `/products?category=${encodeURIComponent(
                product.category
              )}`,
            },
          ]
        : []),
      { label: product.name, href: null },
    ],
    [product.category, product.name]
  );

  return (
    <>
      <Head>
        <title>{product.name} | Coast Republic</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.coastrepublic.com/products/${product.id}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.name} | Coast Republic`} />
        <meta property="og:description" content={product.description} />
        <meta
          property="og:url"
          content={`https://www.coastrepublic.com/products/${product.id}`}
        />
        <meta property="og:site_name" content="Coast Republic" />
        {product.images?.[0] && (
          <meta property="og:image" content={product.images[0]} />
        )}
        <meta property="product:price:amount" content={product.price} />
        <meta property="product:price:currency" content={product.currency} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | Coast Republic`} />
        <meta name="twitter:description" content={product.description} />
        {product.images?.[0] && (
          <meta name="twitter:image" content={product.images[0]} />
        )}

        <meta name="robots" content="index, follow" />
      </Head>

      <Header />

      <div className="main-content">
        <div className="custom-container">
          <nav className="product-page__breadcrumb" aria-label="Breadcrumb">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label}>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <span className="product-page__breadcrumb-sep"> / </span>
                )}
              </span>
            ))}
          </nav>
          <br />

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
                <button
                  type="button"
                  className={
                    isWishlisted
                      ? "wishlist-btn wishlist-btn--active"
                      : "wishlist-btn"
                  }
                  onClick={toggleWishlist}
                  aria-pressed={isWishlisted}
                  aria-label={
                    isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                  }
                >
                  {isWishlisted ? "♥" : "♡"}
                </button>
              </div>

              {images.length > 1 && (
                <div className="product-page__thumbnails">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className={
                        i === activeImage
                          ? "thumbnail thumbnail--active"
                          : "thumbnail"
                      }
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
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

              <StarRating
                rating={product.rating}
                reviewCount={product.reviewCount}
              />

              <p className="product-page__price">
                {formatMoney(product.price, product.currency)}
              </p>

              <p
                className={
                  inStock
                    ? lowStock
                      ? "stock-badge stock-badge--low"
                      : "stock-badge stock-badge--in"
                    : "stock-badge stock-badge--out"
                }
              >
                {!inStock
                  ? "Out of stock"
                  : lowStock
                  ? `Only ${product.stock} left`
                  : "In stock"}
              </p>

              <p className="product-page__description">{product.description}</p>

              {product.colors?.length > 0 && (
                <div className="product-page__option">
                  <span>Color</span>
                  <br />
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
                  <span>Size</span>
                  <br />
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

              <div className="product-page__quantity">
                <span>Quantity</span>
                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((q) => Math.min(maxQuantity, q + 1))
                    }
                    disabled={quantity >= maxQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <br />

              <div className="product-page__actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleAddToCart}
                  disabled={!inStock}
                >
                  {justAdded ? "Added!" : "Add to Cart"}
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleBuyNow}
                  disabled={!inStock}
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  className="btn-share"
                  onClick={handleShare}
                >
                  {shareCopied ? "Link copied!" : "Share"}
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-products">
              <h5>You may also like</h5>
              <div className="product-container">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {/* Recently Viewed */}
          {recentlyViewed.length > 0 && (
            <div className="recently-viewed">
              <h5>Recently Viewed</h5>
              <div className="product-container">
                {recentlyViewed.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <FootBottom />
    </>
  );
};

export default ProductPage;