import Head from "next/head";
import Header from "@/components/Head/Header";

export default function Returns() {
  return (
    <>
      <Head>
        <title>Refunds &amp; Returns - Coast Republic</title>
        <meta
          name="description"
          content="Coast Republic's refund and return policy — eligibility, process, and timelines."
        />
      </Head>

      <main>
            <header />
        <div className="main_content">
      
          
        <h3>Refunds &amp; Returns Policy</h3>
        <p className="intro">
          We want you to love what you ordered. If something isn't right,
          here's how we make it right.
        </p>

        <section>
          <h2>1. Return Window</h2>
          <p>
            You may request a return within <strong>7 days</strong> of the
            date your order is delivered. Requests made after this period
            cannot be accepted.
          </p>
        </section>

        <section>
          <h2>2. Eligibility Requirements</h2>
          <p>To qualify for a return, the item must be:</p>
          <ul>
            <li>Unworn, unwashed, and undamaged</li>
            <li>In its original packaging with all tags attached</li>
            <li>Accompanied by proof of purchase (order number or receipt)</li>
          </ul>
          <p>
            Items that are worn, altered, or returned without tags will not
            be accepted and will be sent back to you.
          </p>
        </section>

        <section>
          <h2>3. Non-Returnable Items</h2>
          <p>For hygiene and quality reasons, the following are final sale and cannot be returned or exchanged unless defective on arrival:</p>
          <ul>
            <li>Underwear, socks, and other intimate apparel</li>
            <li>Items marked "Final Sale" or purchased at clearance pricing</li>
            <li>Items damaged due to misuse after delivery</li>
          </ul>
        </section>

        <section>
          <h2>4. How to Start a Return</h2>
          <ol>
            <li>
              Email <a href="mailto:support@coastrepublic.com">support@coastrepublic.com</a>{" "}
              or call <a href="tel:+233244736420">+233 244 736 420</a> with
              your order number and reason for return.
            </li>
            <li>We'll confirm eligibility and provide return instructions.</li>
            <li>
              Pack the item securely and send it to our store location, or
              arrange pickup where available.
            </li>
            <li>
              Once received and inspected, we'll notify you of the approval
              or rejection of your return.
            </li>
          </ol>
        </section>

        <section>
          <h2>5. Refunds</h2>
          <p>
            Approved refunds are issued to your original payment method
            (Mobile Money or Visa) within <strong>5–7 business days</strong>{" "}
            of us receiving and inspecting the returned item. Delivery fees
            are non-refundable unless the return is due to our error (wrong
            or defective item).
          </p>
        </section>

        <section>
          <h2>6. Exchanges</h2>
          <p>
            Need a different size or color instead of a refund? Let us know
            when you request your return and we'll arrange an exchange
            subject to stock availability.
          </p>
        </section>

        <section>
          <h2>7. Damaged or Incorrect Items</h2>
          <p>
            If you received a damaged, defective, or incorrect item, contact
            us within 48 hours of delivery with photos of the item and
            packaging. We'll cover the cost of return and send a replacement
            or full refund, including delivery fees.
          </p>
        </section>

        <section className="cta">
          <p>
            Questions about your order?{" "}
            <a href="/contact">Contact our support team</a>.
          </p>
        </section>
        </div>
      </main>

      <style jsx>{`
        .page {
          max-width: 760px;
          margin: 0 auto;
          padding: 48px 20px 80px;
          font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
          color: #1b2430;
          line-height: 1.7;
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
          margin-bottom: 30px;
        }
        h2 {
          font-size: 1.1rem;
          color: #0a2540;
          margin-bottom: 10px;
        }
        ul,
        ol {
          padding-left: 22px;
          color: #34424f;
        }
        li {
          margin-bottom: 6px;
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

