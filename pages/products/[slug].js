// pages/products/[slug].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export async function getStaticPaths() {
  // Simulate fetching JSON from a local file
  const res = await import('../products/data');
  const products = res.default;

  // Generate paths for each product's slug
  const paths = products.map(product => ({
    params: { slug: product.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the specific product based on the slug
  const res = await import('../../public/products.json');
  const products = res.default;
  const product = products.find(p => p.slug === params.slug);

  return {
    props: {
      product
    }
  };
}

export default function ProductPage({ product }) {
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add other details or components as needed */}
    </div>
  );
}
