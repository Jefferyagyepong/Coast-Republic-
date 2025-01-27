// pages/products/[slug].js
import { useRouter } from 'next/router';

import { getProducts } from "./api/products/index";


const ProductPage = ({ products }) => {   
  
  // Generate paths for each product's slug
  const paths = products.map(product => ({
    params: { slug: product.slug }
  }));
return  { paths, fallback: false };
  
}
 
   
  return (
     
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add other details or components as needed */}
    </div>
  );
};
export default ProductPage;

export async function getStaticProps({ params }){
  const products = await getProducts();
  const product = products.find(p => p.slug === params.slug);
  return {props: {products}};
}


  



