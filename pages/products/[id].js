import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";
import { useCart } from "@/context/CartContext";
import { getAllProductIds, getProductById } from "@/lib/products";

export async function getStaticPaths() {
  const ids = getAllProductIds();
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductById(params.id);
  if (!product) return { notFound: true };
  return { props: { product } };
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

  const handleAddToCart = () => {
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
            </div>

            <div className="product-page__details">
              <p className="product-page__category">{product.category}</p>
              <h1 className="heading-large">{product.name}</h1>
              <p className="product-page__price">
                {formatMoney(product.price, product.currency)}
              </p>
              <p className="product-page__description">{product.description}</p>

              {product.colors?.length > 0 && (
                <div className="product-page__option">
                  <span>Color</span>
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

              <div className="product-page__qty">
                <span>Quantity</span>
                <div className="qty-control">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => setQuantity((q) => q + 1)}>
                    +
                  </button>
                </div>
              </div>

              <div className="product-page__actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleAddToCart}
                >
                  {justAdded ? "Added ✓" : "Add to Cart"}
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FootBottom />
    </>
  );
};

export default ProductPage;
