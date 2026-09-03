import Head from "next/head";
import FootBottom from "@/components/Footer/FootBottom";

export default function Delivery() {
  return (
    <>
      <Head>
        <title>Delivery Information - Coast Republic</title>
        <meta
          name="description"
          content="Delivery times, fees, and coverage areas for Coast Republic orders across Ghana."
        />
      </Head>

      <main>
        <div className="main-content">
        <h3>Delivery Information</h3>
        <p className="intro">
          We know you want your order fast. Here's exactly what to expect
          once you check out.
        </p>

        <section>
          <h2>Processing Time</h2>
          <p>
            Orders are processed within 1 business day of payment
            confirmation. Orders placed after 4:00 PM or on weekends/public
            holidays are processed the next business day.
          </p>
        </section>

        <section>
          <h2>Delivery Times &amp; Coverage</h2>
          <table>
            <thead>
              <tr>
                <th>Area</th>
                <th>Estimated Delivery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kumasi &amp; surrounding areas</td>
                <td>1–2 business days</td>
              </tr>
              <tr>
                <td>Accra &amp; other major cities</td>
                <td>2–3 business days</td>
              </tr>
              <tr>
                <td>Other regions in Ghana</td>
                <td>3–5 business days</td>
              </tr>
            </tbody>
          </table>
          <p className="note">
            We currently deliver within Ghana only. International shipping is
            not yet available.
          </p>
        </section>

        <section>
          <h2>Delivery Fees</h2>
          <p>
            Delivery fees are calculated at checkout based on your location
            and order size. Any applicable fee is shown clearly before you
            confirm payment — no hidden charges.
          </p>
        </section>

        <section>
          <h2>Order Tracking</h2>
          <p>
            You'll receive a confirmation once your order is dispatched. If
            your delivery is taking longer than the estimate above, contact
            us with your order number and we'll follow up with our courier
            immediately.
          </p>
        </section>

        <section>
          <h2>Delivery Issues</h2>
          <p>
            Please inspect your package on arrival. If an item is damaged,
            missing, or incorrect, notify us within 48 hours of delivery at{" "}
            <a href="mailto:support@coastrepublic.com">
              support@coastrepublic.com
            </a>{" "}
            or <a href="tel:+233244736420">+233 244 736 420</a>, and we'll
            make it right.
          </p>
        </section>

        <section className="cta">
          <p>
            Questions about a specific order? <a href="/contact">Contact us</a>{" "}
            or check our <a href="/faq">FAQ</a>.
          </p>
        </section>
          <FootBottom />
          </div>
      </main>

      <style jsx>{`
        .page {
          max-width: 760px;
          margin: 0 auto;
          padding: 48px 20px 80px;
          font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
          color: #1b2430;
          line-height: 1.65;
        }
        h1 {
          font-size: 2rem;
          color: #0a2540;
          margin-bottom: 10px;
        }
        .intro {
          color: #5b6b7a;
          margin-bottom: 32px;
        }
        section {
          margin-bottom: 32px;
        }
        h2 {
          font-size: 1.2rem;
          color: #0a2540;
          margin-bottom: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 10px;
        }
        th,
        td {
          text-align: left;
          padding: 10px 12px;
          border-bottom: 1px solid #e6e9ed;
        }
        th {
          background: #f7f9fb;
          color: #0a2540;
        }
        .note {
          font-size: 0.9rem;
          color: #5b6b7a;
        }
        a {
          color: #0a2540;
          font-weight: 600;
        }
        .cta {
          border-top: 2px solid #eef1f4;
          padding-top: 24px;
          text-align: center;
          color: #5b6b7a;
        }
      `}</style>
    </>
  );
}



     