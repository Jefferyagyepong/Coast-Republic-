// pages/products.js
import Link from 'next/link';

export async function getStaticProps() {
  // Simulate fetching JSON from a local file or an API
  const res = await import('/public/products.json');
  const products = res.default;

  return {
    props: {
      products
    }
  };
}

export default function ProductsPage({ products }) {
  return (
    <div>
      <h1>Product Listings</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.slug}`}>
              <a>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
