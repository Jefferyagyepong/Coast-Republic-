// TEMPORARY data source. Once the database (Step 1 of the earlier guide) is
// wired in, replace getAllProducts/getProductById with Prisma queries, e.g.:
//   export async function getAllProducts() { return prisma.product.findMany(); }

const products = [
  {
    id: "mark-spenser-01",
    name: "Mark and Spenser shoe",
    price: 350.99,
    currency: "GHS",
    images: ["/IMG_5400.webp"],
   
    description:
      "Classic crewneck tee in soft cotton jersey. A wardrobe staple with a relaxed, everyday fit.",
    sizes:"8.5 UK",
    colors: "Black",
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
    sizes: "W 34",
    colors: "Blue",
    category: "Jeans",
  },
   {
    id: "nike-sb-01",
    name: "Nike Sb",
    price: 1020.99,
    currency: "GHS",
    images: ["/IMG_5413.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: "purple",
    category: "Sneaker",
  },
  {
     
      id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5422.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: "true fit",
    colors: ["Blue", "Black"],
    category: "accessories",
    },
      {
     
      id: "air-jordan-01",
    name: "Air jordan 1 low ",
    price: 950.99,
    currency: "GHS",
    images: ["/IMG_5432.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Black"],
    category: "Sneaker",
    },
      {
     
      id: "charles-thyritt-01",
    name: "Charles Thyritt long sleeve Shirt",
    price: 540.99,
    currency: "GHS",
    images: ["/IMG_5482.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["L"],
    colors: ["purple"],
    category: "Shirt",
    },
      {
     
      id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5435.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Sneaker",
    },
      {
     
      id: "new-balance-01",
    name: "New Balance",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5475.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["8.5 UK"],
    colors: ["white"],
    category: "Sneaker",
    },
      {
     
      id: wrangler Jeans-01",
    name: wrangler jeans",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5437.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["W 36"],
    colors: ["Blue"],
    category: "Jeans",
    },
      {
     
      id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5438.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Sneaker",
    },
      {
     
      id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5443.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Sneaker",
    },
      {
     
      id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5445.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Sneaker",
    },
      {
     
      id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5448.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Sneaker",
    },
      {
     
      id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5452.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Sneaker",
    },
      {
     
      id: "von-dutch-01",
    name: "Von dutch cap",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5459.webp"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    category: "Sneaker",
    },
      {
     
      id: "pro-club-01",
    name: "Pro Club T shirt ",
    price: 349.99,
    currency: "GHS",
    images: ["/IMG_5486.jpeg"],
    description:
      "Durable straight-fit denim with a timeless wash, built for everyday wear.",
    sizes: ["30", "32", "34", "36"],
    colors: ["White", "Black"],
    category: "T Shirt",
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


