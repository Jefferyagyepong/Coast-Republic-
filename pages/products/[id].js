/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// pages/products/[id].js
import Link from "next/link";
import { useRouter } from "next/router";


// Sample product data (same as above, ideally from a shared source or API)
const products = [
  {
    _id: 1,
    slug: "Air Force 1 07 black",
    name: "Air Force 1 07 black",
    image: "/products/force1c.JPG",
    category: "Sneaker",
    description: "Lorem ipsum dalot gunt Dreh",
    price: 1109.99,
  },
  {
    _id: 2,
    slug: "Reebok classics",
    name: "Reebok classics",
    image: "/products/reebook1c.JPG",
    category: "Sneaker",
    description: "Lorem ipsum dalot gunt Dreh",
    price: 1109.99,
  },
  {
    _id: 3,
    slug: "Air Force 1 07 high black",
    name: "Air Force 1 07 high black",
    image: "/products/force3a.JPG",
    category: "Sneaker",
    description: "Lorem ipsum dalot gunt Dreh",
    price: 1130.0,
  },
  {
    _id: 4,
    slug: " Adidas Campus",
    name: " Adidas Campus",
    image: "/products/campus1a.JPG",
    category: "Sneaker",
    description: "Lorem ipsum dalot gunt Dreh",
    price: 1185.0,
  },
  {
    _id: 5,
    slug: "Converse Chuck Taylor",
    name: "Converse Chuck Taylor",
    image: "/products/chuck1a.JPG",
    category: "Sneaker",
    description: "Lorem ipsum dalot gunt Dreh",
    price: 750.0,
  },
  {
    _id: 6,
    slug: "Timberland Boots",
    name: "Timberland Boots",
    image: "/products/tims1a.JPG",
    category: "Sneaker",
    description: "Lorem ipsum dalot gunt Dreh",
    price: 375.0,
  },
  {
    _id: 7,
    slug: "Vans Ski Low",
    name: "Vans Ski Low",
    image: "/products/vans1a.WEBP",
    category: "Sneaker",
    description: "Lorem ipsum dalot gunt Dreh",
    price: 700.0,
  },
  {
    _id: 8,
    slug: "Reebok",
    name: "Reebok",
    image: "/products/reebook1b.WEBP",
    category: "Sneaker",
    description: "Lorem ipsum dalot gunt Dreh",
    price: 600.0,
  },
];


export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link href="/products">
        <button >Back to Products</button>
      </Link>
    </div>
  );
}
