// TEMPORARY data source. Once the database (Step 1 of the earlier guide) is
// wired in, replace getAllProducts/getProductById with Prisma queries, e.g.:
//   export async function getAllProducts() { return prisma.product.findMany(); }

const products = [
  {
    id: "mark-spenser-01",
    name: "Mark and Spenser shoe",
    price: 249.99,
    currency: "GHS",
    images: ["/IMG_5400.webp"],
   
    description:
      "Classic crewneck tee in soft cotton jersey. A wardrobe staple with a relaxed, everyday fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Grey"],
    category: "Sneaker",
  },
  {
    id: "denim-jean-01",
    name: "Straight Fit Denim Jeans",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5403.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Jeans",
  },
   {
    id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5413.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Cap",
  },
  {
     id: "nike-sb-01",
    name: "Nike Sb",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5422.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Sneaker",
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


