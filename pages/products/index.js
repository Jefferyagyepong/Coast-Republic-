import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Read the products JSON file from the public directory
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  return {
    props: { products }, // Pass products data to the page component
  };
}

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`}>
                    <Image
          src={product.image}
          height={100}
          width={90}
          alt=" product"
       
        />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
