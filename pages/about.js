import Head from "next/head";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Coast Republic</title>
        <meta
          name="description"
          content="Learn the story behind Coast Republic — Ghana's home for quality T-shirts, sneakers, and street-ready essentials."
        />
      </Head>

      <main>
        <Header />
        <div className="main-content">
        <section className="hero">
          <h1>About Coast Republic</h1>
          <p className="tagline">
            Elevate your style. Discover unique designs crafted for you.
          </p>
        </section>

        <section className="block">
          <h2>Our Story</h2>
          <p>
            Coast Republic started with a simple idea: Ghana deserves streetwear
            that feels as good as it looks. What began as a small, design-led
            passion project has grown into a destination for quality T-shirts,
            sneakers, and everyday essentials — built for people who care about
            fit, fabric, and detail.
          </p>
          <p>
            Every piece we stock is chosen with one question in mind: would we
            wear this ourselves? That standard hasn&apos;t changed, and it never
            will.
          </p>
        </section>

        <section className="block">
          <h2>What We Stand For</h2>
          <div className="grid">
            <div className="card">
              <h3>Quality First</h3>
              <p>
                We work with fabrics and finishes that hold up — no shrinking,
                no fading after two washes. If it doesn&apos;t meet our
                standard, it doesn&apos;t make the shop.
              </p>
            </div>
            <div className="card">
              <h3>Designed for You</h3>
              <p>
                From crew necks to sneakers, our collections are curated for
                real life in Ghana — comfortable, versatile, and easy to style
                for any day.
              </p>
            </div>
            <div className="card">
              <h3>Honest Service</h3>
              <p>
                Clear pricing, straightforward delivery, and real people
                behind every order. No surprises, no fine print designed to
                confuse you.
              </p>
            </div>
          </div>
        </section>

        <section className="block">
          <h2>Where We're Based</h2>
          <p>
            Coast Republic is proudly Ghanaian, operating out of Asafo
            Dadiesoaba. We ship nationwide and accept MTN Mobile Money,
            Telecel Cash, AirtelTigo Money, and Visa — because getting great
            gear shouldn&apos;t be complicated.
          </p>
        </section>

        <section className="cta">
          <h2>Got Questions?</h2>
          <p>
            Check our <a href="/faq">FAQ</a> or{" "}
            <a href="/contact">get in touch</a> — we&apos;re happy to help.
          </p>
        </section>
        <FootBottom />
        </div>
      </main>

      <style jsx>{`
        .about {
          max-width: 860px;
          margin: 0 auto;
          padding: 48px 20px 80px;
          color: #1b2430;
          font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
          line-height: 1.65;
        }
        .hero {
          text-align: center;
          margin-bottom: 48px;
        }
        .hero h1 {
          font-size: 2.4rem;
          margin-bottom: 8px;
          color: #0a2540;
        }
        .tagline {
          color: #5b6b7a;
          font-size: 1.05rem;
        }
        .block {
          margin-bottom: 44px;
        }
        h2 {
          font-size: 1.4rem;
          color: #0a2540;
          margin-bottom: 14px;
          border-bottom: 2px solid #eef1f4;
          padding-bottom: 8px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 8px;
        }
        .card {
          background: #f7f9fb;
          border-radius: 10px;
          padding: 20px;
        }
        .card h3 {
          margin: 0 0 8px;
          color: #0a2540;
          font-size: 1.05rem;
        }
        .card p {
          margin: 0;
          color: #45525f;
          font-size: 0.95rem;
        }
        .cta {
          text-align: center;
          background: #0a2540;
          color: #fff;
          border-radius: 12px;
          padding: 32px 20px;
        }
        .cta h2 {
          color: #fff;
          border: none;
        }
        .cta a {
          color: #ffd166;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
