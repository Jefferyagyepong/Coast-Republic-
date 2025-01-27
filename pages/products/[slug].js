import React from 'react';

// This function will run at build time to fetch the data for each product.
export async function getStaticPaths() {
  // Fetch all product slugs from your API
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  // Generate paths for each product based on its slug
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,  // Show 404 page for unknown slugs
  };
}

// This function fetches the data for a specific product by its slug.
export async function getStaticProps({ params }) {
  const { slug } = params;

  // Fetch product data based on the slug
  const res = await fetch(`https://api.example.com/products/${slug}`);
  const product = await res.json();

  // If no product is found, return a 404 page
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product }, // This will be passed to your component
  };
}

const ProductPage = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductPage;
