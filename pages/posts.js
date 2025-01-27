import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function Products({ products }) {
  return (
    <div>
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .product-list {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .product-card {
          border: 1px solid #ddd;
          padding: 20px;
          text-align: center;
          width: 200px;
        }
        .product-card img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  // Get the file path of the products.json
  const filePath = path.join(process.cwd(), 'public/products.json');

  // Read the file contents
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the JSON data
  const products = JSON.parse(fileContents);

  // Return the products data as props
  return {
    props: {
      products,
    },
  };
}
