/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// pages/products.js
import Header from "@/components/Head/Header";
import Toast from "@/components/Head/Toast";
import Image from "next/image";
import Link from "next/link";

// Static JSON data (for demonstration; could be imported from a file)
const staticProducts = [
  {
    _id: 1,

    name: "Air Force 1 07 black",
    image: "/products/force1c.JPG",

    price: 1109.99,
  },
  {
    _id: 2,

    name: "Wrangler Men Jeans",
    image: "/wrangler.svg",

    price: 1109.99,
  },
  {
    _id: 3,

    name: "Air Force 1 07 high black",
    image: "/products/force3a.JPG",

    price: 1130.0,
  },
  {
    _id: 4,

    name: " Adidas Campus",
    image: "/products/campus1a.JPG",
    price: 1185.0,
  },
  {
    _id: 5,

    name: "T -Shirt Amonoo Gyamfuah",
    image: "/gyamfua black OLIVE.svg",

    price: 750.0,
  },
  {
    _id: 6,

    name: "T- Shirt Amonoo Gyamfuah",
    image: "/GYAMFUA.svg",

    price: 375.0,
  },
  {
    _id: 7,

    name: "Vans Ski Low",
    image: "/products/vans1a.WEBP",

    price: 700.0,
  },
  {
    _id: 8,

    name: "Reebok",
    image: "/products/reebook1b.WEBP",

    price: 600.0,
  },
];

// Fetch data at build time (optional, replace with your API)
export async function getStaticProps() {
  // Using static data for this example
  const products = staticProducts;

  return {
    props: {
      products,
    },
  };
}

export default function Products({ products }) {
  return (
    <>
      <main>
        <div className="sticky">
          <Toast />
          <Header />
        </div>
        <div className="container">
          <h2>our collection</h2>
          <div className="productList">
            {products.map(product => (
              <div key={product.id} className="productCard">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                />

                <h2>{product.name}</h2>
                <p>Price: GHS{product.price}</p>
                <Link href={`/products/${product.id}`}>
                  <button className= "viewButton">View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
