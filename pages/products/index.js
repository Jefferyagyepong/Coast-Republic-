import React from 'react';
import Link from 'next/link';
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
    
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`}>
              
              {product.image}
            </Link>
          </li>
          </ul>
        ))}
      
    </div>
  );
};

export default ProductList;
