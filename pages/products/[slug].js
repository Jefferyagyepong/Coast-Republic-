import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
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
  const [justAdded, setJustAdded] = useState(false);

  const outOfStock = product.stock <= 0;

  const handleAddToCart = () => {
    if (outOfStock) return;
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0],
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
    router.push("/checkout");
  };

  return (
    <>
      <Head>
        <title>{product.name} | Coast Republic</title>
        <meta name="description" content={product.description} />
      </Head>
      <Header />
      <div className="main-content">
        <div className="custom-container">
          <div className="container-center product-page">
            <div className="product-page__gallery">
              {product.images?.[0] && (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={600}
                  height={600}
                  priority
                />
              )}
            </div><br />

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
                  <span>Color</span><br />
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
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                    disabled={outOfStock}
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
                  disabled={outOfStock}
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
            </div>
          </div>
        </div>
      </div>
      <FootBottom />

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
      `}</style>
    </>
  );
};

export default ProductPage;
