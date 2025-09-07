/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";


export default async function ProductListing() {
  // Fetch data from a local JSON file in the public directory
  const res = await fetch("http://localhost:3000/products.json", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div>
      <h1>Product Listing</h1>
      <div>
        {products.map(product => (
          <div key={product.id} >
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link href={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
