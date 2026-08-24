/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions - Coast Republic</title>
        <meta
          name="description"
          content="Terms and conditions for using the Coast Republic website and purchasing products."
        />
      </Head>

      <main className="page">
        <h1>Terms &amp; Conditions</h1>
        <p className="updated">Last updated: August 2026</p>

        <p className="intro">
          These Terms &amp; Conditions ("Terms") govern your access to and use
          of the Coast Republic website (the "Site") and any purchase you
          make from us. By browsing the Site or placing an order, you agree
          to be bound by these Terms. If you do not agree, please do not use
          the Site.
        </p>

        <section>
          <h2>1. About Us</h2>
          <p>
            Coast Republic ("we," "us," "our") is a Ghana-based retailer of
            apparel and footwear, operating from Asafo Dadiesoaba, Ghana. You
            can reach us at{" "}
            <a href="mailto:support@coastrepublic.com">
              support@coastrepublic.com
            </a>{" "}
            or <a href="tel:+233244736420">+233 244 736 420</a>.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old, or place orders under the
            supervision of a parent or guardian, to purchase from this Site.
            By placing an order, you confirm that the information you provide
            is accurate and that you have the right to use the payment method
            provided.
          </p>
        </section>

        <section>
          <h2>3. Products, Pricing &amp; Availability</h2>
          <p>
            We make reasonable efforts to display product colors, sizing, and
            details accurately; however, slight variations may occur due to
            device displays or manufacturing batches. All prices are listed
            in Ghana Cedis (GHS) and are subject to change without notice.
            Product availability is not guaranteed until an order is
            confirmed, and we reserve the right to limit quantities or refuse
            any order at our discretion.
          </p>
        </section>

        <section>
          <h2>4. Orders &amp; Payment</h2>
          <p>
            An order is only confirmed once payment has been successfully
            processed. We accept MTN Mobile Money, Telecel Cash, AirtelTigo
            Money, and Visa. You are responsible for ensuring payment details
            are correct; we are not liable for delays or failures caused by
            incorrect information or third-party payment providers.
          </p>
          <p>
            We reserve the right to cancel or refuse any order due to
            suspected fraud, pricing errors, or stock unavailability, in
            which case any payment received will be refunded in full.
          </p>
        </section>

        <section>
          <h2>5. Delivery</h2>
          <p>
            Delivery timelines are estimates, not guarantees, and are subject
            to courier and logistical factors beyond our control. Full
            details are available on our{" "}
            <a href="/delivery">Delivery page</a>. Risk of loss and title for
            products pass to you upon delivery to the address provided.
          </p>
        </section>

        <section>
          <h2>6. Returns &amp; Refunds</h2>
          <p>
            Returns and refunds are governed by our{" "}
            <a href="/returns">Refunds &amp; Returns Policy</a>, which forms
            part of these Terms.
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            All content on this Site — including logos, product designs,
            photography, and text — is the property of Coast Republic or its
            licensors and is protected by applicable intellectual property
            laws. You may not reproduce, distribute, or use our content
            commercially without our prior written consent.
          </p>
        </section>

        <section>
          <h2>8. Acceptable Use</h2>
          <p>You agree not to use the Site to:</p>
          <ul>
            <li>Violate any applicable law or regulation</li>
            <li>Submit false, fraudulent, or misleading information</li>
            <li>
              Interfere with the security, integrity, or performance of the
              Site
            </li>
            <li>
              Attempt to gain unauthorized access to our systems or other
              users' accounts
            </li>
          </ul>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Coast Republic shall not
            be liable for any indirect, incidental, or consequential damages
            arising from your use of the Site or products purchased, beyond
            the value of the order in question. Nothing in these Terms
            excludes liability that cannot be excluded under Ghanaian law.
          </p>
        </section>

        <section>
          <h2>10. Third-Party Services</h2>
          <p>
            The Site may use third-party services for payment processing and
            delivery. We are not responsible for the acts, omissions, or
            policies of these independent providers, though we will assist in
            resolving issues where reasonably possible.
          </p>
        </section>

        <section>
          <h2>11. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time to reflect changes in
            our practices or for legal reasons. The updated version will be
            posted on this page with a revised "Last updated" date. Continued
            use of the Site after changes take effect constitutes acceptance
            of the revised Terms.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Republic of Ghana.
            Any disputes arising from these Terms or your use of the Site
            shall be subject to the exclusive jurisdiction of the courts of
            Ghana.
          </p>
        </section>

        <section>
          <h2>13. Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:support@coastrepublic.com">
              support@coastrepublic.com
            </a>{" "}
            or <a href="tel:+233244736420">+233 244 736 420</a>.
          </p>
        </section>

        <p className="disclaimer">
          This document is a general template and does not constitute formal
          legal advice. We recommend having it reviewed by a licensed
          Ghanaian attorney before publishing, to ensure full compliance with
          applicable consumer protection and e-commerce regulations.
        </p>
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
          margin-bottom: 6px;
        }
        .updated {
          color: #8592a0;
          font-size: 0.85rem;
          margin-bottom: 24px;
        }
        .intro {
          color: #34424f;
          margin-bottom: 32px;
        }
        section {
          margin-bottom: 26px;
        }
        h2 {
          font-size: 1.05rem;
          color: #0a2540;
          margin-bottom: 8px;
        }
        ul {
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
        .disclaimer {
          margin-top: 40px;
          padding: 16px;
          background: #f7f9fb;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #5b6b7a;
        }
      `}</style>
    </>
  );
}


