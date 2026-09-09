// pages/order-confirmation/[orderId].js
// Route param is named orderId, but it's matched against Order.referenceId —
// that's the customer-facing identifier, not the internal cuid `id`.
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Head/Navbar";
import FootBottom from "@/components/Footer/FootBottom";
import { prisma } from "@/lib/prisma";

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount || 0).toFixed(2)}`;

export async function getServerSideProps({ params }) {
  const order = await prisma.order.findUnique({
    where: { referenceId: params.orderId },
    include: { items: true },
  });

  if (!order) {
    return { notFound: true };
  }

  return {
    props: {
      order: JSON.parse(JSON.stringify(order)), // serialize Dates for props
    },
  };
}

const OrderConfirmationPage = ({ order }) => {
  return (
    <>
      <Head>
        <title>Order Confirmed | Coast Republic</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="main-content">
        <div className="custom-container">
          <div className="container-center order-confirmation">
            <div className="order-confirmation__hero">
              <span className="order-confirmation__check" aria-hidden="true">✓</span>
              <h1 className="heading-large">Thank you, {order.fullName.split(" ")[0]}!</h1>
              <p>Your order has been placed and a confirmation was sent to {order.email}.</p>
              <p className="order-confirmation__ref">
                Order reference: <strong>{order.referenceId}</strong>
              </p>
            </div>

            <div className="order-confirmation__layout">
              <section aria-label="Order items">
                <h2>Items</h2>
                <ul className="order-confirmation__items">
                  {order.items.map((item) => (
                    <li key={item.id} className="order-confirmation__item">
                      <span>
                        {item.name}
                        {(item.size || item.color) && (
                          <span className="order-confirmation__item-meta">
                            {" "}
                            ({[item.color, item.size].filter(Boolean).join(" · ")})
                          </span>
                        )}
                        {" "}× {item.quantity}
                      </span>
                      <span>{formatMoney(item.price * item.quantity, order.currency)}</span>
                    </li>
                  ))}
                </ul>

                <dl className="order-confirmation__totals">
                  <div>
                    <dt>Subtotal</dt>
                    <dd>{formatMoney(order.subtotal, order.currency)}</dd>
                  </div>
                  <div>
                    <dt>{order.deliveryMethod === "pickup" ? "Pickup" : "Delivery"}</dt>
                    <dd>{formatMoney(order.deliveryFee, order.currency)}</dd>
                  </div>
                  <div>
                    <dt>Tax</dt>
                    <dd>{formatMoney(order.tax, order.currency)}</dd>
                  </div>
                  <div className="order-confirmation__totals-final">
                    <dt>Total</dt>
                    <dd>{formatMoney(order.total, order.currency)}</dd>
                  </div>
                </dl>
              </section>

              <aside aria-label="Delivery and payment details">
                <h2>Details</h2>
                <p>
                  {order.deliveryMethod === "pickup" ? (
                    <>Pickup from <strong>{order.pickupLocation || "Coast Republic Store"}</strong>. We'll text you when it's ready.</>
                  ) : (
                    <>Delivering to {order.address}, {order.city}, {order.region}.</>
                  )}
                </p>
                <p>
                  Payment: {order.paymentMethod === "momo"
                    ? `Mobile Money (${order.momoNetwork || "—"})`
                    : "Cash on delivery"}
                </p>
                <p>Status: {order.status}</p>
              </aside>
            </div>

            <Link href="/products" className="btn-primary">
              Continue shopping
            </Link>
          </div>
        </div>
      </main>

      <FootBottom />

      <style jsx global>{`
        .order-confirmation__hero {
          text-align: center;
          margin: 24px 0 32px;
        }
        .order-confirmation__check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #111;
          color: #fff;
          font-size: 22px;
          margin-bottom: 12px;
        }
        .order-confirmation__ref {
          font-size: 14px;
          color: #555;
        }
        .order-confirmation__layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }
        @media (max-width: 640px) {
          .order-confirmation__layout {
            grid-template-columns: 1fr;
          }
        }
        .order-confirmation__items {
          list-style: none;
          padding: 0;
          margin: 12px 0;
        }
        .order-confirmation__item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          font-size: 14px;
        }
        .order-confirmation__item-meta {
          color: #777;
          font-size: 12px;
        }
        .order-confirmation__totals {
          margin-top: 16px;
        }
        .order-confirmation__totals div {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 6px;
        }
        .order-confirmation__totals-final {
          font-weight: bold;
          border-top: 1px solid #ddd;
          padding-top: 6px;
        }
      `}</style>
    </>
  );
};

export default OrderConfirmationPage;
