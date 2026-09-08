const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Calvin Klein Crewneck Tee",
        slug: "ck-crewneck-01",
        price: 249.99,
        currency: "GHS",
        images: ["/products/force1c.JPG"],
        description: "Classic crewneck tee in soft cotton jersey.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Grey"],
        category: "T-Shirts",
        stock: 20,
      },
      // ...add the rest of your products here
    ],
  });
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
