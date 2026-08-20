// TEMPORARY data source. Once the database (Step 1 of the earlier guide) is
// wired in, replace getAllProducts/getProductById with Prisma queries, e.g.:
//   export async function getAllProducts() { return prisma.product.findMany(); }

const products = [
  {
    id: "ck-crewneck-01",
    name: "Calvin Klein Crewneck Tee",
    price: 249.99,
    currency: "GHS",
    "image": "/products/force1c.jpg",
    description:
      "Classic crewneck tee in soft cotton jersey. A wardrobe staple with a relaxed, everyday fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
    category: "T-Shirts",
  },
  {
    id: "denim-jean-01",
    name: "Straight Fit Denim Jeans",
    price: 349.99,
    currency: "GHS",
    image: "/products/reebook1c.jpg",
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Jeans",
  },
    {
    id: "denim-jean-01",
    name: "Straight Fit Denim Jeans",
    price: 349.99,
    currency: "GHS",
    image: "/products/tims1a.jpg", 
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Jeans",
  },
    {
    id: "denim-jean-01",
    name: "Straight Fit Denim Jeans",
    price: 349.99,
    currency: "GHS",
    image: "/products/chuck1a.jpg",
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Jeans",
  },
    {
    id: "denim-jean-01",
    name: "Straight Fit Denim Jeans",
    price: 349.99,
    currency: "GHS",
    image: "/products/campus1a.jpg",
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Jeans",
  },
    {
    id: "denim-jean-01",
    name: "Straight Fit Denim Jeans",
    price: 349.99,
    currency: "GHS",
   image: "/products/force3a.jpg",
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Jeans",
  },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getAllProductIds() {
  return products.map((p) => p.id);
}
