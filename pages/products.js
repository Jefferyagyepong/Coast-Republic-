// pages/products.js
import Link from 'next/link';
import { getProducts } from "./api/products/index";

export async function getStaticProps(){
  const products = await getProducts();
  return {props: {products}};
}

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
